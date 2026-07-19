'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Optimise Payouts section component
 * Shows 9 optimization tools for payouts
 */
export function OptimisePayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const optimisationTools = [
    {
      title: 'Cascading',
      description: 'Eliminate fails by using automatic rerouting of a transaction until full completion.',
    },
    {
      title: 'P2P payouts',
      description: 'P2P transactions can be automatically routed to the appropriate transit account, meeting your requirements.',
    },
    {
      title: 'Smart routing',
      description: "BrosPay's payout platform routes each transaction according to selected parameters, saving time and cutting costs.",
    },
    {
      title: 'Business model versatility',
      description: 'We provide international payout services for any business type. Process batch payouts, bulk payouts or single payouts with ease.',
    },
    {
      title: 'Anti-fraud',
      description: 'Combat fraud relying on our anti-fraud engine and security tools.',
    },
    {
      title: 'Splitting',
      description: 'Perform a large payout through multiple transactions with our global payout platform.',
    },
    {
      title: 'Payouts by token',
      description: 'Our international payout system allows initiating payouts by a token (OCT).',
    },
    {
      title: 'Currency conversion',
      description: 'Easily set up rules for every currency pair conversion and freely choose an exchange rate source.',
    },
    {
      title: 'Retries',
      description: 'Initiate retries manually when needed or enable auto-retries to handle failover management.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Optimise Payouts
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Tools Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {optimisationTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-start gap-3 relative group bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                onMouseEnter={() => setActiveTooltip(tool.title)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {/* Checkmark Icon */}
                <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Tool Name */}
                <div className="flex-1 min-w-0">
                  <span className="text-[16px] text-white font-medium font-body">{tool.title}</span>
                </div>
                
                {/* Info Icon */}
                <div className="relative flex-shrink-0">
                  <svg 
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#4730B8] transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === tool.title && (
                    <div className="absolute right-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        {tool.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* PayPal Card */}
              <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/assets/landing_page/global_coverage/paypal.svg" alt="PayPal" className="h-8" />
                  <span className="text-white/80 text-sm font-body">Payout Distribution</span>
                </div>

                {/* Amount Display */}
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-white font-heading">100,000 USD</span>
                </div>

                {/* Distribution Bars */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-white text-sm font-body w-16 text-right">25,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: '33%' }}></div>
                    </div>
                    <span className="text-white text-sm font-body w-16 text-right">33,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                    <span className="text-white text-sm font-body w-16 text-right">42,000</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 font-body">Optimised</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

