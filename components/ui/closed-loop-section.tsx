"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  RefreshCw,
  FileText,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  CircleDot,
  RotateCcw,
  Archive,
  Target,
  Play,
  ClipboardCheck,
  Pencil,
  Upload,
  Shield,
} from "lucide-react"

interface ClosedLoopProps {
  className?: string
}

export function ClosedLoopSection({ className }: ClosedLoopProps) {
  const loops = [
    {
      icon: FileText,
      title: "文档闭环",
      subtitle: "Document Closed Loop",
      description: "可复用 → 可迭代 → 可追溯",
      steps: [
        { icon: FileText, label: "创建", desc: "基于模版生成" },
        { icon: Pencil, label: "迭代", desc: "版本持续优化" },
        { icon: Archive, label: "归档", desc: "完整上下文保存" },
        { icon: CheckCircle2, label: "追溯", desc: "全链路可追踪" },
      ],
      color: "from-blue-400 to-indigo-600",
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    },
    {
      icon: Code2,
      title: "代码闭环",
      subtitle: "Code Closed Loop",
      description: "Plan → Do → Check → Act → Archive (PDCA+)",
      steps: [
        { icon: Target, label: "Plan", desc: "规划任务目标" },
        { icon: Play, label: "Do", desc: "按计划执行" },
        { icon: ClipboardCheck, label: "Check", desc: "对照标准检查" },
        { icon: RotateCcw, label: "Act", desc: "处理并改进" },
        { icon: Archive, label: "Archive", desc: "归档与同步" },
      ],
      color: "from-green-400 to-teal-600",
      gradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      icon: Rocket,
      title: "服务闭环",
      subtitle: "Service Closed Loop",
      description: "需求 → 开发 → 交付 → 运维 → 演进",
      steps: [
        { icon: Target, label: "需求", desc: "明确业务目标" },
        { icon: Code2, label: "开发", desc: "高质量实现" },
        { icon: Upload, label: "交付", desc: "部署上线" },
        { icon: Shield, label: "运维", desc: "监控保障" },
        { icon: RefreshCw, label: "演进", desc: "持续优化" },
      ],
      color: "from-orange-400 to-red-600",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    },
  ]

  return (
    <section className={`py-24 bg-linear-to-b from-black via-gray-900/50 to-black ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-sm text-orange-300 mb-4">
            <RefreshCw className="h-4 w-4" />
            <span>Closed Loop Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              闭环理念体系
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            从文档到代码再到服务，构建全链路闭环管理体系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {loops.map((loop, loopIndex) => {
            const Icon = loop.icon
            return (
              <Card
                key={loopIndex}
                className={`bg-linear-to-br ${loop.gradient} backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${loop.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-xl`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <RefreshCw className={`h-6 w-6 text-white/50 group-hover:rotate-180 transition-transform duration-1000`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{loop.title}</h3>
                  <p className="text-xs text-gray-400 font-mono mb-2">{loop.subtitle}</p>
                  <p className="text-lg font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">{loop.description}</p>

                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-white/20 to-white/5" />

                    <div className="space-y-4">
                      {loop.steps.map((step, stepIndex) => {
                        const StepIcon = step.icon
                        return (
                          <div key={stepIndex} className="relative flex items-start gap-4 group/step">
                            <div
                              className={`relative z-10 w-12 h-12 rounded-full bg-linear-to-br ${loop.color} flex items-center justify-center shrink-0 shadow-lg group-hover/step:scale-110 transition-transform duration-300`}
                            >
                              <StepIcon className="h-5 w-5 text-white" />
                            </div>

                            <div className="flex-1 pt-2 pb-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-white">{step.label}</h4>
                                {stepIndex < loop.steps.length - 1 && (
                                  <ArrowRight className="h-3 w-3 text-gray-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${loop.color} text-sm font-bold text-white shadow-lg`}>
                    <CircleDot className="h-4 w-4" />
                    <span>Full Lifecycle Management</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              上下文存档 · 规划衔接 · 总结同步 · 随时可启
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              YYC³ 闭环理念确保每个环节都可追溯、可迭代、可复用。
              从文档创建到代码交付，从需求分析到服务运维，
              构建完整的全生命周期管理闭环。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>可复用</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>可迭代</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>可追溯</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>可衔接</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
