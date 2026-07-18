'use client'

import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Gateway Hero section component
 * Features white label payment gateway introduction
 */
export function WhiteLabelGatewayHero() {
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
              <Link
                href="/white-label"
                className="px-6 py-2 bg-white/10 text-white/70 rounded-[10px] text-sm font-body hover:bg-white/20 transition-colors cursor-pointer"
              >
                Provider
              </Link>
              <span className="px-6 py-2 bg-[#4730B8] text-white rounded-[10px] text-sm font-semibold font-body">
                Gateway
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Expand your offering with a white label payment gateway
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              White label payment gateway opens the door for any business to step into the world of payments. Expand your offering, create a new revenue stream, and strengthen customer loyalty — all with a scalable, ready-made gateway that our experts continuously enhance and support for you.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#book-call"
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

          {/* Right Content - Gateway Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gateway Hub Visualization */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">Payment Gateway</h3>
                  <p className="text-sm text-white/80 font-body">Ready-made solution</p>
                </div>
                
                {/* Payment Methods Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {['Visa', 'MC', 'PP', 'AP', 'GP', 'SK', 'AL', 'SE'].map((method, index) => (
                    <div key={index} className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white font-body">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-8 h-8 rounded-[10px] bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm font-heading">Fast Integration</h3>
                    <p className="text-white/70 text-xs font-body">Get started in days, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-8 h-8 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm font-heading">Cost Efficient</h3>
                    <p className="text-white/70 text-xs font-body">Lower costs than building from scratch</p>
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

