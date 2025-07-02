import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import StaticHome from "@/pages/static-home";
import NotFound from "@/pages/not-found";

// Check if we're in static mode (GitHub Pages)
const isStatic = import.meta.env.MODE === 'static' || window.location.hostname.includes('github.io');

function Router() {
  return (
    <Switch>
      <Route path="/" component={isStatic ? StaticHome : Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  if (isStatic) {
    return (
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    );
  }

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
