'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Marketplace Advantages section
 */
export function MarketplaceAdvantages() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const advantages = [
    {
      title: 'Ease of integration',
      description: 'It usually doesn\'t take long to integrate a payment gateway into a marketplace if you partner with a payment service provider (PSP) — a third-party company offering ready-made technical solutions.',
    },
    {
      title: 'Improved security',
      description: 'Payment gateways provide robust security measures including encryption, tokenisation, and SSL to protect sensitive customer data and prevent fraud.',
    },
    {
      title: 'Fraud detection and prevention',
      description: 'Advanced fraud detection tools help identify and prevent suspicious transactions, protecting both merchants and customers from fraudulent activities.',
    },
    {
      title: 'Checkout customisation',
      description: 'Customise your checkout experience to match your brand and provide a seamless payment flow that enhances customer satisfaction.',
    },
    {
      title: 'Smooth shopping experience',
      description: 'A well-integrated payment gateway ensures a smooth and fast checkout process, reducing cart abandonment and improving conversion rates.',
    },
    {
      title: 'Favourable conditions for global expansion',
      description: 'Support for multiple currencies and payment methods enables marketplaces to expand globally and serve customers from different regions.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Advantages of payment gateway for marketplace
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold text-lg font-heading">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

