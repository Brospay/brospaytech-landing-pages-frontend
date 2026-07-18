'use client'

import { useState, useRef, useEffect } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Chargeback Form component
 * Form to book a demo call for chargeback management
 */
export function ChargebackForm() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+92',
    phoneNumber: '',
    email: '',
  })
  const [emailError, setEmailError] = useState('')
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const phoneDropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false)
      }
    }

    if (isPhoneDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isPhoneDropdownOpen])

  const countryOptions = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Email validation
    if (name === 'email') {
      if (value.includes('@gmail.com')) {
        setEmailError('Please enter a different email address. This form does not accept addresses from gmail.com.')
      } else {
        setEmailError('')
      }
    }
  }

  const handleCountrySelect = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }))
    setIsPhoneDropdownOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailError) {
      return
    }
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Form */}
          <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">
                Let's get started!
              </h2>
            </div>
            <p className="text-gray-600 mb-8 font-body">
              Let's get to know each other better! Fill in the information about yourself to book a demo call with our manager.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative" ref={phoneDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body flex items-center gap-2 min-w-[140px]"
                    >
                      <span>{countryOptions.find(opt => opt.code === formData.countryCode)?.flag}</span>
                      <span>{formData.countryCode}</span>
                      <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isPhoneDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-hide">
                        {countryOptions.map((option) => (
                          <button
                            key={option.code}
                            type="button"
                            onClick={() => handleCountrySelect(option.code)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 font-body"
                          >
                            <span>{option.flag}</span>
                            <span>{option.code}</span>
                            <span className="text-gray-500 text-sm ml-auto">{option.country}</span>
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
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Business email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-500 font-body">{emailError}</p>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-3 text-sm text-gray-600 font-body">
                <p>
                  Don't have a business email? Complete the{' '}
                  <a href="#payatlas-form" className="text-primary hover:underline">
                    PayAtlas form
                  </a>
                  .
                </p>
                <p>
                  Have other questions? Book an{' '}
                  <a href="#intro-meeting" className="text-primary hover:underline">
                    intro meeting
                  </a>{' '}
                  with our sales team.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center justify-center gap-3 group font-body"
              >
                Next
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Side - Dashboard Preview (Placeholder) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-[20px] p-6 shadow-lg transform rotate-2">
              <div className="text-center text-gray-400 font-body">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-lg font-heading">Optimise performance based on your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

