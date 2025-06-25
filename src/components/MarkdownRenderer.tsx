"use client";
import { useEffect, useCallback, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { usePathname } from "next/navigation";
import { metricsService } from "@/services/metricsService";
import { OptimizedImage } from './OptimizedImage';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const pathname = usePathname();
  const metricsRef = useRef({
    startTime: performance.now(),
    lastStoredTime: performance.now(),
    maxScroll: 0,
    isWriting: false
  });
  const writeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ticking = useRef(false);

  // Initialize page visit on mount
  useEffect(() => {
    metricsService.updateMetrics(pathname, {
      visits: 1,
      lastVisited: Date.now()
    });
  }, [pathname]);

  // Optimized metrics storage
  const storeMetrics = useCallback((path: string, timeSpent: number, maxScroll: number) => {
    if (metricsRef.current.isWriting) return;
    metricsRef.current.isWriting = true;
    
    if (writeTimeoutRef.current) {
      clearTimeout(writeTimeoutRef.current);
    }

    writeTimeoutRef.current = setTimeout(() => {
      metricsService.updateMetrics(path, {
        timeSpent,
        maxScroll
      });
      metricsRef.current.isWriting = false;
    }, 100);
  }, []);

  // Reset metrics when location changes
  useEffect(() => {
    metricsRef.current = {
      startTime: performance.now(),
      lastStoredTime: performance.now(),
      maxScroll: 0,
      isWriting: false
    };
  }, [pathname]);

  // Optimized scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const newScrollPercentage = Math.min(
            100,
            Math.round((currentScroll / scrollHeight) * 100)
          );
          metricsRef.current.maxScroll = Math.max(metricsRef.current.maxScroll, newScrollPercentage);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // Save metrics before unmounting
      storeMetrics(pathname, 
        Math.round((performance.now() - metricsRef.current.lastStoredTime) / 1000),
        metricsRef.current.maxScroll
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, storeMetrics]); // Add location dependency

  // Efficient time tracking with 1-second updates
  useEffect(() => {
    const updateMetrics = () => {
      const now = performance.now();
      const timeSpentInSeconds = Math.round((now - metricsRef.current.lastStoredTime) / 1000);
      
      if (timeSpentInSeconds > 0) {
        storeMetrics(pathname, timeSpentInSeconds, metricsRef.current.maxScroll);
        metricsRef.current.lastStoredTime = now;
      }
    };

    const intervalId = setInterval(updateMetrics, 1000);

    const cleanup = () => {
      updateMetrics();
      clearInterval(intervalId);
      if (writeTimeoutRef.current) {
        clearTimeout(writeTimeoutRef.current);
      }
    };

    // Handle page visibility and unload
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cleanup();
    });
    window.addEventListener("beforeunload", cleanup);

    return cleanup;
  }, [pathname, storeMetrics]);

  return (
    <ReactMarkdown
      className="markdown-content"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
          img: ({ ...props }) => (
          <OptimizedImage
            {...props}
              src={props.src as string}
            alt={props.alt || ''}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
