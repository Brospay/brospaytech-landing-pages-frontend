'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Gateway How It Works section component
 * Shows the three main features: The Hub, Routing & Cascading, Hosted payment page
 */
export function WhiteLabelGatewayHowItWorks() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'The hub',
      description: 'A single integration with our payment hub allows you to connect as many payment providers as you need effortlessly and instantly by just clicking a mouse. It is the fastest way to enter new markets worldwide!',
      linkText: 'Explore all integrations',
      linkHref: '/payment-providers',
      visual: (
        <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-xl p-6 h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-white font-semibold font-heading">The Hub</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Routing & Cascading',
      description: "ValoraPay's smart Routing engine maximises payment performance and enables the highest success rates by optimising all incoming and outgoing transactions in real time. With this powerful tool on board, you can easily implement and alter various flow strategies.",
      linkText: 'Learn how routing works',
      linkHref: '/routing-cascading',
      visual: (
        <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-xl p-6 h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-white font-semibold font-heading">Smart Routing</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Hosted payment page',
      description: 'Besides the smart routing engine, we provide a one-stop Checkout solution designed with the consumer in mind. Our international Checkout supports an exhaustive list of 200+ currencies, multi-language interface with support for 25 languages and geolocation adaptability.',
      linkText: 'Learn more about Checkout',
      linkHref: '/checkout',
      visual: (
        <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-xl p-6 h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-white font-semibold font-heading">Checkout</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.visual}
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 font-body">
                {feature.description}
              </p>
              <a
                href={feature.linkHref}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body font-semibold"
              >
                {feature.linkText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

