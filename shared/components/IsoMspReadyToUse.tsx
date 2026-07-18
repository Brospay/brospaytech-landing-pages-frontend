'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * ISO/MSP Ready-to-use cloud solution section
 */
export function IsoMspReadyToUse() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'Save Time, Money, and Efforts Needed to Develop Own Payment Processor',
      description: 'Our holistic scalable gateway solution provides you with all the tools needed to scale your business.',
    },
    {
      title: 'Rely on the Expert Team Providing a Gateway Solution Tailored to Your Needs',
      description: 'Continuous upgrades, updates, and support are ensured at all times.',
    },
    {
      title: 'The Payment Team at Your Service at a Lower Cost than the Average Salary for Programmer',
      description: 'Get fully equipped to manage financial flows and risks.',
    },
  ]

  const capabilities = [
    {
      title: 'Alleviate Risks',
      description: 'Minimise financial risks like fraudulent transactions, volatility, etc.',
    },
    {
      title: 'Advanced Analytics',
      description: 'Gather and unify all the payment data for a single access point.',
    },
    {
      title: 'Construct Your Business Logic',
      description: 'Set up your own financial flows models that work best for you.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Ready-To-Use Cloud Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Our holistic scalable gateway solution provides you with all the tools needed to scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-primary/5 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Financial Flows and Risks Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Get Fully Equipped to Manage Financial Flows and Risks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Access all your payment details, processes, and analytics through a single interface.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Functional Modules */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  {
                    title: 'PAYMENTS',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    ),
                    color: 'bg-blue-500',
                    hoverColor: 'hover:bg-blue-600',
                  },
                  {
                    title: 'CHECKOUT',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    color: 'bg-yellow-500',
                    hoverColor: 'hover:bg-yellow-600',
                  },
                  {
                    title: 'PAYOUTS',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    color: 'bg-green-500',
                    hoverColor: 'hover:bg-green-600',
                  },
                  {
                    title: 'ANALYTICS',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    color: 'bg-purple-500',
                    hoverColor: 'hover:bg-purple-600',
                  },
                  {
                    title: 'ROUTING AND CASCADING',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    color: 'bg-orange-500',
                    hoverColor: 'hover:bg-orange-600',
                  },
                  {
                    title: 'CURRENCY CONVERSION',
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    ),
                    color: 'bg-blue-600',
                    hoverColor: 'hover:bg-blue-700',
                  },
                ].map((module, index) => (
                  <div
                    key={index}
                    className={`${module.color} ${module.hoverColor} rounded-2xl p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex flex-col items-center justify-center text-center min-h-[140px]">
                      <div className="mb-4 text-white">
                        {module.icon}
                      </div>
                      <h3 className="text-xs lg:text-sm font-bold font-heading uppercase tracking-wide leading-tight">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Row - Interconnected Blocks (Conceptual Diagram) */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50 min-h-[100px] flex items-center justify-center hover:border-gray-400 hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-xl shadow-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Key Benefits */}
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-body">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

