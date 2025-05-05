
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Track time spent on page
    const startTime = Date.now();
    setSessionStartTime(startTime);

    // Track scroll percentage
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const newScrollPercentage = Math.min(
        100,
        Math.round((currentScroll / scrollHeight) * 100)
      );
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Calculate total time spent on page when unmounting
      if (sessionStartTime) {
        const endTime = Date.now();
        const timeSpentInSeconds = (endTime - sessionStartTime) / 1000;
        console.log(`Time spent on page: ${timeSpentInSeconds}s`);
        console.log(`Maximum scroll percentage: ${scrollPercentage}%`);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sessionStartTime, scrollPercentage]);

  return (
    <ReactMarkdown
      className="markdown-content"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
}
