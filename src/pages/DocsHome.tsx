import { useEffect } from "react";
import { DocLayout } from "@/components/DocLayout";
import { Link } from "react-router-dom";
import { mockData } from "@/data/mockDocData";

// Array of placeholder images for category cards
const cardImages = ["photo-1488590528505-98d2b5aba04b", "photo-1461749280684-dccba630e2f6", "photo-1581091226825-a6a2a5aee158", "photo-1487058792275-0ad4aaf24ca7", "photo-1498050108023-c5249f4df085"];
const DocsHome = () => {
  useEffect(() => {
    document.title = "Documentation | Kana Learn";
  }, []);
  return <DocLayout hideSidebar>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">Kana Learn Documentation</h1>
        
        <p className="text-lg mb-8">
          Welcome to Kana Learn! Your comprehensive resource for learning about
          cryptocurrency and blockchain technology. Get started by exploring one
          of our documentation categories below.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {mockData.categories.sort((a, b) => a.position - b.position).map((category, index) => {
          const imageId = cardImages[index % cardImages.length];
          return <Link key={category.id} to={`/${category.slug}`} className="block border border-border rounded-lg hover:border-primary-300 transition-colors overflow-hidden no-underline">
                  <div className="h-40 overflow-hidden">
                    <img src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`} alt={category.label} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{category.label}</h2>
                    <ul className="space-y-1 mb-4 hidden">
                      {category.pages.sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0)).slice(0, 3).map(page => <li key={page.id}>
                            <span className="text-primary-600">
                              {page.sidebar_label || page.title}
                            </span>
                          </li>)}
                    </ul>
                    
                    <span className="text-sm text-primary-600">
                      View all {category.pages.length} articles
                    </span>
                  </div>
                </Link>;
        })}
        </div>
      </div>
    </DocLayout>;
};
export default DocsHome;