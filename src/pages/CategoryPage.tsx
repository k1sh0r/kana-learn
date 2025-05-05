
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocLayout } from "@/components/DocLayout";
import { Category } from "@/types";
import { mockData } from "@/data/mockDocData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Array of placeholder images for category banners
const categoryBanners = {
  "crypto-essentials": "photo-1488590528505-98d2b5aba04b",
  "security": "photo-1461749280684-dccba630e2f6"
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    // Find the category in the mock data
    const foundCategory = mockData.categories.find(
      (cat) => cat.slug === category
    );
    
    if (foundCategory) {
      setCategoryData(foundCategory);
      // Update document title
      document.title = `${foundCategory.label} | Kana Learn`;
    }
    
    setLoading(false);
  }, [category]);

  const handleCardClick = (slug: string) => {
    navigate(slug);
  };

  if (loading) {
    return (
      <DocLayout>
        <div className="flex justify-center items-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </DocLayout>
    );
  }

  if (!categoryData) {
    return (
      <DocLayout>
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">
            The requested category could not be found.
          </p>
          <Link to="/docs" className="text-primary hover:underline mt-4 inline-block">
            Return to Documentation
          </Link>
        </div>
      </DocLayout>
    );
  }

  // Get the banner image for current category
  const bannerImageId = categoryBanners[categoryData.slug as keyof typeof categoryBanners] || "photo-1498050108023-c5249f4df085";

  return (
    <DocLayout>
      <div className="prose prose-lg max-w-none">
        {/* Category Banner */}
        <div className="w-full h-48 sm:h-60 md:h-72 mb-6 overflow-hidden rounded-lg">
          <img 
            src={`https://images.unsplash.com/${bannerImageId}?auto=format&fit=crop&w=1200&q=80`}
            alt={categoryData.label}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-6">{categoryData.label}</h1>
        
        <p className="text-lg mb-8">
          Explore all topics in the {categoryData.label} category.
        </p>
        
        <div className="grid gap-6">
          {categoryData.pages
            .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
            .map((page) => (
              <div 
                key={page.id} 
                className="block p-6 border border-border rounded-lg hover:border-primary-300 transition-colors cursor-pointer"
                onClick={() => handleCardClick(page.slug)}
              >
                <h2 className="text-xl font-bold mb-2">
                  {page.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {page.content.substring(0, 150).replace(/#.*?\n/, "")}...
                </p>
                <span className="text-primary hover:underline mt-4 inline-block">
                  Read more
                </span>
              </div>
            ))}
        </div>
      </div>
    </DocLayout>
  );
};

export default CategoryPage;
