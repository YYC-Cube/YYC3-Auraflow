"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ClipboardCheck,
  ListChecks,
  Bot,
  BarChart3,
  Sparkles,
  Code2,
  FileText,
  Workflow,
  Eye,
  Cpu,
} from "lucide-react"

interface FiveStandardsProps {
  className?: string
}

export function FiveStandardsSection({ className }: FiveStandardsProps) {
  const fiveStandards = [
    {
      icon: ClipboardCheck,
      title: "标准化",
      subtitle: "Standardization",
      description: "统一技术标准与规范体系，确保团队协作效率与交付质量",
      features: ["项目命名规范", "代码风格统一", "文档格式标准化"],
      metric: "95%+",
      metricLabel: "标准化覆盖率",
      color: "from-blue-400 to-indigo-600",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: ListChecks,
      title: "规范化",
      subtitle: "Normalization",
      description: "完整的开发流程规范，确保代码质量与团队协作效率",
      features: ["Git 工作流", "代码审查机制", "架构设计规范"],
      metric: "100%",
      metricLabel: "流程遵循率",
      color: "from-green-400 to-teal-600",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      icon: Bot,
      title: "自动化",
      subtitle: "Automation",
      description: "通过自动化工具链减少人工干预，提升交付效率与质量一致性",
      features: ["CI/CD 流水线", "自动测试部署", "依赖自动更新"],
      metric: "<5min",
      metricLabel: "部署时间",
      color: "from-orange-400 to-red-600",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: BarChart3,
      title: "可视化",
      subtitle: "Visualization",
      description: "清晰的 UI 层级、数据可视化、直观的监控仪表盘",
      features: ["监控仪表盘", "性能指标展示", "日志可视化"],
      metric: "Real-time",
      metricLabel: "监控频率",
      color: "from-purple-400 to-pink-600",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Sparkles,
      title: "智能化",
      subtitle: "Intelligence",
      description: "AI 辅助开发、智能推荐、自适应优化系统",
      features: ["AI 编程助手", "智能代码审查", "自动化测试生成"],
      metric: "AI-Powered",
      metricLabel: "核心能力",
      color: "from-cyan-400 to-blue-600",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
  ]

  return (
    <section className={`py-24 bg-linear-to-b from-black via-gray-900/50 to-black ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-sm text-green-300 mb-4">
            <FileText className="h-4 w-4" />
            <span>Five Standards System</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              五标规范体系
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            以标准化驱动质量提升，以规范化保障交付一致性
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {fiveStandards.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className={`bg-linear-to-br ${item.gradient} backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-mono mb-3">{item.subtitle}</p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{item.description}</p>

                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Code2 className="h-3 w-3 mt-0.5 text-green-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r ${item.color} text-xs font-bold text-white`}>
                    <span>{item.metric}</span>
                    <span className="opacity-80">{item.metricLabel}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Workflow className="h-8 w-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-white">CI/CD</div>
            <div className="text-sm text-gray-400">全链路自动化</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Eye className="h-8 w-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-white">0 Errors</div>
            <div className="text-sm text-gray-400">TypeScript 严格模式</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Cpu className="h-8 w-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-white">ESLint 9</div>
            <div className="text-sm text-gray-400">Flat Config 架构</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold text-white">AI Assist</div>
            <div className="text-sm text-gray-400">智能代码审查</div>
          </div>
        </div>
      </div>
    </section>
  )
}
