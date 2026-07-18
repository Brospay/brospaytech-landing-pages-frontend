'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * B2B SaaS How to Choose section
 */
export function B2BSaaSHowToChoose() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const factors = [
    {
      title: 'Security & compliance',
      description: 'Only those SaaS payment solutions that meet the strictest requirements of PCI DSS can efficiently protect your customers\' sensitive data. Check all security measures and ensure valid PCI DSS compliance certificate.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Payment options available',
      description: 'If your SaaS product aims to reach an international audience, adapt to customers\' payment preferences. The more options you integrate, the more likely customers will subscribe. We support more than 400 payment methods.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Fees',
      description: 'Understand the fee structure including transaction fees, setup fees, monthly fees, and any additional costs. Compare different options and consider your transaction volume to ensure pricing aligns with your budget.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Recurring payments',
      description: 'Almost all SaaS organizations run on a recurring payments basis. By providing recurring billing, you save customers from service interruption and protect your business from losing clients.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Reporting and analytics',
      description: 'Look for payment gateways that provide comprehensive reporting and analytics features. These insights help track transaction data, monitor sales trends, identify issues, and optimize payment processes.',
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
            How to choose a SaaS payment gateway?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Given that clients' satisfaction directly impacts the success of a SaaS business, the choice of a payment gateway requires careful consideration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {factor.icon}
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

