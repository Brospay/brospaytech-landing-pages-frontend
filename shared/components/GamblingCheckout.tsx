'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingCheckout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Player-Centric Checkout Experience
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed font-body">
              Player acquisition has always been a top priority for gambling companies. Our Checkout is designed to provide a seamless and intuitive process that enhances the overall player experience and builds player trust.
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed font-body">
              Integrate one of the most advanced payment pages from trusted gambling payment processor without writing a single line of code.
            </p>
            <a
              href="/checkout"
              className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#5a42c9] transition-colors font-body"
            >
              Try the checkout editor
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right Side - Mobile UI Demonstration */}
          <div className="relative">
            {/* User Profile Card */}
            <div className="absolute -left-8 top-8 bg-gray-800 rounded-lg p-4 w-48 z-20 shadow-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-body">SR</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm font-body">Simon Riley</p>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-500 text-xs font-body">Verified user</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-xs mb-2 font-body">Account Balance:</p>
              <p className="text-white font-bold text-lg font-body">$1,250</p>
              <button className="mt-2 text-white/60 text-xs flex items-center gap-1 font-body">
                View details
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Main Mobile Checkout Screen */}
            <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border-4 border-gray-800 w-72 mx-auto">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl"></div>
              
              {/* Top Bar */}
              <div className="mt-8 flex items-center justify-between mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <h3 className="text-sm font-bold text-gray-900 font-body">CHECKOUT</h3>
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Navigation Icons */}
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      i === 1 ? 'bg-[#4730B8]' : 'bg-gray-200'
                    }`}
                  >
                    {i === 1 ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Transaction List */}
              <div className="space-y-2 mb-4">
                {[
                  { name: '777-spin.com', amount: '1400.20' },
                  { name: 'spin7machine.com', amount: '100.50' },
                  { name: 'cherry.bingo', amount: '10.99' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 font-body">{item.name}</p>
                      <p className="text-xs text-gray-600 font-body">{item.amount}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <span className="text-sm font-bold text-gray-900 font-body">Total</span>
                <span className="text-sm font-bold text-gray-900 font-body">1511.69</span>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 mb-4">
                {[
                  'Accept our Service Terms and Privacy Notice.',
                  'Confirm processing of personal data.',
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border-2 border-[#4730B8] bg-[#4730B8] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 font-body">{text}</p>
                  </div>
                ))}
              </div>

              {/* Confirm Button */}
              <button className="w-full bg-[#4730B8] text-white py-3 rounded-lg font-semibold hover:bg-[#5a42c9] transition-colors font-body">
                Confirm
              </button>
            </div>

            {/* Add New Payment Card */}
            <div className="absolute -left-12 bottom-8 bg-gray-100 rounded-lg p-4 w-56 z-10 shadow-xl border border-gray-300">
              <p className="text-sm font-semibold text-gray-900 mb-1 font-body">Add new payment</p>
              <p className="text-xs text-gray-600 mb-3 font-body">Select payment method</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 ml-1"></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 font-body">Mastercard</span>
              </div>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-xs font-semibold font-body">
                Continue
              </button>
            </div>

            {/* Payment Successful Notification */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-lg p-4 w-56 z-20 shadow-xl border border-gray-300">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-2 text-center font-body">
                Your payment has been processed successfully
              </p>
              <p className="text-xs text-gray-600 text-center font-body">PAYMENT ID: 1874715</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

