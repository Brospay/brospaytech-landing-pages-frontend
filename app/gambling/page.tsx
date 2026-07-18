'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  GamblingHero,
  GamblingBenefits,
  GamblingOperatorsPlatforms,
  GamblingCheckout,
  GamblingPayments,
  GamblingFlexibility,
  EcommerceCardVault,
  GamblingSecurity,
  GamblingAnalytics,
  GamblingReconciliation,
  Testimonials,
  WhiteLabelGatewayComparison,
  GamblingEducation,
} from '@/shared/components'

/**
 * Gambling page component
 * Displays comprehensive information about ValoraPay's Gambling payment gateway solution
 */
export default function GamblingPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <GamblingHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Gambling benefits" className="mx-5 my-5">
          <GamblingBenefits />
        </section>

        {/* Operators and Platforms Section */}
        <section aria-label="Single solution for gambling operators and platforms" className="mx-5 my-5">
          <GamblingOperatorsPlatforms />
        </section>

        {/* Worldwide Payment Network Section */}
        <section aria-label="Worldwide payment network" className="mx-5 my-5">
          <GamblingPayments />
        </section>

        {/* Flexibility and Checkout Section - Shared Background */}
        <section aria-label="Make your online gambling business flexible and checkout experience" className="mx-5 my-5 relative rounded-[20px] overflow-hidden">
          {/* Background Image - Same as GlobalAccess */}
          <div className="absolute inset-0 global-access-bg rounded-[20px]">
            <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <GamblingFlexibility />
            <GamblingCheckout />
          </div>
        </section>

        {/* Card Vault & Tokenisation Section */}
        <section aria-label="Card vault and tokenisation" className="mx-5 my-5">
          <EcommerceCardVault />
        </section>

        {/* Security Section */}
        <section aria-label="Ultimate security for your customers' data" className="mx-5 my-5">
          <GamblingSecurity />
        </section>

        {/* Analytics Section */}
        <section aria-label="Live all-out view of business performance" className="mx-5 my-5">
          <GamblingAnalytics />
        </section>

        {/* Reconciliation Section */}
        <section aria-label="Monitor company's financial health" className="mx-5 my-5">
          <GamblingReconciliation />
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
          <GamblingEducation />
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

