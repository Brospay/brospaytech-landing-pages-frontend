'use client'

import Link from 'next/link'
import { useState } from 'react'

export function ApiReferences() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const tableOfContents = [
    { id: 'commerce', title: 'Commerce', subsections: ['Commerce HPP API', 'Commerce Public API', 'Commerce Private API', 'Commerce Callbacks'] },
    { id: 'platform', title: 'Platform', subsections: ['Core API'] },
    { id: 'codes', title: 'Codes' },
    { id: 'postman', title: 'Postman Collections' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[20px] p-6 shadow-sm sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Table of contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-body ${
                        activeSection === item.id
                          ? 'bg-[#4730B8] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.title}
                    </button>
                    {item.subsections && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subsections.map((subsection, index) => (
                          <button
                            key={index}
                            onClick={() => scrollToSection(`${item.id}-${subsection.toLowerCase().replace(/\s+/g, '-')}`)}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors font-body ${
                              activeSection === `${item.id}-${subsection.toLowerCase().replace(/\s+/g, '-')}`
                                ? 'bg-[#4730B8]/10 text-[#4730B8]'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {subsection}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Full API References
              </h1>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                We offer several RESTful APIs: A server API which is used by the merchants in a server-to-server setup and a client API which is used by clients like desktops, laptops, mobile phones and other internet connected devices. For both APIs we offer a detailed API reference that lists all the functionalities and how to use them.
              </p>
            </div>

            {/* Commerce Section */}
            <div id="commerce" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Commerce</h2>

              {/* Commerce HPP API */}
              <div id="commerce-commerce-hpp-api" className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">Commerce HPP API</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Start accepting online payments in just a few minutes with HPP. It&apos;s quick and easy to integrate, accepts online payments from all major methods and credit cards, and is customizable to your brand.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-hpp-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Docs Full HPP API Reference
                  </Link>
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-hpp-api/swagger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Swagger Swagger HPP API Specification
                  </Link>
                </div>
              </div>

              {/* Commerce Public API */}
              <div id="commerce-commerce-public-api" className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">Commerce Public API</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  The Public API enables mobile phones, browsers, and apps to access the hosted data such as detailed information about the available payment methods, services metadata, and public keys used for encrypting sensitive data. These calls require a Public Key that the merchant can create using the Private API.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-public-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Docs Full Public API Reference
                  </Link>
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-public-api/swagger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Swagger Swagger Public API Specification
                  </Link>
                </div>
              </div>

              {/* Commerce Private API */}
              <div id="commerce-commerce-private-api" className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">Commerce Private API</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  The Private API enables merchants to access functionality such as payments, initiating hosted payments, creating profiles, and much more. All these calls require the caller to have a secret API key that merchants can look up in their Commerce Account.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-private-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Docs Full Private API Reference
                  </Link>
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-private-api/swagger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Swagger Swagger Private API Specification
                  </Link>
                </div>
              </div>

              {/* Commerce Callbacks */}
              <div id="commerce-commerce-callbacks" className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">Commerce Callbacks</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Callbacks notify you about events that occur with regards to the payments that you process via ValoraPay Commerce, like the state on payments or payouts changes changes. This allows you to be easily aware of things that happen, even after the consumer is no longer on your site.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/commerce/commerce-callbacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Docs Commerce Callbacks Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Platform Section */}
            <div id="platform" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Platform</h2>

              {/* Core API */}
              <div id="platform-core-api">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading">Core API</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  The Core API allows you to programmatically manage your ValoraPay account. It does everything the Dashboard UI does, but adds some capabilities that may come in handy depending on your business needs. Consider, for instance, a business model in which you provide a service that allows other merchants to accept payments (like in a marketplace). Using the Core API you can create a Commerce accounts on behalf of each merchant, under the umbrella of your main account.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/platform/core-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Docs Full Core API Reference
                  </Link>
                  <Link
                    href="https://valorapay.com/docs/integration/api-references/platform/core-api/swagger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body text-[18px]"
                  >
                    Swagger Swagger Core API Specification
                  </Link>
                </div>
              </div>
            </div>

            {/* Codes Section */}
            <div id="codes" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Codes</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Codes are everywhere in the world of payments. But what do they all mean? If you struggle to tell your HTTP status codes from your ISO 4217s, we&apos;ve got your back.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                ValoraPay uses its own developed standard for classification and identification of FinTech industry entities named OpenFinTech.io.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                OpenFinTech.io directory includes data like:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-[18px] text-gray-700 font-body">
                <li>Currencies: National, Digital, Virtual, Cryptocurrencies, etc.</li>
                <li>Payment Service Providers (PSP): Distributors, Aggregators, Collectors, Acquirers, etc.</li>
                <li>Payment & Payout Methods: E-wallets, Bank Cards, Prepaid Cards, SSK, Alternative Methods, etc.</li>
                <li>Payment & Payout Services.</li>
                <li>Digital Exchangers: Online, Offline, Stock, etc.</li>
                <li>Banks and Branches.</li>
                <li>Vendors: Organizations and companies.</li>
              </ul>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                It also includes Country codes, Merchant category codes (MCC) and much other useful stuff.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                All objects have own <strong>Unique Identification Code</strong> that used for unification all payment data from disparate sources.
              </p>
              <Link
                href="https://github.com/paycoreio/openfintech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
              >
                Feel free to explore and contribute at paycoreio/openfintech →
              </Link>
            </div>

            {/* Postman Collections Section */}
            <div id="postman" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Postman Collections</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                While being able to build requests using a GUI is nice, Postman really starts to shine when you use collections. Postman Collections are simply a collection of pre-built requests that can be organized into folders, and they can be easily exported and shared with others.
              </p>
              <Link
                href="https://valorapay.com/docs/integration/api-references/postman-collections/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Help Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-6 lg:p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="text-[18px] text-white/90 mb-6 font-body">
                Contact our support team for help.
              </p>
              <Link
                href="/contacts"
                className="inline-block bg-white text-[#4730B8] px-8 py-3 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

