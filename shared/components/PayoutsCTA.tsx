'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Payouts CTA section component
 * Call to action for booking a call
 */
export function PayoutsCTA() {
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
          <div className="p-8 lg:p-12 max-w-3xl w-full text-center">
            {/* Rocket Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-[10px] bg-[#4730B8] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white font-heading mb-4">
              Ready To Boost Your Business To The Next Level?
            </h2>

            {/* Description */}
            <p className="text-[18px] text-white/90 mb-8 leading-relaxed font-body">
              Get in touch with us and we will try to provide you with the most relevant offer.
            </p>

            {/* CTA Button */}
            <Link
              href="/contacts"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl tap-target font-body"
            >
              Book a call
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
    </section>
  )
}

