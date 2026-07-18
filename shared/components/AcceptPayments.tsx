'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Accept Payments section component
 * Features automatic and manual payment acceptance options with mobile mockup
 */
export function AcceptPayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const automaticPayments = [
    {
      title: 'Checkout',
      description: 'Collect online payments with the refined solution by adding just a few lines of code to your website',
      hasArrow: true,
      features: [
        'Better conversion rate than ever',
        'Flaunt your brand with custom UI',
        'Simple integration with minimal coding',
        'Personalised payment experience for every user',
      ],
    },
    {
      title: 'Recurring payments',
      description: 'Handle and control recurring online payments with ease, benefiting from the agile billing system',
      highlightText: 'recurring online payments',
    },
    {
      title: 'Subscriptions',
      description: 'Fully automate and enhance payment workflow for your subscription-based business',
      soon: true,
    },
  ]

  const manualPayments = [
    {
      title: 'Invoicing',
      description: 'Receive online payments by issuing and sending invoices to your customers',
    },
    {
      title: 'Payment dashboard',
      description: 'Fill in a short form on the Dashboard and start accepting payments on your website',
      hasArrow: true,
    },
    {
      title: 'Payment links',
      description: 'Get paid instantly by sharing a payment link via a preferred channel',
      soon: true,
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Accept Payments
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay provides you with a range of options for accepting online payments both automatically and manually.
          </p>
        </div>

        {/* Two Column Layout - Automatic and Manual Payments */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Automatic Payments */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold rounded font-body">
                AUTOMATIC PAYMENTS
              </span>
            </div>
            <div className="space-y-8">
              {automaticPayments.map((payment, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className={`text-xl font-bold font-heading ${payment.hasArrow ? 'text-[#4730B8]' : 'text-gray-900'}`}>
                      {payment.title}
                    </h4>
                    {payment.hasArrow && (
                      <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                    {payment.soon && (
                      <span className="px-2 py-0.5 bg-yellow-400 text-black text-xs font-semibold rounded font-body">
                        SOON
                      </span>
                    )}
                  </div>
                  <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                    {payment.highlightText ? (
                      <>
                        {payment.description.split(payment.highlightText)[0]}
                        <span className="text-[#4730B8] font-semibold">{payment.highlightText}</span>
                        {payment.description.split(payment.highlightText)[1]}
                      </>
                    ) : (
                      payment.description
                    )}
                  </p>
                  {payment.features && (
                    <ul className="space-y-2 mt-4">
                      {payment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[18px] text-gray-700 font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Manual Payments */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold rounded font-body">
                MANUAL PAYMENTS
              </span>
            </div>
            <div className="space-y-8">
              {manualPayments.map((payment, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className={`text-xl font-bold font-heading ${payment.hasArrow ? 'text-[#4730B8]' : 'text-gray-900'}`}>
                      {payment.title}
                    </h4>
                    {payment.hasArrow && (
                      <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                    {payment.soon && (
                      <span className="px-2 py-0.5 bg-yellow-400 text-black text-xs font-semibold rounded font-body">
                        SOON
                      </span>
                    )}
                  </div>
                  <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                    {payment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

