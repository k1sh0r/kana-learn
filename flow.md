# Application Flow for Wallet Interaction & Verification

This document outlines the key flows related to wallet connection, message signing, and secure backend communication using reCAPTCHA v3.

## 1. Wallet Connection Flow

**Objective:** Allow users to connect their Aptos wallet to the application.

**Components Involved:**

*   `src/main.tsx`: Initializes the `AptosWalletAdapterProvider` and `GoogleReCaptchaProvider`.
*   `src/components/Header.tsx`: Contains the UI for wallet connection and displays wallet state.
*   `@aptos-labs/wallet-adapter-react`: Library providing core wallet interaction hooks (`useWallet`).
*   `shadcn/ui Dialog`: Used to display the wallet selection modal.

**Steps:**

1.  **Initialization (`src/main.tsx`):
    *   The application is wrapped with `AptosWalletAdapterProvider`. This provider manages wallet state, available wallets, and connection logic.
    *   It is also wrapped with `GoogleReCaptchaProvider` to enable reCAPTCHA v3 functionality across the app.
2.  **User Interface (`src/components/Header.tsx`):
    *   The `Header` component uses the `useWallet()` hook to get `connect`, `disconnect`, `account`, `connected`, `wallet`, and `wallets` (list of available wallet adapters).
    *   If `connected` is `false`, a \"Connect Wallet\" button (a `shadcn/ui Button` acting as a `DialogTrigger`) is displayed.
    *   Clicking \"Connect Wallet\" opens a `shadcn/ui Dialog` (`DialogContent`).
3.  **Wallet Selection (Dialog in `src/components/Header.tsx`):
    *   The dialog lists available wallets fetched from `useWallet().wallets`.
    *   It filters for wallets that are `Installed` (`WalletReadyState.Installed`).
    *   Each wallet is displayed as a button with its icon and name.
    *   When the user clicks on a wallet button, the `handleWalletSelect(wallet.name)` function is called.
4.  **Connection (`handleWalletSelect` in `src/components/Header.tsx`):
    *   `handleWalletSelect` calls `connect(walletName)` (from `useWallet()`).
    *   This triggers the selected wallet adapter to initiate the connection process (usually opening the wallet extension for user approval).
    *   The `Dialog` is closed.
5.  **State Update (`useWallet()` & `Header.tsx`):
    *   Upon successful connection, the `useWallet()` hook updates its state (`connected` becomes `true`, `account` and `wallet` objects are populated).
    *   The `Header` re-renders, now showing the connected wallet address (shortened) and a \"Disconnect\" button.

## 2. Message Signing & Backend Verification Flow (with reCAPTCHA)

**Objective:** After wallet connection, automatically prompt the user to sign a message to verify wallet ownership. Send this signature along with a reCAPTCHA token to the backend for verification.

**Components & Hooks Involved:**

*   `src/hooks/useWalletSignature.ts`: Custom hook orchestrating the signing and backend call.
*   `src/components/Header.tsx`: Calls `useWalletSignature()`.
*   `useWallet()`: Provides `signMessage` function, `connected` state, `account` details.
*   `useGoogleReCaptcha()`: Provides `executeRecaptcha` function.
*   `sonner`: Used for toast notifications.

**Steps:**

1.  **Hook Activation (`src/components/Header.tsx`):
    *   The `Header` component calls `useWalletSignature()`.
2.  **Connection Detection (`useEffect` in `useWalletSignature.ts`):
    *   The hook has a `useEffect` that triggers when `connected`, `account`, `signMessage`, or `wallet` change.
    *   It checks if a wallet is connected, account details are available, `signMessage` is available, and a signature hasn\'t already been requested for the current wallet session (using `signatureRequestedRef`).
3.  **Message Signing Prompt:
    *   A predefined message and a unique nonce (`knl-${Date.now()}`) are prepared.
    *   `toast.info()` notifies the user to sign the message in their wallet.
    *   `signMessage(payload)` (from `useWallet()`) is called. This prompts the user in their wallet.
