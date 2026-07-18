'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * ISO/MSP Cross borders section
 */
export function IsoMspCrossBorders() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: '500+ ready integrations',
      description: 'Access our extensive network of payment providers worldwide.',
    },
    {
      title: 'No vendor lock',
      description: 'Freedom to switch providers and maintain flexibility.',
    },
    {
      title: 'Access our global merchants network',
      description: 'Connect with merchants from around the world.',
    },
    {
      title: 'A few clicks to connect',
      description: 'Simple and fast integration process.',
    },
    {
      title: 'Maintenance and support on us',
      description: 'We handle all technical maintenance and provide ongoing support.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Cross borders with ease
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body mb-8">
            Expand to new markets 10 times faster with a doorway to any provider and payment method.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      </div>
    </section>
  )
}

