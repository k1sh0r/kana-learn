
import { useEffect } from "react";
import { DocLayout } from "@/components/DocLayout";
import { Link } from "react-router-dom";
import { mockData } from "@/data/mockDocData";

const DocsHome = () => {
  useEffect(() => {
    document.title = "Documentation | Kana Learn";
  }, []);

  return (
    <DocLayout>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">Kana Learn Documentation</h1>
        
        <p className="text-lg mb-8">
          Welcome to Kana Learn! Your comprehensive resource for learning about
          cryptocurrency and blockchain technology. Get started by exploring one
          of our documentation categories below.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {mockData.categories
            .sort((a, b) => a.position - b.position)
            .map((category) => (
              <div
                key={category.id}
                className="block p-6 border border-border rounded-lg hover:border-primary-300 transition-colors"
              >
                <h2 className="text-xl font-bold mb-2">{category.label}</h2>
                <ul className="space-y-1 mb-4">
                  {category.pages
                    .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
                    .slice(0, 3)
                    .map((page) => (
                      <li key={page.id}>
                        <Link
                          to={page.slug}
                          className="text-primary-600 hover:underline"
                        >
                          {page.sidebar_label || page.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                
                <Link
                  to={`/${category.slug}`}
                  className="text-sm text-primary-600 hover:underline"
                >
                  View all {category.pages.length} articles
                </Link>
              </div>
            ))}
        </div>
      </div>
    </DocLayout>
  );
};

export default DocsHome;
