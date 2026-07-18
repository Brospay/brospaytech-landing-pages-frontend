'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * PSP Why Choose ValoraPay section
 */
export function PSPWhyChoose() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'Payment and payout capabilities',
      description: 'Our offering combines ValoraPay\'s payment and payout capabilities with a feature-rich white-label merchant back office.',
    },
    {
      title: 'Set up fees',
      description: 'With this payment gateway, you can launch your own branded solution and earn money by setting up fees for any service you decide to provide, be it incoming or outgoing transactions.',
    },
    {
      title: 'FX rates income',
      description: 'Another great source of income our white-label payment service provider offers is FX rates. All transactions involving currency conversion will be processed according to the exchange rates you select.',
    },
    {
      title: 'White-label merchant portal',
      description: 'A white-label merchant portal allows you to conveniently run multiple businesses, with separate commerce accounts and individual settings for each.',
    },
    {
      title: 'Real-time tracking',
      description: 'You and your merchants can keep track of funds available on the accounts in multiple currencies in real time.',
    },
    {
      title: 'Auto-generated reports',
      description: 'Auto-generated detailed monthly reports help with monitoring and controlling cashflows.',
    },
    {
      title: 'Ongoing support',
      description: 'We\'re always there to help with onboarding, offer technical assistance, implement new features, and establish the new connections and payment flows clients require.',
    },
    {
      title: 'Cost savings',
      description: 'Companies that already run their payment business on our software save months of time and effort, and up to $500,000 in development and maintenance costs.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Why choose white-label PSP by ValoraPay
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            We've been gathering insights on the best payment practices for more than ten years, developing and bringing payment products to markets worldwide. This knowledge is what our white-label payment provider solution is based on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-primary/5 rounded-[20px] p-8 lg:p-12 border-l-4 border-primary">
          <p className="text-lg text-gray-700 italic mb-4 font-body">
            "Thinking of launching your own payment service provider? Let me share some quick facts. Developing your own payment software takes about 2 years. Just an MVP would cost you over $200K. Choosing a white-label payment provider solution allows you to start your business from scratch in 1-2 months. You'll receive everything out of the box for a price equal to one coder's salary."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading">
              DK
            </div>
            <div>
              <div className="font-semibold text-gray-900 font-heading">Denys Kyrychenko</div>
              <div className="text-sm text-gray-600 font-body">ValoraPay's Co-founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

