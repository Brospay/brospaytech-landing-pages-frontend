'use client'

import { Integration } from '@/shared/components'
import { Navigation, Footer, ScrollToTop } from '@/shared/components'

export default function IntegrationPage() {
  return (
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
                  Integrate with ValoraPay
                </h1>
                <p className="text-[18px] text-white mb-6 max-w-3xl mx-auto text-center leading-relaxed font-body">
                  Complete integration guide for ValoraPay payment platform
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section aria-label="Integration">
        <Integration />
      </section>
      {/* Footer Background Wrapper - same padding as hero section */}
      <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
        <Footer />
      </div>
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}

