
import { useEffect } from "react";
import { DocLayout } from "@/components/DocLayout";
import { Link } from "react-router-dom";
import { Data } from "@/data/DocData";

// Map of category slugs to local banner image paths for cards
const categoryCardImages = {
  "crypto-essentials": "/images/banners/crypto-essentials.jpg",
  "perps": "/images/banners/perps-cover.jpg"
};

const DocsHome = () => {
  useEffect(() => {
    document.title = "Documentation | Kana Learn";
  }, []);

  return <DocLayout hideSidebar>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">Welcome to Kana Learn!</h1>
        
        <p className="text-lg mb-8">
          This platform is designed to help you understand the world of cryptocurrency through clear, structured learning. Whether you're just starting out or looking to solidify your knowledge, our step-by-step guides walk you through the essentials of crypto trading, wallets, tokens, and real on-chain tools.
          <br></br>
          <br></br>
          We’re launching with Crypto Onboarding Essentials — a beginner-friendly course that covers everything you need to get started with confidence.
          More walkthroughs and practical materials are on the way. Start here — and check back soon for what’s next.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {Data.categories.sort((a, b) => a.position - b.position).map((category) => {
          const cardImage = categoryCardImages[category.slug as keyof typeof categoryCardImages] || "/images/banners/default.jpg";
          return <Link key={category.id} to={`/${category.slug}`} className="block border border-border rounded-lg hover:border-primary-300 transition-colors overflow-hidden no-underline">
                  <div className="h-40 overflow-hidden">
                    <img src={cardImage} alt={category.label} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
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
                      View all {category.pages.length} modules
                    </span>
                  </div>
                </Link>;
        })}
        </div>
      </div>
    </DocLayout>;
};
export default DocsHome;
