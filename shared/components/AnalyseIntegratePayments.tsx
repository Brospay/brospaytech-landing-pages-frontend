'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { useState } from 'react'
import Link from 'next/link'

interface AnalyseIntegratePaymentsProps {
  type?: 'payments' | 'payouts'
}

/**
 * Analyse & Integrate Payments/Payouts section component
 * Features payment/payout analysis, charts, and integration tools
 */
export function AnalyseIntegratePayments({ type = 'payments' }: AnalyseIntegratePaymentsProps = {}) {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTab, setActiveTab] = useState<'create' | 'callback'>('create')
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const isPayouts = type === 'payouts'

  // Chart data for conversion rates
  const chartData = [
    { time: '13:15:48', store1: 88, store2: 72, store3: 58 },
    { time: '13:15:50', store1: 92, store2: 78, store3: 62 },
    { time: '13:15:52', store1: 85, store2: 75, store3: 60 },
    { time: '13:15:54', store1: 95, store2: 82, store3: 64 },
    { time: '13:15:56', store1: 89, store2: 79, store3: 61 },
    { time: '13:15:58', store1: 93, store2: 81, store3: 63 },
  ]

  const analyseFeatures = isPayouts
    ? [
        {
          title: 'Real-time metrics',
          description: 'Monitor your payout performance with live data updates and instant insights.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
        },
        {
          title: 'Consolidated reports',
          description: 'Get comprehensive reports that combine data from all your payout sources in one place.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
        },
        {
          title: 'Direct access to unified DB',
          description: 'Access all your payout data directly from our unified database with full query capabilities.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          title: 'Alerts',
          description: 'Stay informed with real-time alerts for important events, anomalies, and system updates.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: 'Real-time metrics',
          description: 'Monitor your payment performance with live data updates and instant insights.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          title: 'Consolidated reports',
          description: 'Get comprehensive reports that combine data from all your payment sources in one place.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
        },
        {
          title: 'Direct access to unified DB',
          description: 'Access all your transaction data directly from our unified database with full query capabilities.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          title: 'Alerts',
          description: 'Stay informed with real-time alerts for important events, anomalies, and system updates.',
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          ),
        },
      ]

  const integrateFeatures = isPayouts
    ? [
        {
          title: 'APIs',
          description: 'We offer both server and client APIs, along with detailed API references with thorough guides.',
        },
        {
          title: 'SDKs',
          description: 'Our software development kits give you the freedom to build your own custom integration.',
        },
        {
          title: 'Docs',
          description: 'We provide simple and complete integration & usage instructions.',
        },
        {
          title: 'Callbacks',
          description: 'Be automatically notified of everything that happens to your transactions.',
        },
      ]
    : [
        {
          title: 'APIs',
          description: "We offer both server and client APIs, along with detailed API references with thorough guides.",
        },
        {
          title: 'SDKs',
          description: "Our software development kits give you the freedom to build your own custom integration.",
        },
        {
          title: 'Docs',
          description: "Get started right away with our clear and applicable documentation.",
        },
        {
          title: 'Callbacks',
          description: "Be automatically notified of everything that happens to your transactions.",
        },
      ]

  // Pie chart data for payouts
  const pieData = [
    { label: 'Success', value: 84, color: '#4730B8' }, // Primary purple
    { label: 'Pending', value: 10, color: '#a78bfa' }, // Light purple
    { label: 'Cancelled', value: 5, color: '#d1d5db' }, // Gray
    { label: 'Failed', value: 1, color: '#3a26a0' }, // Dark purple
  ]

  // Calculate pie chart paths
  const pieSize = 280
  const pieRadius = pieSize / 2
  const pieCenter = pieSize / 2
  let currentAngle = -90 // Start from top

  const getPiePath = (value: number, index: number) => {
    const percentage = value / 100
    const angle = percentage * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const startAngleRad = (startAngle * Math.PI) / 180
    const endAngleRad = (endAngle * Math.PI) / 180

    const x1 = pieCenter + pieRadius * Math.cos(startAngleRad)
    const y1 = pieCenter + pieRadius * Math.sin(startAngleRad)
    const x2 = pieCenter + pieRadius * Math.cos(endAngleRad)
    const y2 = pieCenter + pieRadius * Math.sin(endAngleRad)

    const largeArcFlag = angle > 180 ? 1 : 0

    return `M ${pieCenter} ${pieCenter} L ${x1} ${y1} A ${pieRadius} ${pieRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
  }

  // Reset angle for rendering
  const resetPieAngle = () => {
    currentAngle = -90
  }

  // Calculate chart dimensions and points (for payments)
  const chartWidth = 500
  const chartHeight = 200
  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  const graphWidth = chartWidth - padding.left - padding.right
  const graphHeight = chartHeight - padding.top - padding.bottom
  const yMin = 55
  const yMax = 95
  const yRange = yMax - yMin

  const getX = (index: number) => {
    return padding.left + (index / (chartData.length - 1)) * graphWidth
  }

  const getY = (value: number) => {
    return padding.top + graphHeight - ((value - yMin) / yRange) * graphHeight
  }

  // Generate area paths for each store
  const getAreaPath = (storeKey: 'store1' | 'store2' | 'store3', baseY: number) => {
    let path = `M ${getX(0)} ${baseY}`
    chartData.forEach((point, index) => {
      path += ` L ${getX(index)} ${getY(point[storeKey])}`
    })
    path += ` L ${getX(chartData.length - 1)} ${baseY} Z`
    return path
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-20 lg:space-y-24">
            {/* Chart Section */}
            {isPayouts ? (
              /* Pie Chart for Payouts */
              <div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-sm">
                  <svg viewBox={`0 0 ${pieSize} ${pieSize}`} className="w-full h-auto max-w-[280px] mx-auto">
                    {(() => {
                      resetPieAngle()
                      return pieData.map((segment, index) => (
                        <path
                          key={index}
                          d={getPiePath(segment.value, index)}
                          fill={segment.color}
                          stroke="#1f2937"
                          strokeWidth="2"
                        />
                      ))
                    })()}
                  </svg>
                  {/* Legend */}
                  <div className="flex flex-wrap items-center gap-4 mt-6 justify-center">
                    {pieData.map((segment, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded"
                          style={{ backgroundColor: segment.color }}
                        ></div>
                        <span className="text-sm text-gray-300 font-body">{segment.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Conversion Rates Chart for Payments */
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 font-heading">
                  Conversion rates chart
                </h3>
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto">
                  {/* Y-axis labels */}
                  {[55, 65, 75, 85, 95].map((value) => (
                    <g key={value}>
                      <line
                        x1={padding.left}
                        y1={getY(value)}
                        x2={chartWidth - padding.right}
                        y2={getY(value)}
                        stroke="#4b5563"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={padding.left - 10}
                        y={getY(value) + 4}
                        textAnchor="end"
                        fontSize="12"
                        fill="#9ca3af"
                        fontFamily="Outfit, sans-serif"
                      >
                        {value}%
                      </text>
                    </g>
                  ))}

                  {/* Area fills */}
                  <path
                    d={getAreaPath('store3', getY(yMin))}
                    fill="url(#gradient3)"
                    opacity="0.6"
                  />
                  <path
                    d={getAreaPath('store2', getY(yMin))}
                    fill="url(#gradient2)"
                    opacity="0.6"
                  />
                  <path
                    d={getAreaPath('store1', getY(yMin))}
                    fill="url(#gradient1)"
                    opacity="0.6"
                  />

                  {/* Lines */}
                  <polyline
                    points={chartData.map((point, index) => `${getX(index)},${getY(point.store3)}`).join(' ')}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <polyline
                    points={chartData.map((point, index) => `${getX(index)},${getY(point.store2)}`).join(' ')}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                  <polyline
                    points={chartData.map((point, index) => `${getX(index)},${getY(point.store1)}`).join(' ')}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                  />

                  {/* Data points */}
                  {chartData.map((point, index) => (
                    <g key={index}>
                      <circle cx={getX(index)} cy={getY(point.store1)} r="4" fill="#fbbf24" />
                      <circle cx={getX(index)} cy={getY(point.store2)} r="4" fill="#ef4444" />
                      <circle cx={getX(index)} cy={getY(point.store3)} r="4" fill="#3b82f6" />
                    </g>
                  ))}

                  {/* X-axis labels */}
                  {chartData.map((point, index) => (
                    <text
                      key={index}
                      x={getX(index)}
                      y={chartHeight - padding.bottom + 20}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#9ca3af"
                      fontFamily="Outfit, sans-serif"
                    >
                      {point.time}
                    </text>
                  ))}

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-yellow-400"></div>
                    <span className="text-sm text-gray-300 font-body">Store 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-red-500"></div>
                    <span className="text-sm text-gray-300 font-body">Store 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span className="text-sm text-gray-300 font-body">Store 3</span>
                  </div>
                </div>
              </div>
              </div>
            )}

            {/* Integrate Section */}
            {isPayouts ? (
              <div>
                <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                  Integrate Payouts
                </h2>
                <p className="text-[18px] text-gray-300 mb-8 leading-relaxed font-body">
                  Minimal integration efforts, multiple options and detailed documentation will help you to get on board seamlessly.
                </p>
              <div className="space-y-4 mb-8">
                {integrateFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[18px] text-gray-300 font-body">
                        <strong className="text-white">{feature.title}.</strong> {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a26a0] transition-colors font-body"
              >
                <div className="w-4 h-4 bg-[#4730B8] rounded"></div>
                Explore the documentation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            ) : (
              <div>
                <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                  Integrate Payments
                </h2>
                <p className="text-[18px] text-gray-300 mb-8 leading-relaxed font-body">
                  We see the beauty in simplifying the complex. That's why we give you everything needed to start working with BrosPay with minimal effort and in a matter of minutes.
                </p>
                <div className="space-y-4 mb-8">
                  {integrateFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[18px] text-gray-300 font-body">
                          <strong className="text-white">{feature.title}.</strong> {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a26a0] transition-colors font-body"
                >
                  <div className="w-4 h-4 bg-[#4730B8] rounded"></div>
                  Explore the documentation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-20 lg:space-y-24">
            {/* Analyse Section */}
            <div>
              <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                {isPayouts ? 'Analyse Payouts' : 'Analyse Payments'}
              </h2>
              <p className="text-[18px] text-gray-300 mb-8 leading-relaxed font-body">
                {isPayouts
                  ? 'Have a full visibility of your payout data and have it visualised to share and utilise within your organisation.'
                  : 'Make better-informed decisions by accessing real-time transactions data and instant in-depth reports on all aspects of your business.'}
              </p>
              <div className="space-y-4">
                {analyseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 relative">
                    <div className="flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className={`${isPayouts ? 'bg-blue-100 rounded-full p-2' : ''} text-[#4730B8]`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white font-heading">{feature.title}</h3>
                        <div
                          className="relative"
                          onMouseEnter={() => setActiveTooltip(`analyse-${index}`)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <svg className="w-4 h-4 text-gray-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {activeTooltip === `analyse-${index}` && (
                            <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                              <p className="text-sm text-gray-900 font-body">{feature.description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-full">
              {/* Tabs */}
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('create')}
                  className={`px-6 py-3 text-sm font-medium transition-colors font-body ${
                    activeTab === 'create'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {isPayouts ? 'Create payout' : 'Create payment'}
                </button>
                <button
                  onClick={() => setActiveTab('callback')}
                  className={`px-6 py-3 text-sm font-medium transition-colors font-body ${
                    activeTab === 'callback'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  Handle callback
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6">
                {activeTab === 'create' ? (
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code>
                      <span className="text-green-400">{isPayouts ? 'create_payout' : 'create_payment'}</span>
                      <span className="text-gray-300"> ({`{`}</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"public_key"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"pk_live_CISQHI2T9WXuF****M69cS9zNOJy"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"service"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">{isPayouts ? '"payout_card"' : '"payment_card"'}</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"amount"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-blue-400">420.78</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"currency"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"USD"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"reference_id"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"order_123"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"description"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"Some goods"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">{`}`})</span>
                    </code>
                  </pre>
                ) : (
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code>
                      <span className="text-green-400">handle</span>
                      <span className="text-gray-300"> ({`{`}</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"id"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"pi_TV465FXkbGch3GNe"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"status"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"processed"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"resolution"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"ok"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"amount"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-blue-400">420.78</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"currency"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"UAH"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"reference_id"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-orange-400">"order_123"</span>
                      <span className="text-gray-300">,</span>
                      <br />
                      <span className="text-gray-300">  </span>
                      <span className="text-green-400">"test_mode"</span>
                      <span className="text-gray-300">:</span>
                      <span className="text-blue-400">false</span>
                      <br />
                      <span className="text-gray-300">{`}`})</span>
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

