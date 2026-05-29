import { ErrorBoundary } from "@/components/ui/error-boundary"
import { LocaleProvider } from "@/contexts/locale-context"
import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://aureflow.yyc3.top"),
  title: "YYC³ AuraFlow - AI 驱动的智能应用",
  description: "言启千行代码，语枢万物智能 - YYC³ (YanYuCloudCube) 智能应用平台",
  keywords: ["YYC3", "AuraFlow", "AI", "智能应用", "自动化", "聊天机器人"],
  authors: [{ name: "YYC³ Team" }],
  creator: "YYC³",
  generator: "Next.js 16",
  icons: {
    icon: [
      { url: "/yyc3-dist/favicon.ico", sizes: "48x48" },
      { url: "/yyc3-dist/yanyu_cloud_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/yyc3-dist/yanyu_cloud_128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/yyc3-dist/manifest.json",
  openGraph: {
    title: "YYC³ AuraFlow - AI 驱动的智能应用",
    description: "言启千行代码，语枢万物智能 - YYC³ 智能应用平台",
    siteName: "YYC³ AuraFlow",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/yyc3-dist/yanyu_cloud_512x512.png",
        width: 512,
        height: 512,
        alt: "YYC³ Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YYC³ AuraFlow - AI 驱动的智能应用",
    description: "言启千行代码，语枢万物智能",
    images: ["/yyc3-dist/yanyu_cloud_512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <LocaleProvider>{children}</LocaleProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
