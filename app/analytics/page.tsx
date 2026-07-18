'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  AnalyticsHero,
  AnalyticsInsights,
  LiveBusinessView,
  ReportTypes,
  ReconciliationsPreview,
  DashboardPreview,
  FAQ,
  PayoutsCTA,
} from '@/shared/components'

/**
 * Analytics page component
 * Displays comprehensive information about ValoraPay's analytics solutions
 */
export default function AnalyticsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <AnalyticsHero />
          </div>
        </div>

        {/* Analytics Insights Section */}
        <section aria-label="Analytics insights" className="mx-5 my-5">
          <AnalyticsInsights />
        </section>

        {/* Live Business View Section */}
        <section aria-label="Live business view" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <LiveBusinessView />
          </div>
        </section>

        {/* Report Types Section */}
        <section aria-label="Report types" className="mx-5 my-5">
          <ReportTypes />
        </section>

        {/* Reconciliations Preview Section */}
        <section aria-label="Reconciliations" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <ReconciliationsPreview />
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section aria-label="Dashboard" className="mx-5 my-5">
          <DashboardPreview />
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ">
          <FAQ />
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

