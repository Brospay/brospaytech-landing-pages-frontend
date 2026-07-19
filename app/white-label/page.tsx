'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  WhiteLabelHero,
  BrandedSolution,
  HowItWorksWhiteLabel,
  StateOfTheArtPlatform,
  WhyWhiteLabel,
  WhatsIncluded,
  IndustryStandards,
  WhiteLabelEducation,
  WhiteLabelRelatedRoutes,
  PayoutsCTA,
} from '@/shared/components'

/**
 * White Label Payment Provider page component
 * Displays comprehensive information about BrosPay's white label solution
 */
export default function WhiteLabelPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <WhiteLabelHero />
          </div>
        </div>

        {/* Branded Solution Section */}
        <section aria-label="Branded solution" className="mx-5 my-5">
          <BrandedSolution />
        </section>

        {/* How It Works Section */}
        <section aria-label="How it works" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <HowItWorksWhiteLabel />
          </div>
        </section>

        {/* State of the Art Platform Section */}
        <section aria-label="State of the art platform" className="mx-5 my-5">
          <StateOfTheArtPlatform />
        </section>

        {/* Why White Label Section */}
        <section aria-label="Why white label" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <WhyWhiteLabel />
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* What's Included Section */}
        <section aria-label="What's included" className="mx-5 my-5">
          <WhatsIncluded />
        </section>

        {/* Industry Standards Section */}
        <section aria-label="Industry standards" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <IndustryStandards />
          </div>
        </section>

        {/* Education & FAQ Section */}
        <section aria-label="Education and FAQ" className="mx-5 my-5">
          <WhiteLabelEducation />
        </section>

        {/* Related Routes Section */}
        <section aria-label="Related routes" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <WhiteLabelRelatedRoutes />
          </div>
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

