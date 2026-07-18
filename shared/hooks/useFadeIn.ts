'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for fade-in animation on scroll
 * Uses Intersection Observer to detect when element enters viewport
 * 
 * @param options - Configuration options
 * @param options.threshold - Intersection threshold (0-1), default 0.1
 * @param options.delay - Animation delay in milliseconds, default 0
 * @param options.duration - Animation duration in milliseconds, default 600
 * @returns Object with ref to attach to element and isVisible state
 */
export function useFadeIn(options?: {
  threshold?: number
  delay?: number
  duration?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  const threshold = options?.threshold ?? 0.1
  const delay = options?.delay ?? 0
  const duration = options?.duration ?? 600

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px',
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay, hasAnimated])

  return {
    ref: elementRef,
    isVisible,
    style: {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    },
  }
}

