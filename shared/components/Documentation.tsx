'use client'

import Link from 'next/link'

export function Documentation() {
  const mainSections = [
    {
      title: 'Welcome!',
      description: 'BrosPay is a payment platform and payment hub for online businesses and financial institutions. With the technical cloud-based infrastructure and tools required to operate an online payment system, we help you to create any payment flow and effectively address complex financial problems in industries.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/docs/getting-started/platform-overview',
      linkText: 'Look at the big picture →',
    },
    {
      title: 'Accept payments',
      description: 'Accepting online payments, whether of products or services, is an essential part of any e-commerce project. The task is to ensure the process of transfer funds from one party to another, usually from a customer to a merchant. One of the keys to achieving success and effectiveness in your e-commerce business is to guarantee the most convenient, fast, cheaper and safer way to pay online for your customers.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      link: '#',
      linkText: 'Accept and process cards, wallets, and local payment methods →',
    },
    {
      title: 'Make payouts',
      description: 'BrosPay platform allows you to make transaction by any connected payout method, in any supported currency, and to almost any country across the globe. We support integration with multiple payment providers and acquirers to help you optimize your pricing and success rates. Your organisation can send single or batch payouts to your clients, contract workers, claimers, freelancers, and retailers.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '#',
      linkText: 'Save time and money with fast and cost-effective payouts →',
    },
    {
      title: 'Design your own payment solution',
      description: 'Whether your business is simple or complex, we offer a robust set of building blocks to frame the payment solution. It can assist you in multiplying payment capabilities, reaching and supporting growth and keeping your consumers safe with no need to invest further in development or infrastructure.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      link: '#',
      linkText: 'Choose the products you need →',
    },
    {
      title: 'Payment APIs and Tools for Developers',
      description: 'There is a range of different ways that you can integrate directly with BrosPay\'s systems for seamless payment capability in your applications, systems, products, or services. You can use our RESTful API and Checkout Pages to accept payments and Callbacks to handle changes in the transaction statuses. And you can develop your own Checkout page. In any case, our APIs provide a safe route through standard interfaces to all BrosPay\'s features.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: '#',
      linkText: 'Start by learning about our effective and flexible APIs →',
    },
  ]

  const quickLinks = [
    { title: 'Getting started', href: '/docs/getting-started/platform-overview', description: 'Introduction, Platform overview, Setting up account' },
    { title: 'Products', href: '/docs', description: 'Dashboard, Account, Commerce, Accept Payments, Make Payouts' },
    { title: 'Integration', href: '/docs/integration', description: 'API References, Callbacks, Security, Testing' },
    { title: 'Connectors', href: '/docs/connectors', description: '500+ payment provider integrations' },
    { title: 'Changelog', href: '/docs/release-notes', description: 'Latest updates and version history' },
  ]

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Sections */}
        <div className="space-y-8 mb-16">
          {mainSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#4730B8]/10 rounded-xl flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-heading">
                    {section.title}
                  </h2>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    {section.description}
                  </p>
                  <Link
                    href={section.link}
                    className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold font-body transition-colors"
                  >
                    {section.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">
            Documentation Sections
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#4730B8]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                  {link.title}
                </h3>
                <p className="text-[18px] text-gray-600 font-body">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

