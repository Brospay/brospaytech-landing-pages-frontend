'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Guide {
  id: string
  title: string
  description: string
  image: string
  subtitle?: string
  category?: string
}

const guides: Guide[] = [
  {
    id: '1',
    title: 'Understanding payment conversion rates',
    description: 'This guide explains what payment conversion rate is, what affects it, how to measure it, and what you can do to improve it.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    subtitle: 'how to measure, monitor, and optimise your success rates',
  },
  {
    id: '2',
    title: 'Complete guide to payment routing',
    description: 'This guide will explain the concepts of payment routing and cascading, the reasons and best practices for routing, and how to take the pain out of it.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    subtitle: 'how to take full control of your transaction flow',
  },
  {
    id: '3',
    title: 'The state of payment maturity 2024',
    description: 'In this report, we reveal data-backed insights from 793 global merchants to help you assess your payment maturity, identify inefficiencies, and build a scalable, future-ready payment strategy.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    subtitle: 'data-backed insights from 793 global merchants',
  },
  {
    id: '4',
    title: 'Mastering gambling payments',
    description: 'This guide contains proven strategies for optimising gambling payment options, navigating technological shifts, and fostering customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
    subtitle: 'an ultimate guide for industry players',
  },
  {
    id: '5',
    title: 'Forex payments 101',
    description: 'From exchange rate volatility to hidden costs and transaction delays, this guide will empower you with knowledge and strategies to navigate the forex payment processing maze.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    subtitle: 'a comprehensive guide to payments for forex businesses',
  },
  {
    id: '6',
    title: "Mr. Baker's adventures in the world of payments",
    description: "The world's first payment comic book created in collaboration with our Lead Product Architect will immerse you into Mr. Baker's story, uncovering how payments work in the funniest way possible.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    subtitle: 'the world\'s first payment comic book',
  },
  {
    id: '7',
    title: 'How to start a PSP with minimal budget',
    description: 'You can become a part of the snowballing $50 billion payment service provider market by establishing your own PSP company without significant investments. In this e-book, we&apos;re going to explain how.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    subtitle: 'establish your own PSP company without significant investments',
  },
  {
    id: '8',
    title: 'Global payment navigator',
    description: 'This guide is all things expansion. We&apos;re going to cover everything from basic things to know about international expansion to regional specificities and the payment landscape of almost every part of the world.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
    subtitle: 'a helpful guide for businesses planning expansion',
  },
]

// PDF pages - using placeholder images for now
const pdfPages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=800&fit=crop',
]

interface GuideDetailProps {
  guideId: string
}

export function GuideDetail({ guideId }: GuideDetailProps) {
  const [guide, setGuide] = useState<Guide | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  useEffect(() => {
    const foundGuide = guides.find((g) => g.id === guideId)
    setGuide(foundGuide || null)
  }, [guideId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleNextPage = () => {
    if (currentPage < pdfPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (!guide) {
    return (
      <div className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg font-body">Guide not found.</p>
          <Link href="/guides" className="text-[#4730B8] hover:underline mt-4 inline-block font-body">
            Back to Guides
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Main Content Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4730B8] transition-colors mb-8 font-body"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - PDF Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 shadow-lg">
                {/* PDF Viewer Container */}
                <div className="bg-white rounded-lg shadow-inner p-4 mb-4 relative">
                  <div className="aspect-[3/4] bg-gray-50 rounded overflow-hidden relative">
                    <img
                      src={pdfPages[currentPage]}
                      alt={`Page ${currentPage + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Page Navigation */}
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
                      <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 0}
                        className={`p-2 rounded-[10px] ${
                          currentPage === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="text-sm text-gray-600 font-body bg-white px-3 py-1 rounded-[10px]">
                        Page {currentPage + 1} of {pdfPages.length}
                      </span>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === pdfPages.length - 1}
                        className={`p-2 rounded-[10px] ${
                          currentPage === pdfPages.length - 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Page Indicators */}
                <div className="flex items-center justify-center gap-2">
                  {pdfPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-[10px] transition-all ${
                        currentPage === index ? 'bg-[#4730B8] w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">
                  Get insights to improve your payment conversion
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                      placeholder="john@gmail.com"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-body">
                    By pressing &quot;Download the guide&quot; button you confirm that you have read and accept our{' '}
                    <Link href="/terms-conditions" className="text-[#4730B8] hover:underline">
                      Website Terms
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-[#4730B8] hover:underline">
                      Privacy Notice
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body font-semibold"
                  >
                    Download the guide
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Guide Benefits Section */}
          <div className="mt-12 lg:mt-16">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 font-heading">Guide benefits:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Well-structured and easy to navigate',
                'Written in fine and plain language',
                'Visualisations facilitate absorption',
                'Contains real-world use cases',
                'Unveils 6 critical factors affecting payment success rates',
                'Gives you tips on how to boost payment conversion',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-[10px] bg-[#FBBF24] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 font-body">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

