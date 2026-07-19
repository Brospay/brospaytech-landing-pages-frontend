'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Connect Payouts section component
 * Shows payment providers, methods, flows and currencies
 */
export function ConnectPayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const providers = [
    { name: 'Mastercard', logo: '/assets/landing_page/global_coverage/mastercard.svg' },
    { name: 'Visa', logo: '/assets/landing_page/global_coverage/visa.svg' },
    { name: 'Discover', logo: '/assets/landing_page/global_coverage/discover.svg' },
    { name: 'Stripe', logo: '/assets/landing_page/global_coverage/stripe.svg' },
    { name: 'Neteller', logo: '/assets/landing_page/global_coverage/neteller.svg' },
  ]

  const paymentDetails = [
    {
      title: 'Any payment provider',
      description: "Work with multiple international payout systems and acquirers available through BrosPay's Provider hub to positively affect your pricing and success rates.",
      items: ['Payment gateways', 'Payment aggregators', 'Payment facilitators', 'Credit card acquirers'],
    },
    {
      title: 'Any payout method',
      description: 'Issue all kinds of payouts through any payment instrument in a few clicks.',
      items: ['Credit cards', 'Bank transfers', 'Digital wallets', 'Cryptocurrencies', 'Mobile carriers', 'Utility bills', 'Local payment options'],
    },
    {
      title: 'Any payout flow',
      description: 'BrosPay delivers great flexibility that adapts to any payout method flow, ensuring the flawless customer experience.',
      flows: [
        { name: 'Instant', description: 'Issue single payouts within minutes.' },
        { name: 'Batch', description: 'Send global payouts to numerous recipients.' },
        { name: 'Bulk', description: 'Split the payout into multiple transactions.' },
        { name: 'OCT', description: 'Initiate global payouts by a token.' },
      ],
    },
    {
      title: 'Any fiat & crypto currency',
      description: 'BrosPay supports processing payouts in almost every currency, including major cryptocurrencies.',
      currencies: ['USD', 'EUR', 'GBP', 'BTC', 'LTC', '200+ currencies'],
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Connect Payouts
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              Have it all covered by connecting our global payout platform. We ensure you are provided with out-of-the-box access to any payout service provider you might think of.
            </p>
          </div>
        </div>

        {/* Provider Logos */}
        <div className="mb-12">
          <p className="text-gray-500 mb-6 font-body">
            Dozens of ready-to-use payment provider integrations.{' '}
            <Link href="/payment-providers" className="text-[#4730B8] font-semibold hover:underline">
              Explore all
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <img src={provider.logo} alt={provider.name} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
              onMouseEnter={() => setActiveTooltip(detail.title)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* Title with Info Icon */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 font-heading pr-2">
                  {detail.title}
                </h3>
                <div className="relative">
                  <svg
                    className="w-5 h-5 text-[#4730B8] cursor-pointer flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === detail.title && (
                    <div className="absolute right-0 top-6 z-50 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
                      <p className="text-sm font-body">{detail.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Items List */}
              {detail.items && (
                <ul className="space-y-2">
                  {detail.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 font-body">
                      <div className="w-1.5 h-1.5 rounded-[10px] bg-[#4730B8]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Flows List */}
              {detail.flows && (
                <ul className="space-y-3">
                  {detail.flows.map((flow, i) => (
                    <li key={i} className="group">
                      <div className="flex items-center gap-2 text-gray-900 font-semibold font-body">
                        <div className="w-1.5 h-1.5 rounded-[10px] bg-[#4730B8]"></div>
                        {flow.name}
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 ml-4 font-body">{flow.description}</p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Currencies List */}
              {detail.currencies && (
                <div className="flex flex-wrap gap-2">
                  {detail.currencies.map((currency, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-[10px] text-sm font-medium font-body ${
                        currency.includes('+')
                          ? 'bg-[#4730B8] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {currency}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

