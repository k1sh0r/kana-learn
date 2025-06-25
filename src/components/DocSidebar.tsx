"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface DocSidebarProps {
  categories: Category[];
  currentSlug: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function DocSidebar({ categories, currentSlug, isCollapsed = false, onToggleCollapse }: DocSidebarProps) {
  const router = useRouter();
  const { category: categorySlug } = useParams();
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

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/${categorySlug}`);
  };

  if (!currentCategory) return null;

  return (
    <aside className="relative">
      <div
        className={cn(
          "fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] bg-sidebar border-r border-border transition-all duration-300 ease-in-out",
          isCollapsed ? "w-0 overflow-hidden" : "w-64"
        )}
      >
        <nav className="px-3 py-4 overflow-y-auto h-full">
          <div className="mb-4">
            <div className="mb-4">
              <div 
                className="px-2 py-2 font-medium text-primary-700 cursor-pointer hover:bg-sidebar-accent rounded"
                onClick={() => handleCategoryClick(currentCategory.slug)}
              >
                {currentCategory.label}
              </div>
              <ul className="pl-2 mt-1 space-y-1">
                {currentCategory.pages
                  .filter(page => page.sidebar_position !== 0)
                  .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
                  .map((page) => (
                    <li key={page.id}>
                      <Link
                        href={page.slug}
                        className={cn(
                          "block px-2 py-1.5 rounded-md text-sm",
                          page.slug === currentSlug
                            ? "text-primary-700 bg-sidebar-accent font-medium"
                            : "hover:text-primary-600 hover:bg-sidebar-accent"
                        )}
                      >
                        {page.sidebar_label || page.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Floating Collapse/Expand button */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onToggleCollapse}
        className={cn(
          "fixed z-40 bottom-4 bg-background hover:bg-sidebar-accent shadow-md rounded-full p-2 transition-all duration-300",
          isCollapsed ? "left-4 bg-sidebar-accent" : "left-52"
        )}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </Button>
    </aside>
  );
}
