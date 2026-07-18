'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Payments CTA section component
 * Features ROI calculator CTA with dice emoji
 */
export function PaymentsCTA() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Image - Same as GlobalAccess */}
      <div 
        className="absolute inset-0 global-access-bg"
        style={{ 
          willChange: 'auto', 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* CTA Card - No background */}
          <div className="p-8 lg:p-12 max-w-3xl w-full">
            <div className="text-center">
              {/* Headline with Dice */}
              <div className="mb-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white font-heading">
                  <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                    <span className="whitespace-nowrap">Stop playing the guessing game</span>
 
                  </span>
                </h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white font-heading mt-2">
                  Know your ROI for sure
                </h3>
              </div>

              {/* Descriptive Text */}
              <p className="text-[18px] text-white/90 mb-8 leading-relaxed font-body">
                See the potential value our platform can bring to your business.
              </p>

              {/* CTA Button */}
              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl tap-target font-body"
              >
                Calculate now
                <svg
                  className="w-5 h-5"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

