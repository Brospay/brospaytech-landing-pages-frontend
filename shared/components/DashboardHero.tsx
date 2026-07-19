'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dashboard Hero section component
 * Features transaction table visualization
 */
export function DashboardHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  const transactions = [
    { status: 'Success', amount: '$1,250.00', method: 'Visa', id: 'TXN-001234', date: '2024-01-15' },
    { status: 'Success', amount: '$890.50', method: 'Mastercard', id: 'TXN-001235', date: '2024-01-15' },
    { status: 'Pending', amount: '$2,100.00', method: 'Stripe', id: 'TXN-001236', date: '2024-01-15' },
    { status: 'Success', amount: '$450.00', method: 'PayPal', id: 'TXN-001237', date: '2024-01-14' },
    { status: 'Failed', amount: '$780.00', method: 'Skrill', id: 'TXN-001238', date: '2024-01-14' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-700'
      case 'Pending': return 'bg-yellow-100 text-yellow-700'
      case 'Failed': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              All-In-One Payment Dashboard For Your Business
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              Payment processes in your business are a thousand-piece jigsaw puzzle you are trying to complete. Payment Dashboard by BrosPay is that final piece to snugly fit the blank space and make the overall picture perfect and understandable. Just sit back and admire the seamless flow of your transactions.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contacts"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Get in touch
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Dashboard Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-[10px] bg-red-400"></div>
                <div className="w-3 h-3 rounded-[10px] bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-[10px] bg-green-400"></div>
                <span className="ml-4 text-white/70 text-sm font-body">BrosPay Dashboard</span>
              </div>

              {/* Dashboard Content */}
              <div className="p-4">
                {/* Table Header */}
                <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-gray-500 mb-2 font-body">
                  <span>Status</span>
                  <span>Amount</span>
                  <span>Method</span>
                  <span>Transaction ID</span>
                  <span>Date</span>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  {transactions.map((txn, index) => (
                    <div key={index} className="grid grid-cols-5 gap-2 items-center bg-gray-50 rounded-lg p-2 text-xs">
                      <span className={`px-2 py-1 rounded-[10px] text-center ${getStatusColor(txn.status)} font-body`}>
                        {txn.status}
                      </span>
                      <span className="font-semibold text-gray-900 font-body">{txn.amount}</span>
                      <span className="text-gray-600 font-body">{txn.method}</span>
                      <span className="text-gray-500 font-mono">{txn.id}</span>
                      <span className="text-gray-500 font-body">{txn.date}</span>
                    </div>
                  ))}
                </div>

                {/* Payment Method Icons */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  {['V', 'M', 'S', 'P', 'N'].map((letter, index) => (
                    <div key={index} className="w-8 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-500">{letter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

