import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { meituanData } from "@/lib/trainingData";
import { CheckCircle2, AlertCircle, Zap, Target, TrendingUp, Calendar, Star, Gift, Megaphone, AlertTriangle } from "lucide-react";

export default function MeituanSection() {
  return (
    <section id="meituan" className="scroll-mt-8">
      {/* Section Header */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src="/images/meituan-section.png"
          alt="美团平台"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD100]/90 to-[#FFD100]/40 flex items-center">
          <div className="p-8">
            <Badge className="bg-black/20 text-white mb-2">市场份额 48%</Badge>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-2">美团平台深度解析</h2>
            <p className="text-[#1E3A5F]/80">掌握美团运营规则，助力商家提升单量</p>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              💰
            </span>
            费率结构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">技术服务费（佣金）</p>
              <p className="text-2xl font-bold text-[#1E3A5F]">{meituanData.fees.techFee}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">履约服务费（配送）</p>
              <p className="text-2xl font-bold text-[#1E3A5F]">{meituanData.fees.deliveryFee}</p>
            </div>
            <div className="p-4 bg-[#FFD100]/10 rounded-lg text-center border-2 border-[#FFD100]">
              <p className="text-sm text-muted-foreground mb-1">综合费率</p>
              <p className="text-2xl font-bold text-[#FFD100]">{meituanData.fees.totalFee}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            <AlertCircle className="inline w-4 h-4 mr-1" />
            美团采取<strong>免费入驻、按单收费</strong>模式，无入驻费或保证金
          </p>
          
          {/* Pricing Note - NEW */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">产品定价溢价说明（重要！）</h4>
                <p className="text-sm text-amber-700 mb-2">{meituanData.fees.pricingNote}</p>
                <div className="bg-white/80 rounded p-2 border border-amber-200">
                  <p className="text-sm font-mono text-amber-900">{meituanData.fees.recommendedMarkup}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Store Rating - NEW */}
      <Card className="border-none shadow-md mb-6 border-l-4 border-l-[#FFD100]">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-[#FFD100]" />
            </span>
            店铺评分（重要！）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#FFD100]/10 border border-[#FFD100] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-[#1E3A5F]">
              <Star className="inline w-4 h-4 mr-1 text-[#FFD100]" />
              {meituanData.rating.importance}
            </p>
          </div>
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm"><strong>评分规则：</strong>{meituanData.rating.rule}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {meituanData.rating.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Official Activity - 天天神券 - NEW */}
      <Card className="border-none shadow-md mb-6 bg-gradient-to-r from-[#FFD100]/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              <Gift className="w-5 h-5 text-[#FFD100]" />
            </span>
            官方活动：天天神券（必参加！）
            <Badge className="bg-[#E53935] text-white ml-2">流量利器</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {meituanData.officialActivities.map((activity, index) => (
            <div key={index}>
              <p className="text-muted-foreground mb-4">{activity.desc}</p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                {activity.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-[#FFD100]/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium mb-2">📱 报名路径：</p>
                <p className="text-sm text-muted-foreground">{activity.howTo}</p>
              </div>
              <div className="bg-[#FFD100]/10 border border-[#FFD100] rounded-lg p-3">
                <p className="text-sm">
                  <Zap className="inline w-4 h-4 mr-1 text-[#FFD100]" />
                  <strong>小贴士：</strong>{activity.tips}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* New Store Phase */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              🚀
            </span>
            新店启动阶段（0-1冷启动）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#FFD100]/10 border border-[#FFD100] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-[#1E3A5F]">
              <Zap className="inline w-4 h-4 mr-1" />
              新店期平台会给予<strong>7-15天的新店加权流量</strong>，必须充分利用！
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {meituanData.newStorePhase.map((phase, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFD100] text-[#1E3A5F] flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {phase.title}
                </h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Operations - UPDATED */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              📊
            </span>
            日常运营核心指标
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {meituanData.dailyOps.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                <Target className="w-8 h-8 text-[#FFD100] mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{item.metric}</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">{item.target}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            每日监控核心指标，确保达到行业基准线
          </p>
        </CardContent>
      </Card>

      {/* Paid Tools - UPDATED with 点金推广 emphasis */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-[#FFD100]" />
            </span>
            付费推广工具
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meituanData.paidTools.map((tool, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${index === 0 ? 'bg-[#FFD100]/10 border-2 border-[#FFD100]' : 'bg-muted/50'}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${index === 0 ? 'bg-[#FFD100]' : 'bg-muted'} flex items-center justify-center text-[#1E3A5F] font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E3A5F] flex items-center gap-2">
                      {tool.name}
                      {index === 0 && <Badge className="bg-[#E53935] text-white">主力工具</Badge>}
                    </h4>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#10B981]" />
                </div>
                {tool.details && (
                  <div className="mt-3 pl-14 space-y-2">
                    {tool.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Rules */}
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FFD100]/20 flex items-center justify-center">
              📋
            </span>
            最新平台规则
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {meituanData.rules.map((rule, index) => (
              <AccordionItem key={index} value={`rule-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{rule.name}</span>
                    <Badge variant="outline" className="ml-2">{rule.date}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground pl-7">
                    了解并遵守此规则，是保障店铺安全、避免被平台处罚的前提。建议定期查看美团商家规则中心获取最新更新。
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
