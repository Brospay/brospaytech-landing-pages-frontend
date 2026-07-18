import {
  Navigation,
  Hero,
  Footer,
  TrustBadges,
  MobileApp,
  Industries,
  BusinessDashboard,
  SlidingText,
  Payments,
  ClientStories,
  GlobalAccess,
  SmartCard,
  Testimonials,
  SeamlessIntegration,
  FAQ,
  ScrollToTop,
} from '@/shared/components'

/**
 * Landing page component matching Figma design
 * Combines all sections: Navigation, Hero, TrustBadges, Features, MobileApp,
 * BusinessDashboard, Payments, GlobalAccess, SmartCard, Testimonials,
 * FinalCTA, and Footer
 */
export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'ValoraPay',
    description: 'Top-Notch Payment Orchestration Platform. Universal feature-rich payment hub for online businesses and payment institutions. We integrate payment providers and acquirers worldwide.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://valorapay.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://valorapay.com'}/assets/landing_page/hero/hero_bg.png`,
    sameAs: [
      'https://twitter.com/ValoraPay',
      'https://facebook.com/ValoraPay',
      'https://linkedin.com/company/ValoraPay',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
          email: 'support@valorapay.com',
    },
    offers: {
      '@type': 'Offer',
        name: 'Payment Orchestration Platform',
        description: 'Top-notch payment orchestration for unified payment management and control',
      category: 'Financial Services',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '600',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
      {/* Hero Background Wrapper - extends behind navigation */}
      <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
        <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
        <div className="relative z-10 overflow-visible">
          <Navigation />
          <Hero />
        </div>
      </div>
      <section aria-label="Trusted by businesses">
        <TrustBadges />
      </section>
      <section aria-label="Mobile application">
        <MobileApp />
      </section>
      {/* Industries section with white background */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section aria-label="Industries">
          <Industries />
        </section>
      </div>
      <section aria-label="Business dashboard">
        <BusinessDashboard />
      </section>
      <section aria-label="Sliding text">
        <SlidingText />
      </section>
      <section aria-label="Payment solutions">
        <Payments />
      </section>
      <section aria-label="Client stories">
        <ClientStories />
      </section>
      <section aria-label="Global financial access">
        <GlobalAccess />
      </section>
      {/* Connect Payments, Testimonials in one white background */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section aria-label="Smart card features">
          <SmartCard />
        </section>
        <section aria-label="Customer testimonials">
          <Testimonials />
        </section>
      </div>
      <section aria-label="FAQ">
        <FAQ />
      </section>
      {/* Footer Background Wrapper - same padding as hero section */}
      <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
        <Footer />
      </div>
      {/* Scroll to Top Button */}
      <ScrollToTop />
      </main>
    </>
  )
}

