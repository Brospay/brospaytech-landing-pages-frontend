'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  EcommerceHero,
  EcommerceBenefits,
  EcommerceScaleGlobally,
  EcommerceCheckout,
  EcommerceOptimizePerformance,
  EcommerceSecurity,
  EcommerceCardVault,
  EcommerceIntegration,
  ResponsiveAdaptive,
  WhiteLabelGatewayComparison,
  EcommerceEducation,
} from '@/shared/components'

/**
 * E-commerce page component
 * Displays comprehensive information about BrosPay's e-commerce payment gateway solution
 */
export default function EcommercePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <EcommerceHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="E-commerce benefits" className="mx-5 my-5">
          <EcommerceBenefits />
        </section>

        {/* Scale Globally & Checkout Experience Section */}
        <section aria-label="Scale globally and checkout experience" className="mx-5 my-5">
          <EcommerceScaleGlobally />
        </section>

        {/* Optimize Performance Section */}
        <section aria-label="Optimize performance" className="mx-5 my-5">
          <EcommerceOptimizePerformance />
        </section>

        {/* Security Section */}
        <section aria-label="Security" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <EcommerceSecurity />
          </div>
        </section>

        {/* Card Vault & Tokenisation Section */}
        <section aria-label="Card vault and tokenisation" className="mx-5 my-5">
          <EcommerceCardVault />
        </section>

        {/* Integration Options Section */}
        <section aria-label="Integration options" className="mx-5 my-5">
          <EcommerceIntegration />
        </section>

        {/* Responsiveness Section */}
        <section aria-label="Responsiveness and adaptivity" className="mx-5 my-5">
          <ResponsiveAdaptive />
        </section>

        {/* Comparison Section */}
        <section aria-label="Comparison" className="mx-5 my-5">
          <WhiteLabelGatewayComparison />
        </section>

        {/* Education Section */}
        <section aria-label="Education and FAQ" className="mx-5 my-5">
          <EcommerceEducation />
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

