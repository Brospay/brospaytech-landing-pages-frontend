'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Central & Eastern Europe Blog Layout - matches ValoraPay blog post design
 */
export function CentralEasternEuropeBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const topCountries = [
    { country: 'Ukraine', growth: '27%' },
    { country: 'Estonia', growth: '24.9%' },
    { country: 'Poland', growth: '21.9%' },
    { country: 'Latvia', growth: '21.2%' },
    { country: 'Hungary', growth: '19.1%' },
  ]

  const paymentMethods = [
    { method: 'Mastercard', countries: 'The majority of countries' },
    { method: 'Visa', countries: 'The majority of countries' },
    { method: 'PayPal', countries: 'Bulgaria' },
    { method: 'Paysafecard', countries: 'Poland, Romania, Czech Republic, Slovakia, Slovenia' },
    { method: 'American Express', countries: 'Croatia, Hungary' },
    { method: 'Przelewy24', countries: 'Poland' },
    { method: 'EPS', countries: 'Austria' },
    { method: 'Privat24', countries: 'Ukraine' },
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
                <span>January 31, 2024</span>
                <span>•</span>
                <span>5 min read</span>
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
                <div className="text-white text-4xl font-bold font-heading">91%</div>
                <p className="text-white/90 mt-2 font-body">Internet penetration in Central Europe</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                E-commerce continues to take shape in Central and Eastern Europe, opening up many opportunities for business expansion. So, before you solemnly enter these countries with your product, studying the basic payment norms and specificities of the Central & Eastern European markets is essential. We'll help you with this.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Let's take a closer look at the general trends in Central & Eastern European e-commerce and the payment methods local buyers prefer.
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

            {/* Market Overview Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Central & Eastern Europe e-commerce market overview
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Countries in Central and Eastern Europe differ greatly in politics, culture, and economy, affecting people's lifestyles and how they prefer to make payments. Despite the changing economic and political conditions, e-commerce is still rising.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  The top 5 countries with the highest annual e-commerce growth rate in CEE by 2022 are:
                </h3>
                <ul className="space-y-2">
                  {topCountries.map((item, index) => (
                    <li key={index} className="flex items-center justify-between text-[18px] text-gray-700 font-body">
                      <span>{item.country}</span>
                      <span className="font-bold text-[#4730B8] font-heading">{item.growth}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Compared to Western Europe, which holds 67% of the total B2C turnover for 2022, Central Europe (8%) and Eastern Europe (2%) have a considerably lower share. Such a difference can be attributed to various factors. Western Europe generally has more established and mature e-commerce markets, with higher levels of internet penetration, digital literacy, and consumer trust in online transactions. However, the significant growth rates in e-commerce observed in certain countries within CEE suggest a potential for expansion and development in the coming years.
              </p>
            </div>

            {/* Digital Maturity Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Digital maturity and online shopping in CEE
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Many countries in Central and Eastern Europe boast a digitally savvy population, driving a substantial demand for both online shopping and digital payment methods.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                As of 2022, internet penetration rates in Central and Eastern Europe have soared to an impressive 91% and 88%, respectively. Furthermore, online shoppers have grown significantly, rising from 69% in 2019 to 77% in 2022 in Central Europe and from 32% in 2019 to 48% in 2022 in Eastern Europe. This upward trend underscores the region's increasing embrace of digital technologies for commerce and transactions.
              </p>
            </div>

            {/* Popular Payment Methods Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Popular payment methods in Central & Eastern European countries
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                What shapes payment preferences among CEE consumers? First of all, the rapid development of e-commerce and online shopping required new, non-cash payment methods. While credit and debit cards are popular, the younger generation and active smartphone users are shifting towards digital and mobile wallets, responding to the demand for newer, non-cash payment methods.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  In 2022, <strong className="font-heading">Ukraine led in adopting e-wallets</strong> as a preferred payment method, standing at 35%. Hungary follows closely behind with a usage rate of 30%, while Romania holds the third position with 23%.
                </p>
              </div>

              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Nevertheless, cards maintain their prevalence as a preferred payment method in certain CEE countries. Slovakia takes the lead with the highest card usage rate at 48%, while Czechia and Hungary closely follow suit with similar rates of 36%.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  <strong className="font-heading">Bulgaria retains its status as the 'cashiest' country</strong>, with a significant 67% of consumers preferring to pay with cash.
                </p>
              </div>

              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Here is the list of the most popular payment methods in Central & Eastern European countries:
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
            </div>

            {/* How to Enter Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to enter the Central & Eastern European market
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The Central & Eastern European e-commerce scene is diverse and a bit tricky to navigate. If you're considering getting into this market, weigh the pros and cons carefully.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Meeting consumers' fast-changing needs is key to successful sales in this region. You need to provide your Central and Eastern European audience with preferred payment methods. Creating a positive customer experience with multiple payment options will build trust in your brand and help you quickly gain a foothold, even in a competitive market.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  If you're ready to expand your business globally and target consumers in Central & Eastern Europe, it's essential to broaden your payment options. Do it with ValoraPay — a universal feature-rich payment hub that helps businesses set up and manage multiple payment methods at once.
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
                  Discover how ValoraPay can help you expand into Central & Eastern European markets.
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
                  Learn how ValoraPay can help you optimize your payment processes for Central & Eastern European markets.
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

