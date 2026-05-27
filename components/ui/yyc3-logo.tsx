import Image from "next/image"
import { cn } from "@/lib/utils"

const logoSizes = {
  xs: 16,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 128,
  "2xl": 192,
  "3xl": 256,
  "4xl": 512,
} as const

type LogoSize = keyof typeof logoSizes

interface YYC3LogoProps {
  size?: LogoSize | number
  className?: string
  alt?: string
  priority?: boolean
  quality?: number
}

export function YYC3Logo({
  size = "md",
  className,
  alt = "YYC³ Logo",
  priority = false,
  quality = 100,
}: YYC3LogoProps) {
  const sizeValue = typeof size === "number" ? size : logoSizes[size]

  return (
    <Image
      src="/yyc3-dist/yanyu_cloud_512x512.png"
      alt={alt}
      width={sizeValue}
      height={sizeValue}
      priority={priority}
      quality={quality}
      className={cn("rounded-lg object-contain", className)}
    />
  )
}

export function YYCFavicon({
  size = 48,
  className,
  alt = "YYC³ Favicon",
}: Omit<YYC3LogoProps, "size"> & {
  size?: 16 | 32 | 48
}) {
  return (
    <Image
      src={`/yyc3-dist/yanyu_cloud_${size}x${size}.png`}
      alt={alt}
      width={size}
      height={size}
      priority
      quality={100}
      className={cn("object-contain", className)}
    />
  )
}

export default YYC3Logo