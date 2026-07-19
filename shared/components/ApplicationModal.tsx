'use client'

import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

const phoneCountryOptions = [
  { code: '+1', label: 'US', flag: '🇺🇸' },
  { code: '+44', label: 'UK', flag: '🇬🇧' },
  { code: '+33', label: 'FR', flag: '🇫🇷' },
  { code: '+49', label: 'DE', flag: '🇩🇪' },
  { code: '+91', label: 'IN', flag: '🇮🇳' },
  { code: '+86', label: 'CN', flag: '🇨🇳' },
  { code: '+81', label: 'JP', flag: '🇯🇵' },
  { code: '+61', label: 'AU', flag: '🇦🇺' },
  { code: '+7', label: 'RU', flag: '🇷🇺' },
  { code: '+55', label: 'BR', flag: '🇧🇷' },
  { code: '+34', label: 'ES', flag: '🇪🇸' },
  { code: '+39', label: 'IT', flag: '🇮🇹' },
  { code: '+82', label: 'KR', flag: '🇰🇷' },
  { code: '+65', label: 'SG', flag: '🇸🇬' },
  { code: '+971', label: 'AE', flag: '🇦🇪' },
]

const getCountryFlag = (code: string) => {
  const option = phoneCountryOptions.find((opt) => opt.code === code)
  return option?.flag || '🇺🇸'
}

const getCountryCode = (code: string) => {
  const option = phoneCountryOptions.find((opt) => opt.code === code)
  return option?.label || 'US'
}

/**
 * Application Modal component
 * Features:
 * - Application form with all required fields
 * - File upload with drag & drop
 * - reCAPTCHA integration
 * - Matches platform aesthetics
 */
export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+1',
    phoneNumber: '',
    email: '',
    city: '',
    country: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const phoneDropdownRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (isPhoneDropdownOpen) {
          setIsPhoneDropdownOpen(false)
        } else {
          onClose()
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose, isPhoneDropdownOpen])

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

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileSelect = (file: File) => {
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB')
      return
    }
    if (!['application/pdf', 'application/rtf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      alert('Please upload a PDF, RTF, or DOC file')
      return
    }
    setSelectedFile(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isRecaptchaVerified) {
      alert('Please complete the reCAPTCHA verification')
      return
    }
    // Handle form submission here
    console.log('Form submitted:', formData, selectedFile)
    // Show success modal
    setShowSuccessModal(true)
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    onClose()
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phoneCode: '+1',
      phoneNumber: '',
      email: '',
      city: '',
      country: '',
      linkedin: '',
      portfolio: '',
      coverLetter: '',
    })
    setSelectedFile(null)
    setIsRecaptchaVerified(false)
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      console.log('Modal should be open')
    }
  }, [isOpen])

  if (!isOpen) return null

  if (!mounted) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-[20px] w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 font-body">
            Application form
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-[10px] transition-colors tap-target"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          <form onSubmit={handleSubmit} className="p-6 lg:p-8">
          <div className="space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Last name <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <div ref={phoneDropdownRef} className="relative min-w-[140px]">
                    <button
                      type="button"
                      onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                      className="w-full flex items-center justify-between gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent transition-colors font-body text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getCountryFlag(formData.phoneCode)}</span>
                        <span className="text-gray-900 font-medium">{getCountryCode(formData.phoneCode)}</span>
                      </div>
                      <svg 
                        className={`w-4 h-4 text-gray-500 transition-transform ${isPhoneDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isPhoneDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                        {phoneCountryOptions.map((option) => (
                          <button
                            key={option.code}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, phoneCode: option.code }))
                              setIsPhoneDropdownOpen(false)
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-[#4730B8]/10 transition-colors font-body text-sm ${
                              formData.phoneCode === option.code ? 'bg-[#4730B8]/5' : ''
                            }`}
                          >
                            <span className="text-lg">{option.flag}</span>
                            <span className="flex-1 text-gray-900">{option.label}</span>
                            <span className="text-gray-500 text-xs">{option.code}</span>
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
                    placeholder="+1 (201) 555-0123"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="mail@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  City <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Country <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  LinkedIn <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="http://"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>

              {/* Portfolio */}
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                  Portfolio or personal website <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="http://"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-sm"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-900 mb-2 font-body">
                Cover letter <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={6}
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Write a few words about yourself"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent resize-none font-body text-sm"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2 font-body">
                Resume or CV <span className="text-gray-500 font-normal">(PDF, RTF, DOC less than 2MB)</span>
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-[#4730B8] bg-[#4730B8]/5'
                    : selectedFile
                    ? 'border-[#4730B8] bg-[#4730B8]/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.rtf,.doc,.docx"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                {selectedFile ? (
                  <div className="space-y-2">
                    <svg className="w-12 h-12 mx-auto text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm font-medium text-[#4730B8] font-body">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500 font-body">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm font-medium text-[#4730B8] font-body">
                      Drag & Drop the file here or Browse
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="recaptcha"
                  checked={isRecaptchaVerified}
                  onChange={(e) => setIsRecaptchaVerified(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#4730B8] border-gray-300 rounded focus:ring-[#4730B8]"
                />
                <label htmlFor="recaptcha" className="text-sm text-gray-700 font-body cursor-pointer">
                  I&apos;m not a robot
                </label>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1 font-body">
                  reCAPTCHA is changing its terms of service. Take action.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                  <span>reCAPTCHA</span>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="hover:text-[#4730B8]">Privacy</a>
                  <span className="text-gray-400">-</span>
                  <a href="#" className="hover:text-[#4730B8]">Terms</a>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-body">
                By pressing "Apply now" button you confirm that you have read and accept our{' '}
                <a href="/terms-conditions" className="text-[#4730B8] hover:underline">Website Terms</a>,{' '}
                <a href="/privacy-policy" className="text-[#4730B8] hover:underline">Privacy Notice</a> and{' '}
                <a href="#" className="text-[#4730B8] hover:underline">GDPR compliance</a>.
              </p>
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body whitespace-nowrap"
              >
                Apply now
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )

  const successModalContent = showSuccessModal && (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleSuccessClose}
    >
      <div
        className="bg-white rounded-[20px] w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-[#4730B8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h3 className="text-2xl font-medium text-gray-900 mb-3 font-heading">
            Application Submitted!
          </h3>
          <p className="text-base text-gray-600 mb-8 leading-relaxed font-body">
            Thank you for your interest in joining BrosPay. We've received your application and will review it shortly. Our team will get back to you soon.
          </p>

          {/* Close Button */}
          <button
            onClick={handleSuccessClose}
            className="w-full px-8 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {typeof window !== 'undefined' && document.body
        ? createPortal(modalContent, document.body)
        : null}
      {typeof window !== 'undefined' && document.body && showSuccessModal
        ? createPortal(successModalContent, document.body)
        : null}
    </>
  )
}

