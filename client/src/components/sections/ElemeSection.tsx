import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { elemeData } from "@/lib/trainingData";
import { CheckCircle2, Sparkles, Smartphone, Gift, BarChart3, Star, Megaphone, Target, Zap, AlertTriangle } from "lucide-react";

export default function ElemeSection() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="eleme" className="scroll-mt-8">
      {/* Section Header */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src={`${baseUrl}images/eleme-section.png`}
          alt="淘宝闪购（饿了么）平台"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0097FF]/90 to-[#0097FF]/40 flex items-center">
          <div className="p-8">
            <Badge className="bg-white/20 text-white mb-2">市场份额 33%</Badge>
            <h2 className="text-3xl font-bold text-white mb-2">淘宝闪购（饿了么）深度解析</h2>
            <p className="text-white/90">深度整合支付宝生态，品质用户聚集地</p>
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              ✨
            </span>
            平台特性与差异化优势
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#0097FF]/5 rounded-lg border border-[#0097FF]/20">
              <Smartphone className="w-8 h-8 text-[#0097FF] mb-2" />
              <h4 className="font-semibold mb-1">支付宝生态</h4>
              <p className="text-sm text-muted-foreground">深度整合支付宝，触达亿级用户</p>
            </div>
            <div className="p-4 bg-[#0097FF]/5 rounded-lg border border-[#0097FF]/20">
              <Sparkles className="w-8 h-8 text-[#0097FF] mb-2" />
              <h4 className="font-semibold mb-1">品质用户</h4>
              <p className="text-sm text-muted-foreground">用户更注重品质感和即时性</p>
            </div>
            <div className="p-4 bg-[#0097FF]/5 rounded-lg border border-[#0097FF]/20">
              <Gift className="w-8 h-8 text-[#0097FF] mb-2" />
              <h4 className="font-semibold mb-1">淘宝闪购</h4>
              <p className="text-sm text-muted-foreground">全品类即时零售，业务范畴扩展</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fee Structure with Pricing Note */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              💰
            </span>
            费率结构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1E3A5F]">佣金费率</h4>
              <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                <span className="text-sm">普通商家</span>
                <span className="font-bold text-[#0097FF]">{elemeData.fees.normalFee}</span>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                <span className="text-sm">连锁品牌商家</span>
                <span className="font-bold text-[#0097FF]">{elemeData.fees.chainFee}</span>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1E3A5F]">配送服务费</h4>
              <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                <span className="text-sm">自配送</span>
                <span className="font-bold text-[#10B981]">{elemeData.fees.selfDelivery}</span>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                <span className="text-sm">蜂鸟配送</span>
                <span className="font-bold text-[#0097FF]">{elemeData.fees.fengniao}</span>
              </div>
            </div>
          </div>
          
          {/* Pricing Note - NEW */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">产品定价溢价说明（重要！）</h4>
                <p className="text-sm text-amber-700 mb-2">{elemeData.fees.pricingNote}</p>
                <div className="bg-white/80 rounded p-2 border border-amber-200">
                  <p className="text-sm font-mono text-amber-900">{elemeData.fees.recommendedMarkup}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Store Rating */}
      <Card className="border-none shadow-md mb-6 border-l-4 border-l-[#0097FF]">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-[#0097FF]" />
            </span>
            店铺评分（重要！）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#0097FF]/10 border border-[#0097FF] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-[#1E3A5F]">
              <Star className="inline w-4 h-4 mr-1 text-[#0097FF]" />
              {elemeData.rating.importance}
            </p>
          </div>
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm"><strong>评分规则：</strong>{elemeData.rating.rule}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {elemeData.rating.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Official Activity - 爆单红包 */}
      <Card className="border-none shadow-md mb-6 bg-gradient-to-r from-[#0097FF]/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              <Gift className="w-5 h-5 text-[#0097FF]" />
            </span>
            官方活动：爆单红包（必参加！）
            <Badge className="bg-[#E53935] text-white ml-2">流量利器</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {elemeData.officialActivities.map((activity, index) => (
            <div key={index}>
              <p className="text-muted-foreground mb-4">{activity.desc}</p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                {activity.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-[#0097FF]/10 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium mb-2">📱 报名路径：</p>
                <p className="text-sm text-muted-foreground">{activity.howTo}</p>
              </div>
              <div className="bg-[#0097FF]/10 border border-[#0097FF] rounded-lg p-3">
                <p className="text-sm">
                  <Zap className="inline w-4 h-4 mr-1 text-[#0097FF]" />
                  <strong>小贴士：</strong>{activity.tips}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Daily Operations */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              📊
            </span>
            日常运营核心指标
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {elemeData.dailyOps.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                <Target className="w-8 h-8 text-[#0097FF] mx-auto mb-2" />
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

      {/* Paid Tools - with 推广魔方 emphasis */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-[#0097FF]" />
            </span>
            付费推广工具
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {elemeData.paidTools.map((tool, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${index === 0 ? 'bg-[#0097FF]/10 border-2 border-[#0097FF]' : 'bg-muted/50'}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${index === 0 ? 'bg-[#0097FF]' : 'bg-muted'} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E3A5F] flex items-center gap-2">
                      {tool.name}
                      {index === 0 && <Badge className="bg-[#E53935] text-white">主力工具</Badge>}
                    </h4>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                </div>
                {tool.details && (
                  <div className="mt-3 pl-14 space-y-2">
                    {tool.details.map((detail: string, i: number) => (
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

      {/* Entry Benefits */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              🎁
            </span>
            新商家入驻6大权益
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {elemeData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-[#0097FF]/10 to-[#0097FF]/5 rounded-lg border border-[#0097FF]/20 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#0097FF] text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Traffic Sources */}
      <Card className="border-none shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              📈
            </span>
            核心流量来源
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {elemeData.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0097FF] flex items-center justify-center text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#1E3A5F]">{source.name}</h4>
                  <p className="text-sm text-muted-foreground">{source.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost Control */}
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0097FF]/20 flex items-center justify-center">
              📉
            </span>
            推广费用控制策略
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">店铺阶段</th>
                  <th className="text-left py-3 px-4 font-semibold">推广费占比</th>
                  <th className="text-left py-3 px-4 font-semibold">建议</th>
                </tr>
              </thead>
              <tbody>
                {elemeData.costControl.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30">
                    <td className="py-3 px-4">{item.phase}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="bg-[#0097FF]/10 text-[#0097FF] border-[#0097FF]">
                        {item.ratio}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{item.advice}</td>
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
