import { useEffect, useRef, useCallback } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { toast } from 'sonner'; // Using sonner for user feedback
import { Signature } from '@aptos-labs/ts-sdk'; // Import the actual Signature type
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Import reCAPTCHA hook

// Define the structure for the signature result
interface SignatureResult {
  address: string;
  signature: string; // Store signature as hex string for simplicity
  fullSignature?: Signature; // Optional: store the original signature object
  message: string;
  nonce: string;
  rawSignature: unknown; // Type as unknown for debugging field
}

// --- Helper Function to Send Data to Backend ---
// Moved inside or near the hook to easily use executeRecaptcha from the hook's context
async function sendToBackendForVerification(
  data: SignatureResult,
  executeRecaptcha: (action?: string) => Promise<string> // Accept executeRecaptcha function
) {
  const recaptchaAction = 'verifyWallet'; // Define action for reCAPTCHA
  console.log(`Sending wallet verification data to backend for address: ${data.address}`);

  try {
    // 1. Get reCAPTCHA token
    console.log(`Executing reCAPTCHA for action: ${recaptchaAction}...`);
    const recaptchaToken = await executeRecaptcha(recaptchaAction);
    console.log("reCAPTCHA token obtained.");

    // 2. Prepare payload including the token
    const payload = { ...data, recaptchaToken };

    // 3. Make the fetch request
    const backendUrl = '/api/verify-wallet'; // Replace with your actual backend endpoint
    console.log(`Fetching ${backendUrl}...`);
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // 4. Handle backend response
    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Backend verification failed:", response.status, errorBody);
      throw new Error(`Backend error: ${response.status} - ${errorBody || response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Backend verification successful:", responseData);
    toast.success("Backend verification complete!"); // Optional: confirmation toast
    // Handle success (e.g., update UI, store session)
    return responseData;

  } catch (error: unknown) {
    console.error("Error during backend verification request:", error);
    toast.error("Backend verification request failed. See console for details.");
    // Re-throw or handle error as needed
    throw error; 
  }
}
// --- End Helper Function ---

/**
 * Hook to automatically sign a predefined message upon successful wallet connection.
 * Logs the signature details to the console and shows toast notifications.
 */
export function useWalletSignature() {
  const { connected, account, signMessage, wallet, disconnect } = useWallet();
  const { executeRecaptcha } = useGoogleReCaptcha(); // Get reCAPTCHA function
  // Ref to prevent signing multiple times per connection session
  const signatureRequestedRef = useRef<boolean>(false);
  // Ref to store the wallet name when connection starts
  const connectedWalletNameRef = useRef<string | null>(null);

  // Memoize the backend call function to prevent recreation on every render
  const verifyOnBackend = useCallback(async (signatureData: SignatureResult) => {
    if (!executeRecaptcha) {
      console.error("executeRecaptcha is not available");
      toast.error("reCAPTCHA is not ready. Cannot verify wallet.");
      return;
    }
    try {
      await sendToBackendForVerification(signatureData, executeRecaptcha);
      // Handle successful backend verification if needed
    } catch (error) {
      // Handle error from backend verification
      console.error("Backend verification process failed.");
    }
  }, [executeRecaptcha]); // Dependency: executeRecaptcha

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
          toast.success("Wallet verified successfully! Verifying with backend...");

          // Call the backend verification function
          await verifyOnBackend(result); 

        } catch (error: unknown) { // Type error as unknown
          console.error("Failed to sign message:", error);
          let errorMessage = 'Unknown error';
          if (error instanceof Error) {
            errorMessage = error.message; // Extract message if it's an Error instance
          }
          toast.error(`Failed to sign message: ${errorMessage}`);
          // Reset ref if signing fails allow retry on next connect potentially
          signatureRequestedRef.current = false; 
          connectedWalletNameRef.current = null;
        }
      })();
    }

    // Reset the ref if the user disconnects or changes wallet
    if (!connected || (wallet && wallet.name !== connectedWalletNameRef.current)) {
        signatureRequestedRef.current = false;
        connectedWalletNameRef.current = null;
    }

  }, [connected, account, signMessage, wallet, disconnect, verifyOnBackend]); // Added verifyOnBackend

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