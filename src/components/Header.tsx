import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { SignInModal } from "./SignInModal";
import { Menu, LogOut } from "lucide-react";
import { useWallet, WalletReadyState } from "@aptos-labs/wallet-adapter-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useWalletSignature } from "@/hooks/useWalletSignature";

// Helper function to shorten address
const shortenAddress = (address: string, chars = 4): string => {
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
};

export function Header() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connect, disconnect, account, connected, wallet, wallets } = useWallet();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  
  useWalletSignature();

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };
  
  const handleDisconnectClick = () => {
    disconnect();
  };

  const handleWalletSelect = (walletName: string) => {
    connect(walletName);
    setIsWalletModalOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="lg:container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            <Menu size={24} />
          </button>

          <Link to="/" className="items-center space-x-2 flex" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/images/kana-logo.png" 
              alt="Kana Learn Logo" 
              className="h-8 w-8"
            />
            <span
              className="font-bold text-lg lg:text-2xl text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(142deg,#20a5ff 15.79%,#00f9a9 125.9%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kana Learn
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {connected && account ? (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs px-2 h-8">
                {wallet?.icon && <img src={wallet.icon} alt={wallet.name} className="w-4 h-4 mr-1" />}
                {shortenAddress(account.address.toString())}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleDisconnectClick} className="h-8 w-8">
                <LogOut size={16} />
              </Button>
            </div>
          ) : (
            <Dialog open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Connect Wallet
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Connect a Wallet</DialogTitle>
                </DialogHeader>
                <div className="mt-4 grid gap-2">
                  {wallets?.filter(w => w.readyState === WalletReadyState.Installed).map((wallet) => (
                    <Button
                      key={wallet.name}
                      variant="outline"
                      onClick={() => handleWalletSelect(wallet.name)}
                      className="flex items-center justify-start gap-2"
                    >
                      {wallet.icon && <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />}
                      {wallet.name}
                    </Button>
                  ))}
                  {wallets?.length === 0 && (
                    <p className="text-sm text-muted-foreground">(No wallets detected. Please install an Aptos wallet extension like Petra.)</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Button variant="outline" size="sm" onClick={handleSignInClick}>
            Sign In
          </Button>
        </div>
      </div>
      
      <SignInModal open={isSignInModalOpen} onOpenChange={setIsSignInModalOpen} />
    </header>
  );
}
