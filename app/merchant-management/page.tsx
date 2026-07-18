'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  MerchantHero,
  DivideEtImpera,
  FinancialAccounting,
  IndependentCustomisation,
  DataSegmentation,
  SingleReporting,
  FAQ,
} from '@/shared/components'

/**
 * Merchant Management page component
 * Displays comprehensive information about ValoraPay's merchant management solutions
 */
export default function MerchantManagementPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <MerchantHero />
          </div>
        </div>

        {/* Divide et Impera Section */}
        <section aria-label="Divide et impera" className="mx-5 my-5">
          <DivideEtImpera />
        </section>

        {/* Financial Accounting Section */}
        <section aria-label="Financial accounting" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <FinancialAccounting />
          </div>
        </section>

        {/* Independent Customisation Section */}
        <section aria-label="Independent customisation" className="mx-5 my-5">
          <IndependentCustomisation />
        </section>

        {/* Data Segmentation Section */}
        <section aria-label="Data segmentation" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <DataSegmentation />
          </div>
        </section>

        {/* Single Reporting Section */}
        <section aria-label="Single reporting" className="mx-5 my-5">
          <SingleReporting />
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

