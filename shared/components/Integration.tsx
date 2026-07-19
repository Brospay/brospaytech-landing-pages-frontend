'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Integration() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const tableOfContents = [
    { id: 'basic-principles', title: 'Basic principles' },
    { id: 'accept-payments', title: 'Accept Payments' },
    { id: 'make-payouts', title: 'Make Payouts' },
    { id: 'full-api-references', title: 'Full API References' },
    { id: 'shopping-carts', title: 'Shopping carts' },
    { id: 'faq', title: 'FAQ' },
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
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-body ${
                      activeSection === item.id
                        ? 'bg-[#4730B8] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Integrate with BrosPay
              </h1>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                BrosPay APIs
              </p>
            </div>

            {/* Basic Principles Section */}
            <div id="basic-principles" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Basic principles</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                We offer a great deal of payment products and services, each with its own options and possibilities. Before you get started there are a few things you really need to know in order to get the integration in place that fits best with your needs.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body font-semibold">
                Get the answers straight:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    Which payment products do you want to offer your customers?
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    The BrosPay platforms offer the widest range of payment methods of any payment service provider, from global card processing to specialized local payment products your world wide audience likes best. Have a look at the options we provide.
                  </p>
                  <Link
                    href="/payment-methods"
                    className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                  >
                    View all our payment methods →
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    Do you want to handle sensitive credit card information yourself?
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    Our platform offers SDKs and the Hosted Payment Pages that make sure you won't have to bother with sensitive information.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    Do you want to host your payment services yourself or let us take care of hosting?
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    You can either build your payment pages yourself using our JavaScript or Native mobile SDKs on our Commerce Public API, or let us completely handle this for you through our Hosted Payment Pages. Which of these options is best in your case depends on your specific needs, and we're happy to advise.
                  </p>
                </div>
              </div>
            </div>

            {/* Accept Payments Section */}
            <div id="accept-payments" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Accept Payments</h2>
              <div className="bg-gradient-to-r from-[#4730B8]/10 to-purple-100 rounded-xl p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#4730B8] rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Payment Form</h3>
                </div>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  With BrosPay, you can build a payments flow that gives you and your customers the power of choice. Collect payment information quickly and securely, create charges server-side in over 150 currencies, or accept payments from a host of additional payment methods, including 3-D Secure, Apple Pay, and SEPA.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Read about our integration methods below, then choose the one that best suits your needs.
                </p>
                <Link
                  href="/docs/integration/accept-payments"
                  className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Make Payouts Section */}
            <div id="make-payouts" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Make Payouts</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Mass payout</h3>
                </div>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Many companies leverage BrosPay Payouts to please their customers with timely payouts, while reducing the costs associated with managing multiple payout solutions. Integrate mass payout functionality directly in your existing system and gain time back to focus on building your business.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Build mass payouts right into your platform, cut out manual processes, and add time and peace of mind back into your work day.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  BrosPay delivers the best global payout experience. You know your business and what it takes to succeed. We understand the complex world of global payouts and we know what it takes to deliver an outstanding experience.
                </p>
                <Link
                  href="/docs/integration/make-payouts"
                  className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Full API References Section */}
            <div id="full-api-references" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Full API References</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Full card details API</h3>
                </div>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  We offer several RESTful APIs: A server API which is used by the merchants in a server-to-server setup and a client API which is used by clients like desktops, laptops, mobile phones and other internet connected devices. For both APIs we offer a detailed API reference that lists all the functionalities and how to use them.
                </p>
                <Link
                  href="/api-references"
                  className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Shopping Carts Section */}
            <div id="shopping-carts" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Shopping carts</h2>
              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-xl p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Shopping carts</h3>
                </div>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Our payment gateway is integrated with many popular shopping cart platforms. Get up and running quickly, processing online payments with an ecommerce plugin.
                </p>
                <Link
                  href="/docs/integration/shopping-carts"
                  className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">FAQ</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Explore FAQ section →
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Question
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Can't find what you're looking for? Contact our support team for help!
              </p>
            </div>

            {/* Help Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-6 lg:p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Can't find what you're looking for?
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

