'use client'

import { useState, useEffect, useRef } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Mobile App & Analytics section component matching Figma design
 * Features:
 * - Mobile phone mockup on left
 * - Content on right with heading, description, CTA button
 * - Stats cards (Active users, Team members) with animated counters
 * - Smooth fade-in animations
 */
export function MobileApp() {
  const [activeUsersCount, setActiveUsersCount] = useState(0)
  const [teamMembersCount, setTeamMembersCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter(21, setActiveUsersCount, 2000) // 21m - animate over 2 seconds
            animateCounter(10, setTeamMembersCount, 2000) // 10+ - animate over 2 seconds
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    const currentElement = sectionRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [hasAnimated])

  const animateCounter = (
    target: number,
    setCount: (value: number) => void,
    duration: number
  ) => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  // Combine refs for both counter observer and fade animation
  const combinedRef = (node: HTMLElement | null) => {
    sectionRef.current = node
    // Update fade ref if it's not already set
    const fadeRef = sectionFade.ref as React.MutableRefObject<HTMLElement | null>
    if (node && !fadeRef.current) {
      fadeRef.current = node
    }
  }

  return (
    <section 
      ref={combinedRef}
      style={sectionFade.style}
      className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-full">
              <img
                src="/assets/landing_page/info/info_img.png"
                alt="Payment platform information"
                className="w-full h-auto object-contain rounded-[30px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Unifying the Payment World
            </h2>
            <div className="mb-8 space-y-4">
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                At ValoraPay, we aim to centralise and standardise online payment processing, improve visibility and control over transaction flows, mitigate risks, and improve overall business efficiency. Our purpose is to help our customers multiply payment capabilities and reach without the need to invest in development or infrastructure.
              </p>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                We offer the technology to build almost any online payment solution. We see the beauty in simplifying the complex, so you can run your online business without obstacles using cloud infrastructure, omni- and cross-channel and full-service payment solutions for both corporate and institutional clients.
              </p>
            </div>
            <a
              href="/contacts"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target group font-body"
            >
              Get started now
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-heading">
                  {activeUsersCount}m
                </div>
                <div className="text-base font-medium text-gray-900 mb-1 font-body">Active users</div>
                <p className="text-sm text-gray-600 font-body">Lorem ipsum follower vertical create effect.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-heading">
                  {teamMembersCount}+
                </div>
                <div className="text-base font-medium text-gray-900 mb-1 font-body">Team members</div>
                <p className="text-sm text-gray-600 font-body">Lorem ipsum follower vertical create effect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

