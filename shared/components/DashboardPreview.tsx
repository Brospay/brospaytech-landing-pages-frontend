'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Dashboard Preview section component
 * Shows single dashboard for all activity
 */
export function DashboardPreview() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Single Dashboard For All Activity
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-body">
              Payment processes in your business are a thousand-piece jigsaw puzzle you are trying to complete. Dashboard by ValoraPay is that final piece to snugly fit the blank space and make the overall picture perfect and understandable. Just sit back and admire the seamless flow of your transactions.
            </p>
            <Link
              href="#dashboard"
              className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#5a40d0] transition-colors font-body"
            >
              Explore the Dashboard
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right - Dashboard Visualization */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Dashboard Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1 font-body">Total Revenue</div>
                  <div className="text-xl font-bold text-gray-900 font-heading">$124,500</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1 font-body">Transactions</div>
                  <div className="text-xl font-bold text-gray-900 font-heading">8,234</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1 font-body">Success Rate</div>
                  <div className="text-xl font-bold text-green-600 font-heading">94.5%</div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-3 font-body">Transaction Volume</div>
                <div className="flex items-end gap-1 h-24">
                  {[40, 60, 45, 80, 55, 70, 50, 90, 65, 75, 85, 60].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-[#4730B8] to-[#6B4DE6] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-3 font-body">Recent Transactions</div>
                <div className="space-y-2">
                  {[
                    { id: 'TXN-001', amount: '$250.00', status: 'Success' },
                    { id: 'TXN-002', amount: '$180.50', status: 'Success' },
                    { id: 'TXN-003', amount: '$420.00', status: 'Pending' },
                  ].map((txn, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-mono">{txn.id}</span>
                      <span className="text-xs font-semibold text-gray-900 font-body">{txn.amount}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-body ${
                        txn.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {txn.status}
                      </span>
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

