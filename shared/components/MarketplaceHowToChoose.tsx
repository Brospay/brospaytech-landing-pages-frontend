'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Marketplace How to Choose section
 */
export function MarketplaceHowToChoose() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const criteria = [
    {
      title: 'Data security tools',
      description: 'Since payment gateway plays a significant role in data protection, working with an unprotected tool can entail negative consequences like data leakage and fraud. Therefore, integrating a PCI-compliant payment gateway is crucial for the smooth running of your business.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Chargebacks processing',
      description: 'Chargebacks are very common on marketplaces because buyers often make the wrong choice or the product doesn\'t meet their expectations when shopping online. Choose a processor that handles chargebacks to avoid potential problems with unpaid money.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Multicurrency and multiple payment methods support',
      description: 'Multicurrency is essential for large international marketplaces delivering goods around the world. The same goes for payment methods, as buyers\' preferences vary significantly from country to country. Let your customers choose precisely how they want to pay.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'PCI DSS compliance',
      description: 'Check a PSP\'s licenses and documentation before concluding a contract. Ensure they have valid PCI DSS compliance certification to protect your customers\' data and your business reputation.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Management tools',
      description: 'Running a marketplace means dealing with plenty of merchants and hundreds of transactions per day. PSPs provide merchant management solutions for convenient and systematised monitoring operations. Plus, you can benefit from customised report formats.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to choose a payment gateway for the marketplace?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            When you're committed to creating a secure and convenient payment infrastructure, it's time to choose a solution that best suits your marketplace. Not every service company can simultaneously fulfil the requirements of buyers, sellers, and the marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {criterion.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {criterion.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

