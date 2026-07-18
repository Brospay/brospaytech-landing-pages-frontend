'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * B2B SaaS Why Important section
 */
export function B2BSaaSWhyImportant() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const reasons = [
    {
      title: 'No additional hardware or software',
      description: 'Eliminates the need for additional hardware or software, streamlining the payment acceptance process.',
    },
    {
      title: 'Stringent security standards',
      description: 'Adheres to stringent security standards, ensuring a high level of protection for both merchants and customers.',
    },
    {
      title: 'Effortless integration',
      description: 'Offers effortless integration into existing websites and e-commerce stores without requiring any extra coding.',
    },
    {
      title: 'Ready-made plugins',
      description: 'Most gateways come equipped with ready-made plugins, making the integration process seamless and hassle-free.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Why is a SaaS payment gateway important for business?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

