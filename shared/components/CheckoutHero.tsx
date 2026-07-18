'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Checkout Hero section component
 * Features online checkout introduction with phone mockup
 */
export function CheckoutHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              Everything you need to accept online payments
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              Online Checkout is a universal ready-made solution, designed with the consumer in mind. It drives your sales and lets you receive payments securely at lightning speed. Collecting payments online has never been easier.
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
              <a
                href="/docs"
                className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-[10px] border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-colors tap-target font-body"
              >
                Try the checkout editor
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-white rounded-[40px] p-3 shadow-2xl w-[300px]">
                <div className="bg-gray-100 rounded-[32px] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-4">
                    {/* Processing Animation */}
                    <div className="text-center py-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4730B8] animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-body">Processing your payment...</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Success State */}
                    <div className="text-center py-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-[10px] bg-green-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 font-body mb-1">Transaction completed</p>
                      <h3 className="text-lg font-bold text-gray-900 font-heading mb-1">Your ticket is</h3>
                      <h3 className="text-lg font-bold text-gray-900 font-heading">successfully purchased!</h3>
                      <p className="text-xs text-gray-500 mt-3 font-body">Check your email. We've sent you the ticket and transaction details.</p>
                      <button className="mt-4 px-6 py-2 bg-[#4730B8] text-white text-sm font-semibold rounded-[10px] font-body">
                        Okay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-8 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[10px] bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 font-body">Secure</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 font-body">Lightning fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

