'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Payment Flows section component
 * Shows different payment flow options
 */
export function PaymentFlows() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const flows = [
    {
      title: 'One-click and instant payments',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Arbitrary amount',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Delayed charge and capture',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Tokenisation and card verification',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '3DS/non-3DS, CVV/non-CVV',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const cards = [
    { number: '5500 **** **** 1124', type: 'mastercard', color: 'bg-orange-500' },
    { number: '4111 **** **** 3285', type: 'visa', color: 'bg-blue-600' },
    { number: '5500 **** **** 8223', type: 'mastercard', color: 'bg-orange-500' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Any payment flow
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay delivers great flexibility that adapts to any payment flow and fits any business model.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Payment UI Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Payment Method Icons */}
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/landing_page/global_coverage/mastercard.svg" alt="Mastercard" className="w-10 h-6 object-contain" />
                <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">G Pay</span>
                </div>
                <img src="/assets/landing_page/global_coverage/apple.svg" alt="Apple Pay" className="w-10 h-6 object-contain" />
              </div>

              {/* Payment Amount */}
              <div className="mb-6">
                <label className="text-sm text-gray-500 font-body mb-2 block">Payment amount</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="250,00"
                    readOnly
                    className="flex-1 text-2xl font-bold text-gray-900 bg-transparent border-b-2 border-gray-200 focus:outline-none font-heading"
                  />
                  <div className="flex gap-1">
                    {['£', '$', '€'].map((currency, i) => (
                      <button
                        key={i}
                        className={`w-8 h-8 rounded-full text-sm font-bold ${i === 1 ? 'bg-[#4730B8] text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Saved Cards */}
              <div className="mb-6">
                <label className="text-sm text-gray-500 font-body mb-3 block">Choose payment method</label>
                <div className="space-y-2">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 ${index === 0 ? 'border-[#4730B8] bg-[#4730B8]/5' : 'border-gray-200'}`}
                    >
                      <div className={`w-8 h-5 rounded ${card.color}`}></div>
                      <span className="text-sm font-mono text-gray-700">{card.number}</span>
                      {index === 0 && (
                        <svg className="w-5 h-5 text-[#4730B8] ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pay Button */}
              <button className="w-full py-4 bg-[#4730B8] text-white font-semibold rounded-xl hover:bg-[#3a26a0] transition-colors font-body">
                Pay $250.00
              </button>
            </div>
          </div>

          {/* Right Column - Flow Features */}
          <div className="space-y-4">
            {flows.map((flow, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {flow.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-heading">
                  {flow.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

