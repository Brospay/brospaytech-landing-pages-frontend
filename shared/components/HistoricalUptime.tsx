'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const services = [
  'Payment API',
  'Payouts API',
  'Payment Processing',
  'Payout Processing',
  'Checkout (HPP)',
  'Dashboard',
  'Merchant Portal',
  'Analytics (Reports, Direct DB, Analytics)',
  'Callback',
  'Cloudflare API',
  'Cloudflare CDN/Cache',
  'Cloudflare DNS Root Servers',
  'Cloudflare DNS Updates',
  'Cloudflare Recursive DNS',
]

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const generateUptimeData = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month)
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()

  return Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1
    // If it's the current month and day is in the future, show gray
    if (year === currentYear && month === currentMonth && day > currentDay) {
      return { day, status: 'future' }
    }
    // Otherwise show green (operational)
    return { day, status: 'operational' }
  })
}

export function HistoricalUptime() {
  const [selectedService, setSelectedService] = useState('Payment API')
  const [currentDate, setCurrentDate] = useState(new Date())
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  // Get previous, current, and next month
  const months = [
    new Date(currentYear, currentMonth - 1),
    new Date(currentYear, currentMonth),
    new Date(currentYear, currentMonth + 1),
  ]

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const calculateMonthUptime = (monthData: Array<{ day: number; status: string }>) => {
    const operationalDays = monthData.filter((d) => d.status === 'operational').length
    const totalDays = monthData.length
    return totalDays > 0 ? ((operationalDays / totalDays) * 100).toFixed(1) : '0.0'
  }

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Service Selector */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div className="flex-1 w-full sm:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-3 font-body">
                Select Service
              </label>
              <div ref={dropdownRef} className="relative w-full sm:w-80">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent transition-colors font-body text-[18px] text-left"
                >
                  <span className="text-gray-900">{selectedService}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setSelectedService(service)
                          setIsDropdownOpen(false)
                        }}
                        className={`w-full flex items-center px-4 py-3 text-left hover:bg-[#4730B8]/10 transition-colors font-body text-[18px] ${
                          selectedService === service ? 'bg-[#4730B8]/5 text-[#4730B8] font-medium' : 'text-gray-900'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Link
              href="/status"
              className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-body text-[18px] font-medium mt-8 sm:mt-0"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Current Status
            </Link>
          </div>

          {/* Date Range Selector */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <p className="text-xl font-medium text-gray-900 font-body">
                {getMonthName(months[0])} to {getMonthName(months[2])}
              </p>
            </div>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Next month"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Monthly Uptime Grids */}
        <div className="space-y-8">
          {months.map((month, monthIndex) => {
            const monthData = generateUptimeData(month.getFullYear(), month.getMonth())
            const uptime = calculateMonthUptime(monthData)
            const monthName = getMonthName(month)

            return (
              <div key={monthIndex} className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl lg:text-2xl font-medium text-gray-900 font-heading">{monthName}</h3>
                  <span className="text-lg font-medium text-gray-900 font-body">{uptime}%</span>
                </div>
                <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(24px, 1fr))', maxWidth: '100%' }}>
                  {monthData.map((dayData, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`aspect-square rounded-md ${
                        dayData.status === 'operational'
                          ? 'bg-green-500 hover:bg-green-600'
                          : dayData.status === 'future'
                            ? 'bg-gray-200'
                            : 'bg-gray-400'
                      } transition-colors cursor-pointer`}
                      title={`${monthName} ${dayData.day}: ${dayData.status === 'operational' ? 'Operational' : 'Future'}`}
                    ></div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

