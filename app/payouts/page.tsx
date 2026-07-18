'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  PayoutsHero,
  PayoutsFeatures,
  SmartCard,
  MakePayouts,
  OptimisePayouts,
  RoutePayouts,
  MarketPayments,
  AnalyseIntegratePayments,
  PayoutsFAQ,
  PayoutsCTA,
} from '@/shared/components'

/**
 * Payouts page component
 * Displays comprehensive information about ValoraPay's payout solutions
 */
export default function PayoutsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <PayoutsHero />
          </div>
        </div>

        {/* Payouts Features Section */}
        <section aria-label="Payout features" className="mx-5 my-5">
          <PayoutsFeatures />
        </section>

        {/* Connect Payouts Section */}
        <section aria-label="Connect payouts" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <SmartCard showPaymentDetails={true} />
          </div>
        </section>

        {/* Make Payouts Section */}
        <section aria-label="Make payouts" className="mx-5 my-5">
          <MakePayouts />
        </section>

        {/* Optimise Payouts Section */}
        <section aria-label="Optimise payouts" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <OptimisePayouts />
          </div>
        </section>

        {/* Route Payouts Section */}
        <section aria-label="Route payouts" className="mx-5 my-5">
          <RoutePayouts />
        </section>

        {/* Payouts CTA Section */}
        <section aria-label="Payouts CTA">
          <PayoutsCTA />
        </section>

        {/* Market Payments Section */}
        <section aria-label="Market payments" className="mx-5 my-5">
          <MarketPayments />
        </section>

        {/* Analyse & Integrate Payments Section */}
        <section aria-label="Analyse and integrate payments" className="mx-5 my-8">
          <div className="bg-gray-900 rounded-[20px] overflow-hidden">
            <AnalyseIntegratePayments type="payouts" />
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ" className="mx-5 my-5">
          <PayoutsFAQ />
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

