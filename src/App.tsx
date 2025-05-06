import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";

import Home from "./pages/Home";
import DocsHome from "./pages/DocsHome";
import DocPage from "./pages/DocPage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const OctobotScript = () => {
  useEffect(() => {
    window.Octobot = window.Octobot || {};
    window.Octobot.config = {
      botId: "681311eef183e9ef4f848bec",
      companyId: "49aa945dff30463f"
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://d2o14ahheh52u.cloudfront.net/widget.js';
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      You need to enable JavaScript in order to use the AI chatbot powered by Octobot
    </noscript>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OctobotScript />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<DocsHome />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/:category/:slug" element={<DocPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
