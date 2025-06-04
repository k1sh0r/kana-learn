import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { DocSidebar } from "./DocSidebar";
import { Category, DocPage } from "@/types";
import { Data } from "@/data/DocData";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollToTop } from "./ScrollToTop";
import { metricsService } from "@/services/metricsService";
import { FeedbackForm } from "./feedbackform";

interface DocLayoutProps {
  children: React.ReactNode;
  hideSidebar?: boolean;
  defaultCollapsed?: boolean;
}

export function DocLayout({ children, hideSidebar = false, defaultCollapsed = false }: DocLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { category } = useParams();
  const [categories, setCategories] = useState<Category[]>(Data.categories);
  const [currentPage, setCurrentPage] = useState<DocPage | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultCollapsed || isMobile); // Collapse by default on mobile
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useEffect(() => {
    // Update sidebar state when screen size changes or on mobile
    setSidebarCollapsed(defaultCollapsed || isMobile);
  }, [isMobile, defaultCollapsed]);

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

  // Track page visits
  useEffect(() => {
    metricsService.updateMetrics(location.pathname, {
      visits: 1,
      lastVisited: Date.now()
    });
  }, [location.pathname]);

  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const timeSpent = Math.round((performance.now() - startTime) / 1000);
      metricsService.updateMetrics(location.pathname, {
        timeSpent
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    if (currentPage) {
      // Update meta tags when page changes
      document.title = `${currentPage.title} | Kana Learn`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `Learn about ${currentPage.title.toLowerCase()} in crypto and blockchain. Comprehensive guide covering ${currentPage.title} fundamentals and practical usage.`
        );
      }
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogTitle) ogTitle.setAttribute('content', `${currentPage.title} | Kana Learn`);
      if (ogDesc) ogDesc.setAttribute('content', 
        `Learn about ${currentPage.title.toLowerCase()} in crypto and blockchain. Part of Kana Learn's comprehensive education platform.`
      );
    }
  }, [currentPage]);

  const navigateToPage = (page: DocPage | null) => {
    if (page) {
      navigate(page.slug);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
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
          <div className="container max-w-4xl pt-8 pb-28 xl:pb-8 xl:px-4">
            {children}
            
            {currentPage && (
              <div className="mt-16 pt-4 border-t border-border">
                <Pagination>
                  <PaginationContent className="flex flex-row w-full justify-between gap-4">
                    <PaginationItem className="w-full sm:w-auto">
                      {getAdjacentPage(categories, currentPage, "prev") && (
                        <div className="flex flex-col">
                          <PaginationPrevious
                            onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "prev"))}
                            className="w-full sm:w-auto justify-start cursor-pointer"
                          >
                            Previous
                          </PaginationPrevious>
                          <span className="text-xs text-muted-foreground truncate max-w-[160px] pl-2">
                            {getAdjacentPage(categories, currentPage, "prev")?.title}
                          </span>
                        </div>
                      )}
                    </PaginationItem>
                    
                    <PaginationItem className="w-full sm:w-auto">
                      {isLastPageInCategory(categories, currentPage) ? (
                        <div className="flex flex-col items-end">
                          <PaginationNext
                            onClick={() => setFeedbackOpen(true)}
                            className="w-full sm:w-auto justify-end cursor-pointer"
                          >
                            Finish
                          </PaginationNext>
                        </div>
                      ) : getAdjacentPage(categories, currentPage, "next") && (
                        <div className="flex flex-col items-end">
                          <PaginationNext
                            onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "next"))}
                            className="w-full sm:w-auto justify-end cursor-pointer"
                          >
                            Next
                          </PaginationNext>
                          <span className="text-xs text-muted-foreground truncate max-w-[160px] pr-2">
                            {getAdjacentPage(categories, currentPage, "next")?.title}
                          </span>
                        </div>
                      )}
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </main>
      </div>
      <FeedbackForm open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </div>
  );
}

function getAdjacentPage(categories: Category[], currentPage: DocPage, direction: "prev" | "next"): DocPage | null {
  let allPages: DocPage[] = [];
  const currentCategory = categories.find(category => 
    category.pages.some(page => page.id === currentPage.id)
  );
  
  if (!currentCategory) return null;

  // Only get pages from the current category
  allPages = currentCategory.pages.sort((a, b) => 
    (a.sidebar_position || 0) - (b.sidebar_position || 0)
  );
  
  const currentIndex = allPages.findIndex(page => page.id === currentPage.id);
  
  if (currentIndex === -1) return null;
  
  const targetIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
  
  if (targetIndex < 0 || targetIndex >= allPages.length) {
    return null;
  }
  
  return allPages[targetIndex];
}

// Add this helper function at the bottom of the file
function isLastPageInCategory(categories: Category[], currentPage: DocPage): boolean {
  const currentCategory = categories.find(category => 
    category.pages.some(page => page.id === currentPage.id)
  );
  
  if (!currentCategory) return false;
  
  const sortedPages = currentCategory.pages
    .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0));
  
  return sortedPages[sortedPages.length - 1].id === currentPage.id;
}
