'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Currency Conversion Hero section component
 * Features dynamic currency conversion introduction
 */
export function CurrencyHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Dynamic Currency Conversion
            </h1>
            <p className="text-[18px] text-white/90 mb-4 max-w-xl leading-relaxed font-body text-left">
              Different payment options attract customers from abroad, and it is the surefire way to scale your business faster.
            </p>
            <p className="text-white/80 mb-8 max-w-xl leading-relaxed font-body text-left">
              Enable your international customers to view prices and pay online in their preferred currency and settle your balance in the currency of your choice. The exchange rates feature allows you to send payments and make refunds in another currency even if you don't maintain a balance in that currency.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#get-started"
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
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full h-[400px] lg:h-[450px] flex items-center justify-center">
              <img
                src="/assets/currency-conversion_page/hero-right.png"
                alt="BrosPay currency conversion solutions"
                className="w-full h-full object-contain max-w-md"
                loading="eager"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

