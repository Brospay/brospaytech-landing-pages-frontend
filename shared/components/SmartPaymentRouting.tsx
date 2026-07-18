'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Smart Payment Routing section component
 * Introduction to smart routing capabilities
 */
export function SmartPaymentRouting() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Smart Payment Routing
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              ValoraPay's smart routing engine maximises payment performance and enables the highest success rates by optimising all incoming and outgoing transactions in real-time. With this powerful tool on board, you can easily implement and alter various flow strategies.
            </p>
          </div>

          {/* Right Content - Visualization */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8">
              {/* Flow Diagram */}
              <div className="flex items-center justify-between">
                {/* Payment Input */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#4730B8] flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-body">Payment</span>
                </div>

                {/* Arrow */}
                <div className="flex-1 mx-4">
                  <div className="h-0.5 bg-gradient-to-r from-[#4730B8] to-[#4730B8]/30 relative">
                    <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M0 6H12M12 6L6 0M12 6L6 12" stroke="#4730B8" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>

                {/* Smart Router */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-sm text-white font-semibold font-body">Smart Router</span>
                </div>

                {/* Arrow */}
                <div className="flex-1 mx-4">
                  <div className="h-0.5 bg-gradient-to-r from-[#4730B8]/30 to-[#4730B8] relative">
                    <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M0 6H12M12 6L6 0M12 6L6 12" stroke="#4730B8" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>

                {/* Providers */}
                <div className="flex flex-col items-center">
                  <div className="space-y-2">
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                      <img src="/assets/landing_page/global_coverage/visa.svg" alt="Visa" className="w-8 h-4 object-contain" />
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                      <img src="/assets/landing_page/global_coverage/mastercard.svg" alt="Mastercard" className="w-8 h-4 object-contain" />
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                      <img src="/assets/landing_page/global_coverage/paypal.svg" alt="PayPal" className="w-8 h-4 object-contain" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-body">Providers</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4730B8] font-heading">99.9%</div>
                  <div className="text-xs text-gray-400 font-body">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 font-heading">&lt;100ms</div>
                  <div className="text-xs text-gray-400 font-body">Routing time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-heading">500+</div>
                  <div className="text-xs text-gray-400 font-body">Providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

