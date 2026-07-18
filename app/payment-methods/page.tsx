'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { Navigation, Footer, ScrollToTop, PaymentMethods } from '@/shared/components'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

/**
 * Payment Methods page component
 * Displays the global payment methods list with filters and information
 */
export default function PaymentMethodsPage() {
  const [selectedContinent, setSelectedContinent] = useState<string>('All')
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [hoveredCountryName, setHoveredCountryName] = useState<string>('')
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)

  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            {/* Hero Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                  {/* Left Content */}
                  <div>
                    <h1 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body text-left">
                      Global payment methods list
                    </h1>
                    <p className="text-[18px] text-white mb-4 leading-relaxed font-body text-left">
                      ValoraPay provides support for almost any online payment and payout method. Our clients can work with as many payment providers as they need, having the power to connect both global and local payment options in a few clicks.
                    </p>
                    <p className="text-[18px] text-white leading-relaxed font-body text-left">
                      Our catalogue will help you to navigate the global payment landscape and find the best options for your business.
                    </p>
                  </div>

                  {/* Right Content - World Map */}
                  <div className="hidden lg:block relative">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <ComposableMap
                        projectionConfig={{
                          scale: 140,
                          center: [0, 20],
                        }}
                        className="w-full h-full"
                      >
                        <Geographies geography={geoUrl}>
                          {({ geographies }) =>
                            geographies.map((geo) => {
                              const countryName = geo.properties?.NAME || geo.properties?.name || 'Unknown'
                              const isHovered = hoveredCountry === geo.rsmKey
                              
                              return (
                                <Geography
                                  key={geo.rsmKey}
                                  geography={geo}
                                  fill={isHovered ? '#4730B8' : '#9CA3AF'}
                                  stroke="#ffffff"
                                  strokeWidth={0.5}
                                  style={{
                                    default: {
                                      fill: '#9CA3AF',
                                      outline: 'none',
                                      cursor: 'pointer',
                                    },
                                    hover: {
                                      fill: '#4730B8',
                                      outline: 'none',
                                      cursor: 'pointer',
                                    },
                                    pressed: {
                                      fill: '#4730B8',
                                      outline: 'none',
                                    },
                                  }}
                                  onMouseEnter={(e) => {
                                    const countryName = geo.properties?.NAME || geo.properties?.name || 'Unknown'
                                    setHoveredCountry(geo.rsmKey)
                                    setHoveredCountryName(countryName)
                                    const rect = (e.currentTarget as SVGElement).getBoundingClientRect()
                                    const mapContainer = (e.currentTarget as SVGElement).closest('.relative')?.getBoundingClientRect()
                                    if (mapContainer) {
                                      setTooltipPosition({
                                        x: rect.left + rect.width / 2 - mapContainer.left,
                                        y: rect.top - mapContainer.top - 10,
                                      })
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    setHoveredCountry(null)
                                    setHoveredCountryName('')
                                    setTooltipPosition(null)
                                  }}
                                />
                              )
                            })
                          }
                        </Geographies>
                      </ComposableMap>
                      
                      {/* Country Name Tooltip */}
                      {hoveredCountry && tooltipPosition && hoveredCountryName && (
                        <div
                          className="absolute z-20 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-body whitespace-nowrap pointer-events-none shadow-lg"
                          style={{
                            left: `${tooltipPosition.x}px`,
                            top: `${tooltipPosition.y}px`,
                            transform: 'translateX(-50%) translateY(-100%)',
                          }}
                        >
                          {hoveredCountryName}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section aria-label="Payment Methods">
          <PaymentMethods initialContinent={selectedContinent} />
        </section>
        {/* Footer Background Wrapper - same padding as hero section */}
        <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
          <Footer />
        </div>
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  )
}

