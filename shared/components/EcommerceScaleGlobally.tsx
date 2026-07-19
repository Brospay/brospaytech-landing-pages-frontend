'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Scale Globally section component
 * Shows global payment capabilities
 */
export function EcommerceScaleGlobally() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const payments = [
    { amount: '$380.00', status: 'New Received' },
    { amount: '$210.50', status: 'New Received' },
    { amount: '$50.99', status: 'New Received' },
    { amount: '$128.00', status: 'New Received' },
    { amount: '$240.20', status: 'New Received' },
    { amount: '$75.55', status: 'New Received' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section - Scale Globally */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Scale Your Business Globally
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
              Bringing preferred payment methods to your customers worldwide is as easy as clicking a mouse.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold font-heading">New integrations with payment providers go live every day</p>
                  <p className="text-gray-600 text-sm font-body">making BrosPay the fastest-growing payment orchestration platform ever</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold font-heading">500+ ready-made integrations</p>
                  <p className="text-gray-600 text-sm font-body">with global and local payment providers and acquirers are already available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold font-heading">Direct integrations with Apple Pay and Google Pay</p>
                  <p className="text-gray-600 text-sm font-body">allow you to increase your independence and benefit from more routing opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Payment Cards */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[20px] p-6 lg:p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading">Current payments</h3>
                  <p className="text-xs text-gray-500 font-body">Live transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-gray-500 font-body">Active</span>
              </div>
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
              {payments.map((payment, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-[#4730B8]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-100 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 font-heading group-hover:text-[#4730B8] transition-colors">
                        {payment.amount}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-600 font-body">{payment.status}</p>
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold font-body">
                          Success
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-body">Total today</p>
                  <p className="text-xl font-bold text-gray-900 font-heading">$1,085.24</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-body">Transactions</p>
                  <p className="text-xl font-bold text-[#4730B8] font-heading">{payments.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Checkout Experience */}
        <div className="bg-gray-900 rounded-[20px] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Checkout Form */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-2xl order-2 lg:order-1">
              <div className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 font-body">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      value="example@mail.com"
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 font-body">Card information</label>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value="|||| |||| |||| ||||"
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-mono font-body"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 font-body">VISA</span>
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value="04/28"
                      readOnly
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      readOnly
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body"
                    />
                  </div>
                </div>

                {/* Name on Card */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 font-body">Name on card</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="J. GRIFFINS"
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Country or region */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 font-body">Country or region</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="United Kingdom"
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body pr-10"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Postcode/ZIP */}
                <div>
                  <input
                    type="text"
                    value="WC2N 5DU"
                    readOnly
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-body"
                  />
                </div>

                {/* Pay Button */}
                <button className="w-full py-4 bg-[#4730B8] text-white text-base font-semibold rounded-lg hover:bg-[#3a2699] transition-colors font-body">
                  Pay $155.99
                </button>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="text-white order-1 lg:order-2">
              <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Ensure a Refined Checkout Experience
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-body">
                Customise the look and feel of the checkout to provide your customers with a pleasant shopping experience tailored to your brand.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg font-heading">Personalise the checkout process</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg font-heading">Maximise conversion rates</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg font-heading">Increase customer loyalty and retention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-bold text-[#4730B8] font-heading">[</span>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading">
                Provide your customers with the checkout based on the industry's best practices
              </p>
              <span className="text-6xl font-bold text-[#4730B8] font-heading">]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

