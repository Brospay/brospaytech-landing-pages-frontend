'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Western Europe Blog Layout - matches ValoraPay blog post design
 */
export function WesternEuropeBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const paymentMethods = [
    { method: 'Mastercard', countries: 'In the majority of countries' },
    { method: 'Visa', countries: 'In the majority of countries' },
    { method: 'PayPal', countries: 'In the majority of countries' },
    { method: 'Cartes Bancaires', countries: 'France' },
    { method: 'Giropay', countries: 'Germany' },
    { method: 'Bancontact', countries: 'Belgium' },
    { method: 'iDEAL', countries: 'Netherlands' },
  ]

  const ecommerceSegments = [
    'Clothing and footwear',
    'Electronics and technology products',
    'Home furnishings, decor, and household goods',
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
                <span>February 7, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">67%</div>
                <p className="text-white/90 mt-2 font-body">Share of total B2C turnover in Europe</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Are you considering expanding to Western Europe? To do it successfully, you'll need in-depth knowledge of the e-commerce and payment specificities in this region.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                We'll provide you with all the necessary details about the Western European market and offer some tips on how to enter it quickly. Let's cut to the chase.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Interested in expansion?
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Our Global payment navigator covers everything from expansion basics to regional specificities of the payment landscape in almost every part of the world.
              </p>
              <Link
                href="/guides"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Download
              </Link>
            </div>

            {/* Market Trends Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Western Europe market trends and specificities
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                In contrast to emerging markets, Western Europe boasts a well-established e-commerce scene. As of 2022, it held a substantial 67% share, equivalent to €603 billion, of the total B2C turnover in Europe. Southern Europe, though growing, contributed a smaller 16% to the overall market.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Notably, Western European countries lead the way in internet penetration, reaching an impressive <strong className="font-heading">95%</strong>, and boasts <strong className="font-heading">87% of e-shopper users</strong>. This high connectivity ensures that nearly everyone in the region has access to online shopping opportunities.
                </p>
              </div>
            </div>

            {/* Most Developed Market Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                What is the most developed market in Western Europe?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                <strong className="font-heading">The United Kingdom</strong> stands out as the third-largest e-commerce market globally, anticipating a 7.5% surge in 2024. In 2022, UK shoppers spent a staggering £110.6 billion online, with mobile transactions claiming the majority at 56.8%
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Following closely is <strong className="font-heading">Germany</strong>, which ranks as the sixth-largest global e-commerce market. Projections indicate a promising annual revenue growth rate of 8.19% for the country's e-commerce sector.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Little information exists about e-commerce development in small countries like Luxembourg, Monaco, and Liechtenstein. However, the high solvency of local consumers makes these countries a tasty morsel to businesses.
                </p>
              </div>
            </div>

            {/* E-commerce Segments Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                The commonest e-commerce segments in Western Europe
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                What about the most popular e-commerce segments? There is nothing unusual here. Clothing and footwear are in the greatest demand among Western Europeans. Then comes electronics and technology products. Home furnishings, decor, and household goods have seen increased demand online. Consumers appreciate the ease of shopping for home-related items without visiting physical stores.
              </p>
              <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  Most popular segments:
                </h3>
                <ul className="space-y-3">
                  {ecommerceSegments.map((segment, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-sm font-heading mt-1">
                        {index + 1}
                      </div>
                      <p className="text-[18px] text-gray-700 leading-relaxed font-body pt-1">
                        {segment}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The way we shop is evolving, pointing to a continued growth in e-commerce, with more traditional stores shifting to online platforms. Given the already strong presence of e-commerce in Western Europe, consumers have high expectations for quality products, speedy delivery, and convenient payment options. If you can meet these expectations, you're sure to earn customer loyalty and establish a successful presence in Western Europe.
              </p>
            </div>

            {/* Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Preferable payment methods in Western Europe
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Despite the swift advancements in online payment options, consumers in Western Europe continue to show loyalty to traditional payment methods. Notably, card payments are favoured in countries like France (52%), Belgium (47%), and the UK (46%).
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  While traditional payment methods are still in vogue, <strong className="font-heading">e-wallets are rapidly strengthening their positions</strong> in the top three most popular payment methods among Western Europeans. Even in the UK, where card usage is significant, e-wallets have gained popularity, accounting for 35% of payments.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                In the Netherlands, only 14% of online transactions involve card payments. The preferred digital payment method there is the bank-transfer method <strong className="font-heading">iDEAL</strong>, commanding a substantial 58% market share.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                In Germany, the landscape of payment methods is diverse and fragmented. E-wallets hold a significant share at 33%, closely followed by bank transfers, which make up 30% of the transactions. Card payments, on the other hand, constitute 12% of online transactions in the country.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Here's a list of the leading payment options in Western European e-commerce:
              </p>
              <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-6">
                <ul className="space-y-4">
                  {paymentMethods.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-sm font-heading mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1 font-heading">
                          {item.method}
                        </h4>
                        <p className="text-gray-700 font-body">
                          {item.countries}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  More and more consumers in Western Europe choose mobile payment solutions' convenience and high security. As the older generation adapts to smartphones, this payment type will become firmly rooted in e-commerce. To make their business accessible to everyone, merchants should carefully study the payment needs of their target audience.
                </p>
              </div>
            </div>

            {/* How to Reach Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to reach the Western European market faster
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Western Europe boasts a mature and accessible e-commerce landscape with noteworthy growth, making it an attractive market for new entrants. As you prepare to introduce your product, a crucial consideration emerges: How can you swiftly adapt to the diverse payment preferences of local consumers? Here's valuable information to guide you.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Despite the well-established nature of Western Europe's e-commerce market, local consumers remain eager for marketplaces offering quality and affordable products. The importance of service quality, prompt delivery, and superior payment experience cannot be overstated. Relevant payment methods, coupled with robust online security measures and a foundation of trust, are paramount for the growth and success of your business in this demanding market.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 my-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Ready to give it a shot and need professional assistance in the knotty world of payments? ValoraPay provides businesses with a comprehensive solution to tailor and oversee any number and type of payment methods.
                </p>
              </div>
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
                  Interested in expansion?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Discover how ValoraPay can help you expand into Western European markets.
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

              {/* Boost E-commerce CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Boost your e-commerce project
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn how ValoraPay can help you optimize your payment processes for Western European markets.
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

