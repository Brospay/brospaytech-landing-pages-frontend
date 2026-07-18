'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Cascading Section component
 * Explains cascading with visualization
 */
export function CascadingSection() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-gray-900 mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Payment Cascading
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
              Another important feature in the payment infrastructure is payment cascading. In a complex multiple provider setup, this technical solution instantly and automatically forwards the online transaction to a different PSP in case of failure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              For example, imagine the first PSP that the transaction goes to according to your routing scheme declines the payment for some reason, be it risk assessment, authorisation error, provider's downtime or anything else. With cascading payments, the failed transaction will be routed to a different PSP for a retry. It allows merchants to increase the acceptance rate and improve customer experience, thanks to everything happening seamlessly for the buyer.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#4730B8] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold font-body">These technologies usually come tied in</span>
            </div>
          </div>

          {/* Right Content - Cascading Visualization */}
          <div className="relative">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
              {/* Transaction Flow */}
              <div className="space-y-5">
                {/* Original Transaction */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-[#bc9bea] to-[#bc9bea] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold font-body">Transaction Request</div>
                    <div className="text-sm text-gray-300 font-body">$150.00 USD</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* First Attempt - Failed */}
                <div className="flex items-center gap-4 bg-red-900/40 rounded-lg p-4 border border-red-500/20">
                  <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-[#bc9bea] to-[#bc9bea] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm font-body">Provider 1</div>
                    <div className="text-xs text-red-300 font-body">Declined - Risk Assessment</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                {/* Cascading Arrow */}
                <div className="flex items-center gap-2 justify-center py-1">
                  <div className="h-0.5 w-12 bg-[#bc9bea]"></div>
                  <svg className="w-5 h-5 text-[#bc9bea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-xs text-[#bc9bea] font-bold font-body">CASCADE</span>
                  <svg className="w-5 h-5 text-[#bc9bea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="h-0.5 w-12 bg-[#bc9bea]"></div>
                </div>

                {/* Second Attempt - Failed */}
                <div className="flex items-center gap-4 bg-red-900/40 rounded-lg p-4 border border-red-500/20">
                  <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-[#bc9bea] to-[#bc9bea] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm font-body">Provider 2</div>
                    <div className="text-xs text-red-300 font-body">Declined - Timeout</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                {/* Cascading Arrow */}
                <div className="flex items-center gap-2 justify-center py-1">
                  <div className="h-0.5 w-12 bg-[#bc9bea]"></div>
                  <svg className="w-5 h-5 text-[#bc9bea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-xs text-[#bc9bea] font-bold font-body">CASCADE</span>
                  <svg className="w-5 h-5 text-[#bc9bea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="h-0.5 w-12 bg-[#bc9bea]"></div>
                </div>

                {/* Third Attempt - Success */}
                <div className="flex items-center gap-4 bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-[#bc9bea] to-[#bc9bea] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm font-body">Provider 3</div>
                    <div className="text-xs text-green-300 font-body">Approved</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 pt-6 border-t border-gray-600/50 text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/30 text-green-300 px-5 py-2.5 rounded-[10px] border border-green-500/30 shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold font-body">Transaction Saved!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

