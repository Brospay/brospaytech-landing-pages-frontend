'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Crypto Should You Accept section
 */
export function CryptoShouldYouAccept() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const reasons = [
    {
      title: 'Geographic coverage',
      description: 'Crypto payments solve the problem of payment landscape fragmentation. Users from almost any country can pay for services or products of companies located in another country.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Reliability',
      description: 'Traditional processors or banks may decline a transaction for many reasons. In such cases, cryptocurrency is the optimal solution: a blockchain wallet cannot block a transaction.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Cost-efficiency',
      description: 'The cost of a crypto transaction is about 1% of the amount, making it significantly cheaper than traditional payment methods.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Withdrawal speed',
      description: 'Processing of an e-wallet withdrawal can take about a week in some industries. Withdrawing in crypto happens several times quicker.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Should you accept crypto payments?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            The demand for crypto payments grows as customers look for faster and more flexible ways to transact online. For businesses, working with a reliable crypto payment provider can open new markets, reduce costs, and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

