'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Track and Optimise Performance section component
 * Shows dashboard with analytics and three-step process
 */
export function ForexTrackOptimise() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const steps = [
    {
      number: '1',
      title: 'Collect.',
      description: 'Automated aggregation of all your business data.',
    },
    {
      number: '2',
      title: 'Normalise.',
      description: 'Turn previously disjointed data into actionable insights.',
    },
    {
      number: '3',
      title: 'Analyse.',
      description: 'Auto-generated reports with multiple export options.',
    },
  ]

  const paymentMethods = [
    { name: 'Skrill', color: 'bg-indigo-500', count: 2370, balance: '1,860.00 USD' },
    { name: 'WeChat Pay', color: 'bg-green-500', count: 1765, balance: '550.25 EUR' },
    { name: 'Alipay', color: 'bg-blue-400', count: 672, balance: '400.50 GBP' },
    { name: 'Bitcoin', color: 'bg-orange-500', count: 79, balance: '389.99 BTC' },
    { name: 'Sepa', color: 'bg-blue-600', count: 35, balance: '60.00 USD' },
  ]

  const pieChartData = [
    { name: 'Skrill', color: 'bg-indigo-500', percentage: 35 },
    { name: 'WeChat Pay', color: 'bg-green-500', percentage: 28 },
    { name: 'Alipay', color: 'bg-blue-400', percentage: 18 },
    { name: 'Bitcoin', color: 'bg-orange-500', percentage: 12 },
    { name: 'Sepa', color: 'bg-blue-600', percentage: 5 },
    { name: 'Others', color: 'bg-gray-300', percentage: 2 },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Track and Optimise Your Performance
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-body">
              Manage payment process and all day-to-day operations from a single dashboard.
            </p>

            {/* Steps with Primary Color Numbering */}
            <div className="relative">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 mb-8 relative">
                  {/* Primary Color Circle with Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#4730B8] flex items-center justify-center font-bold text-white text-lg font-heading z-10 relative">
                      {step.number}
                    </div>
                    {/* Primary color connecting line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-[#4730B8]"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard */}
          <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Pie Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-heading">Top 5 Methods</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="relative w-24 h-24 mx-auto">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="20"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="20"
                          strokeDasharray={`${35 * 2.513} ${251.3}`}
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="20"
                          strokeDasharray={`${28 * 2.513} ${251.3}`}
                          strokeDashoffset={`-${35 * 2.513}`}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="20"
                          strokeDasharray={`${18 * 2.513} ${251.3}`}
                          strokeDashoffset={`-${(35 + 28) * 2.513}`}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="20"
                          strokeDasharray={`${12 * 2.513} ${251.3}`}
                          strokeDashoffset={`-${(35 + 28 + 18) * 2.513}`}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="20"
                          strokeDasharray={`${5 * 2.513} ${251.3}`}
                          strokeDashoffset={`-${(35 + 28 + 18 + 12) * 2.513}`}
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {pieChartData.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-xs text-gray-600 font-body">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Right - Bar Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-heading">Account overview</h3>
                <div className="space-y-2">
                  {['19.05', '20.05', '21.05', '22.05'].map((date, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs text-gray-600 w-12 font-body">{date}</span>
                      <div className="flex-1 flex gap-1">
                        {[8, 9, 10, 11, 12, 13, 14].map((hour, hIdx) => {
                          const colors = ['bg-blue-500', 'bg-orange-500', 'bg-indigo-500', 'bg-green-500']
                          const hasBar = Math.random() > 0.6
                          return (
                            <div
                              key={hIdx}
                              className={`flex-1 ${hasBar ? colors[Math.floor(Math.random() * colors.length)] : 'bg-gray-100'} rounded`}
                              style={{ height: hasBar ? `${Math.random() * 20 + 10}px` : '4px' }}
                            ></div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-1 mt-2 justify-end">
                  {['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map((time, idx) => (
                    <span key={idx} className="text-xs text-gray-500 flex-1 text-center font-body">{time}</span>
                  ))}
                </div>
              </div>

              {/* Bottom Left - Table */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-heading">Transactions by Method</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${method.color}`}></div>
                        <span className="text-sm text-gray-900 font-body">{method.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900 font-body">{method.count}</div>
                        <div className="text-xs text-gray-600 font-body">{method.balance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Right - Line Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-heading">Balance</h3>
                <div className="relative h-32">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Previous week line (blue) */}
                    <polyline
                      points="0,60 30,55 60,50 90,45 120,40 150,35 180,30"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    <polygon
                      points="0,60 30,55 60,50 90,45 120,40 150,35 180,30 180,100 0,100"
                      fill="url(#blueGradient)"
                      opacity="0.3"
                    />
                    {/* Current week line (green) */}
                    <polyline
                      points="0,80 30,70 60,50 90,30 120,20 150,15 180,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <polygon
                      points="0,80 30,70 60,50 90,30 120,20 150,15 180,10 180,100 0,100"
                      fill="url(#greenGradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Data points */}
                    <circle cx="60" cy="50" r="3" fill="#3b82f6" />
                    <text x="60" y="45" fontSize="8" fill="#3b82f6" textAnchor="middle">$215.00</text>
                    <circle cx="90" cy="45" r="3" fill="#3b82f6" />
                    <text x="90" y="40" fontSize="8" fill="#3b82f6" textAnchor="middle">$170.00</text>
                    <circle cx="120" cy="20" r="3" fill="#10b981" />
                    <text x="120" y="15" fontSize="8" fill="#10b981" textAnchor="middle">$620.25</text>
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 font-body">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-gray-600 font-body">Previous week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-600 font-body">Current week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

