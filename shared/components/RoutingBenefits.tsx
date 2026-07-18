'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Routing Benefits section component
 * Shows 4 key benefits with stats
 */
export function RoutingBenefits() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const benefits = [
    {
      title: 'Maximised conversion',
      stat: '+40%',
      statLabel: 'conversion',
      description: 'Companies achieve up to 40% increase in conversion rates after integrating our payment routing platform.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Costs optimisation',
      stat: '30%',
      statLabel: 'saved in fees',
      description: 'The ability to find the lowest-cost way to route transactions can save you up to 30% in payment fees.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Risk protection',
      stat: '20%',
      statLabel: 'fewer losses',
      description: 'Fraud prevention and risk mitigation instruments reduce fraud losses by more than 20%.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Vendor switching',
      stat: '15%',
      statLabel: 'saved transactions',
      description: 'Automated retries and failover save not less than 15% of transactions that otherwise would be lost.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Benefits of Routing & Cascading
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Here are some of the results our customers have achieved thanks to payment routing solution and cascading of payments. So can you!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] mb-4">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                {benefit.title}
              </h3>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#4730B8] font-heading">{benefit.stat}</span>
                <span className="text-sm text-gray-500 ml-2 font-body">{benefit.statLabel}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

