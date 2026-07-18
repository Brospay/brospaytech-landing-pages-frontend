'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Merchant Management Hero section component
 * Features CRM for payments introduction with storefronts visualization
 */
export function MerchantHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              CRM For Payments: Your Payment Management Software
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              Running a diverse online business with plenty of offerings or multiple storefronts, you can design a tailored transaction process for all sub-entities and manage them independently from a single access point.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contacts"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Request a demo
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
                Download presentation
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
              <img
                src="/assets/merchant-management_page/hero_right.png"
                alt="ValoraPay merchant management solutions"
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

