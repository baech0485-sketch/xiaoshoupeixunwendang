import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// GitHub Pages 部署的 base 路径
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function Routes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="fixed top-0 left-0 right-0 h-9 bg-sidebar text-sidebar-foreground border-b border-sidebar-border z-40">
            <div className="h-full flex items-center justify-center gap-2 text-xs sm:text-sm">
              <span className="px-2 py-0.5 rounded-full bg-sidebar-accent/20 text-sidebar-accent-foreground/90 font-semibold tracking-[0.2em]">
                呈尚策划
              </span>
              <span className="text-sidebar-foreground/70">品牌出品</span>
            </div>
          </div>
          <Router base={base}>
            <div className="pt-9">
              <Routes />
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
