import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketData, platformComparison } from "@/lib/trainingData";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { TrendingUp, Users, Bike, ShoppingBag } from "lucide-react";

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/40 flex items-center">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              外卖行业概览
            </h1>
            <p className="text-white/90 text-lg max-w-xl">
              2025-2026年中国外卖市场已形成"两超一强"新格局，市场规模突破1.2万亿元，用户规模超6亿。
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: TrendingUp, label: "市场规模", value: "1.2万亿+", color: "text-[#FF6B35]" },
          { icon: Users, label: "用户规模", value: marketData.userScale, color: "text-[#0097FF]" },
          { icon: Bike, label: "骑手数量", value: marketData.riderScale, color: "text-[#FFD100]" },
          { icon: ShoppingBag, label: "日均订单", value: marketData.dailyOrders, color: "text-[#10B981]" },
        ].map((item, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 md:p-6">
              <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-xl md:text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Market Share Pie Chart */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">市场份额分布（2025年Q4）</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketData.marketShare}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {marketData.marketShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {marketData.marketShare.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Size Bar Chart */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">市场规模增长趋势（万亿元）</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData.marketSize}>
                  <XAxis dataKey="year" />
                  <YAxis domain={[0, 2.5]} />
                  <Tooltip formatter={(value) => `${value}万亿元`} />
                  <Bar dataKey="value" fill="#FF6B35" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Trends */}
      <Card className="border-none shadow-md mb-8">
        <CardHeader>
          <CardTitle className="text-lg">2025年行业新特征</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#1E3A5F]">消费者行为变迁</h4>
              <p className="text-sm text-muted-foreground">
                近4成消费者养成多平台比较习惯，决策核心从追求低价转向餐品品质和食品安全。
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#1E3A5F]">商家选择多元化</h4>
              <p className="text-sm text-muted-foreground">
                商家选择平台不再仅看佣金，而是综合考量配送能力、流量质量、数据工具等。
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#1E3A5F]">国家标准出台</h4>
              <p className="text-sm text-muted-foreground">
                2025年12月发布《外卖平台服务管理基本要求》国家标准，平台运营更加规范化。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Comparison Table */}
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">美团 vs 淘宝闪购（饿了么） 核心对比</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">维度</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FFD100]" />
                      美团
                    </span>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#0097FF]" />
                      淘宝闪购（饿了么）
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {platformComparison.map((row, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">{row.dimension}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.meituan}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.eleme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
