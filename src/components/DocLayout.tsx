
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { DocSidebar } from "./DocSidebar";
import { Category, DocPage } from "@/types";
import { mockData } from "@/data/mockDocData";

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>(mockData.categories);
  const [currentPage, setCurrentPage] = useState<DocPage | null>(null);

  useEffect(() => {
    const pathname = location.pathname;
    
    // Find the current page based on the URL
    let foundPage: DocPage | null = null;
    
    for (const category of categories) {
      const page = category.pages.find(p => p.slug === pathname);
      if (page) {
        foundPage = page;
        break;
      }
    }
    
    setCurrentPage(foundPage);
  }, [location.pathname, categories]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex flex-1">
        <DocSidebar categories={categories} currentSlug={location.pathname} />
        
        <main className="flex-1 pl-0 lg:pl-64">
          <div className="container max-w-4xl py-8 px-4 lg:px-8">
            {children}
            
            {currentPage && (
              <div className="mt-16 flex justify-between border-t border-border pt-4 text-sm">
                <div>
                  {getAdjacentPage(categories, currentPage, "prev") && (
                    <a
                      href={getAdjacentPage(categories, currentPage, "prev")?.slug}
                      className="flex flex-col"
                    >
                      <span className="text-xs text-muted-foreground">Previous</span>
                      <span className="text-primary-600">
                        {getAdjacentPage(categories, currentPage, "prev")?.title}
                      </span>
                    </a>
                  )}
                </div>
                
                <div>
                  {getAdjacentPage(categories, currentPage, "next") && (
                    <a
                      href={getAdjacentPage(categories, currentPage, "next")?.slug}
                      className="flex flex-col items-end"
                    >
                      <span className="text-xs text-muted-foreground">Next</span>
                      <span className="text-primary-600">
                        {getAdjacentPage(categories, currentPage, "next")?.title}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function getAdjacentPage(categories: Category[], currentPage: DocPage, direction: "prev" | "next"): DocPage | null {
  let allPages: DocPage[] = [];
  
  // Flatten all pages from all categories into a single sorted array
  categories.sort((a, b) => a.position - b.position).forEach(category => {
    allPages = [...allPages, ...category.pages.sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))];
  });
  
  const currentIndex = allPages.findIndex(page => page.id === currentPage.id);
  
  if (currentIndex === -1) {
    return null;
  }
  
  const targetIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
  
  if (targetIndex < 0 || targetIndex >= allPages.length) {
    return null;
  }
  
  return allPages[targetIndex];
}
