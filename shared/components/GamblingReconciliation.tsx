'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingReconciliation() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    'Stay in control of business performance',
    'Monitor the incoming and outgoing flows',
    'Analyse discrepancies and pinpoint bottlenecks and fraud',
    'Track all mismatches and errors made by banks or providers',
    'Identify trends',
  ]

  const reconciliationData = [
    {
      provider: 'Skrill',
      amount: '$1,000.00',
      providerColor: 'bg-purple-600',
      providerAmount: '$1,000.00',
      status: 'correct',
    },
    {
      provider: 'stripe',
      amount: '$320.50',
      providerColor: 'bg-blue-600',
      providerAmount: '$320.50',
      status: 'correct',
    },
    {
      provider: 'VISA',
      amount: '$2,200.00',
      providerColor: 'bg-blue-600',
      providerAmount: '$2,200.00',
      status: 'correct',
    },
    {
      provider: 'NETELLER',
      amount: '$580.80',
      providerColor: 'bg-green-600',
      providerAmount: '$580.80',
      status: 'correct',
    },
    {
      provider: 'Apple Pay',
      amount: '$249.99',
      providerColor: 'bg-black',
      providerAmount: '$249.99',
      status: 'correct',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Reconciliation Table */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-300">
              <div className="text-sm font-semibold text-gray-500 font-body">Payment in system</div>
              <div className="text-sm font-semibold text-gray-500 font-body">Provider payment</div>
              <div className="text-sm font-semibold text-gray-500 font-body">Status</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {reconciliationData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center">
                  {/* Payment in system */}
                  <div className="flex items-center gap-3">
                    <div className={`${row.providerColor} text-white px-3 py-2 rounded-lg font-semibold text-sm font-body flex items-center justify-center min-w-[80px]`}>
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
                    <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Provider payment */}
                  <div className="text-sm font-semibold text-gray-900 font-body">
                    {row.providerAmount}
                  </div>

                  {/* Status */}
                  <div className="flex items-center">
                    <div className="px-4 py-2 bg-green-500 rounded-full flex items-center gap-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-sm font-semibold font-body">Correct</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Header and Benefits/Features List */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
                  Monitor Company's Financial Health
                </h2>
                <span className="bg-[#FCD34D] text-gray-900 text-sm font-bold px-3 py-1 rounded-full font-body">
                  NEW!
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-body">
                Organise and unify gambling payments transaction data with fully-equipped reconciliation software for gambling businesses.
              </p>
            </div>

            {/* Benefits/Features List */}
            <div className="space-y-4 mb-8">
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
            <a
              href="/reconciliations"
              className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#5a42c9] transition-colors font-body"
            >
              Learn more about Reconciliations
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

