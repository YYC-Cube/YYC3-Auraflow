"use client"

import { Suspense, useState, useEffect, useCallback } from "react"

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [Spline, setSpline] = useState<React.ComponentType<any> | null>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const showFallback = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  useEffect(() => {
    let isMounted = true
    const timeoutId = setTimeout(() => {
      if (isMounted && isLoading) {
        showFallback()
      }
    }, 15000)

    import("@splinetool/react-spline")
      .then((module) => {
        if (isMounted) {
          setSpline(() => module.default)
          setIsLoading(false)
        }
      })
      .catch(() => {
        if (isMounted) {
          showFallback()
        }
      })

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [isLoading, showFallback])

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-linear-to-br from-gray-900/80 to-black/80 rounded-lg ${className || ""}`}>
        <div className="text-center space-y-4 p-8">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-20" />
            <div className="relative w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-sm font-medium">YYC³ AuraFlow</p>
            <p className="text-gray-500 text-xs mt-1">3D Interactive Experience</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-xs">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span>Scene available on stable connection</span>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading || !Spline) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-black/5 rounded-lg ${className || ""}`}>
        <div className="space-y-4">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
          </div>
          <p className="text-gray-500 text-xs text-center">Loading 3D Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-lg">
          <div className="relative w-8 h-8 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}