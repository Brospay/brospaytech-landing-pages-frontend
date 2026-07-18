'use client'

import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Hero section component
 * Features hero image for white label payment provider solution
 */
export function WhiteLabelHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })


  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <span className="px-6 py-2 bg-[#4730B8] text-white rounded-[10px] text-sm font-semibold font-body">
                Provider
              </span>
              <Link
                href="/white-label-gateway"
                className="px-6 py-2 bg-white/10 text-white/70 rounded-[10px] text-sm font-body hover:bg-white/20 transition-colors cursor-pointer"
              >
                Gateway
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Build Your Own Payment Brand With White Label Payment Service Provider
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              Use our white label PSP solution to launch and scale your payment offering faster — without the heavy cost or development time. You bring your network; we provide the technology.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
              <img
                src="/assets/white-label_page/hero-right.png"
                alt="White label payment provider solution"
                className="w-full h-full object-contain"
                loading="eager"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

