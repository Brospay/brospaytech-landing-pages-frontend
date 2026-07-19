'use client'

import React, { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Contacts page component
 * Features:
 * - Contact information cards (Email, Phone, Location)
 * - Support information section
 * - Contact form
 * - Matches platform aesthetics
 */
export function Contacts() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions')
      return
    }
    setIsSubmitting(true)
    // Handle form submission here
    console.log('Form submitted:', formData)
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setAgreedToTerms(false)
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Contact Information Cards */}
      <section className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#4730B8]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 font-body">
                Email
              </p>
              <a
                href="mailto:info@valorapay.com"
                className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-[#4730B8] transition-colors font-body"
              >
                info@valorapay.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#4730B8]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 font-body">
                Phone
              </p>
              <a
                href="tel:+442071234567"
                className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-[#4730B8] transition-colors font-body"
              >
                +44 20 7123 4567
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#4730B8]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 font-body">
                Location
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 font-body">
                11th floor, 25 Cabot Square
                <br />
                London, E14 4QZ, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Support Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                Let&apos;s connect! Reach out anytime!
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body">
                We&apos;re happy to answer any questions you may have. Just send an email to the relevant department. If you prefer calls over texts, our office numbers are listed above.
              </p>

              {/* Support Features */}
              <div className="space-y-8">
                {/* 24/7 Customer Support */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                        24/7 Customer support
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed font-body">
                        Our dedicated support team is available around the clock to help you with any questions or issues. Get expert assistance whenever you need it, day or night.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Chat and Instant Help */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                        Live chat and instant help
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed font-body">
                        Need immediate assistance? Use our live chat feature to connect with our support team in real-time. Get instant answers to your questions without waiting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 font-heading">
                Connect with BrosPay
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8 font-body">
                Fill out the form below and we&apos;ll get back to you as soon as possible. Our team is ready to help you with any questions about our payment orchestration platform.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-900 uppercase tracking-wider mb-2 font-body">
                    Your name <span className="text-[#4730B8]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#4730B8] focus:outline-none bg-transparent font-body text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-900 uppercase tracking-wider mb-2 font-body">
                    Email <span className="text-[#4730B8]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#4730B8] focus:outline-none bg-transparent font-body text-base"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-900 uppercase tracking-wider mb-2 font-body">
                    Phone <span className="text-[#4730B8]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#4730B8] focus:outline-none bg-transparent font-body text-base"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-900 uppercase tracking-wider mb-2 font-body">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#4730B8] focus:outline-none bg-transparent font-body text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-900 uppercase tracking-wider mb-2 font-body">
                    Message <span className="text-[#4730B8]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#4730B8] focus:outline-none bg-transparent resize-none font-body text-base"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 text-[#4730B8] border-gray-300 rounded focus:ring-[#4730B8]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 font-body cursor-pointer">
                    I agree to the <a href="/terms-conditions" className="text-[#4730B8] hover:underline">terms and conditions</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Submit now</span>
                  <div className="w-8 h-8 rounded-[10px] bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Clients */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                Contacts for Clients
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                    General inquiries
                  </h4>
                  <p className="text-base text-gray-600 mb-3 font-body">
                    Should you have any questions, get in touch and let us know how we can help.
                  </p>
                  <a href="mailto:info@valorapay.com" className="text-base text-[#4730B8] hover:underline font-body">
                    info@valorapay.com
                  </a>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                    Sales
                  </h4>
                  <p className="text-base text-gray-600 mb-3 font-body">
                    Ready to boost your business to the next level with us? Contact our Sales team for any related queries.
                  </p>
                  <a href="mailto:sales@valorapay.com" className="text-base text-[#4730B8] hover:underline font-body">
                    sales@valorapay.com
                  </a>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                Contacts for Partners
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                    Agents
                  </h4>
                  <p className="text-base text-gray-600 mb-3 font-body">
                    Get in touch to learn more about our referral system, it&apos;s benefits and application process.
                  </p>
                  <a href="mailto:agent@valorapay.com" className="text-base text-[#4730B8] hover:underline font-body">
                    agent@valorapay.com
                  </a>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                    Media & PR
                  </h4>
                  <p className="text-base text-gray-600 mb-3 font-body">
                    Feel free to reach out to our PR team for comments, resources, and everything needed for your next piece.
                  </p>
                  <a href="mailto:press@valorapay.com" className="text-base text-[#4730B8] hover:underline font-body">
                    press@valorapay.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

