'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  RoutingHero,
  RoutingBenefits,
  SmartPaymentRouting,
  RuleEngine,
  DynamicRoutingRules,
  RealTimeAllocation,
  ExtraRoutingFeatures,
  CascadingSection,
  FAQ,
  PayoutsCTA,
} from '@/shared/components'

/**
 * Routing & Cascading page component
 * Displays comprehensive information about ValoraPay's routing and cascading solutions
 */
export default function RoutingCascadingPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <RoutingHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Routing benefits" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <RoutingBenefits />
          </div>
        </section>

        {/* Smart Payment Routing Section */}
        <section aria-label="Smart payment routing" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <SmartPaymentRouting />
          </div>
        </section>

        {/* Rule Engine Section */}
        <section aria-label="Rule engine" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <RuleEngine />
          </div>
        </section>

        {/* Dynamic Routing Rules Section */}
        <section aria-label="Dynamic routing rules" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <DynamicRoutingRules />
          </div>
        </section>

        {/* Real-Time Allocation Section */}
        <section aria-label="Real-time allocation" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <RealTimeAllocation />
          </div>
        </section>

        {/* Extra Features Section */}
        <section aria-label="Extra features" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <ExtraRoutingFeatures />
          </div>
        </section>

        {/* Cascading Section */}
        <section aria-label="Payment cascading" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <CascadingSection />
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
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

