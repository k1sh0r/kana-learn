
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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="hidden items-center space-x-2 lg:flex">
            <span className="font-bold text-lg lg:text-2xl bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text">
              Kana Learn
            </span>
          </Link>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 right-0 bg-background lg:bg-transparent border-b lg:border-0 p-4 lg:p-0 gap-4 lg:gap-6 z-50`}>
            <Link
              to="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/tutorials"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/community"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </div>
      </div>
      
      <SignInModal 
        open={isSignInModalOpen} 
        onOpenChange={setIsSignInModalOpen} 
      />
    </header>
  );
}
