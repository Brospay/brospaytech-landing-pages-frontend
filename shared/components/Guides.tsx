'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

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

export function Guides() {
  const [guidesToShow, setGuidesToShow] = useState(6) // Show 2 rows initially (6 guides on desktop)
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })

  const displayedGuides = guides.slice(0, guidesToShow)
  const hasMoreGuides = guides.length > guidesToShow

  const handleLoadMore = () => {
    setGuidesToShow((prev) => prev + 6) // Load 6 more guides (2 more rows)
  }

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Guides Grid */}
      <section className="w-full bg-[#EFEFEF] pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedGuides.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayedGuides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.id}`}
                    className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer block"
                  >
                    {/* Guide Image/Cover - Only visible by default */}
                    <div className="w-full h-96 sm:h-[28rem] lg:h-[32rem] bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover Overlay - Shows on hover */}
                    <div className="absolute inset-0 bg-[#4730B8]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center items-center text-center">
                      <div className="text-white/80 text-xs font-semibold font-body mb-4">BrosPay</div>
                      <h2 className="text-white text-xl lg:text-2xl font-bold mb-3 font-heading">
                        {guide.title}
                      </h2>
                      {guide.subtitle && (
                        <p className="text-white/90 text-base mb-4 font-body">
                          {guide.subtitle}
                        </p>
                      )}
                      <p className="text-white/80 text-base mb-6 font-body line-clamp-4">
                        {guide.description}
                      </p>
                      <Link
                        href={`/guides/${guide.id}`}
                        className="px-6 py-3 bg-white text-gray-900 rounded-[10px] hover:bg-gray-100 transition-colors font-body font-semibold inline-flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get it!
                        <svg
                          className="w-5 h-5"
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
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreGuides && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Load more
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg font-body">No guides found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

