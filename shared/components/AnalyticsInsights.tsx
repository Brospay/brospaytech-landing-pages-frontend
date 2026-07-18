'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Analytics Insights section component
 * Shows 4 tabs: Risk Management, Finance, Business Development, Operations Management
 */
export function AnalyticsInsights() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTab, setActiveTab] = useState('risk')

  const tabs = [
    { id: 'risk', label: 'Risk management' },
    { id: 'finance', label: 'Finance' },
    { id: 'business', label: 'Business development' },
    { id: 'operations', label: 'Operations management' },
  ]

  const insights: Record<string, string[]> = {
    risk: [
      'What is the transaction history of a user that filed a chargeback?',
      'Which users initiate transactions from different IP addresses?',
      'Are there any users that have filed a chargeback more than once?',
    ],
    finance: [
      'How has our revenue changed over time?',
      "What are our merchant accounts' balances?",
      'What is our monthly turnover?',
    ],
    business: [
      'What is our average monthly turnover per client?',
      'From where are our customers paying and with which payment instruments?',
      'What is our shopping cart abandonment rate?',
    ],
    operations: [
      "What's our cost per transaction?",
      'What are the main reasons for declines?',
      'What is the average transaction processing time?',
      'What are our key metrics at the moment?',
      'How many users retry a payment if it fails the first time?',
    ],
  }

  const analyseFeatures = [
    {
      title: 'Key in on details or rise above them',
      description: 'Switch between detailed and helicopter view for better decision making and troubleshooting.',
    },
    {
      title: 'Discern more opportunities',
      description: 'Transform previously disjointed data into insights for optimising processes and costs.',
    },
    {
      title: 'Facilitate internal communication',
      description: 'Grant your teammates fast access to information necessary for moving your business forward.',
    },
    {
      title: 'Produce reports effortlessly',
      description: 'Turn reports from a resource-draining activity into a helpful tool for business development.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Analyse Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analyseFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-[10px] bg-[#E8E4FF] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 font-heading">{feature.title}</h3>
              <p className="text-sm text-gray-600 font-body">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="text-center mb-8">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Insights
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-[10px] font-semibold transition-colors font-body ${
                activeTab === tab.id
                  ? 'bg-[#4730B8] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Insights Content */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="space-y-4">
            {insights[activeTab].map((insight, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#E8E4FF] transition-colors"
              >
                <div className="w-8 h-8 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-body">{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

