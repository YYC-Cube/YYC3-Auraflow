"use client"

import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  url?: string
  type?: "website" | "article"
  locale?: string
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function SEO({
  title = "YYC³ AuraFlow - AI 驱动的智能应用开发平台",
  description = "基于五高架构、五标规范、五维评估体系的AI驱动智能应用开发平台。提供高可用、高性能、高安全、高扩展、高智能的完整解决方案。",
  keywords = ["YYC³", "YanYuCloudCube", "AI", "Next.js", "React", "TypeScript", "五高架构", "五标规范", "闭环管理"],
  ogImage = "/og-image.png",
  url = typeof window !== "undefined" ? window.location.origin : "https://aureflow.yyc3.top",
  type = "website",
  locale = "zh_CN",
  siteName = "YYC³ AuraFlow",
  author = "YanYuCloudCube Team",
}: SEOProps) {
  useEffect(() => {
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let element: HTMLMetaElement | null

      if (isProperty) {
        element = document.querySelector(`meta[property="${name}"]`)
      } else {
        element = document.querySelector(`meta[name="${name}"]`)
      }

      if (!element) {
        element = document.createElement("meta")
        if (isProperty) {
          element.setAttribute("property", name)
        } else {
          element.setAttribute("name", name)
        }
        document.head.appendChild(element)
      }

      element.setAttribute("content", content)
    }

    updateMetaTag("title", title)
    updateMetaTag("description", description)
    updateMetaTag("keywords", keywords.join(", "))
    updateMetaTag("og:title", title, true)
    updateMetaTag("og:description", description, true)
    updateMetaTag("og:image", ogImage, true)
    updateMetaTag("og:url", url, true)
    updateMetaTag("og:type", type, true)
    updateMetaTag("og:locale", locale, true)
    updateMetaTag("og:site_name", siteName, true)
    updateMetaTag("twitter:card", "summary_large_image")
    updateMetaTag("twitter:title", title)
    updateMetaTag("twitter:description", description)
    updateMetaTag("twitter:image", ogImage)

    document.title = title
  }, [title, description, keywords, ogImage, url, type, locale, siteName])

  return null
}

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "SoftwareApplication" | "BreadcrumbList" | "FAQPage"
  data: Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let schema: Record<string, unknown> = {}

    switch (type) {
      case "Organization":
        schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "YYC³ (YanYuCloudCube)",
          alternateName: "YanYuCloudCube Team",
          url: "https://aureflow.yyc3.top",
          logo: "https://aureflow.yyc3.top/yyc3-dist/yanyu_cloud_128x128.png",
          description:
            "以技术卓越为基石，构建面向未来的智能应用基础设施。五高架构 · 五标规范 · 五维评估 · 闭环管理",
          foundingDate: "2024-01-01",
          founders: [
            {
              "@type": "Person",
              name: "YanYuCloudCube Team",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "admin@0379.email",
            availableLanguage: ["Chinese", "English", "Japanese", "Korean", "French", "German", "Spanish", "Portuguese", "Russian", "Arabic"],
          },
          sameAs: [
            "https://github.com/YYC-Cube",
          ],
          ...data,
        }
        break

      case "WebSite":
        schema = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "YYC³ AuraFlow",
          url: "https://aureflow.yyc3.top",
          description:
            "AI驱动的智能应用开发平台，基于五高架构体系构建",
          publisher: {
            "@type": "Organization",
            name: "YYC³ (YanYuCloudCube)",
          },
          inLanguage: ["zh-CN", "en", "ja", "ko", "fr", "de", "es", "pt-BR", "ru", "ar"],
          ...data,
        }
        break

      case "SoftwareApplication":
        schema = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "YYC³ AuraFlow",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "997",
            priceCurrency: "CNY",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "1287",
            bestRating: "5",
          },
          ...data,
        }
        break

      case "BreadcrumbList":
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.itemListElement || [],
        }
        break

      case "FAQPage":
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.mainEntity || [],
        }
        break
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    script.id = `structured-data-${type}`

    const existingScript = document.getElementById(`structured-data-${type}`)
    if (existingScript) {
      existingScript.replaceWith(script)
    } else {
      document.head.appendChild(script)
    }

    return () => {
      const el = document.getElementById(`structured-data-${type}`)
      if (el) el.remove()
    }
  }, [type, data])

  return null
}
