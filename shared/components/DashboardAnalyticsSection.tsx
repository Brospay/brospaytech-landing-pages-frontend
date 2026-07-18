'use client'

import { useState, useMemo } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

// Line Chart Component
function BalanceTrendChart({ data2024, data2023, months }: { data2024: number[], data2023: number[], months: string[] }) {
  const chartData = useMemo(() => {
    const chartWidth = 1000
    const chartHeight = 400
    const padding = { top: 40, right: 40, bottom: 60, left: 60 }
    const graphWidth = chartWidth - padding.left - padding.right
    const graphHeight = chartHeight - padding.top - padding.bottom
    
    // Find max value for scaling
    const allValues = [...data2024, ...data2023]
    const maxValue = Math.max(...allValues) * 1.1
    const minValue = Math.min(...allValues) * 0.9
    
    // Calculate points for 2024 line
    const points2024 = data2024.map((value, index) => {
      const x = padding.left + (index / (data2024.length - 1)) * graphWidth
      const y = padding.top + graphHeight - ((value - minValue) / (maxValue - minValue)) * graphHeight
      return { x, y, value }
    })
    
    // Calculate points for 2023 line
    const points2023 = data2023.map((value, index) => {
      const x = padding.left + (index / (data2023.length - 1)) * graphWidth
      const y = padding.top + graphHeight - ((value - minValue) / (maxValue - minValue)) * graphHeight
      return { x, y, value }
    })
    
    // Create path for 2024 line
    const path2024 = points2024.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
    }, '')
    
    // Create path for 2023 line
    const path2023 = points2023.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
    }, '')
    
    return {
      points2024,
      points2023,
      path2024,
      path2023,
      chartWidth,
      chartHeight,
      padding,
      graphWidth,
      graphHeight,
      maxValue,
      minValue,
    }
  }, [data2024, data2023])
  
  return (
    <div className="relative w-full overflow-x-auto">
      <svg 
        width="100%" 
        height="400" 
        viewBox={`0 0 ${chartData.chartWidth} ${chartData.chartHeight}`}
        className="min-w-[800px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="gradient2024" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4730B8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4730B8" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Area fill for 2024 */}
        <path
          d={`${chartData.path2024} L ${chartData.points2024[chartData.points2024.length - 1].x} ${chartData.padding.top + chartData.graphHeight} L ${chartData.points2024[0].x} ${chartData.padding.top + chartData.graphHeight} Z`}
          fill="url(#gradient2024)"
        />
        
        {/* 2023 line */}
        <path
          d={chartData.path2023}
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* 2024 line */}
        <path
          d={chartData.path2024}
          fill="none"
          stroke="#4730B8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points for 2023 */}
        {chartData.points2023.map((point, index) => (
          <circle
            key={`2023-${index}`}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#D1D5DB"
            stroke="white"
            strokeWidth="2"
          />
        ))}
        
        {/* Data points for 2024 */}
        {chartData.points2024.map((point, index) => (
          <circle
            key={`2024-${index}`}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#4730B8"
            stroke="white"
            strokeWidth="2"
          />
        ))}
        
        {/* Month labels */}
        {months.map((month, index) => {
          const x = chartData.padding.left + (index / (months.length - 1)) * chartData.graphWidth
          return (
            <text
              key={index}
              x={x}
              y={chartData.chartHeight - 15}
              textAnchor="middle"
              className="text-xs fill-gray-400 font-body"
            >
              {month}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

/**
 * Dashboard Analytics Section component
 * Shows period comparison charts
 */
export function DashboardAnalyticsSection() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activePeriod, setActivePeriod] = useState('current')

  const monthlyData = [
    { month: 'January', balance: '$54,320.00', change: '+4.5%' },
    { month: 'February', balance: '$62,000.00', change: '+5.4%' },
    { month: 'March', balance: '$76,748.00', change: '+6.01%' },
    { month: 'April', balance: '$58,100.00', change: '+5.3%' },
    { month: 'May', balance: '$45,000.00', change: '+3.5%' },
    { month: 'June', balance: '$79,231.00', change: '+7.25%' },
    { month: 'July', balance: '$81,000.00', change: '+7.5%' },
    { month: 'August', balance: '$49,570.00', change: '+3.5%' },
    { month: 'September', balance: '$44,000.00', change: '+3.8%' },
    { month: 'October', balance: '$47,100.00', change: '+3.9%' },
    { month: 'November', balance: '$51,255.00', change: '+4%' },
    { month: 'December', balance: '$35,000.00', change: '+3.1%' },
  ]

  // Data for 2023 (previous year)
  const monthlyData2023 = [
    { month: 'January', balance: 48000 },
    { month: 'February', balance: 52000 },
    { month: 'March', balance: 68000 },
    { month: 'April', balance: 51000 },
    { month: 'May', balance: 42000 },
    { month: 'June', balance: 70000 },
    { month: 'July', balance: 72000 },
    { month: 'August', balance: 46000 },
    { month: 'September', balance: 41000 },
    { month: 'October', balance: 43000 },
    { month: 'November', balance: 47000 },
    { month: 'December', balance: 32000 },
  ]

  // Extract numeric values for 2024
  const monthlyData2024 = monthlyData.map((data) => parseInt(data.balance.replace(/[$,]/g, '')))

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Analytics
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            A feature-rich section in the payment analytics Dashboard representing all your key business data aggregated at one point.
          </p>
        </div>

        {/* Period Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActivePeriod('current')}
            className={`px-6 py-3 rounded-[10px] font-semibold transition-colors font-body ${
              activePeriod === 'current'
                ? 'bg-[#4730B8] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Current period
          </button>
          <button
            onClick={() => setActivePeriod('previous')}
            className={`px-6 py-3 rounded-[10px] font-semibold transition-colors font-body ${
              activePeriod === 'previous'
                ? 'bg-[#4730B8] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Previous period
          </button>
        </div>

        {/* Monthly Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {monthlyData.map((data, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500 font-body">Total balance</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-[10px] font-body">
                  {data.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2 font-heading">{data.balance}</p>
              <p className="text-xs text-gray-400 font-body">{data.month} '24</p>
            </div>
          ))}
        </div>

        {/* Chart Visualization */}
        <div className="mt-12 bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-gray-900 font-heading">Balance Trend</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4730B8]"></div>
                <span className="text-sm text-gray-600 font-body">2024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-600 font-body">2023</span>
              </div>
            </div>
          </div>
          
          {/* Line Chart */}
          <BalanceTrendChart data2024={monthlyData2024} data2023={monthlyData2023.map(d => d.balance)} months={monthlyData.map(d => d.month.slice(0, 3))} />
        </div>
      </div>
    </section>
  )
}

