'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Helpful Advantages section component
 * Shows 3 key advantages of DCC
 */
export function HelpfulAdvantages() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const advantages = [
    {
      title: 'Fixed rates with the DCC',
      description: "The dynamic currency conversion feature locks in the exchange rate at the POS at the moment of purchase. Opting for a transaction with the DCC, you can see the price including the current market rate and a service provider's fee.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Real-time transparency',
      description: 'Unlike the exchange rates, the DCC allows for the currency conversion to happen in real-time. So you see the rates applied to your transaction immediately.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Simple price comparison',
      description: 'The DCC feature simplifies comparison shopping, as most clients prefer to view prices in their own currency.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Helpful Advantages for Cost Efficiency and Better Shopping Experience
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] mb-6">
                {advantage.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-body">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

