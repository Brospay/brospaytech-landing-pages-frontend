'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  IsoMspHero,
  IsoMspBenefits,
  IsoMspReadyToUse,
  IsoMspCertifications,
  Testimonials,
  FAQ,
} from '@/shared/components'

/**
 * ISO/MSP page component
 * Displays comprehensive information about ValoraPay's ISO/MSP payment gateway solution
 */
export default function IsoMspPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <IsoMspHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="ISO/MSP benefits" className="mx-5 my-5">
          <IsoMspBenefits />
        </section>

        {/* Ready-to-use Solution Section */}
        <section aria-label="Ready-to-use cloud solution" className="mx-5 my-5">
          <IsoMspReadyToUse />
        </section>

        {/* Certifications Section */}
        <section aria-label="Certifications and compliance" className="mx-5 my-5">
          <IsoMspCertifications />
        </section>

        {/* Testimonials Section */}
        <section aria-label="Customer testimonials" className="mx-5 my-5">
          <div className="bg-white rounded-[20px] overflow-hidden">
            <Testimonials />
          </div>
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

