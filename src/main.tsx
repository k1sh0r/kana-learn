import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
// Import specific wallet plugins if needed, e.g.:
// import { PetraWallet } from 'petra-plugin-wallet-adapter'
// const wallets = [new PetraWallet()]

// IMPORTANT: Replace with your actual reCAPTCHA v3 Site Key
const RECAPTCHA_V3_SITE_KEY = "YOUR_RECAPTCHA_V3_SITE_KEY"

createRoot(document.getElementById("root")!).render(
  <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_V3_SITE_KEY}>
    <AptosWalletAdapterProvider
      // plugins={wallets} // Or let the provider discover installed wallets
      autoConnect={true} // Optional: auto-connect to the last used wallet
      onError={(error) => {
        console.error("Wallet adapter error:", error)
      }}
    >
      <App />
    </AptosWalletAdapterProvider>
  </GoogleReCaptchaProvider>
)
