'use client'

import { useRef, useEffect, useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Trust Badges section component matching Figma design
 * Features:
 * - Horizontal auto-scrolling trust badges
 * - Gradient overlays on sides
 * - Auto-scroll pauses on hover
 * - Mobile-first responsive design
 * - Smooth fade-in animations
 */
export function TrustBadges() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionFade = useFadeIn({ threshold: 0.2, delay: 0 })

  const logos = [
    { src: '/assets/landing_page/trustedby/brand logo-1.png', alt: 'Trusted brand logo 1' },
    { src: '/assets/landing_page/trustedby/brand logo-2.png', alt: 'Trusted brand logo 2' },
    { src: '/assets/landing_page/trustedby/brand logo-3.png', alt: 'Trusted brand logo 3' },
    { src: '/assets/landing_page/trustedby/brand logo-4.png', alt: 'Trusted brand logo 4' },
    { src: '/assets/landing_page/trustedby/brand logo-5.png', alt: 'Trusted brand logo 5' },
    { src: '/assets/landing_page/trustedby/brand logo-6.png', alt: 'Trusted brand logo 6' },
    { src: '/assets/landing_page/trustedby/brand logo-7.png', alt: 'Trusted brand logo 7' },
    { src: '/assets/landing_page/trustedby/brand logo-8.png', alt: 'Trusted brand logo 8' },
    { src: '/assets/landing_page/trustedby/Brand logo.png', alt: 'Trusted brand logo' },
    { src: '/assets/landing_page/trustedby/Logo.png', alt: 'Trusted logo' },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollContainerRef.current) return
    
    let intervalId: NodeJS.Timeout | null = null
    
    const startAutoScroll = () => {
      if (intervalId) clearInterval(intervalId)
      
      intervalId = setInterval(() => {
        const container = scrollContainerRef.current
        if (!container || isHovered) return
        
        const { scrollLeft, scrollWidth, clientWidth } = container
        const maxScroll = scrollWidth - clientWidth
        
        if (maxScroll <= 0) return
        
        // If at the end, reset to start for infinite loop
        if (scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0
        } else {
          // Smooth continuous scroll
          container.scrollLeft += 0.5
        }
      }, 16) // ~60fps
    }
    
    // Start after component mounts
    const timeoutId = setTimeout(startAutoScroll, 300)
    
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isHovered])

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full bg-[#EFEFEF] border-b border-gray-200 py-8">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Text */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 font-medium font-body">
            Trusted by 15,000+ founders & business owners
          </p>
        </div>

        {/* Trust Badges - Horizontal Scroll */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#EFEFEF] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#EFEFEF] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide py-4 scroll-container-auto"
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-12 lg:h-[33px] px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width={120}
                  height={33}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

