'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Data Segmentation section component
 * Shows 5 data segmentation features
 */
export function DataSegmentation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Multi-stores',
      description: 'Multi-storefront, multi-terminal, multi-business monitoring capability with drill-down functionalities.',
    },
    {
      title: 'Dashboard for headquarters',
      description: 'Manage payment process and all day-to-day operations from a single dashboard.',
    },
    {
      title: 'Merchant portal',
      description: 'Merchants can track invoice and payment status themselves through the Merchant portal.',
    },
    {
      title: 'Access management',
      description: 'Single sign-on application to simplify identity management with secure, one-click access for assigned users.',
    },
    {
      title: 'Customer segmentation',
      description: 'Manage the data about customers and gain insights on statistics of transactions and analytics for each customer.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image - Same as GlobalAccess */}
      <div
        className="absolute inset-0 global-access-bg"
        style={{
          willChange: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Data Segmentation
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            <strong className="text-white">Segment information by entities</strong> for audit preparedness, financial control and reporting, fraud prevention, and visibility purposes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-heading">{feature.title}</h3>
                  <p className="text-gray-300 font-body">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - User to Store Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Three Rows: User -> Store */}
              {[
                { userColor: 'bg-[#4730B8]', arrowColor: '#6B4DE6', storeNumber: 1 },
                { userColor: 'bg-blue-400', arrowColor: '#60A5FA', storeNumber: 2 },
                { userColor: 'bg-teal-400', arrowColor: '#4FD1C7', storeNumber: 3 },
              ].map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-6 mb-10 last:mb-0">
                  {/* User Icon */}
                  <div className={`${row.userColor} w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  {/* Arrow Path with Dashed Line and Animated Triangular Arrows */}
                  <div className="flex-1 relative h-6 flex items-center overflow-hidden">
                    <svg className="w-full h-6" viewBox="0 0 300 24" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`arrowGradient-${rowIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={row.arrowColor} stopOpacity="0.3" />
                          <stop offset="50%" stopColor={row.arrowColor} stopOpacity="1" />
                          <stop offset="100%" stopColor={row.arrowColor} stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      {/* Dashed line */}
                      <line
                        x1="0"
                        y1="12"
                        x2="280"
                        y2="12"
                        stroke={row.arrowColor}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        opacity="0.5"
                      />
                      {/* Animated triangular arrows along the path */}
                      {[15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270].map((x, i) => (
                        <g key={i}>
                          <polygon
                            points={`${x},8 ${x+6},12 ${x},16`}
                            fill={row.arrowColor}
                            opacity="0.7"
                            className="arrow-pulse"
                            style={{
                              animation: `arrowFlow 1.5s ease-in-out infinite`,
                              animationDelay: `${i * 0.08}s`,
                            }}
                          />
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* Store Icon */}
                  <div className="relative flex-shrink-0">
                    {/* Store with colored awning and base */}
                    <div className="relative w-28">
                      {/* Colored Scalloped Awning */}
                      <div className="relative mb-0">
                        <svg className="w-full h-14" viewBox="0 0 112 56" preserveAspectRatio="none">
                          {/* Scalloped awning pattern - matching row color */}
                          <path
                            d="M 0 56 L 7 42 Q 14 35 21 42 Q 28 35 35 42 Q 42 35 49 42 Q 56 35 63 42 Q 70 35 77 42 Q 84 35 91 42 Q 98 35 105 42 L 112 56 Z"
                            fill={row.arrowColor}
                            stroke={row.arrowColor}
                            strokeWidth="2"
                            opacity="0.8"
                          />
                        </svg>
                        {/* Store Number Badge */}
                        <div className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-lg z-10">
                          <span className="text-xs font-bold text-gray-900">{row.storeNumber}</span>
                        </div>
                      </div>
                      {/* Store Base */}
                      <div className="bg-gray-800 w-full h-20 rounded-b-lg shadow-lg border-2 border-gray-700 relative">
                        {/* Store facade details */}
                        <div className="absolute inset-0 flex items-center justify-center p-2">
                          <div className="grid grid-cols-3 gap-1">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <div key={i} className="w-3 h-3 bg-white/20 rounded-sm"></div>
                            ))}
                          </div>
                        </div>
                      </div>
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

