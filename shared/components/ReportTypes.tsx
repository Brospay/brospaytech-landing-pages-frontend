'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Report Types section component
 * Shows Payments/Payouts, Merchants, Providers reports with tooltips
 */
export function ReportTypes() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const reportCategories = [
    {
      title: 'Payments & Payouts',
      reports: [
        {
          name: 'Transactions summary report',
          description: 'Shows all transaction data over a period of time, including the amount, commission, balance, currency, description, service code, etc.',
        },
        {
          name: 'Transaction details report',
          description: 'Provides information on all distributed and undistributed transactions over a period of time, including payment method and transaction type.',
        },
        {
          name: 'Declined transactions report',
          description: 'Outstanding failed payments report. Provides a list of customers with outstanding failed payments that require a follow-up.',
        },
        { name: 'Transactions currency report', description: '' },
        { name: 'Transactions method report', description: '' },
        { name: 'Transactions service report', description: '' },
        { name: 'Transactions provider report', description: '' },
        { name: 'Transactions type report', description: '' },
      ],
    },
    {
      title: 'Merchants',
      reports: [
        {
          name: 'Trial balance report',
          description: 'Provides financial analytics on opening and closing balances, as well as on debit and credit turnover for a selected period for every account used.',
        },
        {
          name: 'Distribution report',
          description: 'Provides payment gateway analytics on the distribution of billings that have been collected from your customers through direct debit.',
        },
        {
          name: 'Organisation distribution report',
          description: 'Provides financial analytics on the distribution of billings that have been collected from all business sites through subscription billing.',
        },
        { name: 'Conversion rates report', description: '' },
        {
          name: 'Trend analysis report',
          description: 'Provides payment processing analytics on your business progress on a month-to-month basis.',
        },
        { name: 'Commission income report', description: '' },
      ],
    },
    {
      title: 'Providers',
      reports: [
        { name: 'Conversion rates report', description: '' },
        { name: 'Balance report', description: '' },
        { name: 'Turnover report', description: '' },
      ],
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Create A Report Of Any Kind In No Time
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Select any of our <strong>out-of-the-box reports</strong> and have them on hand right away, or create a custom report for specific business needs. Opt for auto-generation to receive fresh reports on a regular basis.
          </p>
        </div>

        {/* Report Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reportCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">{category.title}</h3>
              <div className="space-y-3">
                {category.reports.map((report, reportIndex) => (
                  <div
                    key={reportIndex}
                    className="flex items-center gap-3 relative"
                    onMouseEnter={() => report.description && setActiveTooltip(`${categoryIndex}-${reportIndex}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-body flex-1">{report.name}</span>
                    {report.description && (
                      <div className="relative">
                        <svg
                          className="w-4 h-4 text-[#4730B8] cursor-pointer"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {activeTooltip === `${categoryIndex}-${reportIndex}` && (
                          <div className="absolute right-0 top-6 z-50 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
                            <p className="text-sm font-body">{report.description}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

