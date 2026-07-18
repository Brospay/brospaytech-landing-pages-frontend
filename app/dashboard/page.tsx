'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  DashboardHero,
  FindAnyPayment,
  AllPaymentData,
  RealTimeDashboard,
  DashboardAnalyticsSection,
  DashboardMobileApp,
  DashboardFAQ,
  PayoutsCTA,
} from '@/shared/components'

/**
 * Dashboard page component
 * Displays comprehensive information about ValoraPay's dashboard solutions
 */
export default function DashboardPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <DashboardHero />
          </div>
        </div>

        {/* Find Any Payment Section */}
        <section aria-label="Find any payment" className="mx-5 my-5">
          <FindAnyPayment />
        </section>

        {/* All Payment Data Section */}
        <section aria-label="All payment data" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <AllPaymentData />
          </div>
        </section>

        {/* Real-Time Dashboard Section */}
        <section aria-label="Real-time dashboard" className="mx-5 my-5">
          <RealTimeDashboard />
        </section>

        {/* Dashboard Analytics Section */}
        <section aria-label="Analytics" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <DashboardAnalyticsSection />
          </div>
        </section>

        {/* Dashboard Mobile App Section */}
        <section aria-label="Mobile app" className="mx-5 my-5">
          <DashboardMobileApp />
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ" className="mx-5 my-5">
          <DashboardFAQ />
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

