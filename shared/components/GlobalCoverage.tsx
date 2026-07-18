'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Global Coverage section component
 * Shows currency types and stats
 */
export function GlobalCoverage() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeType, setActiveType] = useState('National')

  const currencyTypes = [
    'National',
    'Cryptocurrency',
    'Voucher',
    'Digital',
    'Technical',
    'Game',
    'Virtual',
    'Cash',
    'Alternative',
  ]

  const stats = [
    { value: '1000+', label: 'currency pairs' },
    { value: '200+', label: 'cryptocurrencies' },
    { value: '160+', label: 'world currencies' },
    { value: '20+', label: 'exchange rates data sources' },
  ]

  const currencyTypeDescriptions: Record<string, string> = {
    'National': 'Traditional fiat currencies issued by national governments and central banks, including USD, EUR, GBP, and 160+ other world currencies.',
    'Cryptocurrency': 'Digital currencies powered by blockchain technology, including Bitcoin, Ethereum, Litecoin, and 200+ other cryptocurrencies.',
    'Voucher': 'Prepaid voucher systems and gift card currencies used for online transactions and digital purchases.',
    'Digital': 'Digital currencies and electronic money systems designed for online transactions and digital commerce.',
    'Technical': 'Technical and synthetic currencies used for testing, development, and specialized financial operations.',
    'Game': 'In-game currencies and virtual tokens used within gaming platforms and virtual worlds.',
    'Virtual': 'Virtual currencies and tokens used in virtual environments, online communities, and digital platforms.',
    'Cash': 'Cash-equivalent currencies and payment methods that represent physical cash transactions.',
    'Alternative': 'Alternative payment currencies and non-traditional monetary systems for specialized use cases.',
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Global Coverage
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            With the multi-currency conversion, you simply post the prices in the currencies you want to support, and you're ready to accept online payments in those currencies.
          </p>
          <p className="text-gray-600 mt-4 font-body">
            An exhaustive list of <strong className="text-gray-900">200+ currencies</strong> with <strong className="text-gray-900">1000+ supported currency pairs.</strong>
          </p>
        </div>

        {/* Currency Types Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {currencyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-5 py-2 rounded-[10px] font-semibold text-sm transition-all font-body ${
                activeType === type
                  ? 'bg-[#4730B8] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Selected Type Description */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-gray-50 rounded-xl px-6 py-4 border border-gray-200 max-w-3xl">
            <p className="text-gray-700 font-body">
              {currencyTypeDescriptions[activeType]}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-[#4730B8] mb-2 font-heading">{stat.value}</div>
              <div className="text-gray-600 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

