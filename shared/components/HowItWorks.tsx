'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * How It Works section component
 * Shows the 3-step process: Integrate, Customise, Collect
 */
export function HowItWorks() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const steps = [
    {
      title: 'Integrate',
      description: 'Integrate one of the most advanced online Checkouts without writing a single line of code.',
    },
    {
      title: 'Customise',
      description: 'Customise the look and feel of the Checkout to offer your customers seamless brand experience.',
    },
    {
      title: 'Collect',
      description: 'Accept both one-time or recurring payments in a split second and take the hassle out of it.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How does it work?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Purple Arrow - Between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-[calc(33.333%-2rem)] z-10 flex items-center" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
                  <svg className="w-full h-12" fill="none" viewBox="0 0 200 40">
                    {/* Main arrow line */}
                    <line x1="0" y1="20" x2="180" y2="20" stroke="#4730B8" strokeWidth="4" strokeLinecap="round" />
                    {/* Arrowheads */}
                    <polygon points="180,20 170,10 170,30" fill="#4730B8" />
                    <polygon points="40,20 30,10 30,30" fill="#4730B8" />
                    <polygon points="80,20 70,10 70,30" fill="#4730B8" />
                    <polygon points="120,20 110,10 110,30" fill="#4730B8" />
                    <polygon points="160,20 150,10 150,30" fill="#4730B8" />
                  </svg>
                </div>
              )}

              {/* Icon Box - Black outlined square */}
              <div className="w-32 h-32 border-2 border-black rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                {index === 0 && (
                  // Integrate: Code/plug icon
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {index === 1 && (
                  // Customise: Settings/adjustments icon
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )}
                {index === 2 && (
                  // Collect: Payment/check icon
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">
                {step.title}
              </h3>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

