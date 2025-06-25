"use client";
import { useState, useEffect } from "react";
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
import { ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";


interface DocLayoutProps {
  children: React.ReactNode;
  hideSidebar?: boolean;
  defaultCollapsed?: boolean;
}

export function DocLayout({ children, hideSidebar = false, defaultCollapsed = false }: DocLayoutProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [categories] = useState<Category[]>(Data.categories);
  const [currentPage, setCurrentPage] = useState<DocPage | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultCollapsed || isMobile); // Collapse by default on mobile
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // Update sidebar state when screen size changes or on mobile
    setSidebarCollapsed(defaultCollapsed || isMobile);
  }, [isMobile, defaultCollapsed]);

  useEffect(() => {
    
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
  }, [pathname, categories]);

  // Track page visits
  useEffect(() => {
    metricsService.updateMetrics(pathname, {
      visits: 1,
      lastVisited: Date.now()
    });
    }, [pathname]);

  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const timeSpent = Math.round((performance.now() - startTime) / 1000);
      metricsService.updateMetrics(pathname, {
        timeSpent
      });
    };
  }, [pathname]);

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
      router.push(page.slug);
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
            currentSlug={pathname} 
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${!hideSidebar && !sidebarCollapsed ? "ml-64" : "ml-0"}`}>
          <div className="container max-w-4xl pt-8 pb-28 xl:pb-8 xl:px-4">
            {currentPage?.sidebar_position === 0 && (
              <div className="sticky top-20 z-40 mb-8">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center bg-background/95 backdrop-blur whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 rounded-xl px-3 shadow"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
              </div>
            )}

            {children}
            
            {/* Only show pagination for pages with sidebar_position !== 0 */}
            {currentPage && currentPage.sidebar_position !== 0 && (
              <div className="mt-16 pt-4 border-t border-border">
                <Pagination>
                  <PaginationContent className="flex flex-row w-full justify-between gap-4">
                    <PaginationItem className="flex flex-col items-start">
                      {getAdjacentPage(categories, currentPage, "prev") && (
                        <>
                          <PaginationPrevious
                            onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "prev"))}
                            className="justify-start cursor-pointer rounded-md w-auto"
                          >
                            Previous
                          </PaginationPrevious>
                          <span className="text-xs text-muted-foreground truncate max-w-[160px] pl-2">
                            {getAdjacentPage(categories, currentPage, "prev")?.title}
                          </span>
                        </>
                      )}
                    </PaginationItem>
                    
                    <PaginationItem className="flex flex-col items-end">
                      {isLastPageInCategory(categories, currentPage) ? (
                        <>
                          <PaginationNext
                            onClick={() => setFeedbackOpen(true)}
                            className="justify-end cursor-pointer rounded-md w-auto"
                          >
                            Finish
                          </PaginationNext>
                        </>
                      ) : getAdjacentPage(categories, currentPage, "next") && (
                        <>
                          <PaginationNext
                            onClick={() => navigateToPage(getAdjacentPage(categories, currentPage, "next"))}
                            className="justify-end cursor-pointer rounded-md w-auto"
                          >
                            Next
                          </PaginationNext>
                          <span className="text-xs text-muted-foreground truncate max-w-[160px] pr-2">
                            {getAdjacentPage(categories, currentPage, "next")?.title}
                          </span>
                        </>
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
