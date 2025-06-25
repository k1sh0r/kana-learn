"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { useRouter } from "next/navigation";
import type { Category, DocPage } from "@/types/index";

export default function CategoryPagesGrid({ foundCategory }: { foundCategory: Category }) {
  const router = useRouter();
  const filteredPages = foundCategory.pages
    .filter((page: DocPage) => page.sidebar_position !== 0)
    .sort((a: DocPage, b: DocPage) => (a.sidebar_position || 0) - (b.sidebar_position || 0));
  const firstPage = filteredPages[0];

  return (
    <>
      {foundCategory.pages.length > 0 && (
        <Button
          onClick={() => {
            if (firstPage) {
              router.push(firstPage.slug);
            }
          }}
          className="mb-4"
        >
          Start Learning <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
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