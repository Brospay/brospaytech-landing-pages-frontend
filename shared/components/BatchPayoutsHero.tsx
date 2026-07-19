'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Batch Payouts Hero section component
 * Features animated file upload and payment cards
 */
export function BatchPayoutsHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  const payments = [
    { card: '5500 **** **** 1124', name: 'Martina Tomas', amount: '1,350.50$', status: 'Success' },
    { card: '4653 **** **** 7809', name: 'Alexander Voltman', amount: '625.00£', status: 'Success' },
    { card: '2014 **** **** 3622', name: 'Todd Griffin', amount: '439.99€', status: 'Failed' },
    { card: '8421 **** **** 0599', name: 'Umer Diaz', amount: '2,650.00€', status: 'Success' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Fully Automated and Versatile Batch Payouts
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              With BrosPay you are just one click away from performing Batch payouts to thousands of recipients using multiple methods and currencies simultaneously.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contacts"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Get in touch
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

          {/* Right Content - Payment Cards */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* File Upload Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-[#4730B8] to-[#5a42c8] px-6 py-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/90 font-semibold font-body">Batch Payouts</p>
                        <p className="text-xs text-white/70 font-body">4 recipients</p>
                      </div>
                    </div>
                    <button className="px-5 py-2.5 bg-white text-[#4730B8] text-sm font-semibold rounded-[10px] hover:bg-gray-50 transition-colors shadow-lg font-body">
                      Send payments
                    </button>
                  </div>
                </div>

                {/* Payment List */}
                <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                  {payments.map((payment, index) => (
                    <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Card Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4730B8]/10 to-[#4730B8]/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-mono text-gray-700 font-medium">{payment.card}</span>
                          </div>
                          <span className="text-sm text-gray-900 font-semibold font-body block truncate">{payment.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span className="text-base font-bold text-gray-900 font-body">{payment.amount}</span>
                        <span className={`text-xs px-3 py-1.5 rounded-[10px] font-semibold font-body whitespace-nowrap ${
                          payment.status === 'Success' 
                            ? 'bg-green-50 text-green-700 border border-green-200' 
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
                  <button className="text-[#4730B8] text-sm font-semibold flex items-center gap-2 hover:text-[#3a26a0] transition-colors font-body group">
                    <div className="w-8 h-8 bg-[#4730B8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4730B8]/20 transition-colors">
                      <svg className="w-4 h-4 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    Add payout
                  </button>
                </div>
              </div>

              {/* Floating Badge with animation */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#4730B8] to-[#5a42c8] rounded-xl p-4 shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/80 font-body">Status</p>
                    <p className="text-sm font-bold text-white font-body">Completed!</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4730B8]/5 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4730B8]/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

