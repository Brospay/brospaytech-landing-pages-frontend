'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dating Payment Methods section
 */
export function DatingPaymentMethods() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const methods = [
    {
      title: 'Range of payment methods',
      description: 'Online dating services are international and unite people around the globe. Sometimes people prefer using local payment methods. Therefore, in addition to connecting bank cards, pay attention to cross-border payment support and other payment services (e.g. Apple Pay, Google Pay, PayPal, WeChat Pay, and others).',
    },
    {
      title: 'Direct carrier billing',
      description: 'This option increases the security of mobile payments, which is vital for the merchant\'s credibility. This method is popular in regions where card usage is limited. Users can make purchases by paying into the mobile operator\'s account.',
    },
    {
      title: 'Mobile billing',
      description: 'Implement mobile payments into your solution, and you\'ll increase traffic and conversion rates. Mobile payments are essential because the majority of online dating service users tend to use their phones for texting.',
    },
    {
      title: 'Crypto payments',
      description: 'Processing cryptocurrencies will help you widen your audience and offer alternative payment options for users who prefer digital currencies.',
    },
    {
      title: 'Recurring billing',
      description: 'Many online dating services offer a subscription model for their users, so recurring billing is a must. This enables automatic renewals and seamless subscription management.',
    },
    {
      title: 'Card payments',
      description: 'A rich choice of card payments is an excellent way to attract more clients. Opt for the most widely used options, such as Visa, Mastercard, AmEx, Maestro, etc., and also consider the regional options.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Popular payment methods for online dating businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Finding a billing solution for dating services to meet all the needs and expectations is a crucial foundation for any business. Common ways to monetise a dating website or app are to offer premium memberships, additional features, in-app purchases, virtual gifts, or premium content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {method.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

