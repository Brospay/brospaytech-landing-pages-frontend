'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Independent Customisation section component
 * Shows checkout, processing, options, fees, limits customization
 */
export function IndependentCustomisation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const customisations = [
    {
      title: 'Checkout Customisation',
      description: 'Use your branded colours, icons, logos, and titles to customise the Checkout.',
      visualization: (
        <div className="grid grid-cols-2 gap-3">
          {/* UI Customization Icons */}
          <div className="w-14 h-14 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-10 h-10 flex flex-col gap-1.5 px-2">
              <div className="h-1 bg-gray-400 rounded-full"></div>
              <div className="h-1 bg-gray-400 rounded-full w-4/5"></div>
              <div className="h-1 bg-gray-400 rounded-full w-3/5"></div>
            </div>
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-lg flex items-center justify-center shadow-md">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i, idx) => (
                <div 
                  key={i} 
                  className="w-1 bg-white rounded-full"
                  style={{ height: `${12 + idx * 4}px` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center shadow-md">
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Processing Options',
      description: 'Route your transactions to success and increase the conversion.',
      visualization: (
        <div className="relative w-36 h-36 mx-auto">
          {/* Speedometer/Gauge */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="#f3f4f6"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Gauge Arc */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
              strokeDasharray={`${Math.PI * 38 * 0.75} ${Math.PI * 38 * 0.25}`}
            />
            {/* Active gauge section */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="6"
              strokeDasharray={`${Math.PI * 38 * 0.75} ${Math.PI * 38 * 0.25}`}
              strokeDashoffset={`${Math.PI * 38 * 0.25}`}
            />
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4730B8" />
                <stop offset="100%" stopColor="#6B4DE6" />
              </linearGradient>
            </defs>
            {/* Needle pointing to option 3 */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="18"
              stroke="#4730B8"
              strokeWidth="3"
              strokeLinecap="round"
              transform="rotate(45 50 50)"
              className="drop-shadow-sm"
            />
            {/* Center circle */}
            <circle cx="50" cy="50" r="7" fill="#4730B8" className="drop-shadow-md" />
            <circle cx="50" cy="50" r="4" fill="white" />
            {/* Option markers */}
            <circle cx="28" cy="23" r="9" fill="#6b7280" className="drop-shadow-sm" />
            <text x="28" y="29" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1</text>
            <circle cx="50" cy="12" r="9" fill="#6b7280" className="drop-shadow-sm" />
            <text x="50" y="18" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2</text>
            <circle cx="72" cy="23" r="9" fill="#4730B8" className="drop-shadow-md" />
            <text x="72" y="29" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3</text>
          </svg>
        </div>
      ),
    },
    {
      title: 'Payment Options',
      description: 'Allow customers to choose the best online payment option for their region.',
      visualization: (
        <div className="space-y-2.5">
          {/* Mastercard */}
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-lg p-2.5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 bg-white rounded-full mr-0.5"></div>
                <div className="w-3.5 h-3.5 bg-white rounded-full ml-0.5 opacity-80"></div>
              </div>
              <span className="text-xs font-semibold text-gray-900 font-body">Mastercard</span>
            </div>
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
          </div>
          {/* Visa */}
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-lg p-2.5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-6 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                <span className="text-[9px] font-bold text-white tracking-tight">VISA</span>
              </div>
              <span className="text-xs font-semibold text-gray-900 font-body">Visa</span>
            </div>
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
          </div>
          {/* Stripe */}
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white rounded-lg p-2.5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-6 bg-[#635BFF] rounded flex items-center justify-center shadow-sm">
                <span className="text-[7px] font-bold text-white tracking-tight">stripe</span>
              </div>
              <span className="text-xs font-semibold text-gray-900 font-body">Stripe</span>
            </div>
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      title: 'Fees Per Method',
      description: 'Specify fees, min/max amounts, rolling reserve.',
      visualization: (
        <div className="flex items-center justify-center">
          <div className="relative w-28 h-28">
            {/* Circle/Gauge */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#f9fafb"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              {/* Outer circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              {/* Inner circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="2 2"
              />
              {/* Center dot */}
              <circle
                cx="50"
                cy="50"
                r="5"
                fill="#4730B8"
                className="drop-shadow-sm"
              />
              {/* Single line pointing up (12 o'clock) */}
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="8"
                stroke="#4730B8"
                strokeWidth="3"
                strokeLinecap="round"
                className="drop-shadow-md"
              />
              {/* Arrow head */}
              <polygon
                points="50,8 46,16 54,16"
                fill="#4730B8"
                className="drop-shadow-md"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: 'Limits Per Method',
      description: 'Set turnover and velocity limits.',
      visualization: (
        <div className="space-y-4 w-full">
          {/* Slider Labels */}
          <div className="flex items-center justify-between text-[10px] font-semibold text-gray-700 font-body">
            <span>Min</span>
            <span>50</span>
            <span>100</span>
            <span>150</span>
            <span>200</span>
            <span>Max</span>
          </div>
          {/* Slider Track */}
          <div className="relative">
            {/* Background track */}
            <div className="h-2 bg-gray-200 rounded-full relative overflow-hidden">
              {/* Progress fill */}
              <div 
                className="h-full bg-gradient-to-r from-[#4730B8] to-[#6B4DE6] rounded-full"
                style={{ width: '85%' }}
              ></div>
              {/* Increment markers */}
              {[0, 20, 40, 60, 80, 100].map((pos) => (
                <div
                  key={pos}
                  className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-3 bg-white"
                  style={{ left: `${pos}%` }}
                ></div>
              ))}
            </div>
            {/* Purple pointer at 200+ */}
            <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2" style={{ left: '85%' }}>
              <svg className="w-5 h-5 text-[#4730B8] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0L0 20h20L10 0z" />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Independent Customisation
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Enable each entity to operate with its own <strong>unique workflow</strong>.
          </p>
        </div>

        {/* Customisation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {customisations.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
              {/* Visualization */}
              <div className="h-[140px] flex items-center justify-center mb-6 flex-shrink-0">
                {item.visualization}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

