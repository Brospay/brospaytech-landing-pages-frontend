'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Hero section component matching Figma design
 * Features:
 * - Dark blue to purple gradient background
 * - Large headline with white text
 * - Two CTA buttons (Download app, Learn More)
 * - Trust badges (Apple Pay, Google Pay, Visa, Mastercard)
 * - Card illustrations on the right
 * - Mobile-first responsive design
 * - Smooth fade-in animations
 */
export function Hero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  return (
    <section className="relative w-full overflow-hidden h-[800px] lg:h-[900px] flex items-center justify-center max-w-full">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm font-body">
                Rated 4.9/5 from over 600 reviews
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.4] mb-6 font-heading">
              Top-Notch Payment Orchestration Platform
            </h1>

            {/* Subheading */}
            <p className="text-[18px] text-gray-300 mb-8 max-w-xl leading-relaxed font-body">
              BrosPay serves as a comprehensive payment orchestration solution designed for digital enterprises and financial service providers. Our platform seamlessly connects payment processors and banking partners across the globe, delivering an integrated ecosystem for streamlined payment operations, enhanced visibility, and centralized administration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href="/contacts"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Book a call
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="/docs"
                className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-[10px] border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-colors tap-target font-body"
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mb-8">
              <img
                src="/assets/landing_page/hero/users_img.png"
                alt="Trusted by users"
                className="h-auto w-auto max-w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full h-[900px] lg:h-[1000px] flex items-center justify-center">
              <img
                src="/assets/landing_page/hero/hero_right.png"
                alt="BrosPay smart payment cards with contactless payment technology, showing reward card with EMV chip and card number"
                className="w-full h-full object-contain scale-125"
                loading="eager"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

