'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Real-Time Allocation section component
 * Shows 6 allocation strategies with tabs
 */
export function RealTimeAllocation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeStrategy, setActiveStrategy] = useState('fees')

  const strategies = [
    {
      id: 'fees',
      title: 'Fees',
      description: "ValoraPay's routing solution dynamically determines the optimal route based on a transaction fee value. Along with real-time fees and FX rates monitoring, it helps to optimise all transactions and ensure least-cost payments routing.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: '2%', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: '2.5%', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: '4%', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: '4.5%', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: '5%', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
    {
      id: 'conversions',
      title: 'Conversions',
      description: 'ValoraPay measures the performance of all routes in real-time to calculate success rates for every route alongside collecting statistics and providing analytics. Follow the conversion optimisation strategy by setting the success rate attribute in the routing scheme.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: '10%', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: '20%', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: '30%', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: '35%', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: '88%', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
    {
      id: 'balances',
      title: 'Balances',
      description: 'Automatically allocate a payment or payout request to the account with sufficient balance. We provide real-time monitoring and tracking of merchant account balances through a single Dashboard, keeping you constantly updated on your funds.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: '10k', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: '20k', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: '30k', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: '40k', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: '100k', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
    {
      id: 'turnover',
      title: 'Turnover',
      description: 'Distribute turnover and risks among multiple merchant accounts. Our transaction routing engine supports the automatic allocation of incoming and outgoing transactions by weightings criteria. It makes your business more flexible.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: '10k', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: '20k', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: '30k', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: '40k', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: '100k', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
    {
      id: 'ratios',
      title: 'Ratios',
      description: 'Set up ratios to automatically distribute your cash flows across multiple merchant accounts according to this parameter.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: '5%', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: '10%', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: '15%', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: '20%', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: '50%', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
    {
      id: 'combined',
      title: 'Combined Strategies',
      description: 'You are free to modify and combine all of the above-listed strategies and solutions for flexible payment routing and controls, as well as to use various strategies with different merchant accounts. It creates almost endless routing possibilities to fulfil your business\' needs.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      data: [
        { provider: 'Stripe', value: 'Mix', logo: '/assets/landing_page/global_coverage/stripe.svg' },
        { provider: 'Neteller', value: 'Mix', logo: '/assets/checkout_page/neteller.svg' },
        { provider: 'Skrill', value: 'Mix', logo: '/assets/checkout_page/skril.svg' },
        { provider: 'Alipay', value: 'Mix', logo: '/assets/checkout_page/alipay.svg' },
        { provider: 'PayPal', value: 'Mix', logo: '/assets/checkout_page/paypal.svg' },
      ],
    },
  ]

  const activeStrategyData = strategies.find(s => s.id === activeStrategy)

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Real-Time Allocation
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Use our well-crafted optimisation presets to distribute your cash flows across providers in the most desirable way. Modify and combine them to reach your goals.
          </p>
        </div>

        {/* Strategy Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {strategies.map((strategy) => (
            <button
              key={strategy.id}
              onClick={() => setActiveStrategy(strategy.id)}
              className={`px-5 py-2 rounded-[10px] font-semibold text-sm transition-all font-body flex items-center gap-2 ${
                activeStrategy === strategy.id
                  ? 'bg-[#4730B8] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className={activeStrategy === strategy.id ? 'text-white' : 'text-gray-600'}>
                {strategy.icon}
              </span>
              {strategy.title}
            </button>
          ))}
        </div>

        {/* Strategy Content */}
        {activeStrategyData && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  {activeStrategyData.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  {activeStrategyData.description}
                </p>
              </div>

              {/* Data Visualization */}
              <div className="space-y-3">
                {activeStrategyData.data.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <img src={item.logo} alt={item.provider} className="w-8 h-5 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-100 rounded-[10px] overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#4730B8] to-[#6B4DE6] rounded-[10px] transition-all duration-500"
                          style={{ width: `${(index + 1) * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-16 text-right font-body">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

