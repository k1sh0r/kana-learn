import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
// Import specific wallet plugins if needed, e.g.:
// import { PetraWallet } from 'petra-plugin-wallet-adapter'
// const wallets = [new PetraWallet()]

createRoot(document.getElementById("root")!).render(
  <AptosWalletAdapterProvider
    // plugins={wallets} // Or let the provider discover installed wallets
    autoConnect={true} // Optional: auto-connect to the last used wallet
    onError={(error) => {
      console.error("Wallet adapter error:", error)
    }}
  >
    <App />
  </AptosWalletAdapterProvider>
)
