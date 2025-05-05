
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { DocSidebar } from "./DocSidebar";
import { Category, DocPage } from "@/types";
import { mockData } from "@/data/mockDocData";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface DocLayoutProps {
  children: React.ReactNode;
  hideSidebar?: boolean;
}

export function DocLayout({ children, hideSidebar = false }: DocLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { category } = useParams();
  const [categories, setCategories] = useState<Category[]>(mockData.categories);
  const [currentPage, setCurrentPage] = useState<DocPage | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile); // Collapse by default on mobile

  useEffect(() => {
    // Update sidebar state when screen size changes or on mobile
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const pathname = location.pathname;
    
    // Find the current page based on the URL
    let foundPage: DocPage | null = null;
    
    for (const cat of categories) {
      const page = cat.pages.find(p => p.slug === pathname);
      if (page) {
        foundPage = page;
        break;
      }
    }
    
    setCurrentPage(foundPage);
  }, [location.pathname, categories]);

  const navigateToPage = (page: DocPage | null) => {
    if (page) {
      navigate(page.slug);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex flex-1">
        {!hideSidebar && (
          <DocSidebar 
            categories={categories} 
            currentSlug={location.pathname} 
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${!hideSidebar && !sidebarCollapsed ? "ml-64" : "ml-0"}`}>
          <div className="container max-w-4xl py-8 px-4 lg:px-8">
            {children}
            
            {currentPage && (
              <div className="mt-16 pt-4 border-t border-border">
                <Pagination>
                  <PaginationContent className="flex flex-col sm:flex-row w-full justify-between space-y-4 sm:space-y-0">
                    <PaginationItem>
                      {getAdjacentPage(categories, currentPage, "prev") && (
                        <PaginationPrevious
                          onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "prev"))}
                          className="w-full sm:w-auto justify-start cursor-pointer"
                        >
                          {getAdjacentPage(categories, currentPage, "prev")?.title}
                        </PaginationPrevious>
                      )}
                    </PaginationItem>
                    
                    <PaginationItem className="ml-auto">
                      {getAdjacentPage(categories, currentPage, "next") && (
                        <PaginationNext
                          onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "next"))}
                          className="w-full sm:w-auto justify-end cursor-pointer"
                        >
                          {getAdjacentPage(categories, currentPage, "next")?.title}
                        </PaginationNext>
                      )}
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
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
