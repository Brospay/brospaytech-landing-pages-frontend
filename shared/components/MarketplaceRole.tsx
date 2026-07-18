'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Marketplace Role section
 */
export function MarketplaceRole() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const marketplaceTypes = [
    {
      type: 'Single-vendor marketplace',
      description: 'A marketplace with only one seller offering their products. Three participants are involved: the seller, the buyer, and the intermediary between them. When setting up online payment processing, the retailer should only consider the local payment preferences of consumers and integrate the solution tailored to their needs.',
      features: ['One country and currency', 'Simpler integration', 'Straightforward setup'],
      color: 'bg-blue-50 border-blue-100',
    },
    {
      type: 'Multi-vendor marketplace',
      description: 'A complex chain of interaction where the marketplace itself acts as an intermediary between sellers and buyers. The marketplace collects funds and then makes payouts to sellers, first charging them fees. The larger the marketplace is, the more currencies and payment methods should be connected.',
      features: ['Multiple currencies', 'Multiple payment methods', 'Complex payout system'],
      color: 'bg-purple-50 border-purple-100',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            The role of a payment gateway for the marketplace
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Marketplaces are a particular category of e-commerce because they are vastly different and require an individual approach to integrating payment solutions. Not all gateways are suitable for marketplace integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {marketplaceTypes.map((marketplace, index) => (
            <div
              key={index}
              className={`${marketplace.color} rounded-[20px] p-6 lg:p-8 border-2 hover:shadow-lg transition-shadow`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                {marketplace.type}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-body">
                {marketplace.description}
              </p>
              <div className="space-y-2">
                {marketplace.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-[20px] p-8 lg:p-12 text-center">
          <p className="text-lg text-gray-700 font-body">
            <strong className="font-heading">Despite the marketplace type, only one thing makes it trustworthy — the high security of payment processing.</strong> It is what exactly payment gateways are responsible for.
          </p>
        </div>
      </div>
    </section>
  )
}

