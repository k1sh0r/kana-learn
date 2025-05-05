
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface DocSidebarProps {
  categories: Category[];
  currentSlug: string;
}

export function DocSidebar({ categories, currentSlug }: DocSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
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

  return (
    <aside className="relative">
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${
          isOpen ? "left-64" : "left-4"
        } z-50 bg-background border border-border rounded-md p-1.5 transition-all duration-300 lg:hidden`}
      >
        <Menu size={20} />
      </button>
      
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-sidebar border-r border-border transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        } lg:translate-x-0 lg:w-64`}
      >
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">Kana Learn</span>
          </Link>
        </div>
        
        <nav className="px-3 py-4 overflow-y-auto">
          {categories
            .sort((a, b) => a.position - b.position)
            .map((category) => (
              <div key={category.id} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "flex items-center justify-between w-full px-2 py-2 text-left rounded-md hover:bg-sidebar-accent",
                    currentSlug.startsWith(`/${category.slug}`) && "text-primary-600"
                  )}
                >
                  <span className="font-medium">{category.label}</span>
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
              </div>
            ))}
        </nav>
      </div>
    </aside>
  );
}
