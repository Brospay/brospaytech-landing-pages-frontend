'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  CaseStudies,
  CaseStudiesStats,
  Testimonials,
} from '@/shared/components'

/**
 * Case Studies page component
 */
export default function CaseStudiesPage() {
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
                  <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-center">
                    800M+ successful transactions across the world powered by BrosPay
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                    Discover how our payment orchestration platform and expert assistance have facilitated businesses across different regions and industries, from e-commerce merchants to payment institutions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <section aria-label="Case studies statistics">
          <CaseStudiesStats />
        </section>

        {/* Case Studies Section */}
        <section aria-label="Case studies" className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
          <CaseStudies />
        </section>

        {/* Testimonials Section */}
        <section aria-label="Client testimonials" className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
          <Testimonials />
        </section>


        {/* Footer Background Wrapper */}
        <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
          <Footer />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  )
}

