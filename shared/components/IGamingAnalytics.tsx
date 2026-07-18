'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function IGamingAnalytics() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const analyticsFeatures = [
    {
      title: 'All insightful metrics in a single source',
      description: 'Let your financial, accounting, support, and marketing teams conveniently monitor the essentials about the business performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Default or customised reports & analytics',
      description: 'Explore insightful metrics of your iGaming business health and performance for troubleshooting and decision making.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Rich analytical data',
      description: 'Combat chargebacks & fraud and get insights into customers\' behaviour to detect trends and abnormalities.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 relative rounded-[20px] overflow-hidden">
      {/* Background Image - Same as GlobalAccess */}
      <div className="absolute inset-0 global-access-bg rounded-[20px]">
        <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Real-Time Reporting & Analytics
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body">
            Unify and harmonise the payment data from all PSPs, acquirers, e-wallets, or crypto processors you cooperate with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {analyticsFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-[20px] p-6 lg:p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-[10px] bg-[#4730B8]/20 flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

