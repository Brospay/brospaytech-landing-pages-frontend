'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  PaymentsHero,
  PaymentFeatures,
  SmartCard,
  AcceptPayments,
  PaymentsCTA,
  OptimizePayments,
  RoutePayments,
  MarketPayments,
  AnalyseIntegratePayments,
  FAQ,
} from '@/shared/components'

/**
 * Payments page component
 * Displays comprehensive information about BrosPay's payment solutions
 */
export default function PaymentsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <PaymentsHero />
          </div>
        </div>

        {/* Payment Features Section */}
        <section aria-label="Payment features" className="mx-5 my-5">
          <PaymentFeatures />
        </section>

        {/* Connect Payments Section with Toggles */}
        <section aria-label="Connect payments" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <SmartCard showPaymentDetails={true} />
          </div>
        </section>

        {/* Accept Payments Section */}
        <section aria-label="Accept payments" className="mx-5 my-5">
          <AcceptPayments />
        </section>

        {/* Payments CTA Section */}
        <section aria-label="ROI Calculator CTA">
          <PaymentsCTA />
        </section>

        {/* Optimize Payments Section */}
        <section aria-label="Optimize payments" className="mx-5 my-5">
          <OptimizePayments />
        </section>

        {/* Route Payments Section */}
        <section aria-label="Route payments" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <RoutePayments />
          </div>
        </section>

        {/* Market Payments Section */}
        <section aria-label="Market payments" className="mx-5 my-5">
          <MarketPayments />
        </section>

        {/* Analyse & Integrate Payments Section */}
        <section aria-label="Analyse and integrate payments" className="mx-5 my-8">
          <div className="bg-gray-900 rounded-[20px] overflow-hidden">
            <AnalyseIntegratePayments />
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ" className="mx-5 my-5">
          <FAQ />
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

