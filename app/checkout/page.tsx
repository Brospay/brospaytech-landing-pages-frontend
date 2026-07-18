'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  CheckoutHero,
  HowItWorks,
  ConversionTools,
  BuiltForGrowth,
  PaymentFlows,
  Internationalisation,
  DeveloperCentric,
  ResponsiveAdaptive,
  FAQ,
} from '@/shared/components'

/**
 * Checkout page component
 * Displays comprehensive information about ValoraPay's checkout solutions
 */
export default function CheckoutPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <CheckoutHero />
          </div>
        </div>

        {/* How It Works Section */}
        <section aria-label="How it works" className="mx-5 my-5">
          <HowItWorks />
        </section>

        {/* Conversion Tools Section */}
        <section aria-label="Conversion tools" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <ConversionTools />
          </div>
        </section>

        {/* Built For Growth Section */}
        <section aria-label="Built for growth" className="mx-5 my-5">
          <BuiltForGrowth />
        </section>

        {/* Payment Flows Section */}
        <section aria-label="Payment flows" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <PaymentFlows />
          </div>
        </section>

        {/* Internationalisation Section */}
        <section aria-label="Internationalisation" className="mx-5 my-5">
          <Internationalisation />
        </section>

        {/* Developer Centric Section */}
        <section aria-label="Developer centric" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <DeveloperCentric />
          </div>
        </section>

        {/* Responsive and Adaptive Section */}
        <section aria-label="Responsive and adaptive" className="mx-5 my-5">
          <ResponsiveAdaptive />
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

