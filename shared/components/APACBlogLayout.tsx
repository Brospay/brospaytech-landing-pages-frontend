'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * APAC Blog Layout - matches ValoraPay blog post design
 */
export function APACBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const keyMarkets = [
    {
      country: 'China',
      description: 'The world\'s largest e-commerce market, China leads in digital payment innovation with Alipay and WeChat Pay dominating the landscape. Mobile payments are ubiquitous, with QR code payments being the standard.',
    },
    {
      country: 'India',
      description: 'India\'s payment market is rapidly evolving with UPI (Unified Payments Interface) revolutionizing digital payments. The country has one of the fastest-growing digital payment adoption rates globally.',
    },
    {
      country: 'Japan',
      description: 'Japan has a mature payment market with high card penetration. Cash is still prevalent, but digital wallets and contactless payments are gaining significant traction, especially in urban areas.',
    },
    {
      country: 'Southeast Asia',
      description: 'Countries like Singapore, Malaysia, Indonesia, Thailand, Vietnam, and the Philippines are experiencing rapid digital payment growth. Mobile wallets and QR code payments are becoming increasingly popular across the region.',
    },
  ]

  const paymentMethods = [
    {
      title: 'Digital Wallets',
      description: 'Digital wallets dominate the APAC payment landscape, with services like Alipay, WeChat Pay, GrabPay, and Paytm leading the way. These wallets are deeply integrated into daily life, used for everything from shopping to transportation.',
    },
    {
      title: 'QR Code Payments',
      description: 'QR code payments are extremely popular in APAC, especially in China, India, and Southeast Asia. This payment method allows for quick, contactless transactions using mobile devices.',
    },
    {
      title: 'Bank Transfers',
      description: 'Real-time bank transfers are widely used across APAC, with systems like India\'s UPI, Singapore\'s PayNow, and Thailand\'s PromptPay enabling instant transfers between bank accounts.',
    },
    {
      title: 'Card Payments',
      description: 'Credit and debit cards remain important, particularly in more developed markets like Japan, Australia, and Singapore. Visa and Mastercard have strong presence, along with local card networks.',
    },
    {
      title: 'Buy Now Pay Later (BNPL)',
      description: 'BNPL services are experiencing rapid growth in APAC, with companies like Afterpay, Grab, and local providers offering flexible payment options to consumers.',
    },
    {
      title: 'Cryptocurrency',
      description: 'Some APAC countries, particularly Singapore and Japan, are seeing growing adoption of cryptocurrency payments, though regulatory frameworks vary significantly across the region.',
    },
  ]

  const marketTrends = [
    {
      number: '1',
      title: 'Mobile-first payment adoption',
      description: 'APAC leads the world in mobile payment adoption, with many consumers skipping traditional banking entirely and going straight to mobile payment solutions. This trend is driven by high smartphone penetration and innovative fintech solutions.',
    },
    {
      number: '2',
      title: 'Super app ecosystems',
      description: 'Super apps like WeChat, Alipay, and Grab integrate payments with messaging, shopping, transportation, and other services, creating comprehensive digital ecosystems that drive payment adoption.',
    },
    {
      number: '3',
      title: 'Real-time payment infrastructure',
      description: 'Many APAC countries have implemented real-time payment systems that enable instant transfers 24/7. These systems are becoming the backbone of digital commerce in the region.',
    },
    {
      number: '4',
      title: 'Cross-border payment solutions',
      description: 'With increasing regional trade and travel, there is growing demand for seamless cross-border payment solutions within APAC. Businesses are seeking platforms that can facilitate payments across multiple countries.',
    },
  ]

  const opportunities = [
    'Largest e-commerce market globally',
    'Rapidly growing middle class with increasing purchasing power',
    'High smartphone and internet penetration',
    'Innovative fintech ecosystem',
    'Favorable regulatory environment in many countries',
    'Growing demand for digital financial services',
  ]

  const challenges = [
    'Regulatory diversity across countries',
    'Currency complexity (multiple currencies)',
    'Varying levels of financial inclusion',
    'Language and cultural differences',
    'Different payment preferences by country',
  ]

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Author and Date Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 font-body mb-4">
                <span className="font-semibold text-gray-900">ValoraPay Team</span>
                <span>•</span>
                <span>February 20, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">4.7B+</div>
                <p className="text-white/90 mt-2 font-body">Population across APAC region</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                The Asia-Pacific (APAC) region represents the world's largest and most dynamic e-commerce and digital payment market. With over 4.7 billion people across diverse economies, APAC offers unparalleled opportunities for businesses looking to expand globally.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                This article explores the payment trends, market specificities, and opportunities in the APAC region, helping businesses understand how to successfully enter and operate in this rapidly evolving market.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Ready to expand to APAC?
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                See our platform in action, share your challenges, and find a solution you've been looking for.
              </p>
              <Link
                href="#book-call"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Get started
              </Link>
            </div>

            {/* Market Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                APAC market overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The APAC region encompasses a vast and diverse range of economies, from highly developed markets like Japan and Singapore to rapidly emerging economies like India and Vietnam. Each market has its unique characteristics, but several key markets stand out for their payment innovation and business opportunities.
              </p>
              <div className="space-y-6 mb-6">
                {keyMarkets.map((market, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {market.country}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      {market.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  APAC is home to some of the world's fastest-growing economies and most innovative payment solutions, making it an essential market for any business with global ambitions.
                </p>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Preferred payment methods in APAC
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The APAC payment landscape is characterized by innovation and diversity, with different methods dominating in various markets. Understanding these preferences is crucial for businesses looking to succeed in the region.
              </p>
              <div className="space-y-6">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {method.title}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Trends Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Key market trends in APAC
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Several trends are shaping the future of payments in APAC, presenting both opportunities and challenges for businesses.
              </p>
              <div className="space-y-6">
                {marketTrends.map((trend, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-lg font-heading">
                        {trend.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-heading pt-2">
                        {trend.title}
                      </h3>
                    </div>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body pl-14">
                      {trend.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box for Global Payment Navigator */}
            <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Planning business expansion?
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Get our 'Global payment navigator' guide to explore the payment landscape of any part of the world and get tips for faster growth.
              </p>
              <Link
                href="/guides"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Download
              </Link>
            </div>

            {/* Opportunities and Challenges Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Opportunities and challenges
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-[20px] p-6 lg:p-8 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Opportunities
                  </h3>
                  <ul className="space-y-3">
                    {opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs font-heading mt-1">
                          ✓
                        </div>
                        <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                          {opportunity}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-[20px] p-6 lg:p-8 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs font-heading mt-1">
                          ×
                        </div>
                        <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                          {challenge}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Can Help Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How ValoraPay helps enter the APAC market
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                At ValoraPay, we provide growing businesses with a holistic platform for efficiently entering and performing in APAC markets. Our solution allows connecting new payment methods in a few clicks and enables working with multiple payment providers conveniently, managing everything in a single place.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Working with ValoraPay, you get a dedicated manager with a deep understanding of the global payment market and experience in dealing with payment providers and acquirers across APAC, who will eagerly help you scale up efficiently.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Contact our team, we are ready to assist you with choosing the most relevant payment strategy to expand your business to any APAC market.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center mb-12">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                We would be delighted to help you with all things payments!
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                Book a demo and learn how ValoraPay can help you handle your payments and payouts efficiently.
              </p>
              <Link
                href="#book-call"
                className="inline-block bg-white text-[#4730B8] px-8 py-4 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* CTA Box */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-[20px] p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Ready to expand?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Discover how ValoraPay can help you expand into APAC markets.
                </p>
                <Link
                  href="#book-call"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Get started
                </Link>
              </div>

              {/* Global Payment Navigator CTA */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-[20px] p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Global payment navigator
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Our guide covers everything from expansion basics to regional specificities of the payment landscape.
                </p>
                <Link
                  href="/guides"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Download
                </Link>
              </div>

              {/* Digital Wallet CTA */}
              <div className="bg-pink-50 border-2 border-pink-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Digital wallet solutions
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how ValoraPay can help you integrate digital wallets and other APAC payment methods.
                </p>
                <Link
                  href="/marketplace"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

