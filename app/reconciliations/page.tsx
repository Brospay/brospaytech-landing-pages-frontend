'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  ReconciliationsHero,
  ReconciliationTypes,
  WellOrderedStatements,
  CoverAllCorrections,
  ReconciliationBenefits,
  AccurateRealTimeBalance,
  ReverseReconciliation,
  ReconciliationsFAQ,
} from '@/shared/components'

/**
 * Reconciliations page component
 * Displays comprehensive information about BrosPay's reconciliation solutions
 */
export default function ReconciliationsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <ReconciliationsHero />
          </div>
        </div>

        {/* Reconciliation Types Section */}
        <section aria-label="Types of reconciliations" className="mx-5 my-5">
          <ReconciliationTypes />
        </section>

        {/* Well-Ordered Statements Section */}
        <section aria-label="Well-ordered statements" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <WellOrderedStatements />
          </div>
        </section>

        {/* Cover-All Corrections Section */}
        <section aria-label="Cover-all corrections" className="mx-5 my-5">
          <CoverAllCorrections />
        </section>

        {/* Benefits Section */}
        <section aria-label="Benefits" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <ReconciliationBenefits />
          </div>
        </section>

        {/* Accurate Real-Time Balance Section */}
        <section aria-label="Accurate balance" className="mx-5 my-5">
          <AccurateRealTimeBalance />
        </section>

        {/* Reverse Reconciliation Section */}
        <section aria-label="Reverse reconciliation" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <ReverseReconciliation />
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-label="FAQ" className="mx-5 my-5">
          <ReconciliationsFAQ />
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

