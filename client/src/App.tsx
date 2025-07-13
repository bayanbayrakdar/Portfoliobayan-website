import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import PortfolioStatic from "@/pages/portfolio-static";
import NotFound from "@/pages/not-found";

// Check if we're in GitHub Pages mode
const isGitHubPages = typeof window !== 'undefined' && 
  (window.location.hostname.includes('github.io') || 
   import.meta.env.VITE_GITHUB_PAGES === 'true');

function Router() {
  const PortfolioComponent = isGitHubPages ? PortfolioStatic : Portfolio;
  
  return (
    <Switch>
      <Route path="/" component={PortfolioComponent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
