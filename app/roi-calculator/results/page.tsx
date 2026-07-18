'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation, Footer, ScrollToTop } from '@/shared/components'

interface CalculatorData {
  businessType: 'high-risk' | 'low-risk' | null
  currency: 'USD' | 'EUR' | 'GBP'
  numberOfPSPs: '0-1' | '2-3' | '4+' | null
  monthlyTransactions: number
  averageTransactionAmount: number
  conversionRate: number
  grossProfitMargin: number
  chargebackRate: number
  name: string
  email: string
}

interface ROIResults {
  extraRevenueBoost: number
  processingCostSavings: number
  chargebackSavings: number
  ValoraPayCost: number
  totalROI: number
}

export default function ROIResultsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<CalculatorData | null>(null)
  const [results, setResults] = useState<ROIResults | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get data from localStorage
    const storedData = localStorage.getItem('roiCalculatorResults')
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        setFormData(parsedData.formData)
        setResults(parsedData.results)
      } catch (error) {
        console.error('Error parsing stored data:', error)
        router.push('/roi-calculator')
      }
    } else {
      // No data found, redirect to calculator
      router.push('/roi-calculator')
    }
    setLoading(false)
  }, [router])

  const formatCurrency = (amount: number): string => {
    if (!formData) return '$0'
    const symbols: Record<string, string> = { USD: '$', EUR: '\u20AC', GBP: '\u00A3' }
    const symbol = symbols[formData.currency] || '$'
    const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    return symbol + formatted
  }

  const handleCopyResultsLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      alert('Results link copied to clipboard!')
    })
  }

  const handleBackToInputs = () => {
    router.push('/roi-calculator')
  }

  if (loading || !formData || !results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  const totalGain = results.extraRevenueBoost + results.processingCostSavings + results.chargebackSavings
  const circumference = 2 * Math.PI * 80
  const extraRevenuePercent = (results.extraRevenueBoost / totalGain) * 100
  const processingPercent = (results.processingCostSavings / totalGain) * 100
  const chargebackPercent = (results.chargebackSavings / totalGain) * 100

  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
          </div>
        </div>
        <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Back and Copy buttons */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handleBackToInputs}
                className="px-4 py-2 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to inputs
              </button>
              <button
                onClick={handleCopyResultsLink}
                className="px-4 py-2 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Copy results link
              </button>
            </div>

            {/* Personalized ROI Header */}
            <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-lg mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
                {formData.name}, your ValoraPay ROI is{' '}
                <span className="text-[#4730B8] underline decoration-yellow-400 decoration-4">
                  {results.totalROI.toFixed(2)}%
                </span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 font-body">
                Based on the data provided, here&apos;s an overview of your potential financial impact when using ValoraPay&apos;s payment orchestration platform.
              </p>
            </div>

            {/* Main Results Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Donut Chart Section */}
              <div className="bg-white rounded-[20px] p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 font-heading text-center">
                  Your potential monthly gain*
                </h3>
                <div className="relative w-64 h-64 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="40"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#4730B8"
                      strokeWidth="40"
                      strokeDasharray={`${(extraRevenuePercent / 100) * circumference} ${circumference}`}
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="40"
                      strokeDasharray={`${(processingPercent / 100) * circumference} ${circumference}`}
                      strokeDashoffset={`-${(extraRevenuePercent / 100) * circumference}`}
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth="40"
                      strokeDasharray={`${(chargebackPercent / 100) * circumference} ${circumference}`}
                      strokeDashoffset={`-${((extraRevenuePercent + processingPercent) / 100) * circumference}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-600 font-body mb-1">Before ValoraPay fee</p>
                    <p className="text-3xl font-bold text-gray-900 font-heading">
                      {formatCurrency(totalGain)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Breakdown Section */}
              <div className="bg-white rounded-[20px] p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 font-heading">
                    Your potential monthly gain
                  </h3>
                  <button className="text-gray-600 hover:text-gray-900 font-body inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Your business inputs
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-1 h-12 bg-[#4730B8] rounded mt-1"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-semibold text-gray-900 font-heading">Extra revenue boost</h4>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600 font-body">More approved payments = higher revenue</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-heading">
                      {formatCurrency(results.extraRevenueBoost)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-1 h-12 bg-[#8B5CF6] rounded mt-1"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-semibold text-gray-900 font-heading">Processing cost savings</h4>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600 font-body">Better payment success rates = higher revenue</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-heading">
                      {formatCurrency(results.processingCostSavings)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-1 h-12 bg-[#FBBF24] rounded mt-1"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-semibold text-gray-900 font-heading">Chargeback savings</h4>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600 font-body">Smart routing + optimised fees = savings</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-heading">
                      {formatCurrency(results.chargebackSavings)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-1 h-12 bg-gray-400 rounded mt-1"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-semibold text-gray-900 font-heading">Estimated ValoraPay cost</h4>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600 font-body">
                          Based on your inputs and our{' '}
                          <a href="/pricing" className="text-[#4730B8] hover:underline">pricing</a>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-heading">
                      {formatCurrency(results.ValoraPayCost)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-xs text-gray-600 font-body">
                *Please note that these results are estimates and do not guarantee actual financial outcomes.{' '}
                <button className="text-[#4730B8] hover:underline">Show more</button>
              </p>
            </div>

            {/* CTA Sections */}
            <div className="space-y-6">
              {/* Book a call CTA */}
              <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-[10px] bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                      Curious how we can help you achieve this?
                    </h3>
                    <p className="text-sm text-gray-600 font-body">
                      Let&apos;s explore how ValoraPay fits into your growth journey.
                    </p>
                  </div>
                </div>
                <a
                  href="/contacts"
                  className="px-6 py-3 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Book a call
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Download Guide CTA */}
              <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                    Bonus resource for you: a guide to unlock higher conversions
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    Not all businesses achieve the same conversion rates — why? Our guide dives into expert insights on key factors influencing success. Learn if your conversion level is on track and how to maximise it.
                  </p>
                  <a
                    href="#"
                    className="px-6 py-3 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body inline-flex items-center gap-2"
                  >
                    Download PDF now
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
                <div className="flex gap-4">
                  <div className="w-32 h-40 bg-gray-300 rounded-lg"></div>
                  <div className="w-20 h-40 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
          <Footer />
        </div>
        <ScrollToTop />
      </main>
    </>
  )
}

