'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'partial-outage' | 'major-outage' | 'maintenance'
  uptime90Days: string
  uptimeToday: string
}

const services: ServiceStatus[] = [
  { name: 'Payment API', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Payouts API', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Payment Processing', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Payout Processing', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Checkout (HPP)', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Dashboard', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Merchant Portal', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Analytics (Reports, Direct DB, Analytics)', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Callback', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Cloudflare API', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Cloudflare CDN/Cache', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Cloudflare DNS Root Servers', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Cloudflare DNS Updates', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
  { name: 'Cloudflare Recursive DNS', status: 'operational', uptime90Days: '100.0%', uptimeToday: '100.0%' },
]

const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return 'bg-green-500'
    case 'degraded':
      return 'bg-yellow-500'
    case 'partial-outage':
      return 'bg-orange-500'
    case 'major-outage':
      return 'bg-red-500'
    case 'maintenance':
      return 'bg-blue-500'
    default:
      return 'bg-gray-500'
  }
}

const getStatusText = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return 'Operational'
    case 'degraded':
      return 'Degraded Performance'
    case 'partial-outage':
      return 'Partial Outage'
    case 'major-outage':
      return 'Major Outage'
    case 'maintenance':
      return 'Maintenance'
    default:
      return 'Unknown'
  }
}

export function Status() {
  const [email, setEmail] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)

  const allOperational = services.every((service) => service.status === 'operational')

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overall Status */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-4 h-4 rounded-[10px] ${allOperational ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 font-heading">
              {allOperational ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
            </h1>
          </div>
          <p className="text-[18px] text-gray-600 font-body">
            Uptime over the past 90 days. View historical uptime.
          </p>
        </div>

        {/* Notification Options */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 font-heading">
            Get Notifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-medium text-gray-900 font-body">Email Notifications</h3>
              </div>
              <p className="text-[18px] text-gray-600 font-body">Get updates via email</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="font-medium text-gray-900 font-body">Slack</h3>
              </div>
              <p className="text-[18px] text-gray-600 font-body">Subscribe via Slack</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 19a7.978 7.978 0 014-1.07M6 19a7.978 7.978 0 01-4-1.07M10 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="font-medium text-gray-900 font-body">RSS Feed</h3>
              </div>
              <p className="text-[18px] text-gray-600 font-body">Get Atom or RSS feed</p>
            </button>
          </div>
          {showEmailForm && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body mb-3"
              />
              <button className="w-full bg-[#4730B8] text-white px-6 py-2 rounded-lg hover:bg-[#5a3fc9] transition-colors font-body">
                Subscribe
              </button>
            </div>
          )}
        </div>

        {/* Services Status */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 font-heading">
              System Status
            </h2>
            <Link
              href="/status/uptime"
              className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
            >
              View historical uptime
            </Link>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="pb-8 border-b border-gray-200 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-medium text-gray-900 font-heading">{service.name}</h3>
                  <span className={`px-3 py-1 rounded-[10px] text-sm font-medium font-body ${
                    service.status === 'operational'
                      ? 'bg-green-100 text-green-700'
                      : service.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-700'
                        : service.status === 'partial-outage'
                          ? 'bg-orange-100 text-orange-700'
                          : service.status === 'major-outage'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                  }`}>
                    {getStatusText(service.status)}
                  </span>
                </div>
                
                {/* Uptime Bar Chart */}
                <div className="mb-4">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 90 }).map((_, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="h-8 bg-green-500 flex-1 min-w-[2px]"
                        title={`Day ${dayIndex + 1}: Operational`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-body mb-2">
                    <span>90 days ago</span>
                    <span className="font-semibold text-gray-900">{service.uptime90Days} uptime</span>
                    <span>Today</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Incidents */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 font-heading">
            Past Incidents
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((day) => (
              <div key={day} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-900 font-body">
                      {new Date(Date.now() - day * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <p className="text-[18px] text-gray-600 font-body">No incidents reported.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

