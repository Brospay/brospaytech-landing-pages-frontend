'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * ISO/MSP Pricing section
 */
export function IsoMspPricing() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const plans = [
    {
      name: 'Standard',
      description: 'For small and medium-sized businesses',
      infrastructureFee: '€2,500',
      transactions: '10,000',
      transactionPrice: '€0.072',
      features: [
        'Tools for optimised checkout flows',
        'Access to global payment capabilities after a single integration with us',
        'Comprehensive security and rigorous compliance',
        'Payouts using bank cards and alternative methods',
        'A unified dashboard for efficient management',
        'Connect an unlimited number of payment providers from the hub',
      ],
    },
    {
      name: 'Professional',
      description: 'For larger businesses or those seeking advanced administration tools',
      infrastructureFee: '€6,000',
      transactions: '100,000',
      transactionPrice: '€0.024',
      features: [
        'Creation of a hosted payment page in your design once per year',
        '1 new payment flow integration per month',
        'Phone, chat, and email support',
        'White label package (merchant portal, documentation, ledger)',
        'Financial analytics and reporting',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For very large businesses or those in highly regulated industries',
      infrastructureFee: 'Tailored',
      transactions: '> 1,000,000',
      transactionPrice: 'Tailored',
      features: [
        'Merchant portal on demand',
        'Robust developer platform and third-party integrations',
        'Ready-made add-ons and on-demand development',
        'Comprehensive testing tools',
        'Direct database access',
      ],
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Costs You Less than the Salary of 1 Coder
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            We assign an account manager to every client, taking a personalised approach to support and utilising our 15+ years of techfin expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow ${plan.isPopular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.isPopular && (
                <div className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4 font-body">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6 font-body">{plan.description}</p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1 font-heading">
                  {plan.infrastructureFee}
                </div>
                <div className="text-sm text-gray-600 font-body">Infrastructure fee per month</div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="text-2xl font-bold text-gray-900 mb-1 font-heading">
                  {plan.transactions}
                </div>
                <div className="text-sm text-gray-600 mb-2 font-body">
                  The total number of successful transactions, free of charge per month
                </div>
                <div className="text-xl font-bold text-gray-900 font-heading">
                  {plan.transactionPrice}
                </div>
                <div className="text-sm text-gray-600 font-body">
                  Price for each transaction exceeding the plan
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contacts"
                className={`w-full block text-center px-6 py-3 rounded-[10px] font-semibold transition-colors font-body ${
                  plan.isPopular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Book a call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

