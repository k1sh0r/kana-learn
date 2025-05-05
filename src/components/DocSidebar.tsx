
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>(() => {
    // Initially expand the category that contains the current page
    const expanded: { [key: string]: boolean } = {};
    categories.forEach((category) => {
      if (category.pages.some((page) => page.slug === currentSlug)) {
        expanded[category.id] = true;
      } else {
        expanded[category.id] = false;
      }
    });
    return expanded;
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

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
          {categories
            .sort((a, b) => a.position - b.position)
            .map((category) => (
              <div key={category.id} className="mb-4">
                {!isCollapsed ? (
                  <>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={cn(
                        "flex items-center justify-between w-full px-2 py-2 text-left rounded-md hover:bg-sidebar-accent",
                        currentSlug.startsWith(`/${category.slug}`) && "text-primary-600"
                      )}
                    >
                      <span className="font-medium truncate">{category.label}</span>
                      {expandedCategories[category.id] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    
                    {expandedCategories[category.id] && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {category.pages
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
                    )}
                  </>
                ) : (
                  <Link 
                    to={`/${category.slug}`}
                    className={cn(
                      "flex flex-col items-center justify-center w-full py-3 px-1 text-center rounded-md hover:bg-sidebar-accent",
                      currentSlug.startsWith(`/${category.slug}`) && "text-primary-600 bg-sidebar-accent"
                    )}
                  >
                    <span className="text-xs font-medium truncate">{category.label.charAt(0)}</span>
                  </Link>
                )}
              </div>
            ))}
        </nav>
      </div>
    </aside>
  );
}
