import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInModal } from "./SignInModal";
import { Menu, X } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

interface HeaderProps {
  rightAction?: React.ReactNode;
}

export function Header({ rightAction }: HeaderProps = {}) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="lg:container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="/" className="items-center space-x-2 flex">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <ToggleGroup
              type="single"
              value={theme === undefined ? "system" : theme}
              onValueChange={(val) => val && setTheme(val)}
              className="mr-2"
              aria-label="Theme toggle"
            >
              <ToggleGroupItem value="light" aria-label="Light mode">
                <Sun className="w-4 h-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" aria-label="Dark mode">
                <Moon className="w-4 h-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="system" aria-label="System mode">
                <Monitor className="w-4 h-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <a 
              href="https://twitter.com/intent/post?text=Check%20out%20this%20beginner%20friendly%20trading%20guide%20by%20Kana%20Labs%3A%20https%3A%2F%2Flearn.kana.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent rounded-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3174 10.7749ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7646 19.0075H15.6432L11.4257 12.9738Z"></path></svg>
            </a>
            <Button variant="outline" size="sm" onClick={handleSignInClick}>
              Sign In
            </Button>
            {rightAction || (
              <a href="https://www.kana.trade/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="gap-1 w-full" size="sm">
                  Try Kana Perps <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mb-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity md:hidden z-50 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute inset-y-0 right-0 w-3/4 max-w-sm bg-background shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-accent rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex flex-col p-6 space-y-4">
              <ToggleGroup
                type="single"
                value={theme === undefined ? "system" : theme}
                onValueChange={(val) => val && setTheme(val)}
                className="mb-2"
                aria-label="Theme toggle"
              >
                <ToggleGroupItem value="light" aria-label="Light mode">
                  <Sun className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark mode">
                  <Moon className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="system" aria-label="System mode">
                  <Monitor className="w-4 h-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <Button variant="outline" size="sm" onClick={handleSignInClick}>
                Sign In
              </Button>
              <a className="flex grow" href="https://www.kana.trade/" target="_blank" rel="noopener noreferrer">
                <Button className="gap-1 w-full" size="sm">
                  Try Kana Perps <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mb-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </Button>
              </a>
            </div>
            
            <div className="mt-auto border-t">
              <div className="p-6 flex items-center gap-2 justify-between">
                <a 
                  href="https://twitter.com/intent/post?text=Check%20out%20this%20beginner%20friendly%20trading%20guide%20by%20Kana%20Labs%3A%20https%3A%2F%2Flearn.kana.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-accent rounded-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3174 10.7749ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7646 19.0075H15.6432L11.4257 12.9738Z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SignInModal open={isSignInModalOpen} onOpenChange={setIsSignInModalOpen} />
    </>
  );
}
