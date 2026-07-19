'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Integration Options section component
 * Shows integration options: Flash, Embedded, Pay by link, Self-hosted
 */
export function EcommerceIntegration() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const integrations = [
    {
      title: 'Flash',
      description: 'Practically no coding efforts are needed to have the checkout live as a popup on top of your website, without redirecting.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5v16.5H3.75V3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9v9h-9v-9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h3v3h-3v-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.75v3M10.5 17.25v3M3.75 10.5h3M17.25 10.5h3" />
        </svg>
      ),
    },
    {
      title: 'Embedded',
      description: 'Easily integrate the payment page into your website as an iFrame, creating a frictionless user experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5v16.5H3.75V3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h7.5v7.5h-7.5V8.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h3v3h-3v-3z" />
        </svg>
      ),
    },
    {
      title: 'Pay by link',
      description: 'Generate payment links and send them to your customers to complete purchases.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      title: 'Self-hosted',
      description: 'If you have developers and PCI DSS compliance, you might consider hosting the checkout on your side using API and SDKs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6.75a3 3 0 013-3h13.5a3 3 0 013 3v4.5a3 3 0 01-3 3m-16.5 0a3 3 0 00-3 3v2.25a3 3 0 003 3h13.5a3 3 0 003-3v-2.25a3 3 0 00-3-3m-16.5 0V9.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75h6M9 12.75h6M9 15.75h4.5" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Choose the Optimal Integration Option
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            It's easy to start with BrosPay — just choose the right option for your case.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {integration.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {integration.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

