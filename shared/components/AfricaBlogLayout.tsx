'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Africa Blog Layout - matches ValoraPay blog post design
 */
export function AfricaBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const keyMarkets = [
    {
      country: 'Nigeria',
      description: 'As Africa\'s largest economy, Nigeria presents significant opportunities for digital payments. Mobile money and bank transfers are dominant, with a growing adoption of card payments in urban areas.',
    },
    {
      country: 'South Africa',
      description: 'South Africa has the most developed payment infrastructure in Africa, with high card penetration and advanced banking systems. E-wallets and mobile payments are also gaining traction.',
    },
    {
      country: 'Kenya',
      description: 'Kenya is a leader in mobile money innovation, with M-Pesa being the dominant payment method. The country has one of the highest mobile money adoption rates globally.',
    },
  ]

  const paymentMethods = [
    {
      title: 'Mobile Money',
      description: 'Mobile money services like M-Pesa, MTN Mobile Money, and Airtel Money dominate the African payment landscape. These services allow users to send, receive, and store money using their mobile phones, making them ideal for regions with limited banking infrastructure.',
    },
    {
      title: 'Bank Transfers',
      description: 'Bank transfers are widely used for online transactions, especially in countries with more developed banking systems. Many African consumers prefer bank transfers for larger transactions due to perceived security.',
    },
    {
      title: 'Card Payments',
      description: 'Credit and debit cards are gaining popularity, particularly in urban areas and among middle to high-income demographics. Visa and Mastercard are the most accepted card networks across the continent.',
    },
    {
      title: 'E-wallets',
      description: 'Digital wallets are emerging as a convenient payment option, especially for e-commerce transactions. Services like PayPal and local e-wallet solutions are becoming more prevalent.',
    },
    {
      title: 'Cash',
      description: 'Cash remains a significant payment method, especially in rural areas and for smaller transactions. However, the trend is shifting towards digital payments as infrastructure improves.',
    },
    {
      title: 'Cryptocurrency',
      description: 'Some African countries are seeing growing interest in cryptocurrency, particularly in markets with currency volatility. However, regulatory frameworks vary significantly across the continent.',
    },
  ]

  const marketTrends = [
    {
      number: '1',
      title: 'Rapid mobile money adoption',
      description: 'Africa leads the world in mobile money adoption, with services like M-Pesa transforming how people transact. This trend is expected to continue as smartphone penetration increases across the continent.',
    },
    {
      number: '2',
      title: 'Growing e-commerce sector',
      description: 'E-commerce is experiencing rapid growth in Africa, driven by increasing internet penetration and mobile device adoption. Online marketplaces and digital services are expanding across major markets.',
    },
    {
      number: '3',
      title: 'Financial inclusion initiatives',
      description: 'Governments and financial institutions are actively promoting financial inclusion through digital payment solutions. This is opening up new opportunities for businesses to reach previously underserved populations.',
    },
    {
      number: '4',
      title: 'Cross-border payment solutions',
      description: 'There is a growing need for efficient cross-border payment solutions within Africa. Businesses are seeking platforms that can facilitate payments across multiple African countries seamlessly.',
    },
  ]

  const challenges = [
    'Regulatory diversity across countries',
    'Infrastructure limitations in some regions',
    'Currency volatility in certain markets',
    'Limited banking penetration in rural areas',
  ]

  const opportunities = [
    'Large unbanked population ready for digital solutions',
    'Growing middle class with increasing purchasing power',
    'Young, tech-savvy population',
    'Rapid urbanization driving digital adoption',
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
                <span>February 15, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">1.4B+</div>
                <p className="text-white/90 mt-2 font-body">Population across 54 countries</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Africa represents one of the world's most dynamic and rapidly evolving payment markets. With over 1.4 billion people across 54 countries, the continent offers immense opportunities for businesses looking to expand their reach.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                This article explores the payment trends, specificities, and opportunities in the African market, helping businesses understand how to successfully enter and operate in this diverse region.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Ready to expand to Africa?
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
                African market overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The African payment market is characterized by its diversity, innovation, and rapid growth. While each country has its unique characteristics, several key markets stand out for their payment infrastructure and business opportunities.
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
                  Africa is home to some of the world's fastest-growing economies, with a young, tech-savvy population that is increasingly adopting digital payment solutions.
                </p>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Preferred payment methods in Africa
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The African payment landscape is diverse, with different methods dominating in various regions. Understanding these preferences is crucial for businesses looking to succeed in the market.
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
                Key market trends in Africa
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Several trends are shaping the future of payments in Africa, presenting both opportunities and challenges for businesses.
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

            {/* Challenges and Opportunities Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Challenges and opportunities
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
              </div>
            </div>

            {/* How We Can Help Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How ValoraPay helps enter the African market
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                At ValoraPay, we provide growing businesses with a holistic platform for efficiently entering and performing in African markets. Our solution allows connecting new payment methods in a few clicks and enables working with multiple payment providers conveniently, managing everything in a single place.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Working with ValoraPay, you get a dedicated manager with a deep understanding of the global payment market and experience in dealing with payment providers and acquirers across Africa, who will eagerly help you scale up efficiently.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Contact our team, we are ready to assist you with choosing the most relevant payment strategy to expand your business to any African market.
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
                  Discover how ValoraPay can help you expand into African markets.
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

              {/* Mobile Money CTA */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Mobile payment solutions
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how ValoraPay can help you integrate mobile money and other African payment methods.
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

