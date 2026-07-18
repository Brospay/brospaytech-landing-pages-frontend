'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dating How to Choose section
 */
export function DatingHowToChoose() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const factors = [
    {
      title: 'Look for high-risk experience',
      description: 'Work with a partner that already handles dating website payment processing. They\'ll know how to spot fraud patterns early, manage chargebacks, and stay compliant with industry rules, saving you time and money.',
    },
    {
      title: 'Prioritise security',
      description: 'Your users are trusting you with their personal details and payment information. Look for a processor that offers encryption, tokenisation, and advanced fraud screening to protect users\' data and build trust.',
    },
    {
      title: 'Think global from the start',
      description: 'If your dating platform has an international audience, choose payment gateways that can process the necessary currencies and local payment options. Offering familiar options can reduce failed transactions and boost conversions.',
    },
    {
      title: 'Support for recurring billing',
      description: 'Most dating sites rely on subscriptions, so check if your processor can handle flexible billing cycles, automatic renewals, and smart retries for failed payments. It helps keep paying members on board without manual follow-ups.',
    },
    {
      title: 'Check the fees and contract terms',
      description: 'Avoid being locked into expensive, long-term agreements. Compare credit card processing rates, check for hidden fees, and choose a provider with flexible integration options for easy switching or expansion.',
    },
    {
      title: 'Plan for growth',
      description: 'Your payment setup should be able to grow with your platform. Choose the one that offers processor integrations, analytics, and reporting tools to help you track performance and improve over time.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to choose the right payment gateway for a dating website?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Picking the right payment processor can make a massive difference to your dating platform's success. We've compiled a list of what to look for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
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

        <div className="mt-12 bg-primary/5 rounded-[20px] p-6 lg:p-8 border-l-4 border-primary">
          <p className="text-lg text-gray-700 font-body">
            <strong className="font-heading">Pro tip:</strong> Test your chosen provider with a small volume of payments before fully committing. It lets you see how they handle disputes, declines, and support requests in real situations.
          </p>
        </div>
      </div>
    </section>
  )
}

