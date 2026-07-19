'use client'

import { useState, useEffect, useRef } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import dynamic from 'next/dynamic'

// Lazy load the gauge component to improve initial page load
const GaugeComponent = dynamic(
  () => import('react-gauge-component').then((mod) => ({ default: mod.default || mod })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full max-w-md h-[300px] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#4730B8] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
)

/**
 * Conversion Tools section component
 * 13 tools for highest conversion with interactive gauge
 */
export function ConversionTools() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [conversionRate, setConversionRate] = useState(0)
  const [isGaugeVisible, setIsGaugeVisible] = useState(false)
  const gaugeRef = useRef<HTMLDivElement>(null)

  // Use Intersection Observer to only load gauge when section is visible
  useEffect(() => {
    // Load gauge immediately if section is already visible, otherwise wait for intersection
    if (gaugeRef.current) {
      const rect = gaugeRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible) {
        setIsGaugeVisible(true)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsGaugeVisible(true)
              observer.disconnect()
            }
          })
        },
        { threshold: 0.1, rootMargin: '100px' } // Start loading 100px before it's visible
      )

      observer.observe(gaugeRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  // Animate gauge from 0 to 92% when it becomes visible
  useEffect(() => {
    if (!isGaugeVisible) return

    const targetValue = 92
    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOutCubic(progress)
      
      const currentValue = startValue + (targetValue - startValue) * easedProgress
      setConversionRate(Math.round(currentValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setConversionRate(targetValue)
      }
    }

    // Small delay before starting animation
    const timeout = setTimeout(() => {
      animate()
    }, 300)

    return () => clearTimeout(timeout)
  }, [isGaugeVisible])

  const tools = [
    {
      title: 'Cascading',
      description: 'Eliminate declines by using automatic rerouting of a transaction until full completion.',
    },
    {
      title: 'Personalisation',
      description: "Your users will see a selection of payment methods recommended personally for them. The best online Checkout service memorises the latest and most used methods, as well as users' info.",
    },
    {
      title: 'Smart routing',
      description: 'BrosPay routes each transaction according to selected parameters, saving time and cutting costs.',
    },
    {
      title: 'Localisation',
      description: 'When enabled, Checkout can identify and adapt to the geolocation of a user in a snap, switching to the right language and displaying local payment methods first.',
    },
    {
      title: 'Anti-fraud',
      description: 'Combat fraud and decrease chargeback ratio relying on our anti-fraud engine and security tools.',
    },
    {
      title: '"Remember me"',
      description: 'Show your appreciation to returning customers by eliminating the need for repeated payment data entry. Empower them to manage saved cards and payment methods.',
    },
    {
      title: 'Tokenisation',
      description: 'One-click payments reduce friction and skyrocket conversion, refining the customer experience.',
    },
    {
      title: 'Abandoned cart recovery',
      description: "In case your customer forgets to finalise the purchase, online Checkout system will automatically take care of their cart, saving it for them to return and proceed.",
    },
    {
      title: 'Retries',
      description: 'Stop losing sales with manual retries and enable auto-retries to handle failover management.',
    },
    {
      title: 'Business model versatility',
      description: 'Accept payments regardless of your business type. Process payments, donations, and subscription requests.',
    },
    {
      title: 'Best UX',
      description: 'Checkout is the epitome of a smooth and intuitive customer journey. Offer your clients transparency and simplicity, and get significantly increased success rates back.',
    },
    {
      title: 'A/B testing',
      description: 'Feel free to configure your Checkout and perform experiments in order to optimise business performance and discover what works best for you and your clients.',
    },
    {
      title: 'Customisable UI',
      description: 'Adjust Checkout design to the look and feel of your website. Use a custom theme to make your Checkout unique.',
    },
  ]


  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Tools for the highest conversion
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Tools Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-start gap-3 relative group bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                onMouseEnter={() => {
                  setActiveTooltip(tool.title)
                  // Temporarily show tool-specific rate on hover
                  const hoverRate = Math.min(100, (index + 1) * 8)
                  setConversionRate(hoverRate)
                }}
                onMouseLeave={() => {
                  setActiveTooltip(null)
                  // Return to default 92% after hover
                  setConversionRate(92)
                }}
              >
                {/* Checkmark Icon */}
                <div className="w-6 h-6 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Tool Name */}
                <div className="flex-1 min-w-0">
                  <span className="text-[16px] text-white font-medium font-body">{tool.title}</span>
                </div>
                
                {/* Info Icon */}
                <div className="relative flex-shrink-0">
                  <svg 
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#4730B8] transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === tool.title && (
                    <div className="absolute right-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        {tool.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Interactive Gauge */}
          <div ref={gaugeRef} className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md min-h-[300px]">
              {isGaugeVisible ? (
                <GaugeComponent
                  value={conversionRate}
                  type="semicircle"
                  arc={{
                    width: 0.2,
                    padding: 0.005,
                    cornerRadius: 1,
                    subArcs: [
                      { limit: 20, color: '#3b82f6', showTick: true },
                      { limit: 30, color: '#60a5fa', showTick: true },
                      { limit: 40, color: '#10b981', showTick: true },
                      { limit: 60, color: '#fbbf24', showTick: true },
                      { limit: 70, color: '#f59e0b', showTick: true },
                      { limit: 90, color: '#ef4444', showTick: true },
                      { limit: 100, color: '#9ca3af', showTick: true },
                    ],
                  }}
                  pointer={{
                    type: 'needle',
                    elastic: true,
                    animationDelay: 0,
                  }}
                  labels={{
                    valueLabel: {
                      formatTextValue: (value) => `${value}%`,
                      style: {
                        fontSize: '42px',
                        fontWeight: '700',
                        fill: '#fff',
                        fontFamily: 'Outfit, sans-serif',
                      },
                    },
                    tickLabels: {
                      type: 'inner',
                      defaultTickValueConfig: {
                        formatTextValue: (value) => value.toString(),
                        style: {
                          fontSize: '14px',
                          fontWeight: '500',
                          fill: '#9ca3af',
                          fontFamily: 'Outfit, sans-serif',
                        },
                      },
                      ticks: [
                        { value: 0 },
                        { value: 10 },
                        { value: 20 },
                        { value: 30 },
                        { value: 40 },
                        { value: 50 },
                        { value: 60 },
                        { value: 70 },
                        { value: 80 },
                        { value: 90 },
                        { value: 100 },
                      ],
                    },
                  }}
                  minValue={0}
                  maxValue={100}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#4730B8] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Conversion Rate Label */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm font-body">Conversion rate</p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="/contacts"
                className="inline-flex items-center gap-3 bg-[#4730B8] px-6 py-3 rounded-[10px] hover:bg-[#3a26a0] transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-semibold font-body">Let's get started!</span>
              </a>
              <p className="text-gray-400 text-sm mt-4 font-body">
                Hover over tools to see the conversion impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

