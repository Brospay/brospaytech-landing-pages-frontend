'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Analyse Payouts section component
 * Shows analytics features: metrics, reports, DB access, alerts
 */
export function AnalysePayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const analyseFeatures = [
    {
      title: 'Real-time metrics',
      description: 'Track your operational and analytical KPIs in real time and make your business more efficient by proactively monitoring all the key metrics.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Consolidated reports',
      description: 'Select any of our out-of-the-box reports and have them on hand right away, or generate regular reports automatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Direct access to unified DB',
      description: 'Directly access and extract information from your database for all your business activities on BrosPay.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Alerts',
      description: 'Receive instant notifications when reaching crucial figures or any malfunctions occurring.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Analyse Payouts
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            Make better-informed decisions by accessing real-time transactions data and instant in-depth reports on all aspects of your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyseFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors relative"
              onMouseEnter={() => setActiveTooltip(feature.title)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* Icon */}
              <div className="text-[#4730B8] mb-4">
                {feature.icon}
              </div>

              {/* Title with Info Icon */}
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-white font-heading pr-2">
                  {feature.title}
                </h3>
                <div className="relative flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#4730B8] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === feature.title && (
                    <div className="absolute right-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

