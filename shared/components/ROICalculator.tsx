'use client'

import React, { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

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

export function ROICalculator() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<CalculatorData>({
    businessType: null,
    currency: 'USD',
    numberOfPSPs: null,
    monthlyTransactions: 10000,
    averageTransactionAmount: 100,
    conversionRate: 75,
    grossProfitMargin: 50,
    chargebackRate: 1.0,
    name: '',
    email: '',
  })


  const handleInputChange = (field: keyof CalculatorData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateROI = (): ROIResults => {
    const businessType = formData.businessType
    const monthlyTransactions = formData.monthlyTransactions
    const averageTransactionAmount = formData.averageTransactionAmount
    const conversionRate = formData.conversionRate
    const grossProfitMargin = formData.grossProfitMargin
    const chargebackRate = formData.chargebackRate

    const monthlyTurnover = monthlyTransactions * averageTransactionAmount
    const conversionUplift = businessType === 'high-risk' ? 0.15 : 0.10
    const costReduction = 0.10
    const chargebackReduction = 0.45

    const newConversionRate = Math.min(conversionRate + (conversionRate * conversionUplift), 100)
    const currentGrossProfit = (conversionRate / 100) * monthlyTurnover * (grossProfitMargin / 100)
    const newGrossProfit = (newConversionRate / 100) * monthlyTurnover * (grossProfitMargin / 100)
    const extraRevenueBoost = newGrossProfit - currentGrossProfit

    const currentProcessingCost = monthlyTransactions * averageTransactionAmount * 0.025
    const newProcessingCost = currentProcessingCost * (1 - costReduction)
    const processingCostSavings = currentProcessingCost - newProcessingCost

    const currentChargebacks = monthlyTransactions * (chargebackRate / 100)
    const newChargebackRate = chargebackRate * (1 - chargebackReduction)
    const newChargebacks = monthlyTransactions * (newChargebackRate / 100)
    const preventedChargebacks = currentChargebacks - newChargebacks
    const avgChargebackValue = averageTransactionAmount * 1.5
    const chargebackSavings = preventedChargebacks * avgChargebackValue

    let ValoraPayCost = 0
    if (monthlyTransactions < 10000) {
      ValoraPayCost = 500
    } else if (monthlyTransactions < 100000) {
      ValoraPayCost = 2000
    } else if (monthlyTransactions < 1000000) {
      ValoraPayCost = 5000
    } else {
      ValoraPayCost = 10000
    }

    const totalGains = extraRevenueBoost + processingCostSavings + chargebackSavings
    const totalROI = ((totalGains - ValoraPayCost) / ValoraPayCost) * 100

    return {
      extraRevenueBoost,
      processingCostSavings,
      chargebackSavings,
      ValoraPayCost,
      totalROI,
    }
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGetResults = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email')
      return
    }
    const calculatedResults = calculateROI()
    // Store data in localStorage for results page
    const resultsData = {
      formData,
      results: calculatedResults,
    }
    localStorage.setItem('roiCalculatorResults', JSON.stringify(resultsData))
    // Navigate to results page
    window.location.href = '/roi-calculator/results'
  }

  const formatCurrency = (amount: number): string => {
    const symbols: Record<string, string> = { USD: '$', EUR: '\u20AC', GBP: '\u00A3' }
    const symbol = symbols[formData.currency] || '$'
    const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    return symbol + formatted
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k'
    }
    return num.toString()
  }

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      <section className="w-full bg-[#EFEFEF] pt-16 sm:pt-20 lg:pt-24 pb-0 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-0">
            <div>
              <p className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8 font-heading">
                ROI Calculator
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                Evaluate your ROI on payment orchestration
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body text-justify">
                Not sure if orchestration is worth it? Use our calculator to estimate returns from optimising your payment setup with ValoraPay. Get clarity and financial insights in minutes.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 mb-0"></div>
        </div>
      </section>

      {(
        <section className="w-full bg-[#EFEFEF] pt-0 pb-16 sm:pb-20 lg:pb-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-lg">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-[10px] flex items-center justify-center font-semibold transition-colors ${
                            step <= currentStep
                              ? 'bg-[#4730B8] text-white'
                              : 'bg-gray-200 text-gray-600'
                          } font-body`}
                        >
                          {step}
                        </div>
                        <div className="mt-2 text-xs text-gray-600 font-body text-center hidden sm:block">
                          {step === 1 && 'Business type'}
                          {step === 2 && 'Setup overview'}
                          {step === 3 && 'Operational data'}
                          {step === 4 && 'Get results'}
                        </div>
                      </div>
                      {step < 4 && (
                        <div
                          className={`h-0.5 flex-1 mx-2 ${
                            step < currentStep ? 'bg-[#4730B8]' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center font-body">
                  Step {currentStep} of 4
                </p>
              </div>

              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                      Business type
                    </h3>
                    <p className="text-base text-gray-600 mb-6 font-body">
                      Select your business type to get started
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <button
                        onClick={() => handleInputChange('businessType', 'high-risk')}
                        className={`p-6 rounded-[20px] border-2 transition-all text-left ${
                          formData.businessType === 'high-risk'
                            ? 'border-[#4730B8] bg-[#4730B8]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h4 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                          High-risk business
                        </h4>
                        <p className="text-sm text-gray-600 font-body">
                          Industries with higher chargeback rates, regulatory requirements, or fraud risks (e.g., gambling, forex, dating).
                        </p>
                      </button>
                      <button
                        onClick={() => handleInputChange('businessType', 'low-risk')}
                        className={`p-6 rounded-[20px] border-2 transition-all text-left ${
                          formData.businessType === 'low-risk'
                            ? 'border-[#4730B8] bg-[#4730B8]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h4 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                          Low-risk business
                        </h4>
                        <p className="text-sm text-gray-600 font-body">
                          Industries with stable processing patterns, low chargeback rates, and minimal regulatory concerns (e.g., e-commerce).
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                      Setup overview
                    </h3>
                    <p className="text-base text-gray-600 mb-6 font-body">
                      Tell us about your current payment setup
                    </p>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-900 mb-3 font-body">
                        Currency
                      </label>
                      <div className="flex gap-4">
                        {(['USD', 'EUR', 'GBP'] as const).map((currency) => (
                          <button
                            key={currency}
                            onClick={() => handleInputChange('currency', currency)}
                            className={`px-6 py-3 rounded-[10px] font-semibold transition-colors ${
                              formData.currency === currency
                                ? 'bg-[#4730B8] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            } font-body`}
                          >
                            {currency}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3 font-body">
                        Number of PSPs currently used
                      </label>
                      <p className="text-sm text-gray-600 mb-4 font-body">
                        Select the number of payment service providers (PSPs) you use. ValoraPay is built to optimise operations for businesses working with multiple PSPs.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {(['0-1', '2-3', '4+'] as const).map((option) => (
                          <button
                            key={option}
                            onClick={() => handleInputChange('numberOfPSPs', option)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.numberOfPSPs === option
                                ? 'border-[#4730B8] bg-[#4730B8]/5'
                                : 'border-gray-200 hover:border-gray-300'
                            } font-body`}
                          >
                            <span className="font-semibold text-gray-900">{option}</span>
                          </button>
                        ))}
                      </div>
                      {formData.numberOfPSPs === '0-1' && (
                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-sm text-yellow-800 font-body">
                            💡 Unfortunately, we can&apos;t calculate your ROI right now, as it looks like there&apos;s no fit between your current setup and our solutions. ValoraPay is best suited for businesses already working with multiple PSPs.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                      Operational data
                    </h3>
                    <p className="text-base text-gray-600 mb-6 font-body">
                      Enter your operational metrics
                    </p>
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-900 font-body">
                          Monthly number of successful transactions
                        </label>
                        <span className="text-2xl font-bold text-[#4730B8] font-heading">
                          {formatNumber(formData.monthlyTransactions)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50000000"
                        step="1000"
                        value={formData.monthlyTransactions}
                        onChange={(e) => handleInputChange('monthlyTransactions', parseInt(e.target.value))}
                        style={{
                          '--slider-progress': `${((formData.monthlyTransactions - 1) / (50000000 - 1)) * 100}%`
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2 font-body">
                        <span>1</span>
                        <span>10k</span>
                        <span>100k</span>
                        <span>1M</span>
                        <span>50M</span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-900 font-body">
                          Average transaction amount
                        </label>
                        <span className="text-2xl font-bold text-[#4730B8] font-heading">
                          {formatCurrency(formData.averageTransactionAmount)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5000"
                        step="10"
                        value={formData.averageTransactionAmount}
                        onChange={(e) => handleInputChange('averageTransactionAmount', parseInt(e.target.value))}
                        style={{
                          '--slider-progress': `${((formData.averageTransactionAmount - 1) / (5000 - 1)) * 100}%`
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2 font-body">
                        <span>{formatCurrency(1)}</span>
                        <span>{formatCurrency(100)}</span>
                        <span>{formatCurrency(500)}</span>
                        <span>{formatCurrency(1000)}</span>
                        <span>{formatCurrency(5000)}</span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-900 font-body">
                          Current payment conversion rate
                        </label>
                        <span className="text-2xl font-bold text-[#4730B8] font-heading">
                          {formData.conversionRate}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={formData.conversionRate}
                        onChange={(e) => handleInputChange('conversionRate', parseInt(e.target.value))}
                        style={{
                          '--slider-progress': `${((formData.conversionRate - 1) / (100 - 1)) * 100}%`
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2 font-body">
                        <span>1%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>90%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-900 font-body">
                          Gross profit margin <span className="text-gray-500 font-normal">(optional)</span>
                        </label>
                        <span className="text-2xl font-bold text-[#4730B8] font-heading">
                          {formData.grossProfitMargin}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={formData.grossProfitMargin}
                        onChange={(e) => handleInputChange('grossProfitMargin', parseInt(e.target.value))}
                        style={{
                          '--slider-progress': `${((formData.grossProfitMargin - 1) / (100 - 1)) * 100}%`
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-gray-500 mt-2 font-body">Too sensitive? 50% is a safe default.</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-900 font-body">
                          Current chargeback rate <span className="text-gray-500 font-normal">(optional)</span>
                        </label>
                        <span className="text-2xl font-bold text-[#4730B8] font-heading">
                          {formData.chargebackRate.toFixed(2)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={formData.chargebackRate}
                        onChange={(e) => handleInputChange('chargebackRate', parseFloat(e.target.value))}
                        style={{
                          '--slider-progress': `${((formData.chargebackRate - 0) / (5 - 0)) * 100}%`
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <p className="text-xs text-gray-500 mt-2 font-body">
                        This field only accepts values between 0 and 5, as most PSPs consider chargeback rates above 1% risky.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                      Review your inputs
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4 font-heading">Inputs for calculation</h4>
                        <div className="bg-gray-50 rounded-[20px] p-6 space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Business type:</span>
                            <span className="font-semibold text-gray-900 font-body">
                              {formData.businessType === 'high-risk' ? 'High-risk business' : 'Low-risk business'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Currency:</span>
                            <span className="font-semibold text-gray-900 font-body">{formData.currency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Number of PSPs:</span>
                            <span className="font-semibold text-gray-900 font-body">{formData.numberOfPSPs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Monthly transactions:</span>
                            <span className="font-semibold text-gray-900 font-body">
                              {formatNumber(formData.monthlyTransactions)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Avg transaction amount:</span>
                            <span className="font-semibold text-gray-900 font-body">
                              {formatCurrency(formData.averageTransactionAmount)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Conversion rate:</span>
                            <span className="font-semibold text-gray-900 font-body">{formData.conversionRate}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Gross profit margin:</span>
                            <span className="font-semibold text-gray-900 font-body">{formData.grossProfitMargin}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-body">Chargeback rate:</span>
                            <span className="font-semibold text-gray-900 font-body">
                              {formData.chargebackRate.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4 font-heading">Contact information</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2 font-body">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2 font-body">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 font-body">
                      By clicking &apos;Get your results&apos;, you confirm that you have read and accept our{' '}
                      <a href="/terms-conditions" className="text-[#4730B8] hover:underline">Website Terms</a> and{' '}
                      <a href="/privacy-policy" className="text-[#4730B8] hover:underline">Privacy Notice</a>.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-6 py-3 bg-transparent text-gray-700 text-base font-semibold rounded-[10px] border-2 border-gray-300 hover:bg-gray-50 transition-colors tap-target font-body disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous step
                </button>
                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !formData.businessType) ||
                      (currentStep === 2 && !formData.numberOfPSPs)
                    }
                    className="px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3 group"
                  >
                    Next step
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleGetResults}
                    disabled={formData.numberOfPSPs === '0-1' || !formData.name || !formData.email}
                    className="px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3 group"
                  >
                    Get your results
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
                How our ROI calculator works
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
                We built this calculator to help you evaluate the impact ValoraPay can have on your business. Too often, return on investment feels like a vague promise — so we set out to change that.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  Estimations based on real data
                </h3>
                <p className="text-sm text-gray-600 font-body">
                  Our calculations are based on real data from businesses like yours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  Pre-filled benchmarks
                </h3>
                <p className="text-sm text-gray-600 font-body">
                  Industry benchmarks reduce manual input and make it easier
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  Share only essential info
                </h3>
                <p className="text-sm text-gray-600 font-body">
                  No sensitive data required — just essential operational metrics
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* The Math Behind Our ROI Calculator Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              The math behind our ROI calculator
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
              Explore the exact formulas and logic behind key calculations. Explore the metrics, assumptions, and how each number contributes to your estimated ROI — no black boxes, just clear math.
            </p>
          </div>

          <div className="space-y-8">
            {/* Extra revenue boost */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                    Extra revenue boost
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    The additional revenue comes from improved payment conversion. Depending on your business inputs, uplift ranges from 2% to 20%, backed by our client data across industries and regions.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-900">
                    <span className="text-gray-900">((Conversion rate + </span>
                    <span className="text-[#4730B8]">ValoraPay&apos;s impact</span>
                    <span className="text-gray-900">) * </span>
                    <span className="text-[#4730B8]">Turnover</span>
                    <span className="text-gray-900"> * </span>
                    <span className="text-[#4730B8]">Gross profit margin</span>
                    <span className="text-gray-900">) - Your current gross profit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing cost savings */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                    Processing cost savings
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    With smarter routing, you could cut processing costs by 5-15%. We base your current costs on industry benchmarks.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-900">
                    <span className="text-gray-900">(</span>
                    <span className="text-[#4730B8]">Cost</span>
                    <span className="text-gray-900"> * </span>
                    <span className="text-[#4730B8]">Transactions</span>
                    <span className="text-gray-900">) - ((</span>
                    <span className="text-[#4730B8]">Cost</span>
                    <span className="text-gray-900"> - </span>
                    <span className="text-[#4730B8]">ValoraPay&apos;s impact</span>
                    <span className="text-gray-900">) * </span>
                    <span className="text-[#4730B8]">Transactions</span>
                    <span className="text-gray-900">)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chargeback savings */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                    Chargeback savings
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    Your chargeback rate can be reduced by 40-50%. We then calculate monthly savings based on the average value per prevented case.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-900">
                    <span className="text-gray-900">(Chargeback rate - </span>
                    <span className="text-[#4730B8]">ValoraPay&apos;s impact</span>
                    <span className="text-gray-900">) * </span>
                    <span className="text-[#4730B8]">Transactions</span>
                    <span className="text-gray-900"> * </span>
                    <span className="text-[#4730B8]">Avg savings per case</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ValoraPay cost */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                    ValoraPay cost
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    We estimate your ValoraPay pricing plan based on your total transaction volume, including projected growth. Add-ons and custom work aren&apos;t included.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-900">
                    <span className="text-gray-900">Estimated according to your transaction count and our </span>
                    <a href="/pricing" className="text-[#4730B8] hover:underline">pricing</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Your ROI with ValoraPay */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                    Your ROI with ValoraPay
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">
                    Your estimated return on investment is calculated by comparing total gains (extra revenue and savings) to the cost of using ValoraPay. The result shows the percentage return you can expect.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-900">
                    <span className="text-gray-900">(</span>
                    <span className="text-[#4730B8]">Sum of all gains</span>
                    <span className="text-gray-900"> - </span>
                    <span className="text-[#4730B8]">ValoraPay cost</span>
                    <span className="text-gray-900">) / </span>
                    <span className="text-[#4730B8]">ValoraPay cost</span>
                    <span className="text-gray-900"> * 100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

