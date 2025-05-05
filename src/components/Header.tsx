import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { SignInModal } from "./SignInModal";
import { Menu } from "lucide-react";
export function Header() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };
  return <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-10">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hidden p-2">
            <Menu size={24} />
          </button>

          <Link to="/" className="items-center space-x-2 flex" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-bold text-lg lg:text-2xl bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text">
              Kana Learn
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={handleSignInClick}>
            Sign In
          </Button>
        </div>
      </div>
      
      <SignInModal open={isSignInModalOpen} onOpenChange={setIsSignInModalOpen} />
    </header>;
}