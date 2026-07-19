'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Middle East Blog Layout - matches BrosPay blog post design
 */
export function MiddleEastBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const countries = [
    'Iraq', 'Iran', 'Israel', 'Lebanon', 'Turkey', 'Egypt', 'Cyprus', 'Syria',
    'West Bank', 'Gaza Strip', 'Jordan', 'Sudan', 'Libya', 'Saudi Arabia',
    'Kuwait', 'Yemen', 'Oman', 'Bahrain', 'United Arab Emirates'
  ]

  const eWallets = [
    'Apple Pay',
    'Google Wallet',
    'Samsung Wallet',
    'e& money (By Etisalat)',
    'klip (By Emirates Digital Wallet)',
    'Payit',
    'Careem Pay',
  ]

  const currentOpportunities = [
    'food security, aquaculture',
    'education',
    'major events (including FIFA 2022 World Cup in Qatar)',
    'environmental solutions',
  ]

  const futureOpportunities = [
    'processed foods and supply chains',
    'innovation in life sciences and biotechnology',
    'healthcare (especially research)',
    'renewable energy',
  ]

  const keyStates = [
    'United Arab Emirates (UAE)',
    'Oman',
    'Saudi Arabia',
    'Bahrain',
    'Qatar',
    'Kuwait',
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
                <span className="font-semibold text-gray-900">BrosPay Team</span>
                <span>•</span>
                <span>January 11, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">145M+</div>
                <p className="text-white/90 mt-2 font-body">Internet users in the region</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Successfully establishing your online business within the local market is an impressive accomplishment. As you contemplate the next phase of growth, venturing into foreign markets is a logical step.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                In this article, we aim to equip you with practical insights for expanding your business into the Middle East market. We prioritise clarity and brevity, ensuring you receive essential guidance without superfluous details. Join us as we navigate the intricacies of international expansion.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
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
                Learn more
              </Link>
            </div>

            {/* Market Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Middle East market overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Let's be honest, scaling is a challenge. But if you have a clear plan and understanding of how to do it, chances for success with a new audience are much higher. Planning to expand to new markets requires considering their relevance to your products or services. So, the first important step is to choose the most lucrative market for your product or service.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The Middle East region comprises the following territories: <strong className="font-heading">{countries.slice(0, 10).join(', ')}, and {countries.slice(10).join(', ')}</strong>. The centre of the region under consideration was formerly called the Near East.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  The Middle East contributes significantly to global oil production, accounting for approximately <strong className="font-heading">one-third of the world's output</strong>. Key players such as Saudi Arabia, Iran, Iraq, the United Arab Emirates, Kuwait, and Qatar rank prominently as leading suppliers of fossil fuels on the international stage.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Despite the diversity in the Middle East market, it isn't easy to draw broad conclusions and forecasts. Several common factors influence all economies in the region to various extents, including the COVID-19 pandemic. There still is plenty of opportunities for investment and profitable business ventures in the Middle East.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Middle Eastern markets are characterised by high population growth rates, leading to consumer market growth.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Major drivers of international investment reside in the real estate, hospitality, and construction industries. Egypt is thought to be stabilising, while Morocco has improved export and tourism revenues.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Ready to start your success story?
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

            {/* Payment Landscape Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Payment landscape in the Middle East
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The Middle East region is witnessing significant advancements in the development of its digital economy. As of July 2023, approximately <strong className="font-heading">two-thirds of the population were utilising the internet</strong>, surpassing the global average internet penetration rate of approximately 64.5%.
              </p>
              <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  Card-based payments
                </h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  <strong className="font-heading">Card-based payments</strong> continue to dominate the evolving digital payment landscape of the Middle East, despite rapid advancements. According to a study analysing e-commerce payment methods in the Middle East and Africa, credit and charge cards constitute <strong className="font-heading">31% of all transactions</strong>. However, findings from the Payments & e-commerce report by PPRO suggest a higher share, around <strong className="font-heading">50%</strong>, indicating a likely middle ground.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Visa holds <strong className="font-heading">37% of the card market</strong> in the region, closely followed by Mastercard at <strong className="font-heading">29%</strong>, with the remainder distributed among American Express and other providers.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Altogether, this region contains <strong className="font-heading">145+ million internet users</strong>, and most of them prefer to pay via <strong className="font-heading">cash-on-delivery</strong>. However, due to the high return rate, some retailers might neglect to include this payment method in their payment options portfolio. Still, to settle efficiently in the region, online businesses should offer cash-on-delivery.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Alternative payment methods
                </h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  <strong className="font-heading">Alternative payment methods</strong> also maintain a presence in the region (PayPal, CashU, and bank transfers account for the largest market shares). In recent years, <strong className="font-heading">e-wallets</strong> have emerged as robust contenders in the Middle East payment services sector.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Projections indicate a substantial increase in their usage for e-commerce transactions, from <strong className="font-heading">17% in 2021</strong> to an anticipated <strong className="font-heading">26% by 2025</strong>, alongside a rising popularity for in-person payments. This surge mirrors a global trend towards digital wallet utilisation. According to Juniper Research, the worldwide count of unique digital wallet users is projected to surpass <strong className="font-heading">4.4 billion by 2025</strong>.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  The most popular e-wallets in the Middle East are:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {eWallets.map((wallet, index) => (
                    <li key={index} className="text-[18px] text-gray-700 font-body">
                      {wallet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Market Opportunities Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Middle East market opportunities
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The Middle East market is another underrated region for developing e-commerce businesses. According to Deloitte, the e-commerce sector in the Middle East is estimated to reach a market volume of <strong className="font-heading">$40 billion in 2024</strong>. This market is excellent for foreign online stores because the competition there is not as strong as, for example, in China.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  By the way, did you know that overseas companies account for about <strong className="font-heading">50% of all e-commerce revenues</strong> in the Middle East? Local brands tend to be less developed and, therefore, cannot meet all customer needs. Therefore, sites such as Asos, Net-a-Porter, and Chinese SheIn have easily found their place in the Middle East e-commerce market.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                So, here are the lists of current and future opportunities in the Middle Eastern market for businesses:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-[20px] p-6 lg:p-8 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Current
                  </h3>
                  <ul className="space-y-3">
                    {currentOpportunities.map((opportunity, index) => (
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
                <div className="bg-blue-50 rounded-[20px] p-6 lg:p-8 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Future
                  </h3>
                  <ul className="space-y-3">
                    {futureOpportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs font-heading mt-1">
                          →
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

            {/* CTA Box for E-commerce */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Interested in e-commerce payments?
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Learn how BrosPay can help you optimize your payment processes for Middle Eastern markets.
              </p>
              <Link
                href="/ecommerce"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Learn more
              </Link>
            </div>

            {/* Economy & Trade Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Economy & trade in the Middle East
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                While political stability in the region is an issue, the region is expected to grow significantly in the long term due to its young and ambitious workforce. The diversification of the Middle East economies will also see growing investments and influence in these regional areas. Companies with innovative offerings in the food and agriculture, education and training, and infrastructure sectors will be in high demand, especially those willing to consider market-entry strategies such as joint venturing and partnerships.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Exporting to the region can provide the ideal launchpad for expansion into the greater Middle East and Northern African region. The key states include:
              </p>
              <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {keyStates.map((state, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-xs font-heading mt-1">
                        {index + 1}
                      </div>
                      <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                        {state}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The Gulf states are expected to become a regional hub for several industries, extending to include Eastern Africa, Turkey, Iran, Central Asia, South Asia and Europe. The diversification of these states is a long-term trend and will be the consistent thread driving new industries' development in the region.
              </p>
            </div>

            {/* CTA Box for Smart Way to Expand */}
            <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Smart way to expand
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Discover how BrosPay can help you expand into Middle Eastern markets efficiently.
              </p>
              <Link
                href="/expand-globally"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Learn more
              </Link>
            </div>

            {/* How We Can Help Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to enter the Middle East market with BrosPay
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Do you think the Middle East market is a good value for your product or services? We are ready to assist you with the expansion. Integrating BrosPay empowers you with instant access to <strong className="font-heading">400+ payment service providers and acquirers</strong> to cater to your audience in the new market. Additionally, our robust reporting and analytics tools, dedicated technical support, and robust fraud prevention mechanisms empower businesses to make informed decisions and navigate the complexities of expansion successfully.
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
                Are you ready to expand your business to new markets?
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                Book a demo and learn how BrosPay can help you handle your payments and payouts efficiently.
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
                  Discover how BrosPay can help you expand into Middle Eastern markets.
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

              {/* E-commerce CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  E-commerce payments
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how BrosPay can help you optimize your payment processes for Middle Eastern e-commerce markets.
                </p>
                <Link
                  href="/ecommerce"
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

