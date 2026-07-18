'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Divide et Impera section component
 * Shows Aggregate and Segregate features
 */
export function DivideEtImpera() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const aggregateFeatures = [
    { bold: 'Monitor', text: 'each sub-entity data and get detailed insights from one source' },
    { bold: 'Consolidate', text: "all data to headquarters' payer entity automatically" },
    { bold: 'Reports and forecasts', text: 'to track KPI and analyse competition' },
    { bold: 'Single dashboard', text: 'to manage all day-to-day operations' },
    { bold: 'Compliant and efficient', text: 'way to roll it all up for headquarters' },
  ]

  const segregateFeatures = [
    { bold: 'Multiple currencies', text: 'with the auto-conversion feature' },
    { bold: 'Customised report formats', text: 'to access detailed turnover and demographic reports' },
    { bold: 'Split the cash flow', text: 'between multiple projects using common merchant accounts' },
    { bold: 'Unique workflow', text: 'for each entity to operate independently' },
    { bold: 'Segment information', text: 'for audit preparedness, financial control, and fraud prevention' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Divide Et Impera!
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Get a unified merchant payment management software for headquarters to manage all data.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Aggregate */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#E8E4FF] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Aggregate</h3>
            </div>
            <div className="space-y-4">
              {aggregateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-body">
                    <strong className="text-gray-900">{feature.bold}</strong> {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Segregate */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#E8E4FF] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Segregate</h3>
            </div>
            <div className="space-y-4">
              {segregateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-body">
                    <strong className="text-gray-900">{feature.bold}</strong> {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

