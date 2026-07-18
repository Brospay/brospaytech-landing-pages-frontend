'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Optimize Performance section component
 * Shows "ValoraPay is not just a cashier" with virtual multicurrency merchant accounts features
 */
export function ForexOptimizePerformance() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      text: 'Track and organise financial information with virtual merchant accounts.',
    },
    {
      text: 'Offer relevant payment methods for each region.',
    },
    {
      text: 'Create a unique payment processing flow and independent customisation for each entity & product type.',
    },
    {
      text: 'Segregate payment traffic by source to ensure compliance with tax regulations.',
    },
    {
      text: 'Streamline high-volume transactions and manage multiple brands more easily.',
    },
    {
      text: 'Benefit from aggregated reports and forecasts for each sub-entity to compare sales and analyse competition.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            ValoraPay is not just a cashier
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Virtual <span className="text-[#4730B8] font-semibold">multicurrency</span> merchant accounts provide additional flexibility for processing and managing incoming and outgoing payments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#FCD34D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-900 leading-relaxed font-body">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index + 3} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#FCD34D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-900 leading-relaxed font-body">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

