'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Financial Accounting section component
 * Shows 4 features with tooltips and currency visualization
 */
export function FinancialAccounting() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const features = [
    {
      title: 'Multicurrency virtual balances',
      description: 'Accept multiple currencies with auto-conversion in merchant account currency.',
    },
    {
      title: 'Dynamic currency conversion',
      description: 'Choose specific exchange rates to receive online payments and make payouts in different currencies.',
    },
    {
      title: 'Fees management',
      description: 'Generate interest and commission income through merchants by setting and offsetting fees and min/max amounts per each online payment method.',
    },
    {
      title: 'Rich financial tuning',
      description: 'Access turnover limits, rolling reserve, overdraft limit, manual deposits and withdrawals, and more accounting software features.',
    },
  ]

  const currencies = [
    { symbol: '$', label: 'USD', color: 'from-green-400 to-green-600' },
    { symbol: '€', label: 'EUR', color: 'from-blue-400 to-blue-600' },
    { symbol: '£', label: 'GBP', color: 'from-yellow-400 to-yellow-600' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Financial Accounting
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Segregate funds with virtual accounts per entity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 relative border border-gray-200"
                onMouseEnter={() => setActiveTooltip(feature.title)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="w-10 h-10 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-semibold font-body">{feature.title}</span>
                    <div className="relative">
                      <svg
                        className="w-4 h-4 text-[#4730B8] cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {activeTooltip === feature.title && (
                        <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white text-gray-900 rounded-lg shadow-lg">
                          <p className="text-sm font-body">{feature.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Currency Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Store Icons */}
              <div className="flex justify-center gap-6 mb-8">
                {currencies.map((currency, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-center">
                      <div className="text-xs text-gray-600 font-body">Payment amount</div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${currency.color} bg-clip-text text-transparent font-heading`}>
                        {currency.symbol} {currency.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

