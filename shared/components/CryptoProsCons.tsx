'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Crypto Pros and Cons section
 */
export function CryptoProsCons() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const advantages = [
    {
      title: 'Independent',
      description: 'Crypto payments are decentralised – they are not controlled by any central authority or institution, which makes such transactions faster, cheaper, and more secure.',
    },
    {
      title: 'Fast and secure',
      description: 'Crypto transactions are processed quickly, and the blockchain technology used to process them is highly secure.',
    },
    {
      title: 'Cost-efficient',
      description: 'Because no intermediaries are involved in the process, transaction fees for crypto payments are generally lower than those for traditional payment methods.',
    },
    {
      title: 'Globally accessible',
      description: 'Crypto payments can be made from anywhere in the world, and there are no restrictions on who can make or receive payments.',
    },
    {
      title: 'Anonymous',
      description: 'Some cryptocurrencies offer a high degree of anonymity, which can be important for individuals who value privacy and security.',
    },
    {
      title: 'No chargebacks',
      description: 'Chargebacks are impossible with crypto payments. This means that businesses don\'t have to worry about losing money due to chargebacks.',
    },
  ]

  const disadvantages = [
    {
      title: 'Volatility',
      description: 'One of the main features of cryptocurrencies is volatility. Merchants who want to accept cryptocurrency payments risk receiving less than they intended.',
    },
    {
      title: 'Scalability',
      description: 'The speed of cryptocurrency systems lags behind their fiat counterparts. Bitcoin processes 4-5 transactions per second, while Visa can process up to 24,000.',
    },
    {
      title: 'Regulations',
      description: 'Cryptocurrency is not a legal tender in most jurisdictions, so accepting such payments sometimes creates legal difficulties for merchants.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Pros and cons of crypto payments processing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Adopting crypto payment systems can bring many benefits, but it also comes with challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Advantages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-green-600">
              Advantages
            </h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-green-100"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disadvantages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-red-600">
              Disadvantages
            </h3>
            <div className="space-y-6">
              {disadvantages.map((disadvantage, index) => (
                <div
                  key={index}
                  className="bg-red-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-red-100"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                    {disadvantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {disadvantage.description}
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

