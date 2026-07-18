'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  CurrencyHero,
  CurrencyBenefits,
  GlobalCoverage,
  ExchangeRatesDataSources,
  DynamicConversionSchemes,
  HelpfulAdvantages,
  FAQ,
} from '@/shared/components'

/**
 * Currency Conversion page component
 * Displays comprehensive information about ValoraPay's currency conversion solutions
 */
export default function CurrencyConversionPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <CurrencyHero />
          </div>
        </div>

        {/* Benefits Section */}
        <section aria-label="Currency benefits" className="mx-5 my-5">
          <CurrencyBenefits />
        </section>

        {/* Global Coverage Section */}
        <section aria-label="Global coverage" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <GlobalCoverage />
          </div>
        </section>

        {/* Exchange Rates Data Sources Section */}
        <section aria-label="Exchange rates data sources" className="mx-5 my-5">
          <ExchangeRatesDataSources />
        </section>

        {/* Dynamic Conversion Schemes Section */}
        <section aria-label="Dynamic conversion schemes" className="mx-5 my-5">
          <div className="rounded-[20px] overflow-hidden">
            <DynamicConversionSchemes />
          </div>
        </section>

        {/* Helpful Advantages Section */}
        <section aria-label="Helpful advantages" className="mx-5 my-5">
          <HelpfulAdvantages />
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

