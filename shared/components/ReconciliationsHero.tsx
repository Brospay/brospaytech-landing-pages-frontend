'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Reconciliations Hero section component
 * Features statement matching visualization
 */
export function ReconciliationsHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  const statements = [
    { provider: 'Skrill', amount: '$1,000.00', status: 'Matching' },
    { provider: 'Stripe', amount: '$320.50', status: 'Matching' },
    { provider: 'Visa', amount: '$2,200.00', status: 'Matching' },
    { provider: 'Neteller', amount: '$580.80', status: 'Matching' },
    { provider: 'Apple Pay', amount: '$249.99', status: 'Matching' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Accurate & fast payment reconciliation software
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              BrosPay's Reconciliations is a fully-equipped accounting software for any online business, aimed at organising and unifying all the transaction data.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#get-started"
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
            </div>
          </div>

          {/* Right Content - Statement Matching Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Reconciliation Table */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-xs text-white/60 font-body">
                  <div>BrosPay's statement</div>
                  <div>Provider's statement</div>
                  <div>Status</div>
                </div>

                {/* Rows */}
                <div className="space-y-2">
                  {statements.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 items-center bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-700">{item.provider[0]}</span>
                        </div>
                        <span className="text-sm text-white font-semibold font-body">{item.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-600 flex items-center justify-center animate-pulse">
                          <div className="w-3 h-3 border-2 border-white/50 border-t-transparent rounded-[10px] animate-spin"></div>
                        </div>
                        <span className="text-sm text-white font-semibold font-body">{item.amount}</span>
                      </div>
                      <div>
                        <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-[10px] font-body">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

