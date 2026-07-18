'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Currency Benefits section component
 * Shows benefits for business and customers
 */
export function CurrencyBenefits() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const businessBenefits = [
    {
      title: 'Boost your income',
      description: 'Generate additional revenue from conversion fees.',
    },
    {
      title: 'Reduce the risk of currency fluctuations',
      description: 'Establish the exchange rate at the point of sale and eliminate possible losses incurred by international transactions.',
    },
    {
      title: 'Mitigate the cost of acceptance',
      description: 'Offset the fees for accepting foreign credit cards.',
    },
    {
      title: 'Increase customer satisfaction and loyalty',
      description: 'Remove uncertainty and make purchasing more convenient, supporting multi-currency payments.',
    },
    {
      title: 'Attract new customers and win business over competitors',
      description: 'Accept payments from international customers in their preferred currency and let your business expand.',
    },
  ]

  const customerBenefits = [
    {
      title: 'Purchase conveniently',
      description: 'Pay in the currency of your choice without hidden charges or fees.',
    },
    {
      title: 'Add transparency and control',
      description: 'Get detailed information on each transaction, matching cardholder statement, currencies quote on the receipt, and the exchange rate applied to the transaction.',
    },
    {
      title: 'See the current exchange rates',
      description: 'Receive the up-to-date exchange rates.',
    },
    {
      title: 'Improve your shopping experience',
      description: 'Make educated, informed, and confident purchasing decisions.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits for Business */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#E8E4FF] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading">Benefits for business:</h2>
            </div>
            <div className="space-y-4">
              {businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 relative"
                  onMouseEnter={() => setActiveTooltip(`business-${index}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-medium font-body">{benefit.title}</span>
                      <div className="relative">
                        <svg
                          className="w-4 h-4 text-[#4730B8] cursor-pointer"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {activeTooltip === `business-${index}` && (
                          <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
                            <p className="text-sm font-body">{benefit.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits for Customers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#E8E4FF] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading">Benefits for customers:</h2>
            </div>
            <div className="space-y-4">
              {customerBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 relative"
                  onMouseEnter={() => setActiveTooltip(`customer-${index}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-medium font-body">{benefit.title}</span>
                      <div className="relative">
                        <svg
                          className="w-4 h-4 text-[#4730B8] cursor-pointer"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {activeTooltip === `customer-${index}` && (
                          <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
                            <p className="text-sm font-body">{benefit.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