4.  **Signature Processing:
    *   If signing is successful, the `response.signature` is processed (converted to a hex string for consistency).
    *   A `SignatureResult` object is created containing `address`, `signature` (string), `message`, `nonce`, and `rawSignature`.
    *   Details are logged to the console, and a success toast is shown.
5.  **Backend Verification Call (`verifyOnBackend` -> `sendToBackendForVerification` in `useWalletSignature.ts`):
    *   The `verifyOnBackend` function (memoized with `useCallback`) is called with the `SignatureResult`.
    *   This function ensures `executeRecaptcha` (from `useGoogleReCaptcha()`) is available.
    *   It then calls `sendToBackendForVerification(signatureData, executeRecaptcha)`.
6.  **reCAPTCHA Token Generation & Fetch (`sendToBackendForVerification`):
    *   `executeRecaptcha(\'verifyWallet\')` is called to get a reCAPTCHA v3 token for the action \'verifyWallet\'.
    *   The `SignatureResult` data and the `recaptchaToken` are combined into a single payload.
    *   A `fetch` request (POST) is made to the backend endpoint (`/api/verify-wallet`) with this combined payload.
7.  **Backend Processing (Server-Side - Not detailed here):
    *   The backend receives the payload.
    *   **Crucially, it must first verify the `recaptchaToken` with Google using its reCAPTCHA Secret Key.**
    *   If the reCAPTCHA token is valid, the backend then proceeds to verify the `signature` against the `message`, `nonce`, and `address` using Aptos SDK/cryptography.
    *   The backend responds with success or failure.
8.  **Frontend Response Handling (`sendToBackendForVerification`):
    *   The frontend handles the backend\'s response.
    *   Success or error toasts are displayed based on the outcome.
    *   Errors during the process are caught and logged.
9.  **State Reset (`useEffect` in `useWalletSignature.ts`):
    *   The `signatureRequestedRef` is reset if the user disconnects or changes wallets, allowing the signature process to occur again for a new session.
    *   If message signing itself fails, the ref is also reset to allow a potential retry on the next connection attempt (depending on UX, could also lead to disconnect).

## How to Use & Key Considerations

### Wallet Connection

*   The UI for connection is primarily in `Header.tsx`.
*   The list of supported wallets is determined by the wallet adapter plugins you might configure in `AptosWalletAdapterProvider` (currently, it relies on auto-discovery).

### Message Signing & Verification

*   **Automatic Process:** The `useWalletSignature` hook makes this an automatic process upon successful connection.
*   **Message & Nonce:** The message is fixed. The nonce is timestamp-based; for robust security, a server-generated nonce that is then signed by the client is often preferred.
*   **Backend Endpoint:** You **must** implement the `/api/verify-wallet` backend endpoint. This endpoint needs to:
    1.  Receive `address`, `signature`, `message`, `nonce`, and `recaptchaToken`.
    2.  **Verify `recaptchaToken` with Google (using your Secret Key).** This is vital to protect against bots.
    3.  If reCAPTCHA is valid, verify the Aptos message signature.
    4.  Return a meaningful response.
*   **reCAPTCHA v3 Site Key:** Ensure the correct reCAPTCHA v3 Site Key is set in `src/main.tsx` for `GoogleReCaptchaProvider`.

### Fetch Wrapper (Conceptual - Integrated into Hook)

*   While initially conceived as a separate wrapper, the reCAPTCHA logic (using `useGoogleReCaptcha`) must be within a React component or hook context.
*   Thus, the reCAPTCHA token generation and inclusion in the `fetch` call are handled within the `sendToBackendForVerification` function, which is part of the `useWalletSignature` hook\'s scope.
*   This function effectively acts as the \"secure fetcher\" for this specific operation.

### Error Handling

*   The system uses `sonner` toasts for user-facing notifications (connection, signing prompts, success/error).
*   Console logs provide more detailed error information for developers.
*   Backend errors are caught and displayed via toasts.

This flow provides a basic but functional way to connect Aptos wallets, have users sign a message for verification, and secure the verification call to your backend using reCAPTCHA v3. 