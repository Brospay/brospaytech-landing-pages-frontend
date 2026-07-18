'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  BatchPayoutsHero,
  BatchPayoutsProcess,
  SimpleEfficientTool,
  BeyondBatchPayouts,
  SolveTimeConsumingIssues,
  MultipurposeSolution,
  PayoutsCTA,
  FAQ,
} from '@/shared/components'

/**
 * Batch Payouts page component
 * Displays comprehensive information about ValoraPay's batch payout solutions
 */
export default function BatchPayoutsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <BatchPayoutsHero />
          </div>
        </div>

        {/* Process Steps Section */}
        <section aria-label="Batch payouts process" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <BatchPayoutsProcess />
          </div>
        </section>

        {/* Simple and Efficient Tool Section */}
        <section aria-label="Simple and efficient tool" className="mx-5 my-5">
          <SimpleEfficientTool />
        </section>

        {/* Beyond Batch Payouts Section */}
        <section aria-label="Beyond batch payouts" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <BeyondBatchPayouts />
          </div>
        </section>

        {/* Solve Time-Consuming Issues Section */}
        <section aria-label="Solve time-consuming issues" className="mx-5 my-5">
            <SolveTimeConsumingIssues />
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* Multipurpose Solution Section */}
        <section aria-label="Multipurpose solution" className="mx-5 my-5">
          <MultipurposeSolution />
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ" className="mx-5 my-5">
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

