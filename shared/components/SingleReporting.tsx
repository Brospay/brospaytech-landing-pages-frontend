'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Single Reporting section component
 * Shows 6 reporting features with chart
 */
export function SingleReporting() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Direct DB connection',
      description: 'Quickly and effectively monitor status, resolutions, amounts, and other necessary data on all operations.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Exports to .xls, .csv',
      description: 'Filter the appropriate transaction data and export it from the payment management software.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: '25+ predefined reports',
      description: 'Create reports anywhere and anytime, and reduce your effort and costs.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Automated report scheduling',
      description: 'Choose and receive specific reports with rich and insightful data.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Real-time conversion monitoring',
      description: 'Monitor all online payments and analyse the conversion rate.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Alerting',
      description: 'Get notified of any failovers, divergences or specific incidents.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ]

  const stores = [
    { name: 'Store 1', color: '#FFD700', rate: 95 },
    { name: 'Store 2', color: '#EF4444', rate: 85 },
    { name: 'Store 3', color: '#4730B8', rate: 75 },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Single Reporting For Multiple Sites
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            <strong>Create customised report formats</strong> and access detailed turnover reports, demographic reports and competition analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 font-heading pt-1">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-600 font-body">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right - Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-6 font-heading">Conversion rates chart</h4>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              {stores.map((store, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: store.color }}></div>
                  <span className="text-sm text-gray-600 font-body">{store.name}</span>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="space-y-4">
              {stores.map((store, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-body">{store.name}</span>
                    <span className="font-semibold font-body" style={{ color: store.color }}>{store.rate}%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${store.rate}%`, backgroundColor: store.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Y-Axis Labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-4 font-body">
              <span>55%</span>
              <span>65%</span>
              <span>75%</span>
              <span>85%</span>
              <span>95%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

