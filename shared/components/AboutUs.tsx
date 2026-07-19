'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FAQ } from './FAQ'

// Icon components
const SecurityIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const MonitoringIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const GlobalIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const SupportIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

/**
 * About Us page component
 * Features:
 * - Hero section with title and description
 * - Animated statistics counters
 * - Feature cards section
 * - Dashboard showcase
 * - FAQ section
 * - Clean, readable layout matching platform aesthetics
 */
export function AboutUs() {
  const [dailyTransactions, setDailyTransactions] = useState(0)
  const [yearsInBusiness, setYearsInBusiness] = useState(0)
  const [cashbackReturn, setCashbackReturn] = useState(0)
  const [happyCustomers, setHappyCustomers] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const statsRef = useRef<HTMLDivElement | null>(null)

  // Slider data
  const slides = [
    {
      title: 'What is BrosPay?',
      duration: '2:27',
      description: 'BrosPay is a payment orchestration platform for online businesses and payment institutions. Our technical platform provides feature-rich functionality that connects and manages payment services, initiates and processes transactions, collects and analyses payment data, and much more.',
    },
    {
      title: 'Our Mission',
      duration: '3:15',
      description: 'At BrosPay, we aim to centralise and standardise online payment processing, improve visibility and control over transaction flows, mitigate risks, and improve overall business efficiency. Our purpose is to help our customers multiply payment capabilities and reach without the need to invest in development or infrastructure.',
    },
    {
      title: 'Why Choose BrosPay?',
      duration: '2:45',
      description: 'We offer the technology to build almost any online payment solution. We see the beauty in simplifying the complex, so you can run your online business without obstacles using cloud infrastructure, omni- and cross-channel and full-service payment solutions for both corporate and institutional clients.',
    },
  ]

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter(5900000, setDailyTransactions, 2000) // 5.9m
            animateCounter(32, setYearsInBusiness, 2000) // 32+
            animateCounter(6.5, setCashbackReturn, 2000, true) // 6.5%
            animateCounter(25, setHappyCustomers, 2000) // 25k
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    const currentElement = statsRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [hasAnimated])

  const animateCounter = (
    target: number,
    setCount: (value: number) => void,
    duration: number,
    isDecimal: boolean = false
  ) => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = isDecimal
        ? startValue + (target - startValue) * easeOutQuart
        : Math.floor(startValue + (target - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'm'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k'
    }
    return num.toString()
  }

  const formatYears = (num: number): string => {
    return num.toString() + '+'
  }

  const features = [
    {
      title: 'Secure online and mobile banking',
      description: 'BrosPay provides state-of-the-art security measures to protect your financial data and transactions. Our platform uses advanced encryption and multi-factor authentication to ensure your money is always safe.',
      icon: SecurityIcon,
    },
    {
      title: 'Real-time transaction monitoring',
      description: 'Track all your payments and transactions in real-time with our comprehensive dashboard. Get instant notifications and detailed insights into your financial activities.',
      icon: MonitoringIcon,
    },
    {
      title: 'Global payments at low costs',
      description: 'Send and receive money worldwide with minimal fees. Our competitive rates and transparent pricing make international transactions affordable for businesses of all sizes.',
      icon: GlobalIcon,
    },
    {
      title: '24/7 Customer support & assistance',
      description: 'Our dedicated support team is available around the clock to help you with any questions or issues. Get expert assistance whenever you need it, day or night.',
      icon: SupportIcon,
    },
  ]

  return (
    <div>
      {/* Main Content Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Side - Label */}
            <div>
              <p className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8 font-heading">
                Trust & Security
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                Where technology meets finance to deliver next-level banking performance for users
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body text-justify">
                At BrosPay, we aim to centralise and standardise online payment processing, improve visibility and control over transaction flows, mitigate risks, and improve overall business efficiency. Our purpose is to help our customers multiply payment capabilities and reach without the need to invest in development or infrastructure. We offer the technology to build almost any online payment solution. We see the beauty in simplifying the complex, so you can run your online business without obstacles using cloud infrastructure, omni- and cross-channel and full-service payment solutions for both corporate and institutional clients.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body group"
              >
                Get started now
                <span className="w-8 h-8 rounded-[10px] bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-16"></div>

          {/* Statistics Section */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Daily Transactions */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 font-heading">
                {formatNumber(dailyTransactions)}
              </div>
              <p className="text-base text-gray-600 font-body">Daily transactions</p>
            </div>

            {/* Years in Business */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 font-heading">
                {formatYears(yearsInBusiness)}
              </div>
              <p className="text-base text-gray-600 font-body">Years in business</p>
            </div>

            {/* Cashback Return */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 font-heading">
                {cashbackReturn.toFixed(1)}%
              </div>
              <p className="text-base text-gray-600 font-body">Cashback return</p>
            </div>

            {/* Happy Customers */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 font-heading">
                {formatNumber(happyCustomers)}k
              </div>
              <p className="text-base text-gray-600 font-body">Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              Our story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Video Player */}
            <div className="relative">
              <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-400 text-sm font-body">Video Preview</p>
                  </div>
                </div>
                {/* Play Button Overlay */}
                <button
                  type="button"
                  className="absolute bottom-4 left-4 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-[10px] flex items-center justify-center transition-colors group"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-body">
                {slides[currentSlide].title}, {slides[currentSlide].duration}
              </p>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col justify-center">
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8 font-body">
                {slides[currentSlide].description}
              </p>

              {/* Pagination and Navigation */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-body">
                  {currentSlide + 1} / {slides.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-[10px] bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-[10px] bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>

      {/* Our History Roadmap Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              Our history
            </h2>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Horizontal Base Line - Desktop */}
            <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gray-200"></div>

            {/* Roadmap Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 relative">
              {/* January 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">January, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      First public beta
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      The first beta version of upcoming BrosPay 1.0 released for testing during Web Summit 2024.
                    </p>
                  </div>
                </div>
              </div>

              {/* March 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">March, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      White label payment provider solution
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      Released a{' '}
                      <a href="#" className="text-primary hover:underline font-body">
                        white label payment provider solution
                      </a>{' '}
                      for banks, acquirers and PSPs.
                    </p>
                  </div>
                </div>
              </div>

              {/* May 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">May, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      Omnichannel large Batch payouts
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      Released user interfaces to process a large number of payouts at once by uploading a batch file.
                    </p>
                  </div>
                </div>
              </div>

              {/* July 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">July, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      Cardgate: a payment card gateway
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      Released functionality to process payment card transactions.
                    </p>
                  </div>
                </div>
              </div>

              {/* September 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">September, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      PCI DSS attestation of compliance
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      BrosPay has successfully passed the PCI DSS compliance audit.
                    </p>
                  </div>
                </div>
              </div>

              {/* November 2024 */}
              <div className="relative">
                {/* Vertical Line - Mobile/Tablet */}
                <div className="lg:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                
                <div className="relative">
                  {/* Milestone Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-6 h-6 rounded-[10px] bg-primary border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-10 lg:ml-0 lg:mt-16 pt-2">
                    <p className="text-sm text-gray-600 mb-2 font-body">November, 2024</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      BrosPay 1.0 release
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed font-body">
                      We have upgraded and released the new 1.0 version of BrosPay.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 lg:mt-16">
              <a
                href="#milestones"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold font-body transition-colors group"
              >
                <span>Explore our milestones</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              Core values
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl font-body">
              We believe that challenges are the driving force for progress. They are the main reason for and source of technological innovations and global improvements. The payment world is no exception. Tackling challenging tasks and finding solutions to streamline payments flow is our top priority. Here are three cornerstones that help us do this in the best possible way.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Self-improvement */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle */}
                  <circle cx="32" cy="32" r="30" stroke="#000" strokeWidth="2" fill="none"/>
                  {/* Middle circle */}
                  <circle cx="32" cy="32" r="20" stroke="#000" strokeWidth="2" fill="none"/>
                  {/* Inner circle - filled with primary purple */}
                  <circle cx="32" cy="32" r="10" fill="#4730B8" stroke="#000" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Self-improvement
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                Fresh ideas and unconventional approaches to solving problems delight our minds, free from prejudice or bias.
              </p>
            </div>

            {/* Teamwork */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* First square - shifted */}
                  <rect x="12" y="12" width="24" height="24" stroke="#000" strokeWidth="2" fill="none"/>
                  {/* Second square - overlapping */}
                  <rect x="28" y="28" width="24" height="24" stroke="#000" strokeWidth="2" fill="none"/>
                  {/* Intersection area - filled with primary purple */}
                  <rect x="28" y="28" width="8" height="8" fill="#4730B8" stroke="#000" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Teamwork
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                We love to see our team members' diverse backgrounds and thinking styles synergise to find the best solutions for our clients.
              </p>
            </div>

            {/* Open-mindedness */}
            <div className="flex flex-col">
              <div className="mb-6">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Circular connecting line */}
                  <path d="M 32 12 A 20 20 0 0 1 50 40 A 20 20 0 0 1 14 40 A 20 20 0 0 1 32 12" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Top circle - primary purple */}
                  <circle cx="32" cy="12" r="5" fill="#4730B8" stroke="#000" strokeWidth="2"/>
                  {/* Bottom left circle - primary purple */}
                  <circle cx="14" cy="40" r="5" fill="#4730B8" stroke="#000" strokeWidth="2"/>
                  {/* Bottom right circle - primary purple */}
                  <circle cx="50" cy="40" r="5" fill="#4730B8" stroke="#000" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Open-mindedness
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                We do not set hard and fast rules, always leaving some space for development and innovative technologies.
              </p>
            </div>
          </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

