'use client'

import { useState } from 'react'
import { Navigation, Footer, ScrollToTop, Pricing } from '@/shared/components'

/**
 * Pricing page component
 * Displays pricing plans, features, and comparison tables
 */
export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'customer-success'>('products')

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
                <div className="text-center mb-12 lg:mb-16">
                  <h1 className="text-[2.4rem] font-medium text-white mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
                    Pricing
                  </h1>
                  <p className="text-[18px] text-white mb-6 max-w-3xl mx-auto text-center leading-relaxed font-body">
                    Flexible pricing for businesses of any size. Pay monthly or annually with no long-term commitment.{' '}
                    <a
                      href="#roi-calculator"
                      className="text-white hover:text-[#7B2AE2] transition-colors font-body underline"
                    >
                      Curious about your potential return on investment? Estimate your ROI with our calculator
                    </a>
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab('products')}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors font-body ${
                      activeTab === 'products'
                        ? 'bg-white text-gray-900'
                        : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    Products & Plans
                  </button>
                  <button
                    onClick={() => setActiveTab('customer-success')}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors font-body ${
                      activeTab === 'customer-success'
                        ? 'bg-white text-gray-900'
                        : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    Customer Success
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section aria-label="Pricing">
          <Pricing activeTab={activeTab} />
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

