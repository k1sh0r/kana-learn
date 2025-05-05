
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    document.title = "Kana Learn | Crypto & Blockchain Education";
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 to-transparent dark:from-primary-950/20 dark:to-transparent" />
          <div className="container relative mx-auto max-w-5xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Learn Crypto &</span>
                <span className="block mt-1 bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text">
                  Blockchain Technology
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
                The ultimate learning platform to master cryptocurrency and blockchain 
                concepts from beginner to expert level, with comprehensive guides and tutorials.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/docs">Start Learning</Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/crypto-essentials/what-is-crypto-trading" className="flex items-center">
                    Quick Introduction <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Know</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Guides</h3>
                <p className="text-muted-foreground">
                  From blockchain basics to advanced trading strategies, our comprehensive
                  documentation covers everything you need to know.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Learn by doing with interactive tutorials and practical examples
                  that reinforce your understanding of complex concepts.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  Join our community of learners and experts to get help,
                  share insights, and collaborate on projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Crypto?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start your learning journey today and gain the knowledge and skills
              needed to navigate the exciting world of cryptocurrency and blockchain.
            </p>
            
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/docs">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Kana Learn. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
