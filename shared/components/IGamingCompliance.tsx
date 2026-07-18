'use client'

import { useState, useEffect } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function IGamingCompliance() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const cards = [
    { number: '5783 46** **** 9301', color: 'bg-red-500' },
    { number: '9542 11** **** 1952', color: 'bg-blue-500' },
    { number: '4321 87** **** 6543', color: 'bg-purple-500' },
    { number: '1234 56** **** 7890', color: 'bg-green-500' },
    { number: '9876 54** **** 3210', color: 'bg-yellow-500' },
    { number: '2468 13** **** 5791', color: 'bg-orange-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(true)
      setScanProgress(0)
      
      // Animate scan progress
      const progressInterval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setIsScanning(false)
            setCurrentCardIndex((prev) => (prev + 1) % cards.length)
            return 0
          }
          return prev + 2
        })
      }, 50)
    }, 3000) // Change card every 3 seconds

    return () => {
      clearInterval(interval)
    }
  }, [cards.length])

  const currentCard = cards[currentCardIndex]

  const features = [
    {
      title: 'Real-time fraud management with firewall filters',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Limits on deposits and withdrawals, thresholds management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Smart blocklisting against serial fraudsters',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: 'Identity authentication verification upon the first deposit and withdrawal request',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      soon: true,
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Efficient Compliance and Antifraud
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
            Powerful toolkit to keep fraudsters at bay
          </p>
        </div>

        {/* Sliding Cards Row */}
        <div className="mb-8 overflow-hidden">
          <div className="flex gap-4" style={{ animation: 'slideCards 40s linear infinite', width: 'max-content' }}>
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-40 h-24 ${card.color} rounded-xl shadow-lg transform transition-all duration-300 relative overflow-hidden ${
                  index === currentCardIndex || index === currentCardIndex + cards.length ? 'scale-110 z-10' : 'scale-100 opacity-60'
                }`}
              >
                {/* Card Skeleton Design */}
                <div className="w-full h-full p-3 flex flex-col justify-between">
                  {/* Top Row - Chip and Logo */}
                  <div className="flex items-start justify-between">
                    {/* Chip */}
                    <div className="w-6 h-5 bg-[#FCD34D] rounded-sm"></div>
                    {/* Logo Area */}
                    <div className="w-8 h-5 bg-white/30 rounded"></div>
                  </div>
                  
                  {/* Card Number Dashes */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-1.5 bg-white/40 rounded"></div>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-1.5 bg-white/40 rounded"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Name/Expiry Line */}
                  <div className="w-3/4 h-1.5 bg-white/30 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Graphic - Smartphone Device */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-sm">
            {/* Smartphone Device */}
            <div className="relative bg-gray-800 rounded-[30px] p-4 shadow-2xl">
              {/* Top Banner - Card Number */}
              <div className="bg-[#FCD34D] rounded-lg p-3 mb-4 transition-all duration-500">
                <p className="text-xs text-gray-900 font-semibold mb-1 font-body">Card number</p>
                <p className="text-sm text-gray-900 font-mono font-bold font-body transition-all duration-500">
                  {currentCard.number}
                </p>
              </div>

              {/* Middle - Scanning Card */}
              <div className="bg-gray-100 rounded-lg p-6 mb-4 relative">
                <div className={`border-2 ${isScanning ? 'border-blue-500' : 'border-gray-300'} rounded-lg p-4 relative transition-all duration-300`}>
                  {/* Card outline */}
                  <div className={`w-full h-24 ${currentCard.color} rounded-lg flex items-center justify-center transition-all duration-500`}>
                    <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                      {/* Chip */}
                      <div className="absolute top-2 left-2 w-6 h-6 bg-[#FCD34D] rounded-sm"></div>
                      {/* Card lines */}
                      <div className="w-full px-4 space-y-1">
                        <div className="h-1 bg-white/30 rounded w-full"></div>
                        <div className="h-1 bg-white/30 rounded w-3/4"></div>
                        <div className="h-1 bg-white/30 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  {/* Scanning text */}
                  <div className="mt-3 text-center">
                    <p className={`text-xs font-semibold ${isScanning ? 'text-blue-600' : 'text-gray-400'} font-body transition-colors`}>
                      {isScanning ? 'SCANNING..' : 'READY'}
                    </p>
                    <div className="w-full h-1.5 bg-blue-200 rounded-full mt-2">
                      <div 
                        className={`h-full ${isScanning ? 'bg-blue-500' : 'bg-gray-300'} rounded-full transition-all duration-100`}
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - Control Panel */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-6 bg-gray-700 rounded"></div>
                  <div className="w-12 h-6 bg-gray-700 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className={`w-10 h-6 ${isScanning ? 'bg-green-600' : 'bg-gray-600'} rounded transition-colors`}></div>
                  <div className="w-10 h-6 bg-red-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Belonging to the <span className="text-[#4730B8] font-semibold">high-risk industry</span>, online gaming projects are prone to fraud attacks and have to strictly comply with the regulations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-shadow relative">
              {feature.soon && (
                <div className="absolute top-4 right-4 bg-[#FCD34D] text-gray-900 text-xs font-bold px-2 py-1 rounded font-body">
                  SOON
                </div>
              )}
              <div className="w-12 h-12 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mb-4 text-[#4730B8]">
                {feature.icon}
              </div>
              <p className="text-base text-gray-900 leading-relaxed font-body">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

