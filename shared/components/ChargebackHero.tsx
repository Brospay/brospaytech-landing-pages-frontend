'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Chargeback Hero section component
 * Features chargeback management introduction
 */
export function ChargebackHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Minimise your chargeback ratio and cut costs
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              BrosPay's chargeback management service decreases the chargeback ratio, safeguarding your revenue and clearing the way for your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#get-started"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Get started
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

          {/* Right Content - Chargeback Management Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Chargeback Dashboard Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white font-heading">Chargeback Management</h3>
                  <div className="w-8 h-8 rounded-lg bg-[#4730B8] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white mb-1 font-heading">2.1%</div>
                    <div className="text-xs text-white/70 font-body">Chargeback Ratio</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400 mb-1 font-heading">-45%</div>
                    <div className="text-xs text-white/70 font-body">Reduction</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="space-y-2">
                  <div className="flex items-end gap-1 h-16">
                    {[60, 55, 50, 45, 40, 35, 30, 25].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-[#4730B8] to-[#6B4DE6] rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-white/60 font-body text-center">Last 8 months</div>
                </div>
              </div>

              {/* Success Indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-8 h-8 rounded-[10px] bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm font-heading">Revenue Protected</h3>
                    <p className="text-white/70 text-xs font-body">Safeguarding your bottom line</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-8 h-8 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm font-heading">Account Protection</h3>
                    <p className="text-white/70 text-xs font-body">Stay below critical thresholds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

