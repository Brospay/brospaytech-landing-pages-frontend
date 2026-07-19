'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingAnalytics() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const insights = [
    'Payment success rates',
    'Payment fraud rates',
    'Payment dispute and chargeback rates',
    'And much more!',
  ]

  const paymentMethods = [
    { name: 'Visa', percentage: 48.16, color: 'bg-green-500', count: '2,370', balance: '1860,00 $' },
    { name: 'Mastercard', percentage: 35.87, color: 'bg-[#4730B8]', count: '1,765', balance: '550,25 €' },
    { name: 'Giropay', percentage: 13.66, color: 'bg-red-500', count: '672', balance: '400,50 £' },
    { name: 'AMEX', percentage: 1.6, color: 'bg-blue-500', count: '79', balance: '389,99 $' },
    { name: 'Sofort', percentage: 0.71, color: 'bg-gray-400', count: '35', balance: '60,00 €' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Live All-Out View of Business Performance
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
              BrosPay's Analytics gathers all your data under one roof, enabling you to inform your business decisions, optimise offerings, and stay ahead of the competition.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
              Transform previously disjointed data into visual insights on:
            </p>

            {/* Numbered List */}
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm font-body">{index + 1}</span>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Dashboard */}
          <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Conversation Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-body">Conversation</h3>
                <div className="relative h-32">
                  {/* Chart Area */}
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {/* Shaded area */}
                    <defs>
                      <linearGradient id="conversationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 60 Q 30 50, 50 45 T 100 40 Q 130 35, 150 30 T 200 25 L 200 100 L 0 100 Z"
                      fill="url(#conversationGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M 0 60 Q 30 50, 50 45 T 100 40 Q 130 35, 150 30 T 200 25"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Data points */}
                    <circle cx="30" cy="50" r="3" fill="#3B82F6" />
                    <text x="30" y="45" fontSize="8" fill="#3B82F6" fontFamily="Arial" fontWeight="bold">97.56%</text>
                    <circle cx="100" cy="40" r="3" fill="#3B82F6" />
                    <text x="100" y="35" fontSize="8" fill="#3B82F6" fontFamily="Arial" fontWeight="bold">98.00%</text>
                  </svg>
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 font-body px-2">
                    <span>8:00</span>
                    <span>10:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                  </div>
                </div>
              </div>

              {/* Top Right - Chart by Methods */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-body">Chart by Methods</h3>
                <div className="flex gap-4">
                  {/* Pie Chart */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Pie segments */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="none" />
                      <path
                        d="M 50 50 L 50 10 A 40 40 0 0 1 80 20 Z"
                        fill="#10B981"
                      />
                      <path
                        d="M 50 50 L 80 20 A 40 40 0 0 1 90 50 Z"
                        fill="#4730B8"
                      />
                      <path
                        d="M 50 50 L 90 50 A 40 40 0 0 1 70 80 Z"
                        fill="#EF4444"
                      />
                      <path
                        d="M 50 50 L 70 80 A 40 40 0 0 1 30 80 Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M 50 50 L 30 80 A 40 40 0 0 1 50 10 Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                  {/* Legend */}
                  <div className="flex-1 space-y-1">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between text-xs font-body">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded ${method.color}`}></div>
                          <span className="text-gray-700">{method.name}</span>
                        </div>
                        <span className="text-gray-900 font-semibold">{method.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Left - Balance Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-body">Balance</h3>
                <div className="relative h-32">
                  {/* Chart Area */}
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {/* Shaded area */}
                    <defs>
                      <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4730B8" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4730B8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 30 70, 50 60 T 100 50 Q 130 40, 150 30 T 200 20 L 200 100 L 0 100 Z"
                      fill="url(#balanceGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M 0 80 Q 30 70, 50 60 T 100 50 Q 130 40, 150 30 T 200 20"
                      stroke="#4730B8"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Data points */}
                    <circle cx="30" cy="70" r="3" fill="#4730B8" />
                    <text x="30" y="65" fontSize="7" fill="#4730B8" fontFamily="Arial" fontWeight="bold">+26,000$</text>
                    <circle cx="100" cy="50" r="3" fill="#4730B8" />
                    <text x="100" y="45" fontSize="7" fill="#4730B8" fontFamily="Arial" fontWeight="bold">+48,500$</text>
                    <circle cx="150" cy="30" r="3" fill="#4730B8" />
                    <text x="150" y="25" fontSize="7" fill="#4730B8" fontFamily="Arial" fontWeight="bold">+15,200$</text>
                  </svg>
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 font-body px-2">
                    <span>8:00</span>
                    <span>10:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Method Table */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-body">Method</h3>
                <div className="space-y-2">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between text-xs border-b border-gray-100 pb-2 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${method.color}`}></div>
                        <span className="text-gray-900 font-semibold font-body">{method.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600 font-body">{method.count}</span>
                        <span className="text-gray-900 font-semibold font-body">{method.balance}</span>
                      </div>
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

