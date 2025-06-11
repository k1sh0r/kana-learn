import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocLayout } from "@/components/DocLayout";
import { Category } from "@/types";
import { Data } from "@/data/DocData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

// Map of category slugs to local banner image paths
const categoryBanners = {
  "crypto-essentials": "/images/banners/crypto-essentials0.jpg",
  "perps": "/images/content/perps1.png"
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    // Find the category in the mock data
    const foundCategory = Data.categories.find(
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
      <DocLayout defaultCollapsed={true}>
        <div className="flex justify-center items-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </DocLayout>
    );
  }

  if (!categoryData) {
    return (
      <DocLayout defaultCollapsed={true}>
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

  // Get the banner image for current category or use default
  const bannerImage = categoryBanners[categoryData.slug as keyof typeof categoryBanners] || "/images/banners/default.jpg";

  return (
    <DocLayout defaultCollapsed={true}>
      <div className="prose prose-lg max-w-none ">
        {/* Category Banner */}
        <div className="w-full mb-6 overflow-hidden rounded-2xl border-2 border-[#002019]">
          <img 
            src={bannerImage}
            alt={categoryData.label}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{categoryData.label}</h1>
        

        {categoryData.pages.length > 0 && (
          <Button
            onClick={() => handleCardClick(categoryData.pages[0].slug)}
            className="mb-4"
          >
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}

        {categoryData.description && (
          <div className="mb-12">
            <MarkdownRenderer content={categoryData.description} />
          </div>
        )}

        <p className="text-lg mb-4">
          Explore all topics in the {categoryData.label} category:
        </p>

        <div className="grid gap-6">
          {categoryData.pages
            .filter(page => page.sidebar_position !== 0)
            .sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0))
            .map((page) => (
              <div 
                key={page.id} 
                className="block p-6 border border-border rounded-lg hover:border-primary-300 transition-colors cursor-pointer"
                onClick={() => handleCardClick(page.slug)}
              >
                <h2 className="text-xl font-bold mb-1">
                  {page.title}
                </h2>
                {/* <p className="text-muted-foreground line-clamp-2">
                  {page.content.substring(0, 150).replace(/#.*?\n/, "")}...
                </p> */}
                <span className="text-primary-600 hover:underline mt-1 inline-block">
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
