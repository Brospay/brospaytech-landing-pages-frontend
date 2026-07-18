'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Payment Features section component
 * Features 4 key benefits with icons
 */
export function PaymentFeatures() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'One integration',
      description: 'A single integration allows you to support any payment methods.',
      highlightText: 'payment methods',
    },
    {
      title: 'No vendor lock',
      description: 'Work with multiple payment partners for continuity of operations.',
    },
    {
      title: 'Unified payment data',
      description: 'Access payment data from disparate sources in one place.',
    },
    {
      title: 'Conversion boost',
      description: 'Orchestrate cash flows across payment providers and acquiring banks.',
      highlightText: 'Orchestrate',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {feature.highlightText ? (
                  <>
                    {feature.description.split(feature.highlightText)[0]}
                    <span className={feature.highlightText === 'payment methods' ? 'text-[#4730B8] font-semibold' : 'text-blue-600 font-semibold'}>
                      {feature.highlightText}
                    </span>
                    {feature.description.split(feature.highlightText)[1]}
                  </>
                ) : (
                  feature.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

