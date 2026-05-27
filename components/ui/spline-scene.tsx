"use client"

import { Suspense, useState, useEffect } from "react"

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [Spline, setSpline] = useState<React.ComponentType<any> | null>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const timeoutId = setTimeout(() => {
      if (isMounted && isLoading) {
        console.warn("Spline scene loading timeout - showing fallback")
        setIsLoading(false)
        setHasError(true)
      }
    }, 8000)

    import("@splinetool/react-spline")
      .then((module) => {
        if (isMounted) {
          setSpline(() => module.default)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error("Failed to load Spline:", error)
        if (isMounted) {
          setHasError(true)
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg ${className || ""}`}>
        <div className="text-center space-y-3 p-6">
          <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-sm">3D Scene Loading</p>
          <p className="text-gray-500 text-xs">Interactive content will appear here</p>
        </div>
      </div>
    )
  }

  if (isLoading || !Spline) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-black/5 rounded-lg ${className || ""}`}>
        <div className="space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="text-gray-500 text-xs text-center">Loading 3D Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}