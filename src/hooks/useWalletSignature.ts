import { useEffect, useRef } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { toast } from 'sonner'; // Using sonner for user feedback
import { Signature } from '@aptos-labs/ts-sdk'; // Import the actual Signature type

// Define the structure for the signature result
interface SignatureResult {
  address: string;
  signature: string; // Store signature as hex string for simplicity
  fullSignature?: Signature; // Optional: store the original signature object
  message: string;
  nonce: string;
  rawSignature: unknown; // Type as unknown for debugging field
}

/**
 * Hook to automatically sign a predefined message upon successful wallet connection.
 * Logs the signature details to the console and shows toast notifications.
 */
export function useWalletSignature() {
  const { connected, account, signMessage, wallet, disconnect } = useWallet();
  // Ref to prevent signing multiple times per connection session
  const signatureRequestedRef = useRef<boolean>(false);
  // Ref to store the wallet name when connection starts
  const connectedWalletNameRef = useRef<string | null>(null);

  useEffect(() => {
    // Check if connected, account exists, signMessage is available, 
    // and we haven't requested signature for this wallet session yet
    if (connected && account && signMessage && wallet && !signatureRequestedRef.current) {
      
      // Store the current connected wallet name
      connectedWalletNameRef.current = wallet.name;
      // Mark that we are attempting to sign for this session
      signatureRequestedRef.current = true; 

      const message = "Please sign this message to verify your wallet with Kana Learn.";
      // Simple nonce based on timestamp; generate a more robust one for production
      const nonce = `knl-${Date.now()}`; 
      
      const payload = {
        message: message,
        nonce: nonce,
        // address: true, // Optional: request wallet to include address in signed message
        // application: true, // Optional: request wallet to include dapp domain in signed message
      };

      console.log("Attempting to sign message for verification...");
      toast.info("Please sign the message in your wallet to verify ownership.");

      // Use an async IIFE to handle the promise
      (async () => {
        try {
          // Infer the response type
          const response = await signMessage(payload);
          
          let signatureString = "N/A";
          const sig = response.signature;
          
          // Attempt to convert signature to string, fall back if error
          try {
            // Assume it might be Signature object or something with toString()
            if (sig && typeof sig.toString === 'function') {
              signatureString = sig.toString();
            } else {
              // Handle cases where it might be primitive or lacks toString
              signatureString = String(sig);
            }
          } catch (convErr) {
            console.error("Could not convert signature to string:", convErr);
            signatureString = "[Conversion Error]";
          }

          const result: SignatureResult = {
            address: account.address.toString(),
            // Store the potentially converted string representation
            signature: signatureString, 
            message: payload.message,
            nonce: payload.nonce,
            // Include raw signature for debugging if needed
            rawSignature: sig 
          };

          console.log("Wallet Verification Signature Details:", result);
          toast.success("Wallet verified successfully!");

          // Here you would typically send `result` to your backend
          // await sendToBackendForVerification(result);

        } catch (error: unknown) { // Type error as unknown
          console.error("Failed to sign message:", error);
          let errorMessage = 'Unknown error';
          if (error instanceof Error) {
            errorMessage = error.message; // Extract message if it's an Error instance
          }
          toast.error(`Failed to sign message: ${errorMessage}`);
          // Optional: Disconnect if signature fails/is rejected, depending on UX requirements
          // disconnect(); 
        }
      })();
    }

    // Reset the ref if the user disconnects or changes wallet
    if (!connected || (wallet && wallet.name !== connectedWalletNameRef.current)) {
        signatureRequestedRef.current = false;
        connectedWalletNameRef.current = null;
    }

  }, [connected, account, signMessage, wallet, disconnect]); // Add disconnect to dependencies

  // This hook primarily performs a side effect (signing and logging)
  // It doesn't need to return anything for this use case, 
  // but could be extended to return status/result if needed elsewhere.
}

// Example function placeholder for sending data to backend
// async function sendToBackendForVerification(data: SignatureResult) {
//   console.log("Sending to backend:", data);
//   // const response = await fetch('/api/verify-wallet', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify(data),
//   // });
//   // Handle backend response...
// } 