"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  MapPin,
  Palette,
  Zap,
  Link2,
  TrendingUp,
  GitBranch,
  Layers,
  Star,
  Network,
} from "lucide-react"

interface FiveDimensionsProps {
  className?: string
}

export function FiveDimensionsSection({ className }: FiveDimensionsProps) {
  const dimensions = [
    {
      icon: Clock,
      title: "时间维度",
      subtitle: "Time Dimension",
      description: "版本演进时间线，开发效率优化，交付周期缩短",
      metrics: [
        { label: "构建速度", value: "2.5s", change: "-60%" },
        { label: "部署频率", value: "Daily", change: "+200%" },
        { label: "响应时间", value: "<100ms", change: "-40%" },
      ],
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      title: "空间维度",
      subtitle: "Space Dimension",
      description: "代码组织架构，组件复用率，资源利用效率",
      metrics: [
        { label: "代码复用", value: "85%", change: "+25%" },
        { label: "Bundle Size", value: "<100KB", change: "-30%" },
        { label: "覆盖率", value: "95%+", change: "+15%" },
      ],
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Palette,
      title: "属性维度",
      subtitle: "Attribute Dimension",
      description: "质量属性矩阵，性能、安全、可维护性指标",
      metrics: [
        { label: "TypeScript", value: "0 Errors", change: "✓" },
        { label: "ESLint", value: "0 Warnings", change: "✓" },
        { label: "Build", value: "Success", change: "✓" },
      ],
      color: "from-purple-400 to-violet-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Zap,
      title: "事件维度",
      subtitle: "Event Dimension",
      description: "用户交互处理，错误追踪机制，变更追溯系统",
      metrics: [
        { label: "Error Rate", value: "0%", change: "-100%" },
        { label: "Uptime", value: "99.99%", change: "+0.01%" },
        { label: "Traceability", value: "100%", change: "✓" },
      ],
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Link2,
      title: "关联维度",
      subtitle: "Association Dimension",
      description: "依赖关系管理，生态系统连接，API 集成能力",
      metrics: [
        { label: "Dependencies", value: "Managed", change: "✓" },
        { label: "APIs", value: "RESTful", change: "✓" },
        { label: "Ecosystem", value: "Connected", change: "✓" },
      ],
      color: "from-pink-400 to-rose-600",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <section className={`py-24 bg-black ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm text-purple-300 mb-4">
            <Layers className="h-4 w-4" />
            <span>Five Dimensions Evaluation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              五维评估体系
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            提供多维度、全方位的项目评估与决策支持框架
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {dimensions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className={`${item.bgColor} backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-[1.02]`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-xl`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-mono mb-4">{item.subtitle}</p>

                  <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>

                  <div className="space-y-3">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-black/30 backdrop-blur-sm">
                        <span className="text-sm text-gray-400">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-white">{metric.value}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            metric.change.includes("+") ? "bg-green-500/20 text-green-400" :
                            metric.change.includes("-") && !metric.change.includes("✓") ? "bg-red-500/20 text-red-400" :
                            "bg-blue-500/20 text-blue-400"
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 backdrop-blur-sm text-center">
            <TrendingUp className="h-10 w-10 mx-auto mb-3 text-blue-400" />
            <div className="text-3xl font-bold text-white mb-1">v16.2.4</div>
            <div className="text-sm text-gray-400">Next.js 最新版</div>
          </div>
          <div className="p-6 rounded-xl bg-linear-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm text-center">
            <GitBranch className="h-10 w-10 mx-auto mb-3 text-green-400" />
            <div className="text-3xl font-bold text-white mb-1">19.2.4</div>
            <div className="text-sm text-gray-400">React 稳定版</div>
          </div>
          <div className="p-6 rounded-xl bg-linear-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
            <Network className="h-10 w-10 mx-auto mb-3 text-purple-400" />
            <div className="text-3xl font-bold text-white mb-1">5.6</div>
            <div className="text-sm text-gray-400">TypeScript 最新</div>
          </div>
        </div>
      </div>
    </section>
  )
}
