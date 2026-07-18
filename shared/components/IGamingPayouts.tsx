'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function IGamingPayouts() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    'Instant payouts to cards, e-wallets, and bank accounts.',
    'Automated dynamic currency conversion for added efficiency.',
    'Staged payouts that are initiated automatically and approved manually.',
    'Bulk processing for convenient affiliate payouts.',
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Quick Payouts and Convenient Withdrawals of Winnings
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
              Ensure high customer satisfaction and boost retention. Disburse winnings quickly and through multiple channels.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Flowchart */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-gray-200 shadow-sm">
                {/* Top Box - Main Amount */}
                <div className="relative bg-gray-50 rounded-lg p-4 mb-4 border border-gray-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Mastercard Logo */}
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-orange-500 ml-1"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-900 text-2xl font-bold font-heading">635,000 USD</p>
                      </div>
                    </div>
                    {/* Checkmark */}
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Arrows from top box */}
                <div className="flex justify-center mb-2">
                  <svg className="w-6 h-6 text-[#4730B8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z"/>
                  </svg>
                </div>

                {/* Three Sub-total Boxes */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { amount: '158,750', arrowColor: '#9333ea' },
                    { amount: '209,550', arrowColor: '#10b981' },
                    { amount: '266,700', arrowColor: '#3b82f6' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-300">
                        <div className="flex items-center justify-between">
                          <p className="text-gray-900 text-sm font-bold font-heading">{item.amount}</p>
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Arrows from sub-total */}
                      <div className="flex justify-center mt-2">
                        <svg className="w-4 h-4" style={{ color: item.arrowColor }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment Method Logos */}
                <div className="grid grid-cols-2 gap-3">
                  {/* From first box (158,750) */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">MC</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SK</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* From second box (209,550) */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-blue-700 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AD</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SE</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* From third box (266,700) */}
                  <div className="space-y-2 col-span-2">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VI</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-300">
                      <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SP</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center ml-auto">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
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

