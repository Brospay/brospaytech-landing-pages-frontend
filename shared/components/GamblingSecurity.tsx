'use client'

import { useState, useEffect } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingSecurity() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })
  const [cardPosition, setCardPosition] = useState(0)

  const cards = [
    { color: 'bg-red-200', number: '**** **** **** 1234' },
    { color: 'bg-green-400', number: '**** **** **** 5678' },
    { color: 'bg-blue-400', number: '**** **** **** 9012' },
    { color: 'bg-yellow-400', number: '**** **** **** 3456' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCardPosition((prev) => {
        // Reset when we've moved through all cards to create seamless loop
        if (prev >= cards.length * 200) return 0
        return prev + 1
      })
    }, 50)
    return () => clearInterval(interval)
  }, [cards.length])

  const features = [
    {
      title: 'Blocking rule engine',
      description: 'Automatically cut off suspicious or undesirable traffic using blocking schemes with configurable dynamic rules.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Smart allowlisting',
      description: 'Eliminate security threats by automatically granting or denying access based on contextual information.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Smart 3DS routing',
      description: 'Enable or disable 3DS when needed, or apply it selectively for transactions filtered by relevant parameters.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Third-party risk scoring',
      description: 'Connect your trusted antifraud and risk scoring systems, like Sift, MaxMind or Ravelin, for an extra layer of protection.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Ultimate Security for Your Customers' Data
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Work with the payment gateway for online gambling business that strengthens the security of your{' '}
            <span className="text-[#4730B8] font-semibold">high-risk business</span>, assists on fraud prevention, and ensures all-round compliance.
          </p>
        </div>

        {/* Central Graphic - Device Processing Cards */}
        <div className="flex justify-center mb-12 relative">
          <div className="relative w-full max-w-3xl">
            {/* Horizontal Flow of Credit Cards */}
            <div className="relative h-64 flex items-center justify-center overflow-hidden">
              {/* Cards moving horizontally from left to right */}
              <div className="absolute inset-0 flex items-center" style={{ width: '200%', left: `${-cardPosition * 2}px` }}>
                {/* Duplicate cards for seamless loop */}
                {[...cards, ...cards, ...cards].map((card, index) => {
                  const xPosition = index * 200
                  const isInDevice = xPosition > 300 && xPosition < 500
                  const opacity = isInDevice ? 0.9 : xPosition < 200 ? 0.4 : xPosition > 700 ? 0.4 : 1
                  
                  return (
                    <div
                      key={index}
                      className={`absolute ${card.color} rounded-xl shadow-lg w-40 h-24 flex items-center justify-center`}
                      style={{
                        left: `${xPosition}px`,
                        opacity: opacity,
                        zIndex: isInDevice ? 15 : 10,
                      }}
                    >
                      {/* Card Design */}
                      <div className="w-full h-full p-3 flex flex-col justify-between">
                        {/* Chip */}
                        <div className="w-6 h-5 bg-yellow-400 rounded-sm"></div>
                        {/* Card Number Dashes */}
                        <div className="flex gap-1 items-center">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-2 h-1.5 bg-white/60 rounded"></div>
                          ))}
                          <span className="text-white/80 text-xs font-mono font-body ml-1">1234</span>
                        </div>
                        {/* Bottom Line */}
                        <div className="w-3/4 h-1.5 bg-white/40 rounded"></div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Central Device */}
              <div className="relative z-20 bg-gray-900 rounded-2xl p-6 w-32 h-80 shadow-2xl border-4 border-gray-800" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                {/* Top Yellow Screen */}
                <div className="bg-yellow-400 rounded-lg p-2 mb-2 h-12 flex items-center justify-center">
                  <p className="text-xs text-gray-900 font-semibold text-center font-body">Transaction allowed</p>
                </div>
                
                {/* Blue Screen with Grid */}
                <div className="bg-blue-600 rounded-lg p-3 mb-2 h-32 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-30">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-white/20 rounded"></div>
                    ))}
                  </div>
                  {/* Corner Brackets */}
                  <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                  <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                </div>
                
                {/* SCANNED Section */}
                <div className="bg-gray-800 rounded-lg p-2 mb-2 h-16">
                  <p className="text-white text-xs font-semibold mb-1 font-body">SCANNED</p>
                  <div className="space-y-1">
                    <div className="h-1 bg-gray-600 rounded"></div>
                    <div className="h-1 bg-gray-600 rounded"></div>
                    <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Bottom Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-6 bg-green-500 rounded"></div>
                    <div className="w-8 h-6 bg-red-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Paragraph */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Combat bonus abuse, player collusion, account takeover, chargebacks, and self-exclusion with our ready-made antifraud solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mb-4 text-[#4730B8]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

