'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  SecurityHero,
  CertificationsCompliance,
  SecureInfrastructure,
  InfrastructureReliability,
  ThreeDSecure,
  CardVaultTokenisation,
  SecureOnlinePayments,
  FraudPrevention,
  SecurityRelatedRoutes,
  PayoutsCTA,
} from '@/shared/components'

/**
 * Security & Compliance page component
 * Displays comprehensive information about ValoraPay's security standards
 */
export default function SecurityPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <SecurityHero />
          </div>
        </div>

        {/* Certifications & Compliance Section */}
        <section aria-label="Certifications and compliance" className="mx-5 my-5">
          <CertificationsCompliance />
        </section>

        {/* Secure Infrastructure Section */}
        <section aria-label="Secure infrastructure" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <SecureInfrastructure />
          </div>
        </section>

        {/* Infrastructure Reliability Section */}
        <section aria-label="Infrastructure reliability" className="mx-5 my-5">
          <InfrastructureReliability />
        </section>

        {/* 3D Secure Section */}
        <section aria-label="3D Secure" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <ThreeDSecure />
          </div>
        </section>

        {/* Card Vault & Tokenisation Section */}
        <section aria-label="Card vault and tokenisation" className="mx-5 my-5">
          <CardVaultTokenisation />
        </section>

        {/* Secure Online Payments Section */}
        <section aria-label="Secure online payments" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <SecureOnlinePayments />
          </div>
        </section>

        {/* Fraud Prevention Section */}
        <section aria-label="Fraud prevention" className="mx-5 my-5">
          <FraudPrevention />
        </section>

        {/* CTA Section */}
        <section aria-label="CTA">
          <PayoutsCTA />
        </section>

        {/* Related Routes Section */}
        <section aria-label="Related routes" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <SecurityRelatedRoutes />
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

