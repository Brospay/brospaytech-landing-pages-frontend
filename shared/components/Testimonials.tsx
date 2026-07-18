'use client'

import { useState, useRef, useEffect } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Testimonials section component with slider/carousel
 * Features:
 * - Heading with "Powered by AI" subtitle
 * - Horizontal carousel of testimonial cards with auto-scroll
 * - Auto-scroll pauses on hover
 * - Navigation arrows
 * - Cards with profile pictures, names, handles, company logos, and quotes
 * - Smooth fade-in animations
 */
export function Testimonials() {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  // Generate avatar image URL using DiceBear API
  const getAvatarUrl = (name: string, seed: number) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s+/g, '')}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
  }

  const testimonials = [
    {
      name: 'Ronald Richards',
      handle: '@ronaldrichards',
      logo: '🔴',
      quote: 'The payment orchestration platform has revolutionized our transaction processing. We\'ve integrated multiple payment providers seamlessly, reducing integration time by 70% and improving our transaction success rate significantly.',
    },
    {
      name: 'Jacob Jones',
      handle: '@jacobjones',
      logo: '🔵',
      quote: 'Real-time transaction monitoring and analytics have been game-changers. We can now track payment flows across all providers from a single dashboard, making fraud detection and revenue optimization effortless.',
    },
    {
      name: 'Wade Warren',
      handle: '@wadewarren',
      logo: '🟣',
      quote: 'Our global expansion became so much easier with this platform. Multi-currency support and automatic conversion mean we can accept payments from anywhere in the world without complex integrations.',
    },
    {
      name: 'Bessie Cooper',
      handle: '@bessiecooper',
      logo: '🔵',
      quote: 'The unified payment hub eliminated our dependency on multiple payment systems. We now manage all transactions, refunds, and settlements from one interface, saving hours every week.',
    },
    {
      name: 'Kamel Nick',
      handle: '@kamelnick',
      logo: '🟠',
      quote: 'Advanced fraud prevention and security features give us peace of mind. Our chargeback rates dropped by 40% after implementing the platform\'s intelligent risk management tools.',
    },
    {
      name: 'Sarah Johnson',
      handle: '@sarahjohnson',
      logo: '🟢',
      quote: 'The API integration was seamless with comprehensive documentation. Our development team had everything up and running in just a few days. The platform is incredibly developer-friendly.',
    },
    {
      name: 'Michael Chen',
      handle: '@michaelchen',
      logo: '🔴',
      quote: 'Payment orchestration made our payment infrastructure scalable and reliable. We can now handle peak traffic without worrying about payment provider failures. Smart routing ensures maximum success rates.',
    },
  ]

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Auto-scroll functionality with smooth continuous scrolling
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
        
        if (maxScroll <= 0) return // No scrollable content
        
        // If at the end, reset to start for infinite loop
        if (scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0
        } else {
          // Smooth continuous scroll
          container.scrollLeft += 1
        }
        
        updateScrollButtons()
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

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', updateScrollButtons)
      updateScrollButtons()
      return () => container.removeEventListener('scroll', updateScrollButtons)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 336 // 320px card + 16px gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 336 // 320px card + 16px gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Join Our Satisfied Customers
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto font-body">
            Discover how businesses worldwide are transforming their payment operations with our comprehensive orchestration platform. Join thousands of satisfied customers who trust us for seamless payment processing.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 scroll-container-auto"
            onScroll={updateScrollButtons}
          >
            {/* Duplicate testimonials for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[320px] border border-gray-200 rounded-2xl p-6 bg-light-gray"
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={getAvatarUrl(testimonial.name, index % testimonials.length)}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-base font-body truncate">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 font-body truncate">{testimonial.handle}</div>
                  </div>
                  {/* Company Logo */}
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-lg flex-shrink-0">
                    {testimonial.logo}
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                !canScrollLeft
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                !canScrollRight
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


