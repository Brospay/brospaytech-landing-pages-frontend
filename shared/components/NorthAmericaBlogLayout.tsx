'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * North America Blog Layout - matches BrosPay blog post design
 */
export function NorthAmericaBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const countries = [
    { 
      name: 'United States', 
      description: 'With the world\'s largest economy, the U.S. offers a dynamic business environment characterised by innovation, entrepreneurship, and consumerism. Key industries include technology, finance, healthcare, and manufacturing.' 
    },
    { 
      name: 'Canada', 
      description: 'Renowned for its stability, highly skilled workforce, and strong trade relationships, Canada presents ample business opportunities. Industries such as natural resources, technology, and finance thrive in this market.' 
    },
    { 
      name: 'Mexico', 
      description: 'As one of the largest emerging markets globally, Mexico offers a burgeoning consumer base and a strategic location for trade. Industries such as automotive, aerospace, and electronics are key drivers of the Mexican economy.' 
    },
  ]

  const marketTrends = [
    {
      number: '1',
      title: 'E-commerce boom',
      description: 'The rise of e-commerce continues to reshape consumer behaviour, with online retail sales experiencing exponential growth. Businesses leveraging digital platforms can tap into this trend to reach a broader audience.',
    },
    {
      number: '2',
      title: 'Sustainability and social responsibility',
      description: 'Consumers increasingly prioritise sustainability and social responsibility when making purchasing decisions. Businesses incorporating environmentally friendly practices and ethical principles into their operations gain a competitive edge in the North American market.',
    },
    {
      number: '3',
      title: 'Tech innovation',
      description: 'Innovation is at the heart of North America\'s economy, with technology playing a pivotal role across various industries. Investments in artificial intelligence, blockchain, and renewable energy drive growth and present opportunities for businesses at the forefront of innovation.',
      additional: 'New technologies are the most prominent and substantial influencers on retail. For instance, American markets adapt to technological innovations in retail more slowly than the APAC market. However, the need to return shoppers to physical stores and the drive to increase business profitability force major market players to turn to innovative solutions. Stores have started implementing innovative digital technologies, including VR & AR, voice search assistants, 3D printing, and self-service stores.',
    },
    {
      number: '4',
      title: 'D2C sales',
      description: 'D2C, or Direct-to-Consumer sales, means selling products directly from manufacturers to consumers. This method replaces the usual B2B and B2C sales that Americans and the entire global retail industry are used to. Brands are increasingly abandoning the \'intermediary\' of retailers, distributors, and wholesalers and tend to develop their independent sales and distribution channels. Among the top driving factors that motivate consumers worldwide to buy directly from brands are better prices, free delivery, and personalised products.',
    },
    {
      number: '5',
      title: 'Marketplaces are ousting department stores',
      description: 'Amazon dominates the North American market, holding a top spot among retailers in the USA. The nimble growth of e-commerce has almost devastated offline shopping: some commentators have dubbed it a \'retail apocalypse\'. Analysts believe the boom resulted from an increasing number of Internet-savvy shoppers, the world\'s most extensive base of technical experts, and the coronavirus pandemic restrictions.',
      additional: 'However, the retail format is transforming. Some department stores are improving delivery opportunities, implementing contactless payments, and adapting to digital innovations and trends.',
    },
  ]

  const reasonsToExpand = [
    'the largest market in the world',
    'the most dynamic and extensive',
    'the market is open and receptive to innovation',
    'currency advantage',
  ]

  const requirementsToEnter = [
    {
      title: 'Product',
      description: 'Having a product already on sale with at least some customer base is good. But possessing a killer value proposition is perfect. If you have not yet started selling your product in any other country, you do not know whether it will be in demand in America. This circumstance also affects the process of obtaining investments needed to enter the market. It will be much harder to receive funds if the project has not yet proven itself. Investors do not give money to unverified projects.',
    },
    {
      title: 'Presence',
      description: 'It is tough to control your business performance remotely. Visiting your local office occasionally is useless and sometimes impossible due to ever-changing pandemic restrictions. You need to actively negotiate with partners, attend events, and study the characteristics of your audience. To enter the North American market, you need to be well-versed in it. And for this, you or your authorised representative need to be present in the country all the time. A perfect combination is your company representative, who knows your project inside out and a person who understands the local audience. Cultural proximity and presence in the same time zone will definitely help.',
    },
    {
      title: 'Networking',
      description: 'People should know about your product, and publications about your company should appear in industrial media. A thought-out PR campaign and connections with bloggers, magazines, and events will benefit your business. Network-based North American business culture requires creating an information field around your company and gaining brand awareness.',
    },
    {
      title: 'Budget',
      description: 'You will need funds to hire PR and marketing specialists, travel to events, and grow connections. It is almost impossible to unwind without this.',
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
                <span className="font-semibold text-gray-900">BrosPay Team</span>
                <span>•</span>
                <span>January 17, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">$25+ trillion</div>
                <p className="text-white/90 mt-2 font-body">GDP in 2022</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Finding ways to boost revenue is the cornerstone of any successful organisation. Expanding to new markets is one way to develop and increase a business's revenue. The North American one is on our radar today.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                This article is intended to help business owners identify potential market opportunities and assess how various products and segments will perform in the future.
              </p>
            </div>

            {/* Quick Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                North American market: quick overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                North America, including the United States, Canada, and Mexico, boasts one of the world's largest and most diverse economies. The region's GDP exceeded <strong className="font-heading">$25 trillion in 2022</strong>, making it a powerhouse on the global economic stage. Each country within North America contributes unique strengths to the overall market landscape:
              </p>
              <div className="space-y-6 mb-6">
                {countries.map((country, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {country.name}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      {country.description}
                    </p>
                  </div>
                ))}
              </div>
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

            {/* Market Trends Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                5 market trends in North America
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Understanding market trends is essential for successful market entry and expansion. Here are several trends shaping the North American market landscape:
              </p>
              <div className="space-y-8">
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
                    <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body pl-14">
                      {trend.description}
                    </p>
                    {trend.additional && (
                      <p className="text-[18px] text-gray-700 leading-relaxed font-body pl-14">
                        {trend.additional}
                      </p>
                    )}
                    {index === 0 && (
                      <div className="mt-4 pl-14">
                        <Link
                          href="/ecommerce"
                          className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                        >
                          Learn more
                        </Link>
                      </div>
                    )}
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

            {/* Payment Culture Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Payment culture in North America
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Statista reports that <strong className="font-heading">credit cards</strong> dominate digital payments in North America, with a <strong className="font-heading">66.7% share</strong>. The second popular payment method is <strong className="font-heading">e-wallets</strong>, holding <strong className="font-heading">22% of the market share</strong>. About <strong className="font-heading">8% of the transactions</strong> usually happen via <strong className="font-heading">bank transfers</strong>, while <strong className="font-heading">cash</strong> and other payment methods make up the rest.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#4730B8] mb-2 font-heading">66.7%</div>
                    <p className="text-gray-700 font-body">Credit cards</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#4730B8] mb-2 font-heading">22%</div>
                    <p className="text-gray-700 font-body">E-wallets</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#4730B8] mb-2 font-heading">8%</div>
                    <p className="text-gray-700 font-body">Bank transfers</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#4730B8] mb-2 font-heading">3.3%</div>
                    <p className="text-gray-700 font-body">Cash & others</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Expand Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Why expand to North America?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                There is a range of reasons to target your business to the North American audience:
              </p>
              <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <ul className="space-y-4">
                  {reasonsToExpand.map((reason, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-sm font-heading mt-1">
                        {index + 1}
                      </div>
                      <p className="text-[18px] text-gray-700 leading-relaxed font-body pt-1">
                        {reason}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What It Takes Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                What it takes to enter the US market
              </h2>
              <div className="space-y-6">
                {requirementsToEnter.map((requirement, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {requirement.title}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      {requirement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Can Help Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How we can help
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                An essential ingredient in the successful expansion formula is your customers' ability to pay online securely and hassle-free using the preferred methods. And that's where we cover you!
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                At BrosPay, we provide expanding businesses with a unified payment infrastructure that simplifies the integration of various payment methods and acquirers. The list of 400+ ready-made integrations and the ability to integrate others upon request allow businesses to cater to customers in new regions. Additionally, our robust reporting and analytics tools, dedicated technical support, and robust fraud prevention mechanisms empower businesses to make informed decisions and navigate the complexities of expansion successfully.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Are you ready to streamline your operations and expand your reach in the digital economy? Contact us to find out more and choose the most relevant payment strategy for your business.
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
                  Discover how BrosPay can help you expand into North American markets.
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
                  Interested in e-commerce payments?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how BrosPay can help you optimize your payment processes for North American markets.
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

