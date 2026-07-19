'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Analytics Hero section component
 * Features Collect/Normalise/Analyse visualization
 */
export function AnalyticsHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  const paymentMethods = [
    { name: 'Bitcoin', icon: '₿' },
    { name: 'Alipay', icon: 'A' },
    { name: 'SEPA', icon: 'S' },
    { name: 'Mastercard', icon: 'M' },
    { name: 'WeChat', icon: 'W' },
    { name: 'Giropay', icon: 'G' },
    { name: 'Skrill', icon: 'S' },
    { name: 'Apple Pay', icon: '' },
    { name: 'Amex', icon: 'A' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Payment Analytics Solution
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              BrosPay's payment analytics system gathers all your data under one roof and makes it much easier to monitor, examine, and analyse.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
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
            </div>
          </div>

          {/* Right Content - Data Flow Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto space-y-6">
              {/* Collect */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-3 font-heading">Collect</h3>
                <p className="text-xs text-white/70 mb-3 font-body">Automated aggregation of all your business data</p>
                <div className="grid grid-cols-5 gap-2">
                  {paymentMethods.slice(0, 10).map((method, index) => (
                    <div key={index} className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">{method.icon || method.name[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Normalise */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-3 font-heading">Normalise</h3>
                <p className="text-xs text-white/70 mb-3 font-body">Obtain coherent information instead of elaborate datasets</p>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-white/30 rounded-[10px] w-full"></div>
                    <div className="h-2 bg-white/30 rounded-[10px] w-3/4"></div>
                    <div className="h-2 bg-white/30 rounded-[10px] w-5/6"></div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Analyse */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-3 font-heading">Analyse</h3>
                <p className="text-xs text-white/70 mb-3 font-body">Auto-generated reports and visual insights</p>
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 45, 80, 55, 70, 50, 90, 65, 75].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-[#4730B8] to-[#6B4DE6] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
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

