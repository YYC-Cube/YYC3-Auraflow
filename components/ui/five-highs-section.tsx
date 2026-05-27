"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/contexts/locale-context"
import { ScrollReveal, ExpandableCard, ResponsiveGrid } from "@/components/ui/scroll-reveal"
import {
  ShieldCheck,
  Zap,
  Lock,
  ArrowUpRight,
  BrainCircuit,
  Server,
  Gauge,
  GitBranch,
} from "lucide-react"

interface FiveHighsProps {
  className?: string
}

export function FiveHighsSection({ className }: FiveHighsProps) {
  const { t } = useLocale()

  const icons = [ShieldCheck, Zap, Lock, ArrowUpRight, BrainCircuit]
  const colors = [
    "from-green-400 to-emerald-600",
    "from-yellow-400 to-orange-600",
    "from-red-400 to-rose-600",
    "from-blue-400 to-cyan-600",
    "from-purple-400 to-violet-600",
  ]
  const bgColors = ["bg-green-500/10", "bg-yellow-500/10", "bg-red-500/10", "bg-blue-500/10", "bg-purple-500/10"]
  const borderColors = ["border-green-500/30", "border-yellow-500/30", "border-red-500/30", "border-blue-500/30", "border-purple-500/30"]

  return (
    <section className={`py-24 bg-black ${className || ""}`}>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm text-blue-300 mb-4">
              <ActivityIcon className="h-4 w-4" />
              <span>{t.fiveHighs?.tag || "Five Highs Architecture"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                {t.fiveHighs?.sectionTitle || "五高架构体系"}
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t.fiveHighs?.sectionSubtitle || "构建面向未来的智能应用基础设施"}</p>
          </div>
        </ScrollReveal>

        <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap="gap-6">
          {(t.fiveHighs?.items || []).map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <ExpandableCard
                  title={item?.title || ''}
                  description={item?.subtitle || ''}
                  icon={
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${colors[index]} flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  }
                  className={`${bgColors[index]} ${borderColors[index]} backdrop-blur-sm border`}
                >
                  <div className="space-y-4">
                    <p className="text-sm text-gray-300 leading-relaxed">{item?.description || ''}</p>

                    <div className="space-y-2">
                      {(item?.metrics || []).map((metric: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${colors[index]}`} />
                          <span className="text-xs text-gray-400 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ExpandableCard>
              </ScrollReveal>
            )
          })}
        </ResponsiveGrid>

        <ScrollReveal delay={600}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-green-400" />
              <span>云原生架构</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-yellow-400" />
              <span>Turbopack 构建</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-blue-400" />
              <span>GitOps 流水线</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}
