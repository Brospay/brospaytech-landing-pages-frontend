'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  IGamingHero,
  IGamingBenefits,
  IGamingDeposits,
  IGamingPayouts,
  IGamingAnalytics,
  IGamingCompliance,
  IGamingReconciliation,
  EcommerceCardVault,
  Testimonials,
  WhiteLabelGatewayComparison,
  IGamingEducation,
} from '@/shared/components'

/**
 * iGaming page component
 * Displays comprehensive information about ValoraPay's iGaming payment gateway solution
 */
export default function IGamingPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <IGamingHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="iGaming benefits" className="mx-5 my-5">
          <IGamingBenefits />
        </section>

        {/* Deposits Section */}
        <section aria-label="Streamlined deposits" className="mx-5 my-5">
          <IGamingDeposits />
        </section>

        {/* Payouts Section */}
        <section aria-label="Quick payouts" className="mx-5 my-5">
          <IGamingPayouts />
        </section>

        {/* Analytics Section */}
        <section aria-label="Real-time reporting and analytics" className="mx-5 my-5">
          <IGamingAnalytics />
        </section>

        {/* Card Vault & Tokenisation Section */}
        <section aria-label="Card vault and tokenisation" className="mx-5 my-5">
          <EcommerceCardVault />
        </section>

        {/* Compliance and Antifraud Section */}
        <section aria-label="Efficient compliance and antifraud" className="mx-5 my-5">
          <IGamingCompliance />
        </section>

        {/* Automated Reconciliation Section */}
        <section aria-label="Automated reconciliation for growth" className="mx-5 my-5">
          <IGamingReconciliation />
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
          <IGamingEducation />
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

