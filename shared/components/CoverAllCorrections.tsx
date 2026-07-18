'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Cover-All Corrections section component
 * Shows 4 correction features with visualization
 */
export function CoverAllCorrections() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Automatic corrections',
      description: 'We automatically update payment data according to the latest information provided by PSPs and banks.',
    },
    {
      title: 'Manual corrections',
      description: 'Use manual corrections for handling collisions and exceptions. You can update the transaction status manually when needed.',
    },
    {
      title: 'Collisions monitoring & alerting',
      description: 'Our payment reconciliation system detects and promptly notifies you when transaction data from the provider and payment details inserted into ValoraPay do not match.',
    },
    {
      title: 'Route fee auto-correction',
      description: 'Based on payment reconciliation protocol, we calculate fees for different transaction routes, helping you to optimise and save costs.',
    },
  ]

  const matchingStatements = [
    { provider: 'Skrill', amount: '$1,000.00' },
    { provider: 'Stripe', amount: '$320.50' },
    { provider: 'Apple Pay', amount: '$249.99' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Cover-all corrections
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay is a ready-made payments reconciliation tool that takes the hassle out of routine reconciliations while equipping you with everything needed to handle edge cases and protect financial health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 font-body">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Matching Visualization */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              {/* ValoraPay's statement */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-4 font-body">ValoraPay's statement</h4>
                <div className="space-y-3">
                  {matchingStatements.map((item, index) => (
                    <div key={index} className="bg-[#E8E4FF] rounded-lg p-3">
                      <span className="text-lg font-bold text-[#4730B8] font-heading">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Provider's statement */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-4 font-body">Provider's statement</h4>
                <div className="space-y-3">
                  {matchingStatements.map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">{item.provider[0]}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-700 font-heading">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Match indicator */}
            <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold font-body">All statements matched</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

