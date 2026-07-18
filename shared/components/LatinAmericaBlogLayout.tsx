'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Latin America Blog Layout - matches ValoraPay blog post design
 */
export function LatinAmericaBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const expansionStrategies = [
    {
      number: '1',
      title: 'Mind local culture and region\'s specificity',
      description: 'Before entering the new market, it would be nice to define a country to start with and study it closely. Some people perceive Latin America as a single region or lay emphasis only on a few large countries. However, each of the countries has its own characteristics that directly affect business performance. They include local regulations — licensing, certification, etc., and local customs, which often strongly impact business development.',
    },
    {
      number: '2',
      title: 'Follow the rules of local business performance',
      description: 'In Argentina, for instance, a business focused on domestic demand may do well, but withdrawing money abroad will be almost impossible. It is also important to determine the importance of the political structure of the country\'s market. For example, only seven countries in the region belong to countries with a free democracy. These are Argentina, Brazil, Paraguay, El Salvador, Uruguay, Chile, Peru, and Costa Rica.',
    },
    {
      number: '3',
      title: 'Don\'t understate the competitors',
      description: 'For the countries of Latin America, China is an important strategic partner. Take into account this factor and plan how your company will compete with such a major player. The volumes of import and export operations are growing. But still, China is supplying much more goods to Latin America than it buys from it. Also, China occupies the majority of free business niches in Latin America, and investments go in various directions: from agriculture to IT and HiTech.',
    },
    {
      number: '4',
      title: 'Don\'t put everything on the line at once',
      description: 'It is worth visiting a foreign market for business development before launching a project in it. At least do not invest all the money in the project at once. This is one of the common mistakes many companies make. In Latin America, there are countries such as Chile, Argentina, and Costa Rica where the local population treats foreigners very well. But knowledge of Spanish is critical here.',
    },
  ]

  const paymentMethods = [
    {
      title: 'Credit and debit cards',
      description: 'Bank cards account for a large share of online payments in Brazil, Colombia, Mexico, and the Dominican Republic. Credit and debit card usage is widespread in urban areas and among middle — to high-income demographics. Visa, Mastercard, and local card networks are commonly accepted.',
    },
    {
      title: 'Cash',
      description: 'Despite the growth of digital payments, cash remains a popular payment method in Latin America, particularly in rural areas and among lower-income populations.',
    },
    {
      title: 'Bank transfers',
      description: 'Bank transfers are commonly used for online purchases and bill payments, especially among more financially literate and tech-savvy consumers.',
    },
    {
      title: 'E-wallets',
      description: 'Digital wallets, such as Mercado Pago, PayPal, and others, are gaining popularity, especially for online transactions and peer-to-peer payments.',
    },
    {
      title: 'Payment gateways and local payment systems',
      description: 'In Brazil, a third is accounted for its own Boleto Bancário payment system, together with bank cards of local payment systems, which occupy 93% of the market. Also, payment platforms like PagSeguro and Mercado Pago in several countries offer a range of payment options, including credit cards, bank transfers, and digital wallets, making them convenient for both businesses and consumers.',
    },
    {
      title: 'Cash-on-delivery (COD)',
      description: 'COD is still prevalent in some regions. It allows customers to pay for goods upon delivery, providing a sense of security for online purchases.',
    },
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
                <span>January 19, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">424M</div>
                <p className="text-white/90 mt-2 font-body">Mobile internet users by 2025</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Expansion to new regions is a logical option for developing a business that is overgrowing its domestic market. At that time, each company, accustomed to stability and comfort, enters an unknown environment filled with challenges. To overcome this, businesses should execute research and develop an expansion strategy.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                This article is intended to help you expand your business to the Latin American market.
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

            {/* Market Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Latin American market overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Latin American region represents a cluster of promising markets, among which <strong className="font-heading">Brazil, Mexico, and Argentina</strong> stand out. However, the market in Latin America is not as highly competitive as in the United States and Europe, where most entrepreneurs with global ambitions work.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                According to the Swiss Re Institute, the Latin American gross domestic product (GDP) experienced solid growth in 2022 and a mild slowdown in 2023. It is expected to grow by <strong className="font-heading">1.7% in 2024</strong>. Latin America is now ahead of even the United States in terms of high-speed and mobile internet growth. The number of mobile internet users in Latin America is expected to reach <strong className="font-heading">424 million by 2025</strong>. Meanwhile, <strong className="font-heading">70% of Latin Americans have smartphones</strong>, which makes them one of the most connected populations in the world. This level of internet accessibility opens up new ways and opportunities for communication and, as a result, contributes to rapid growth in many sectors of the economy.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  The Latin American market is considered to be a promising one with little competition.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                According to Goldman Sachs's review of emerging economies, <strong className="font-heading">Brazil and Mexico will be among the top 10 largest economies in the world by 2050</strong>. These circumstances make the region attractive for global companies and investors. Moreover, consumers' habits have changed since the time of social isolation and digitalisation, giving global companies many opportunities to enter this promising market.
              </p>
            </div>

            {/* Expansion Strategies Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to expand to Latin America: 4 key strategies
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Latin America tends to copy and adapt the world's high-tech services to local realities almost instantly. The region has analogues of Uber and Amazon. An Argentinean marketplace, Mercado Libre, has bitten off such a share of eBay's potential market that the latter was forced to enter into a strategic alliance with a local competitor.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Original projects do not always have time to approach the Latin American market. Usually, local entrepreneurs are quicker to create similar services. It is not profitable for world-renowned companies to enter the Latin American markets.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  An ideal scenario is to get into this region with a startup that has not yet been launched in the United States or large European countries but is already scaling.
                </p>
              </div>
              <div className="space-y-6">
                {expansionStrategies.map((strategy, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-lg font-heading">
                        {strategy.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-heading pt-2">
                        {strategy.title}
                      </h3>
                    </div>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body pl-14">
                      {strategy.description}
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

            {/* Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Preferred payment options in Latin America
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The regional market shows particular interest in new B2B solutions for medium and small businesses. Compared to the United States and Europe, entrepreneurs in Latin America do not have a wide choice of marketing, sales, infrastructure, and enterprise management tools. In general, online commerce is growing rapidly in this region, especially in Argentina. A large number of online shoppers is concentrated in Chile.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Latin Americans spend a lot of time on social networks.
                </p>
              </div>
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
              <p className="text-[18px] text-gray-700 leading-relaxed mt-6 font-body">
                Expanding to new markets is an effective way to grow a business. But the success of such a step largely depends on thorough preparation and willingness to take risks. When planning to launch a project in Latin America, it is worth looking at the specifics of doing business in each country because they can become critical restrictions for founders.
              </p>
            </div>

            {/* How We Can Help Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How ValoraPay helps enter the Latin American market
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                At ValoraPay, we provide growing businesses with a holistic platform for efficiently entering and performing in new markets. Our solution allows connecting new payment methods in a few clicks and enables working with multiple payment providers conveniently, managing everything in a single place. Working with ValoraPay, you get a dedicated manager with a deep understanding of the global payment market and experience in dealing with payment providers and acquirers, who will eagerly help you scale up efficiently.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Contact our team, we are ready to assist you with choosing the most relevant payment strategy to expand your business to any market.
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
                  Discover how ValoraPay can help you expand into Latin American markets.
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

              {/* B2B Solutions CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  B2B payment solutions
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how ValoraPay can help you optimize your payment processes for Latin American markets.
                </p>
                <Link
                  href="/glossary/saas-payment-gateway"
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

