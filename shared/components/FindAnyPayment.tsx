'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Find Any Payment section component
 * Shows search functionality for transactions
 */
export function FindAnyPayment() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const searchFeatures = [
    { bold: 'Search', text: 'queries' },
    { bold: 'Time', text: 'periods' },
    { bold: 'Transaction', text: 'status' },
    { bold: 'Used payment', text: 'methods' },
  ]

  const transactions = [
    { id: 'TXN-001234', amount: '$1,250.00', status: 'Success', method: 'Visa', date: '2024-01-15 14:30' },
    { id: 'TXN-001235', amount: '$890.50', status: 'Success', method: 'Mastercard', date: '2024-01-15 13:45' },
    { id: 'TXN-001236', amount: '$2,100.00', status: 'Pending', method: 'Stripe', date: '2024-01-15 12:20' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Transaction Grid */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by ID, amount, or method..."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none font-body"
                  readOnly
                />
              </div>
            </div>

            {/* Results */}
            <div className="p-4">
              <div className="space-y-3">
                {transactions.map((txn, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-[#E8E4FF] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4730B8] flex items-center justify-center">
                        <span className="text-white font-bold text-sm font-body">{txn.method[0]}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 font-body">{txn.id}</p>
                        <p className="text-xs text-gray-500 font-body">{txn.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900 font-body">{txn.amount}</p>
                      <p className={`text-xs ${txn.status === 'Success' ? 'text-green-600' : 'text-yellow-600'} font-body`}>
                        {txn.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Find Any Payment
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-body">
              Search for necessary transactions by ID or external ID you supplied regardless of transaction origins. Get the results displayed in a convenient grid form and grouped by sections. Each of the results in the payment Dashboard typically includes an amount, a merchant or deposit account name, transaction status, resolution, time, and date. By clicking on a search result, you'll be pointed to the actual transaction.
            </p>
            <div className="flex flex-wrap gap-3">
              {searchFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#E8E4FF] rounded-full px-4 py-2">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-body">
                    <strong className="text-gray-900">{feature.bold}</strong>{' '}
                    <span className="text-gray-600">{feature.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

