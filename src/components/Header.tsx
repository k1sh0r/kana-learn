
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="hidden items-center space-x-2 lg:flex">
            <span className="font-bold text-lg lg:text-2xl bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text">
              Kana Learn
            </span>
          </Link>

          <nav className="hidden gap-6 lg:flex">
            <Link
              to="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Documentation
            </Link>
            <Link
              to="/tutorials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Tutorials
            </Link>
            <Link
              to="/community"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Community
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden lg:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden lg:flex">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
