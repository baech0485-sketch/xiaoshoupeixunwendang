/**
 * 外卖运营知识培训手册 - 主页面
 * 设计风格：Corporate Tech（企业科技风）
 * 色彩：深蓝色(#1E3A5F) + 橙色(#FF6B35)
 * 布局：左侧固定导航 + 右侧内容区
 */

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import OverviewSection from "@/components/sections/OverviewSection";
import MeituanSection from "@/components/sections/MeituanSection";
import ElemeSection from "@/components/sections/ElemeSection";
import GlossarySection from "@/components/sections/GlossarySection";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "meituan", "eleme", "glossary"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          {/* Page Header */}
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
            <p className="text-sm text-muted-foreground mb-2">销售人员培训资料</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              外卖运营知识培训手册
            </h1>
            <p className="text-muted-foreground">
              全面掌握美团、饿了么平台运营知识，提升销售专业能力
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <div className="opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
              <OverviewSection />
            </div>

            <div className="opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
              <MeituanSection />
            </div>

            <div className="opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
              <ElemeSection />
            </div>

            <div className="opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
              <GlossarySection />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              本手册内容更新于 2026年1月 | 仅供内部培训使用
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              如有疑问，请联系运营部门
            </p>
          </footer>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg bg-[#FF6B35] hover:bg-[#FF6B35]/90 z-50"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
