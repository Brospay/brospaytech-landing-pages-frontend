'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  MarketplaceHero,
  MarketplaceWhatIsGateway,
  MarketplaceRole,
  MarketplaceAdvantages,
  MarketplaceHowToChoose,
  MarketplaceHowBrosPayHelps,
  FAQ,
} from '@/shared/components'

/**
 * Marketplace page component
 * Displays comprehensive information about BrosPay's marketplace payment gateway solution
 */
export default function MarketplacePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <MarketplaceHero />
          </div>
        </div>

        {/* What Is Gateway Section */}
        <section aria-label="What is payment gateway" className="mx-5 my-5">
          <MarketplaceWhatIsGateway />
        </section>

        {/* Role Section */}
        <section aria-label="Role of payment gateway" className="mx-5 my-5">
          <MarketplaceRole />
        </section>

        {/* Advantages Section */}
        <section aria-label="Advantages" className="mx-5 my-5">
          <MarketplaceAdvantages />
        </section>

        {/* How to Choose Section */}
        <section aria-label="How to choose" className="mx-5 my-5">
          <MarketplaceHowToChoose />
        </section>

        {/* How BrosPay Helps Section */}
        <section aria-label="How BrosPay helps" className="mx-5 my-5">
          <MarketplaceHowBrosPayHelps />
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

