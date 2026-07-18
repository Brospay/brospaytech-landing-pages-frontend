'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Live Business View section component
 * Shows 7 metric tabs with interactive charts
 */
export function LiveBusinessView() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTab, setActiveTab] = useState('statuses')

  const tabs = [
    { id: 'statuses', label: 'Transaction statuses' },
    { id: 'declines', label: 'Transaction decline reasons' },
    { id: 'methods', label: 'Transaction methods' },
    { id: 'balances', label: 'Merchant account balances' },
    { id: 'conversion', label: 'Merchant account conversion rates' },
    { id: 'storefront', label: 'Storefront conversion rates' },
    { id: 'turnover', label: 'Storefront turnover' },
  ]

  const transactionStatuses = [
    { name: 'Success', color: '#22C55E', percentage: 65 },
    { name: 'Pending', color: '#F59E0B', percentage: 15 },
    { name: 'Cancelled', color: '#EF4444', percentage: 10 },
    { name: 'Refunded', color: '#3B82F6', percentage: 7 },
    { name: 'Charged back', color: '#8B5CF6', percentage: 3 },
  ]

  const declineReasons = [
    { name: 'access_denied', percentage: 30 },
    { name: 'card_is_not_3ds_enrolled', percentage: 25 },
    { name: 'invalid_card_status', percentage: 20 },
    { name: 'auth_fatal_error', percentage: 15 },
    { name: 'invalid_3ds_code', percentage: 10 },
  ]

  const paymentMethods = [
    { name: 'Mastercard', percentage: 40 },
    { name: 'Visa', percentage: 37 },
    { name: 'American Express', percentage: 12 },
    { name: 'China UnionPay', percentage: 11 },
  ]

  const merchantBalances = [
    { name: 'MID 1', balance: 5000000 },
    { name: 'MID 2', balance: 4500000 },
    { name: 'MID 3', balance: 4000000 },
    { name: 'MID 4', balance: 3500000 },
    { name: 'MID 5', balance: 3000000 },
    { name: 'MID 6', balance: 2500000 },
  ]

  const conversionRates = [
    { name: 'MID 1', rate: 95 },
    { name: 'MID 2', rate: 87 },
    { name: 'MID 3', rate: 78 },
  ]

  const storefrontConversion = [
    { name: 'Store 1', rate: 95, color: '#4730B8' },
    { name: 'Store 2', rate: 85, color: '#EF4444' },
    { name: 'Store 3', rate: 75, color: '#6B4DE6' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'statuses':
        return (
          <div>
            <p className="text-gray-600 mb-8 text-base leading-relaxed font-body">
              Monitor the statuses of all transactions in real time to be sure that your payment traffic is stable and healthy.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
              {/* Donut Chart */}
              <div className="relative w-64 h-64 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {transactionStatuses.reduce((acc, status, index) => {
                    const offset = acc.offset
                    const circumference = 2 * Math.PI * 40
                    const strokeDasharray = (status.percentage / 100) * circumference
                    acc.elements.push(
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={status.color}
                        strokeWidth="20"
                        strokeDasharray={`${strokeDasharray} ${circumference}`}
                        strokeDashoffset={-offset}
                        style={{ transition: 'all 0.3s ease' }}
                      />
                    )
                    acc.offset += strokeDasharray
                    return acc
                  }, { offset: 0, elements: [] as JSX.Element[] }).elements}
                  {/* Center circle to create donut effect */}
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="white"
                  />
                </svg>
              </div>
              {/* Legend */}
              <div className="space-y-3 flex-1 max-w-md">
                {transactionStatuses.map((status, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded flex-shrink-0 shadow-sm" style={{ backgroundColor: status.color }}></div>
                    <span className="text-base text-gray-700 font-body flex-1">{status.name}</span>
                    <span className="text-base font-bold text-gray-900 font-body">{status.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'declines':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              This pie chart shows decline reasons over the selected period. You can analyse this data to reveal and mitigate weak points.
            </p>
            <div className="space-y-3">
              {declineReasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-48 font-mono">{reason.name}</span>
                  <div className="flex-1 h-4 bg-gray-100 rounded-[10px] overflow-hidden">
                    <div
                      className="h-full bg-[#4730B8] rounded-[10px]"
                      style={{ width: `${reason.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-12 font-body">{reason.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )
      case 'methods':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              Learn what payment methods your customers prefer to gain insights on how to optimise your payment orchestration strategy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 font-body">{method.name}</span>
                    <span className="text-[#4730B8] font-bold font-body">{method.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-[10px] overflow-hidden">
                    <div
                      className="h-full bg-[#4730B8] rounded-[10px]"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'balances':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              Real-time view of all your merchant accounts balances at various PSPs allows you to manage your cashflows efficiently.
            </p>
            <div className="flex items-end gap-2 h-48">
              {merchantBalances.map((merchant, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-[#4730B8] to-[#6B4DE6] rounded-t"
                    style={{ height: `${(merchant.balance / 5000000) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2 font-body">{merchant.name}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case 'conversion':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              Live stats on the conversion across all your terminals help you to discover ways to tweak your market strategy.
            </p>
            <div className="space-y-4">
              {conversionRates.map((merchant, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700 font-body">{merchant.name}</span>
                    <span className="text-sm font-semibold text-[#4730B8] font-body">{merchant.rate}%</span>
                  </div>
                  <div className="h-6 bg-gray-100 rounded-[10px] overflow-hidden">
                    <div
                      className="h-full bg-[#4730B8] rounded-[10px] transition-all duration-500"
                      style={{ width: `${merchant.rate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'storefront':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              Learn how each of your stores is performing and how their conversion rates change over time for informed decision-making.
            </p>
            <div className="space-y-4">
              {storefrontConversion.map((store, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: store.color }}></div>
                      <span className="text-sm text-gray-700 font-body">{store.name}</span>
                    </div>
                    <span className="text-sm font-semibold font-body" style={{ color: store.color }}>{store.rate}%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-[10px] overflow-hidden">
                    <div
                      className="h-full rounded-[10px]"
                      style={{ width: `${store.rate}%`, backgroundColor: store.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'turnover':
        return (
          <div>
            <p className="text-gray-600 mb-6 font-body">
              Keep track of your overall turnover and see which of your businesses accounts for the biggest share in total results.
            </p>
            <div className="flex items-center gap-4 mb-4">
              {storefrontConversion.map((store, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: store.color }}></div>
                  <span className="text-sm text-gray-600 font-body">{store.name}</span>
                </div>
              ))}
            </div>
            <div className="h-48 flex items-end gap-1">
              {[3.5, 4.2, 3.8, 4.5, 4.0, 4.8, 4.3].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col gap-1">
                  <div
                    className="bg-[#4730B8] rounded-t"
                    style={{ height: `${(value / 5) * 100 * 0.4}%` }}
                  ></div>
                  <div
                    className="bg-[#EF4444]"
                    style={{ height: `${(value / 5) * 100 * 0.3}%` }}
                  ></div>
                  <div
                    className="bg-[#4730B8] rounded-b"
                    style={{ height: `${(value / 5) * 100 * 0.3}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Live All-Out View Of Business Performance
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Having <strong className="text-gray-900">all the performance metrics</strong> spread before the eyes keeps you aware of health and performance of your business. Generate accurate and thorough reports and access payment analysis on the go.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-[10px] text-sm font-semibold transition-colors font-body ${
                activeTab === tab.id
                  ? 'bg-[#4730B8] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}

