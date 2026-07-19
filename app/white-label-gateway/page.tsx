'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  WhiteLabelGatewayHero,
  WhiteLabelGatewayBenefits,
  WhiteLabelGatewayHowItWorks,
  WhiteLabelGatewayControl,
  WhiteLabelGatewayComparison,
  WhiteLabelGatewayIndustries,
  WhiteLabelGatewayEducation,
  PayoutsCTA,
} from '@/shared/components'

/**
 * White Label Payment Gateway page component
 * Displays comprehensive information about BrosPay's white label payment gateway solution
 */
export default function WhiteLabelGatewayPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <WhiteLabelGatewayHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Gateway benefits" className="mx-5 my-5">
          <WhiteLabelGatewayBenefits />
        </section>

        {/* How It Works Section */}
        <section aria-label="How it works" className="mx-5 my-5">
          <WhiteLabelGatewayHowItWorks />
        </section>

        {/* Control Section */}
        <section aria-label="Take control" className="mx-5 my-5">
          <WhiteLabelGatewayControl />
        </section>

        {/* Comparison Section */}
        <section aria-label="Comparison" className="mx-5 my-5">
          <WhiteLabelGatewayComparison />
        </section>

        {/* Industries Section */}
        <section aria-label="Industries" className="mx-5 my-5">
          <WhiteLabelGatewayIndustries />
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* Education Section */}
        <section aria-label="Education and FAQ" className="mx-5 my-5">
          <WhiteLabelGatewayEducation />
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

