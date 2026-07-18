'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Connect Payments section component
 * Features payment provider connections and versatility
 */
export function ConnectPayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const paymentProviders = [
    { name: 'Mastercard', icon: '/assets/landing_page/global_coverage/mastercard.svg' },
    { name: 'VISA', icon: '/assets/landing_page/global_coverage/visa.svg' },
    { name: 'Discover', icon: '/assets/landing_page/global_coverage/discover.svg' },
    { name: 'Stripe', icon: '/assets/landing_page/global_coverage/stripe.svg' },
    { name: 'Masterpass', icon: '/assets/landing_page/global_coverage/mastercard.svg' },
    { name: 'Neteller', icon: '/assets/landing_page/global_coverage/neteller.svg' },
    { name: 'Giropay', icon: '/assets/landing_page/global_coverage/sepa.svg' },
  ]

  const features = [
    {
      title: 'Any payment provider',
      description: 'Reap the benefits of having hundreds of payment providers ready for you to connect to in a few clicks through ValoraPay\'s Provider hub.',
      items: [
        'Payment gateways',
        'Payment aggregators',
        'Payment facilitators',
        'Credit card acquirers',
      ],
    },
    {
      title: 'Any payment method',
      description: 'Support for every possible payment method comes out of the box when you work with ValoraPay.',
      items: [
        'Credit cards',
        'Bank transfers',
        'Digital wallets',
        'Cryptocurrencies',
        'Mobile carriers',
        'Utility bills',
        'Local payment options',
      ],
    },
    {
      title: 'Any payment flow',
      description: 'Our online payment solution is scalable and flexible enough to suit any business model, type and size.',
      items: [
        { name: 'Instant charge', description: 'Receive online payments from your customers instantly, with them making just a few clicks.' },
        { name: 'Delayed charge', description: 'Block the necessary amount on the customer\'s balance before charging.' },
        { name: 'Recurring payments', description: 'Tokenisation allows you to automatically charge your customer the due amount on a regular basis.' },
        { name: 'OCT (Original Credit Transaction)', description: 'Make fast and secure push payments online directly to your customers\' Visa and Mastercard.' },
      ],
    },
    {
      title: 'Any fiat & crypto currency',
      description: 'We support processing payments in literally any currency of the world, as well as in crypto. Just connect with the right providers.',
      items: ['USD', 'EUR', 'GBP', 'BTC', 'LTC', '200+ currencies'],
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            <span className="italic">Connect</span> payments
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Versatility is not just a word to us. We are constantly striving to enhance our offering and make every payment tool you might think of available and ready for you to use.
          </p>
        </div>

        {/* Payment Provider Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {paymentProviders.map((provider, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl bg-gray-50 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-200"
            >
              <img
                src={provider.icon}
                alt={provider.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-[18px] text-gray-600 mb-4 leading-relaxed font-body">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => {
                  if (typeof item === 'string') {
                    return (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#4730B8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[18px] text-gray-700 font-body">{item}</span>
                      </li>
                    )
                  } else {
                    return (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#4730B8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="text-[18px] font-semibold text-gray-900 font-body">{item.name}</span>
                          <span className="text-[18px] text-gray-600 font-body"> — {item.description}</span>
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

