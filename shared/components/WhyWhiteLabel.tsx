'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Why White Label section component
 * Comparison between building your own vs choosing white label
 */
export function WhyWhiteLabel() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [showBuildingDetails, setShowBuildingDetails] = useState(false)
  const [showWhiteLabelDetails, setShowWhiteLabelDetails] = useState(false)

  const buildingSteps = [
    'Have a legal entity, trademark and domain registered',
    'Open a business bank account',
    'Get the necessary equipment',
    'Hire Developers',
    'Design and develop the payment software',
    'Purchase hardware security modules, tokenisation appliance, or both',
    'Build a server infrastructure and complete PCI DSS assessment',
    'Develop APIs to connect to the third-party providers',
    'Select and integrate with banks, processors, and gateways',
    'Establish partnerships and memberships with banks and payment systems',
    'Test, maintain and update your product constantly',
    'Consult with Compliance & Legal specialists',
    'Hire Sales and Marketing teams',
    'Hire Customer support specialists',
    'Regularly pass accounting, financial and compliance audits',
  ]

  const whiteLabelSteps = [
    'Have a legal entity, trademark and domain registered',
    'Open a business bank account',
    'Hire Sales and Marketing teams',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Why White Label Payment Service Provider Is Better Than Building Your Own
          </h2>
          <p className="text-[18px] text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
            Don't waste time and resources trying to develop something that industry experts have already done and are offering to you at a reasonable rate. Relying on a ready-made payment platform empowers you to switch focus from poking around the technical issues to handling business operations and building strong relationships with your clients.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Building Your Own */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">Building Your Own PSP With Limited Capabilities</h3>
                <p className="text-red-500 font-semibold font-body">Time-frame: no less than 2 years</p>
              </div>
            </div>

            <div className="space-y-3">
              {(showBuildingDetails ? buildingSteps : buildingSteps.slice(0, 5)).map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-gray-500 font-body">{index + 1}</span>
                  </div>
                  <span className="text-gray-600 text-sm font-body">{step}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowBuildingDetails(!showBuildingDetails)}
              className="mt-6 text-[#4730B8] font-semibold text-sm flex items-center gap-2 font-body"
            >
              {showBuildingDetails ? 'Show less' : 'Show all complexities'}
              <svg className={`w-4 h-4 transition-transform ${showBuildingDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Choosing White Label */}
          <div className="bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-2xl p-8 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Choosing White Label Payment Service Provider By ValoraPay</h3>
                <p className="text-green-300 font-semibold font-body">Time-frame: 1-2 months</p>
              </div>
            </div>

            <div className="space-y-3">
              {whiteLabelSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm font-body">{step}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowWhiteLabelDetails(!showWhiteLabelDetails)}
              className="mt-6 text-white/80 font-semibold text-sm flex items-center gap-2 font-body"
            >
              {showWhiteLabelDetails ? 'Show less' : 'Show all complexities'}
              <svg className={`w-4 h-4 transition-transform ${showWhiteLabelDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showWhiteLabelDetails && (
              <p className="mt-4 text-white/70 text-sm font-body">
                That's it! Everything else is handled by ValoraPay's white label solution.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

