'use client'

import { useState, useRef, useEffect } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

const phoneCountryOptions = [
  { code: '+1', label: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+44', label: 'UK', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+33', label: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+49', label: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+91', label: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+86', label: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+81', label: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+61', label: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+7', label: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+55', label: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+34', label: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+39', label: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+82', label: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+65', label: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+971', label: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+92', label: 'PK', flag: '🇵🇰', name: 'Pakistan' },
]

const interestOptions = [
  'Payment orchestration platform',
  'White-label gateway',
  'White-label processor',
  'Payment processing',
  'Checkout solutions',
  'Payouts',
  'Analytics & Reporting',
  'Other',
]

export function Register() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [currentStep, setCurrentStep] = useState(1)
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [isInterestDropdownOpen, setIsInterestDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const phoneDropdownRef = useRef<HTMLDivElement>(null)
  const interestDropdownRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+92',
    phoneNumber: '',
    businessEmail: '',
    companyName: '',
    websiteUrl: '',
    interest: '',
  })

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false)
      }
      if (interestDropdownRef.current && !interestDropdownRef.current.contains(event.target as Node)) {
        setIsInterestDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // Validate step 1
      if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.businessEmail) {
        alert('Please fill in all required fields')
        return
      }
      if (!formData.businessEmail.includes('@')) {
        alert('Please enter a valid business email')
        return
      }
      setCurrentStep(2)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.companyName || !formData.websiteUrl || !formData.interest) {
      alert('Please fill in all required fields')
      return
    }
    
    setIsSubmitting(true)
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for registering! Our team will contact you soon to schedule a demo call.')
      setIsSubmitting(false)
      // Reset form or redirect
      setFormData({
        firstName: '',
        lastName: '',
        phoneCode: '+92',
        phoneNumber: '',
        businessEmail: '',
        companyName: '',
        websiteUrl: '',
        interest: '',
      })
      setCurrentStep(1)
    }, 1000)
  }

  const selectedCountry = phoneCountryOptions.find((opt) => opt.code === formData.phoneCode)

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style} className="w-full min-h-screen bg-[#EFEFEF] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-12 shadow-sm">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-heading flex items-center gap-2">
                🚀 Let's get started!
              </h1>
              <p className="text-[18px] text-gray-600 font-body">
                {currentStep === 1
                  ? "Let's get to know each other better! Fill in the information about yourself to book a demo call with our manager."
                  : "Tell us more about your company to help us prepare the best demo for you."}
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8 flex items-center gap-2">
              <div className={`h-1 flex-1 rounded-full ${currentStep >= 1 ? 'bg-[#4730B8]' : 'bg-gray-200'}`} />
              <div className={`h-1 flex-1 rounded-full ${currentStep >= 2 ? 'bg-[#4730B8]' : 'bg-gray-200'}`} />
            </div>

            {/* Step 1 Form */}
            {currentStep === 1 && (
              <form className="space-y-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Johnson"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    Phone number*
                  </label>
                  <div className="flex gap-2">
                    <div className="relative" ref={phoneDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent bg-white flex items-center gap-2 min-w-[140px] font-body"
                      >
                        <span className="text-lg">{selectedCountry?.flag}</span>
                        <span className="text-sm text-gray-700">{formData.phoneCode}</span>
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform ${isPhoneDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isPhoneDropdownOpen && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                          {phoneCountryOptions.map((option) => (
                            <button
                              key={option.code}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, phoneCode: option.code }))
                                setIsPhoneDropdownOpen(false)
                              }}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#4730B8]/10 transition-colors font-body ${
                                formData.phoneCode === option.code ? 'bg-[#4730B8]/5' : ''
                              }`}
                            >
                              <span className="text-lg">{option.flag}</span>
                              <span className="flex-1 text-gray-900">{option.name}</span>
                              <span className="text-gray-500 text-sm">{option.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="300 1234567"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    required
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                  />
                </div>

                {/* Info Text */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-body">
                    If you do not have a business email and are looking to open a merchant account (start accepting payments), please complete the{' '}
                    <Link href="/payatlas" className="text-[#4730B8] hover:underline font-semibold">
                      PayAtlas form
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-gray-600 font-body">
                    If you have other inquiries but still do not have a business email, feel free to{' '}
                    <Link href="/contacts" className="text-[#4730B8] hover:underline font-semibold">
                      book an intro meeting
                    </Link>{' '}
                    with our sales team.
                  </p>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full px-8 py-4 bg-[#4730B8] text-white text-base font-semibold rounded-full hover:bg-[#5a3fc9] transition-colors flex items-center justify-center gap-2 font-body group"
                >
                  Next
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            )}

            {/* Step 2 Form */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    Company name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="ValoraPay"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    Website URL*
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-[18px]"
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-2 font-body">
                    I am interested in:*
                  </label>
                  <div className="relative" ref={interestDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsInterestDropdownOpen(!isInterestDropdownOpen)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent bg-white flex items-center justify-between text-left font-body text-[18px]"
                    >
                      <span className={formData.interest ? 'text-gray-900' : 'text-gray-400'}>
                        {formData.interest || 'Select an option'}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${isInterestDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isInterestDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                        {interestOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, interest: option }))
                              setIsInterestDropdownOpen(false)
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-[#4730B8]/10 transition-colors font-body ${
                              formData.interest === option ? 'bg-[#4730B8]/5' : ''
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    valorapay.com needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our{' '}
                    <Link href="/privacy-policy" className="text-[#4730B8] hover:underline font-semibold">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full hover:border-gray-400 transition-colors font-semibold flex items-center justify-center gap-2 font-body"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-[#4730B8] text-white rounded-full hover:bg-[#5a3fc9] transition-colors font-semibold font-body disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book a call'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="hidden lg:block relative">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-[#4730B8] to-[#5a3fc9] rounded-[20px] p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
                    Optimise performance based on your data
                  </h2>
                  
                  {/* Dashboard Preview Card */}
                  <div className="bg-white rounded-xl p-6 mt-8 shadow-2xl">
                    <div className="space-y-4">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 font-heading">Dashboard</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                          <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-gray-900 mb-1 font-heading">43</div>
                          <div className="text-sm text-gray-600 font-body">Active customers</div>
                          <div className="text-xs text-gray-500 font-body mt-1">279 total customers</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-gray-900 mb-1 font-heading">$60.3k</div>
                          <div className="text-sm text-gray-600 font-body">Total Balance</div>
                          <div className="text-xs text-gray-500 font-body mt-1">17 provider accounts</div>
                        </div>
                      </div>

                      {/* Payment Methods */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-900 font-body">Payment Methods</div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-gray-600">Google Pay</span>
                            <span className="text-gray-900 font-semibold">345</span>
                          </div>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-gray-600">PayPal</span>
                            <span className="text-gray-900 font-semibold">267</span>
                          </div>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-gray-600">MasterCard</span>
                            <span className="text-gray-900 font-semibold">162</span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Request */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-900 mb-2 font-body">Payment Request</div>
                        <div className="flex justify-between text-xs font-body">
                          <span className="text-green-600">46% approval rate</span>
                          <span className="text-red-600">19% decline rate</span>
                          <span className="text-gray-600">39% drop-off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

