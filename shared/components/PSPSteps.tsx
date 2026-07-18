'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * PSP Steps section - Business and Technical steps
 */
export function PSPSteps() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const businessSteps = [
    {
      title: 'Do market research',
      description: 'Decide where to register your new business, which legislation is in place, and whether you can comply. Evaluate the demand level for payment services in your geography and examine competitors\' offerings.',
    },
    {
      title: 'Create a business plan',
      description: 'Based on the insights gained, plan out your exact offering, how much you will charge, and how much money you need to start your payment service provider and maintain operations.',
    },
    {
      title: 'Find banks to partner with',
      description: 'Research which banks or payment processors you can use to open accounts for your activity. These banks will underwrite your transactions and route them between banks.',
    },
    {
      title: 'Get the necessary equipment',
      description: 'The equipment you need depends on the business models you\'ve decided to settle on and the services you\'ll provide. Aside from office equipment, you might also need processing terminals, servers, ATMs, etc.',
    },
    {
      title: 'Hire sales and marketing professionals',
      description: 'Marketing and sales teams will spread the word about you, growing your customer base and, thus, your income.',
    },
  ]

  const technicalSteps = [
    {
      title: 'Development of the payment software',
      description: 'It starts with planning and feasibility analysis, followed by design and coding. Building a decent checkout is crucial. Be ready that developing a custom payment gateway may take months of hard work.',
    },
    {
      title: 'Purchase hardware security modules (HSM)',
      description: 'Based on the services you\'re about to provide, you\'ll need encryption solutions to deal with card payments. It is necessary to ensure secure payment processing and comply with PCI tokenisation requirements.',
    },
    {
      title: 'Build server infrastructure and complete PCI DSS assessment',
      description: 'Secure payment processing is a must. You will need it to process and securely store transaction details and cardholder data. Remember that payment service providers must pass the PCI audit annually.',
    },
    {
      title: 'Select and integrate with banks, processors, and gateways',
      description: 'Given the high level of competition, your payment solution must be versatile and scalable enough to fulfil clients\' needs. That\'s why it is crucial to have many partners in the industry.',
    },
    {
      title: 'Maintain and update your product',
      description: 'The neverending process of maintenance and betterment is a cornerstone for a successful payment service provider company.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Ten main steps of starting a PSP company
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            If you want to deal with starting a company with your own efforts, the main steps you need to take can be rounded up to 10. Let's divide them into two categories: business steps and technical steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Business Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-primary">
              Business Steps
            </h3>
            <div className="space-y-6">
              {businessSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-blue-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-purple-600">
              Technical Steps
            </h3>
            <div className="space-y-6">
              {technicalSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-purple-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-purple-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg font-heading">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>
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

