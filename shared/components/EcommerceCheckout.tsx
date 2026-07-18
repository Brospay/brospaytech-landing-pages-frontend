'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Checkout Experience section component
 * Shows checkout customization features
 */
export function EcommerceCheckout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'Personalise the checkout process',
      description: 'Customise the look and feel of the checkout to provide your customers with a pleasant shopping experience tailored to your brand.',
    },
    {
      title: 'Maximise conversion rates',
      description: 'Provide your customers with the checkout based on the industry\'s best practices.',
    },
    {
      title: 'Increase customer loyalty and retention',
      description: 'Optimise checkout flow to ensure seamless payment experience.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Ensure a refined checkout experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Customise the look and feel of the checkout to provide your customers with a pleasant shopping experience tailored to your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

