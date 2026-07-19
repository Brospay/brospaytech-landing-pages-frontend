'use client'

import Link from 'next/link'

export function SDKs() {
  const clientLibraries = [
    {
      name: 'JavaScript',
      description: 'JavaScript client library for integrating with BrosPay API',
      file: 'public-api-client.js',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ]

  const features = [
    {
      title: 'Easy Integration',
      description: 'Simple and straightforward SDKs that wrap our RESTful API, making integration quick and easy.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Multiple Platforms',
      description: 'Support for various server-side technologies and client platforms including desktop and mobile.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Custom Solutions',
      description: 'Build your own custom integration with the freedom to design payment flows that match your needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Open Source',
      description: 'Libraries are hosted and maintained by BrosPay, and we welcome pull requests on GitHub.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            SDKs Integration Guide
          </h1>
          <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
            BrosPay offers SDKs that wrap the RESTful API and make it even easier to integrate with our platform. 
            The SDK you need depends on your server-side technology stack and on the clients that you want to support. 
            Whether you&apos;re processing payments on desktop or on mobile, our software development kits give you 
            the freedom to build your own custom integration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4730B8]/10 rounded-xl flex items-center justify-center text-[#4730B8] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Libraries */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Client Libraries
          </h2>
          <p className="text-[18px] text-gray-700 mb-6 leading-relaxed font-body">
            We offer various libraries via our BrosPay API. Have a good look at our getting started guide and 
            the API reference to get started right away in your IDE. These libraries are hosted and maintained by BrosPay. 
            Nevertheless we always appreciate pull requests on GitHub to ensure our libraries are up to date. 
            We greatly appreciate your input.
          </p>
          <p className="text-[18px] text-gray-700 mb-6 leading-relaxed font-body">
            If you have programmed your own library, simply let us know by writing us at{' '}
            <a href="mailto:support@valorapay.com" className="text-[#4730B8] hover:text-[#5a3fc9] underline">
              support@valorapay.com
            </a>
            .
          </p>

          <div className="space-y-6">
            {clientLibraries.map((library, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#4730B8]/10 rounded-xl flex items-center justify-center text-[#4730B8] flex-shrink-0">
                    {library.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                      {library.name}
                    </h3>
                    <p className="text-[18px] text-gray-700 mb-4 leading-relaxed font-body">
                      {library.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-900 rounded-lg px-4 py-2">
                        <code className="text-white text-sm font-mono">{library.file}</code>
                      </div>
                      <a
                        href={`/api-references`}
                        className="text-[#4730B8] hover:text-[#5a3fc9] font-semibold text-[18px] underline font-body"
                      >
                        View Documentation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Widget */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#4730B8]/10 rounded-xl flex items-center justify-center text-[#4730B8] flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Payment Widget
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Payment Widget is our simplest integration method and requires little technical know-how. 
                It&apos;s a payment lightbox that you can easily add to your website.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold text-[18px] underline font-body"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Postman Collections */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#4730B8]/10 rounded-xl flex items-center justify-center text-[#4730B8] flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Postman Collections
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                While being able to build requests using a GUI is nice, Postman really starts to shine when you use collections. 
                Postman Collections are simply a collection of pre-built requests that can be organized into folders, and they can be 
                easily exported and shared with others.
              </p>
              <Link
                href="/api-references"
                className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-semibold text-[18px] underline font-body"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="bg-gradient-to-r from-[#4730B8] to-[#5a3fc9] rounded-[20px] p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-[18px] mb-6 max-w-2xl mx-auto leading-relaxed font-body">
            Check out our getting started guide and API reference to begin integrating with BrosPay SDKs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/getting-started/platform-overview"
              className="inline-block px-8 py-4 bg-white text-[#4730B8] font-semibold rounded-[10px] hover:bg-gray-100 transition-colors font-body"
            >
              Getting Started Guide
            </Link>
            <Link
              href="/api-references"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-[10px] hover:bg-white/10 transition-colors font-body"
            >
              API References
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

