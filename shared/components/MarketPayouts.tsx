'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Market Payouts section component
 * Shows fees, balances, portal and reporting features
 */
export function MarketPayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Fees',
      description: 'Make money by setting up and collecting fees from your merchants. The amount you earn is entirely up to you.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Virtual balances',
      description: "Clear real-time view of funds available on your accounts in multiple currencies, including pending and reserved balances. You can also easily view your merchants' balances to keep track of overall performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Merchant portal',
      description: 'An intuitive ready-made solution that you can give to your merchants to enable them to monitor and manage their transactions, payouts, and balances.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Transaction reporting',
      description: 'Merchants will always be in control of their business results with detailed auto-generated reports.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Market Payouts
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Get the most out of our international payout system and earn additional income by offering this powerful service to your merchants.
          </p>
        </div>

        {/* Commission Card */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-2xl p-8 text-center shadow-xl">
            <span className="text-white/80 text-sm font-body">Commission</span>
            <div className="text-5xl font-bold text-white mt-2 font-heading">+2%</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                {feature.icon}
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
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

