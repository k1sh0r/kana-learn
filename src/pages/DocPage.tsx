
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DocLayout } from "@/components/DocLayout";
import { DocPage as DocPageType } from "@/types";
import { mockData } from "@/data/mockDocData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DocPage = () => {
  const { category, slug } = useParams();
  const [page, setPage] = useState<DocPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const path = `/${category}/${slug}`;
    
    try {
      // Find page in mock data
      let foundPage: DocPageType | null = null;
      
      for (const cat of mockData.categories) {
        const matchingPage = cat.pages.find(p => p.slug === path);
        if (matchingPage) {
          foundPage = matchingPage;
          break;
        }
      }
      
      if (foundPage) {
        setPage(foundPage);
        setError(null);
        // Update document title
        document.title = `${foundPage.title} | Kana Learn`;
      } else {
        setError("Page not found");
      }
    } catch (err) {
      setError("Failed to load page");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [category, slug]);

  const renderCallToAction = () => {
    return (
      <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-950/20 rounded-lg border border-primary-100 dark:border-primary-900">
        <h3 className="text-xl font-semibold mb-3">Ready to start your crypto journey?</h3>
        <p className="mb-6">
          Join thousands of traders who are already using Kana Learn to navigate the cryptocurrency market with confidence.
        </p>
        <Button className="bg-primary hover:bg-primary-600">
          Sign up for free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <DocLayout>
      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      ) : page ? (
        <article>
          <MarkdownRenderer content={page.content} />
          {renderCallToAction()}
        </article>
      ) : null}
    </DocLayout>
  );
};

export default DocPage;
