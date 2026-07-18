'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Accurate Real-Time Balance section component
 * Shows balance table and features
 */
export function AccurateRealTimeBalance() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const merchantAccounts = [
    { provider: 'Stripe', name: 'Merchant account 1', balance: '2,450.00 $' },
    { provider: 'Skrill', name: 'Merchant account 2', balance: '300.00 $' },
    { provider: 'PayPal', name: 'Merchant account 3', balance: '22,000.00 $' },
    { provider: 'Neteller', name: 'Merchant account 4', balance: '1,286.00 $' },
    { provider: 'Giropay', name: 'Merchant account 5', balance: '13,760.00 $' },
  ]

  const features = [
    {
      title: 'Auto-update',
      description: 'ValoraPay is constantly synchronising and updating balances across multiple providers, accounts and methods.',
    },
    {
      title: 'Manual update',
      description: 'You can always request a balance update manually to ensure you have the latest data available.',
    },
    {
      title: 'Balance history',
      description: 'Monitor and track how your balances change over time with a detailed balance and transactions history.',
    },
    {
      title: 'Balance-based routing',
      description: 'Benefit from risk diversification by distributing cash flows evenly across your merchant accounts.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Accurate real-time balance
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            No matter how many merchant accounts across various PSPs you have, ValoraPay is a <strong>one-stop platform</strong> that ensures your records are accurate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Balance Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-500 font-body">Provider</span>
              <span className="text-sm font-semibold text-gray-500 font-body">Name</span>
              <span className="text-sm font-semibold text-gray-500 text-right font-body">Balance</span>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {merchantAccounts.map((account, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-500">{account.provider[0]}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 font-body flex items-center">{account.name}</span>
                  <span className="text-sm font-semibold text-gray-900 text-right font-body flex items-center justify-end">{account.balance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features */}
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
        </div>
      </div>
    </section>
  )
}

