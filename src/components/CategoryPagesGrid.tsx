"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { useRouter } from "next/navigation";
import type { Category, DocPage } from "@/types/index";

export default function CategoryPagesGrid({ foundCategory }: { foundCategory: Category }) {
  const router = useRouter();
  const filteredPages = foundCategory.pages
    .filter((page: DocPage) => page.sidebar_position !== 0 && page.slug)
    .sort((a: DocPage, b: DocPage) => (a.sidebar_position || 0) - (b.sidebar_position || 0));
  const firstPage = filteredPages[0];

  return (
    <>
      {foundCategory.pages.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Button
            onClick={() => {
              if (firstPage) {
                router.push(firstPage.slug);
              }
            }}
            size="lg"
            className=""
          >
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className=""
            onClick={() => router.push('/docs')}
          >
            <Home className="mr-2 h-5 w-5" />
            Back to All topics
          </Button>
        </div>
      )}
      {foundCategory.description && (
        <MarkdownRenderer content={foundCategory.description} />
      )}
      <div className="grid gap-6 mt-8">
        {filteredPages.map((page: DocPage) => (
          <div
            key={page.id}
            className="bg-card block p-6 border border-border rounded-lg hover:border-primary-300 transition-colors cursor-pointer"
            onClick={() => router.push(page.slug)}
          >
            <h2 className="text-xl font-bold mb-1">
              {page.title}
            </h2>
            <span className="text-primary-600 hover:underline mt-1 inline-block">
              Read more
            </span>
          </div>
        ))}
      </div>
    </>
  );
} 