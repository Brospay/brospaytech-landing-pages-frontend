'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  FinancialInstitutionHero,
  FinancialInstitutionChallenges,
  FinancialInstitutionHowValoraPayHelps,
  FAQ,
} from '@/shared/components'

/**
 * Financial Institution page component
 * Displays comprehensive information about payment challenges for banks, PSPs, and financial institutions
 */
export default function FinancialInstitutionPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <FinancialInstitutionHero />
          </div>
        </div>

        {/* Challenges Section */}
        <section aria-label="Payment challenges" className="mx-5 my-5">
          <FinancialInstitutionChallenges />
        </section>

        {/* How ValoraPay Helps Section */}
        <section aria-label="How ValoraPay helps" className="mx-5 my-5">
          <FinancialInstitutionHowValoraPayHelps />
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

