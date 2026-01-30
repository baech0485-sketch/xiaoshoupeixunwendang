import { cn } from "@/lib/utils";
import { navItems } from "@/lib/trainingData";
import { BarChart3, BookOpen, BookText, Menu, Sparkles, Store, X, type LucideIcon } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navIcons: Record<string, LucideIcon> = {
  overview: BarChart3,
  meituan: Store,
  eleme: Sparkles,
  glossary: BookText,
};

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-2 left-4 z-50 p-2 bg-sidebar text-sidebar-foreground rounded-lg shadow-lg"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-9 left-0 h-[calc(100%-36px)] w-64 bg-sidebar text-sidebar-foreground z-40 transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] tracking-wide bg-sidebar-accent/30 text-sidebar-accent-foreground/80 mb-1">
                  呈尚策划
                </span>
                <h1 className="font-semibold text-lg leading-tight">外卖运营</h1>
                <p className="text-xs text-sidebar-foreground/70">培训手册</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto sidebar-scroll">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = navIcons[item.id] ?? BookOpen;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                        activeSection === item.id
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50 text-sidebar-foreground/80"
                      )}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/50 text-center">
              更新日期：2026年1月
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
