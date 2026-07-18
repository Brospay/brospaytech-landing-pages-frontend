'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function IGamingReconciliation() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    'Import data from any source to manage it all in one spot',
    'Get all data flows harmonised automatically for your convenience',
    'Spot mismatches or discrepancies automatically and work with them directly',
  ]

  const reconciliationData = [
    {
      provider: 'Skrill',
      amount: '$1000.00',
      providerColor: 'bg-purple-600',
      providerStatus: 'correct',
      statusText: 'Correct',
    },
    {
      provider: 'stripe',
      amount: '$320.50',
      providerColor: 'bg-blue-600',
      providerStatus: 'correct',
      statusText: 'Correct',
    },
    {
      provider: 'VISA',
      amount: '$2200.00',
      providerColor: 'bg-blue-600',
      providerStatus: 'unknown',
      statusText: 'Status',
    },
    {
      provider: 'NETELLER',
      amount: '$580.80',
      providerColor: 'bg-green-600',
      providerStatus: 'mismatch',
      statusText: 'Amount',
    },
    {
      provider: 'Apple Pay',
      amount: '$249.99',
      providerColor: 'bg-black',
      providerStatus: 'foreign',
      statusText: 'Foreign',
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct':
        return (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )
      case 'unknown':
        return (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'mismatch':
        return (
          <span className="text-white font-bold text-xs">!!!</span>
        )
      case 'foreign':
        return (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        )
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'correct':
        return 'bg-green-500'
      case 'unknown':
        return 'bg-gray-400'
      case 'mismatch':
      case 'foreign':
        return 'bg-red-500'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Automated Reconciliation for Growth
              </h2>
              <span className="bg-[#FCD34D] text-gray-900 text-xs font-bold px-2 py-1 rounded font-body">
                NEW!
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
              Fully scalable solution to organise and unify transaction data
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Reconciliation Table */}
          <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-300">
              <div className="text-sm font-bold text-gray-900 font-heading">Payment in system</div>
              <div className="text-sm font-bold text-gray-900 font-heading">Provider payment</div>
              <div className="text-sm font-bold text-gray-900 font-heading">Status</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {reconciliationData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center">
                  {/* Payment in system */}
                  <div className="flex items-center gap-2">
                    <div className={`${row.providerColor} text-white px-3 py-2 rounded-lg font-semibold text-sm font-body`}>
                      {row.provider === 'Apple Pay' ? (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                          <span>Pay</span>
                        </div>
                      ) : (
                        row.provider
                      )}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 font-body">{row.amount}</span>
                  </div>

                  {/* Provider payment */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FCD34D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                    <div className={`w-8 h-8 ${getStatusColor(row.providerStatus)} rounded-lg flex items-center justify-center`}>
                      {getStatusIcon(row.providerStatus)}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    {row.providerStatus !== 'unknown' ? (
                      <svg className="w-5 h-5 text-[#FCD34D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    )}
                    <div className={`px-4 py-2 ${getStatusColor(row.providerStatus)} rounded-full flex items-center gap-2`}>
                      {getStatusIcon(row.providerStatus)}
                      <span className="text-white text-sm font-semibold font-body">{row.statusText}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

