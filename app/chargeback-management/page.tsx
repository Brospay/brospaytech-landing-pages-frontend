'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  ChargebackHero,
  ChargebackBenefits,
  ChargebackFeatures,
  ChargebackHowItWorks,
  FAQ,
} from '@/shared/components'

/**
 * Chargeback Management page component
 * Displays comprehensive information about ValoraPay's chargeback management service
 */
export default function ChargebackManagementPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <ChargebackHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Chargeback benefits" className="mx-5 my-5">
          <ChargebackBenefits />
        </section>

        {/* Features Section */}
        <section aria-label="Chargeback features" className="mx-5 my-5">
          <ChargebackFeatures />
        </section>

        {/* How It Works Section */}
        <section aria-label="How it works" className="mx-5 my-5">
          <ChargebackHowItWorks />
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

