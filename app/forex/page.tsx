'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  ForexHero,
  ForexBenefits,
  ForexScaleGlobally,
  ForexOptimizePerformance,
  ForexSecurity,
  ForexStableSecure,
  ForexTrackOptimise,
  ForexReconciliations,
  Testimonials,
  WhiteLabelGatewayComparison,
  ForexEducation,
} from '@/shared/components'

/**
 * Forex page component
 * Displays comprehensive information about BrosPay's Forex payment gateway solution
 */
export default function ForexPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <ForexHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Forex benefits" className="mx-5 my-5">
          <ForexBenefits />
        </section>

        {/* Scale Globally Section */}
        <section aria-label="Scale globally" className="mx-5 my-5">
          <ForexScaleGlobally />
        </section>

        {/* Optimize Performance Section */}
        <section aria-label="Optimize performance" className="mx-5 my-5">
          <ForexOptimizePerformance />
        </section>

        {/* Security Section */}
        <section aria-label="Security" className="mx-5 my-5">
          <ForexSecurity />
        </section>

        {/* Stable and Secure Performance Section */}
        <section aria-label="Stable and secure performance" className="mx-5 my-5">
          <ForexStableSecure />
        </section>

        {/* Track and Optimise Performance Section */}
        <section aria-label="Track and optimise performance" className="mx-5 my-5">
          <ForexTrackOptimise />
        </section>

        {/* Payment Reconciliations Section */}
        <section aria-label="Payment reconciliations" className="mx-5 my-5">
          <ForexReconciliations />
        </section>

        {/* Testimonials Section */}
        <section aria-label="Customer testimonials" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <Testimonials />
          </div>
        </section>

        {/* Comparison Section */}
        <section aria-label="Comparison" className="mx-5 my-5">
          <WhiteLabelGatewayComparison />
        </section>

        {/* Education Section */}
        <section aria-label="Education and FAQ" className="mx-5 my-5">
          <ForexEducation />
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

