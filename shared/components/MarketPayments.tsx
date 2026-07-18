'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { useState, useEffect, useRef } from 'react'

/**
 * Market Payments section component
 * Features white-label payment platform for merchants
 */
export function MarketPayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [scannedCards, setScannedCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const centerMarkerRef = useRef<HTMLDivElement>(null)

  // Transaction amounts for the flow visualization - duplicated for seamless loop
  const transactions = [
    { amount: '$600.62', badge: '+2', color: 'bg-blue-500' },
    { amount: '$167.27', badge: '+5', color: 'bg-green-500' },
    { amount: '$922.93', badge: null, color: 'bg-blue-500' },
    { amount: '$84.14', badge: '+6', color: 'bg-green-500' },
    { amount: '$340.89', badge: '+3', color: 'bg-blue-500' },
    { amount: '$53.09', badge: null, color: 'bg-green-500' },
    { amount: '$225.78', badge: '+4', color: 'bg-blue-500' },
    { amount: '$353.05', badge: '+2', color: 'bg-green-500' },
    { amount: '$752.00', badge: '+5', color: 'bg-blue-500' },
    { amount: '$322.12', badge: null, color: 'bg-green-500' },
    { amount: '$320.61', badge: '+3', color: 'bg-blue-500' },
    { amount: '$211.38', badge: null, color: 'bg-green-500' },
  ]

  // Duplicate transactions for seamless infinite loop
  const duplicatedTransactions = [...transactions, ...transactions]

  // Track which cards are in the center using position checking
  useEffect(() => {
    let animationFrameId: number
    const centerX = window.innerWidth / 2

    const checkCardPositions = () => {
      if (!centerMarkerRef.current) return

      const centerMarkerRect = centerMarkerRef.current.getBoundingClientRect()
      const centerX = centerMarkerRect.left + centerMarkerRect.width / 2

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return

        const cardRect = ref.getBoundingClientRect()
        const cardCenterX = cardRect.left + cardRect.width / 2
        const distance = Math.abs(cardCenterX - centerX)

        // If card is within 50px of center, mark it as scanned
        if (distance < 50) {
          const originalIndex = index % transactions.length
          setScannedCards((prev) => {
            if (!prev.has(originalIndex)) {
              const newSet = new Set(prev)
              newSet.add(originalIndex)
              return newSet
            }
            return prev
          })
        }
      })

      animationFrameId = requestAnimationFrame(checkCardPositions)
    }

    // Start checking after a short delay
    const timeoutId = setTimeout(() => {
      checkCardPositions()
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [transactions.length])

  // Function to get updated badge number
  const getUpdatedBadge = (originalBadge: string | null, cardIndex: number): string | null => {
    if (!originalBadge) return null
    if (scannedCards.has(cardIndex)) {
      // Increment the badge number when scanned
      const number = parseInt(originalBadge.replace('+', ''))
      return `+${number + 1}`
    }
    return originalBadge
  }

  const features = [
    {
      title: 'Fees',
      description: "It's up to you to decide how much to charge your merchants for any payment service, and thus how much you'll earn.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Merchant portal',
      description: 'Provide merchants with a single fully-fledged solution for handling operations and monitoring their performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Virtual balances',
      description: 'You and your merchants can keep track of all incoming and outgoing cash flows in multiple currencies in real time.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Transaction reporting',
      description: 'Merchants will always be in control of their business results with detailed auto-generated reports.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Market Payments
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Offer ValoraPay's sophisticated{' '}
            <span className="text-[#4730B8] font-semibold">payment platform</span> to your merchants under your brand and get extra revenue effortlessly.
          </p>
        </div>

        {/* Transaction Flow Visualization - Animated Slider */}
        <div className="mb-16 lg:mb-20 py-8 relative">
          {/* Commission Machine - Fixed Center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div 
                className="rounded-xl p-6 lg:p-8 min-w-[220px] shadow-xl border-2 border-[#4730B8]/30"
                style={{
                  background: 'linear-gradient(125deg, #4730B8 0%, rgba(119, 42, 226, 1.00) 51%, rgba(119, 42, 226, 1.00) 100%)'
                }}
              >
                <div className="text-center mb-4">
                  <div className="text-white font-semibold text-sm mb-2 font-body">Commission</div>
                  <div className="text-white font-bold text-3xl font-heading">+2</div>
                </div>
                {/* Machine Icon */}
                <div className="flex justify-center">
                  <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#4730B8] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                +2
              </div>
            </div>
          </div>

          {/* Animated Slider Container */}
          <div className="relative overflow-hidden py-4">
            {/* Center marker for intersection detection */}
            <div
              ref={centerMarkerRef}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-20 pointer-events-none z-10"
            />
            
            <div
              className="flex items-center gap-4 transaction-slider"
              style={{
                animation: 'slideTransactions 30s linear infinite',
              }}
            >
              {/* Render duplicated transactions for seamless loop */}
              {duplicatedTransactions.map((transaction, index) => {
                const originalIndex = index % transactions.length
                const updatedBadge = getUpdatedBadge(transaction.badge, originalIndex)
                
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    data-card-index={originalIndex}
                    className="flex items-center gap-4 flex-shrink-0 py-2"
                  >
                    <div className="relative overflow-visible">
                      <div className={`${transaction.color} px-4 py-3 rounded-lg text-white font-semibold text-sm min-w-[110px] text-center shadow-lg transition-all duration-300 ${scannedCards.has(originalIndex) ? 'scale-105 ring-2 ring-[#4730B8]' : ''}`}>
                        {transaction.amount}
                      </div>
                      {updatedBadge && (
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#4730B8] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg transition-all duration-300 z-10">
                          <span className="leading-none">{updatedBadge}</span>
                        </div>
                      )}
                    </div>
                    <svg className="w-8 h-0.5" viewBox="0 0 32 2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="32" y2="1" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#4730B8] flex items-center justify-center text-white flex-shrink-0">
                {feature.icon}
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

