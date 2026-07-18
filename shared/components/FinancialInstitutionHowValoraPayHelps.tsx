'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Financial Institution How ValoraPay Helps section
 */
export function FinancialInstitutionHowValoraPayHelps() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'PCI DSS compliance',
      description: 'We meet the strictest requirements of the highest PCI DSS level, closely monitoring each transaction to protect businesses and customers from possible identity theft and fraud.',
    },
    {
      title: '400+ ready-made integrations',
      description: 'Integrating ValoraPay, businesses get access to 400+ ready-made integrations and 1200 payment providers from our network.',
    },
    {
      title: 'Payment management',
      description: 'Our platform enables clients to perform payment management and reconciliation via a convenient Payment dashboard.',
    },
    {
      title: 'Save time and resources',
      description: 'There is a way to save you tons of time, manual effort, and financial resources. ValoraPay\'s payment orchestration platform offers a set of smart tools that help to overcome the majority of challenges.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How ValoraPay helps overcome payment challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Digital transformation is attainable for every financial services company — bank, PSP, or financial institution — if there is sufficient time and resources. Some businesses want to be in charge of everything, but such a path is quite rocky and time-consuming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
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

        <div className="bg-primary/5 rounded-[20px] p-8 lg:p-12 text-center border-2 border-primary/20">
          <p className="text-lg text-gray-700 mb-6 font-body">
            Entrusting us with processing your transactions eliminates the need to pursue PCI compliance because you already have a fully protected payment processing system at your disposal.
          </p>
          <a
            href="#book-call"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl tap-target font-body"
          >
            Check our solution with your very eyes on a live demo
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

