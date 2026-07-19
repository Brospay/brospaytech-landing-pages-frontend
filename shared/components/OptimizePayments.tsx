'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import GaugeComponent from 'react-gauge-component'

/**
 * Optimize Payments section component
 * Features payment optimization tools with gauge visualization
 */
export function OptimizePayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const conversionRate = 92

  // All features in a single array
  const allFeatures = [
    'Cascading',
    'Smart routing',
    'Anti-fraud',
    'Tokenisation',
    'Retries',
    'Best UX',
    'Customisable UI',
    'Personalisation',
    'Localisation',
    '"Remember me"',
    'Abandoned cart recovery',
    'Business model versatility',
    'A/B testing',
  ]

  // Feature descriptions for tooltips
  const featureDescriptions: Record<string, string> = {
    'Cascading': 'Eliminate declines by using automatic rerouting of a transaction until full completion.',
    'Smart routing': 'BrosPay routes each transaction according to selected parameters, saving time and cutting costs.',
    'Anti-fraud': 'Combat fraud and decrease chargeback ratio relying on our anti-fraud engine and security tools.',
    'Tokenisation': 'One-click payments reduce friction and skyrocket conversion, refining the customer experience.',
    'Retries': 'Stop losing sales with manual retries and enable auto-retries to handle failover management.',
    'Best UX': 'Checkout is the epitome of a smooth and intuitive customer journey. Offer your clients transparency and simplicity, and get significantly increased success rates back.',
    'Customisable UI': 'Adjust Checkout design to the look and feel of your website. Use a custom theme to make your Checkout unique.',
    'Personalisation': 'Your users will see a selection of online payment methods recommended personally for them. Checkout memorises the latest and most used methods, as well as users\' info.',
    'Localisation': 'When enabled, Checkout can identify and adapt to the geolocation of a user in a snap, switching to the right language and displaying local payment methods first.',
    '"Remember me"': 'Show your appreciation to returning customers by eliminating the need for repeated payment data entry. Empower them to manage saved cards and payment methods.',
    'Abandoned cart recovery': 'In case your customer forgets to finalise the purchase, Checkout will automatically take care of his cart, saving it for them to return and proceed.',
    'Business model versatility': 'Accept payments regardless of your business type. Process online payments, donations, and subscription requests.',
    'A/B testing': 'Feel free to configure your Checkout and perform experiments in order to optimise business performance and discover what works best for you and your clients.',
  }


  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Title left, Description right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Optimise Payments
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              Maximise your payment success rates with BrosPay's advanced optimization tools. From smart routing to personalized checkout experiences, we help you convert more transactions and reduce costs.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {allFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 relative group"
                onMouseEnter={() => setActiveTooltip(feature)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {/* Checkmark Icon */}
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Feature Name */}
                <div className="flex-1 min-w-0">
                  <span className="text-[18px] text-gray-900 font-medium font-body block">{feature}</span>
                </div>
                
                {/* Info Icon */}
                <div className="relative flex-shrink-0">
                  <svg 
                    className="w-4 h-4 text-gray-500 cursor-pointer" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === feature && featureDescriptions[feature] && (
                    <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        {featureDescriptions[feature]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Gauge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <GaugeComponent
                value={conversionRate}
                type="semicircle"
                arc={{
                  width: 0.2,
                  padding: 0.005,
                  cornerRadius: 1,
                  subArcs: [
                    { limit: 20, color: '#3b82f6', showTick: true },
                    { limit: 30, color: '#60a5fa', showTick: true },
                    { limit: 40, color: '#10b981', showTick: true },
                    { limit: 60, color: '#fbbf24', showTick: true },
                    { limit: 70, color: '#f59e0b', showTick: true },
                    { limit: 90, color: '#ef4444', showTick: true },
                    { limit: 100, color: '#9ca3af', showTick: true },
                  ],
                }}
                pointer={{
                  type: 'needle',
                  elastic: true,
                  animationDelay: 0,
                }}
                labels={{
                  valueLabel: {
                    formatTextValue: (value) => `${value}%`,
                    style: {
                      fontSize: '42px',
                      fontWeight: '700',
                      fill: '#374151',
                      fontFamily: 'Outfit, sans-serif',
                    },
                  },
                  tickLabels: {
                    type: 'inner',
                    defaultTickValueConfig: {
                      formatTextValue: (value) => value.toString(),
                      style: {
                        fontSize: '14px',
                        fontWeight: '500',
                        fill: '#000',
                        fontFamily: 'Outfit, sans-serif',
                      },
                    },
                    ticks: [
                      { value: 0 },
                      { value: 10 },
                      { value: 20 },
                      { value: 30 },
                      { value: 40 },
                      { value: 50 },
                      { value: 60 },
                      { value: 70 },
                      { value: 80 },
                      { value: 90 },
                      { value: 100 },
                    ],
                  },
                }}
                minValue={0}
                maxValue={100}
              />
              {/* Conversion Rate Label */}
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm font-body">Conversion rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
