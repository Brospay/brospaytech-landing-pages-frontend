'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Solve Time-Consuming Issues section component
 * Shows reconciliations, tracking, exports, alerts features
 */
export function SolveTimeConsumingIssues() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Instant Reconciliations',
      description: 'We automatically settle all your payment data into a single in-depth report. Handle exceptions instead of manual reconciliation of each transaction.',
    },
    {
      title: 'Tracking & Reporting',
      description: 'Monitor the batch payout performance in real time and generate any of our out-of-the-box reports in a few clicks or automatically on a regular basis.',
    },
    {
      title: 'Exports',
      description: 'All transactional data about payouts can be exported in .csv or .xls format.',
    },
    {
      title: 'Alerts',
      description: 'Set and configure alerts to be timely notified of reaching crucial figures or some error and malfunction occurring.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Solve Time-Consuming Issues
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Have the full visibility of your Batch payouts using the advanced set of additional tools provided by ValoraPay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Transaction Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900 font-heading">Transactions</h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 font-body">Last 24h</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Chart Area */}
              <div className="h-48 relative mb-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-gray-100"></div>
                  ))}
                </div>
                
                {/* Bars */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-[#4730B8] to-[#6B4DE6] rounded-t-lg"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 font-heading">1,247</div>
                  <div className="text-sm text-gray-500 font-body">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 font-heading">1,189</div>
                  <div className="text-sm text-gray-500 font-body">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 font-heading">58</div>
                  <div className="text-sm text-gray-500 font-body">Failed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-body">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

