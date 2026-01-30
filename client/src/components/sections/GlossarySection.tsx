import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { glossary } from "@/lib/trainingData";
import { Search, BookOpen } from "lucide-react";
import { useState } from "react";

export default function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = glossary.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="scroll-mt-8">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A6F] rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">外卖运营术语表</h2>
            <p className="text-white/70">快速查阅常用术语定义</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索术语..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/90 border-none"
          />
        </div>
      </div>

      {/* Glossary Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredGlossary.map((item, index) => (
          <Card
            key={index}
            className="border-none shadow-md hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[#FF6B35]">
                    {item.term.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-[#1E3A5F]">{item.term}</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {item.en}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.def}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">未找到匹配的术语</p>
        </div>
      )}
    </section>
  );
}
