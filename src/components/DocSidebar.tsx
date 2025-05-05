
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, ChevronLeft, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Button } from "./ui/button";

interface DocSidebarProps {
  categories: Category[];
  currentSlug: string;
}

export function DocSidebar({ categories, currentSlug }: DocSidebarProps) {
  const location = useLocation();
  const { category: categorySlug } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  // Find the current category based on URL params
  useEffect(() => {
    if (categorySlug) {
      const foundCategory = categories.find(cat => cat.slug === categorySlug);
      if (foundCategory) {
        setCurrentCategory(foundCategory);
      }
    } else if (categories.length > 0) {
      // Default to first category if none specified
      setCurrentCategory(categories[0]);
    }
  }, [categorySlug, categories]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (!currentCategory) return null;

  return (
    <aside className="relative">
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${
          isOpen ? "left-64" : "left-4"
        } z-50 bg-background border border-border rounded-md p-1.5 transition-all duration-300 lg:hidden`}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
      
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-sidebar border-r border-border transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isCollapsed ? "w-20 lg:w-20" : "w-64 lg:w-64"
        } lg:translate-x-0`}
      >
        <div className="p-4 border-b border-border flex justify-between items-center">
          <Link to="/" className={`flex items-center space-x-2 ${isCollapsed ? "justify-center" : ""}`}>
            {!isCollapsed ? (
              <span className="text-xl font-bold text-primary-600">Kana Learn</span>
            ) : (
              <span className="text-xl font-bold text-primary-600">KL</span>
            )}
          </Link>
          <Button 
            variant="ghost"
            size="sm" 
            className="hidden lg:flex"
            onClick={toggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
        
        <nav className={`px-3 py-4 overflow-y-auto ${isCollapsed ? "overflow-x-hidden" : ""}`}>
          <div className="mb-4">
            {!isCollapsed ? (
              <div className="mb-4">
                <div className="px-2 py-2 font-medium text-primary-600">
                  {currentCategory.label}
                </div>
                <ul className="pl-2 mt-1 space-y-1">
                  {currentCategory.pages
                    .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
                    .map((page) => (
                      <li key={page.id}>
                        <Link
                          to={page.slug}
                          className={cn(
                            "block px-2 py-1.5 rounded-md text-sm",
                            page.slug === currentSlug
                              ? "text-primary-600 bg-sidebar-accent font-medium"
                              : "hover:text-primary-600 hover:bg-sidebar-accent"
                          )}
                        >
                          {page.sidebar_label || page.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs font-medium text-primary-600 py-2">
                  {currentCategory.label.charAt(0)}
                </div>
                {currentCategory.pages
                  .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
                  .map((page) => (
                    <Link
                      key={page.id}
                      to={page.slug}
                      className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-md",
                        page.slug === currentSlug
                          ? "bg-sidebar-accent text-primary-600"
                          : "hover:bg-sidebar-accent"
                      )}
                      title={page.title}
                    >
                      {page.title.charAt(0)}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}
