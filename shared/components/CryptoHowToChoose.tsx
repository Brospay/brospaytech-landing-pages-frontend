'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Crypto How to Choose section
 */
export function CryptoHowToChoose() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const factors = [
    {
      title: 'Complete processing infrastructure',
      description: 'A good provider should offer a complete crypto processing infrastructure that supports multiple currencies and provides flexible settlement options, whether in crypto or fiat.',
    },
    {
      title: 'Security & compliance',
      description: 'The provider must support KYC/AML processes, fraud prevention mechanisms, and PCI DSS compliance to safeguard both your business and your customers.',
    },
    {
      title: 'Advanced features',
      description: 'Modern crypto payment platforms go beyond simple transaction handling. They often include features like automated risk monitoring, advanced reporting dashboards, real-time currency conversion, and intelligent routing.',
    },
    {
      title: 'Ecosystem position',
      description: 'Evaluate the provider\'s position within the broader ecosystem. Some focus only on basic acceptance, while others act as a complete orchestration layer, giving you access to hundreds of local and global payment methods.',
    },
    {
      title: 'Partnership approach',
      description: 'A strong crypto payment processor is not just a technical vendor but a partner. The right provider will help you expand into new markets, reduce operational risks, and grow sustainably.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to choose a crypto payment provider
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            There are plenty of payment processors for cryptocurrencies, but how to choose the best one? Consider these key factors when selecting a crypto payment provider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold text-lg font-heading">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

