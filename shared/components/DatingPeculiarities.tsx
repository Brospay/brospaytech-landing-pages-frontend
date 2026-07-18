'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dating Peculiarities section
 */
export function DatingPeculiarities() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const challenges = [
    {
      title: 'High chargeback potential',
      description: 'Dating platforms deal with intangible services, and user satisfaction can be subjective, so refunds and chargebacks are common. Your dating payment processor should offer chargeback prevention tools, real-time alerts, and explicit transaction descriptors.',
    },
    {
      title: 'Mobile-first usage',
      description: 'Most users access dating platforms via mobile apps, and the payment process must be fast, responsive, and optimised for small screens. Features like one-click payments, mobile wallets, and an optimised checkout can significantly improve user experience.',
    },
    {
      title: 'Subscription models',
      description: 'Users typically sign up for monthly, quarterly, or annual subscriptions to access premium features. This recurring payment structure requires robust billing systems to handle automatic renewals, upgrades, and cancellations efficiently.',
    },
    {
      title: 'Anonymity and security',
      description: 'Users often prefer discrete payment descriptions and data protection, so ensuring transaction security is paramount. Use strong measures, like encryption protocols and fraud detection mechanisms.',
    },
    {
      title: 'Compliance and content restrictions',
      description: 'Some dating platforms include adult-oriented features, which may trigger stricter rules from payment providers and require age verification, content moderation, and additional compliance checks.',
    },
    {
      title: 'Dynamic pricing and incentives',
      description: 'Online dating services frequently implement discounts, promotional offers, or tiered pricing. Many platforms monetise through small add-on purchases like boosts, gifts, or premium messages. Your payment solutions should process microtransactions efficiently.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Peculiarities of online dating payment processing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Here are the key challenges worth considering when looking for online dating payment solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {challenge.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

