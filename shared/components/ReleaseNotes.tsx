'use client'

import Link from 'next/link'
import { useState } from 'react'

export function ReleaseNotes() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const tableOfContents = [
    { id: 'release-notes', title: 'Release Notes' },
    { id: 'other-resources', title: 'Other resources' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  const releaseNotes = [
    {
      date: 'June 1, 2022',
      title: 'June 1, 2022 Announcements',
      versions: [],
      changes: [],
    },
    {
      date: 'March 24, 2022',
      title: 'March 24, 2022',
      versions: ['1.160', '1.159', '1.158', '1.157', '1.156', '1.155', '1.154', '1.153', '1.152', '1.151'],
      changes: [
        'Commerce update: added API Keys generation and overview, displaying parameter for payout routing, extended Merchant profile data',
        'Card Gateway update: added metrics for Payment routing, filtration by date of creation in the lists, logs for payments',
        'Customers\' details extended in the Merchant application',
        'Updated Organisation settings: access control',
        'Other performance improvements',
      ],
    },
    {
      date: 'February 18, 2022',
      title: 'February 18, 2022',
      versions: ['1.150', '1.149', '1.148', '1.147', '1.146', '1.145', '1.144', '1.143', '1.142', '1.141'],
      changes: [
        'Commerce updates: added refunded and charged back amounts to the Payment invoice overview, expanded transaction logs',
        'Cardgate updates: deprecated the Optimal routing strategy, updated customer data format in connectors according to providers\' requirements',
        'Exchange rates schemes updates: extra validation for the fee setup',
        'Dashboard improvements: updated filters\' functions',
        'Receipt addon: added the timezone parameter',
        'Bug fixes and overall platform improvements',
      ],
    },
    {
      date: 'January 13, 2022',
      title: 'January 13, 2022',
      versions: ['1.140', '1.139', '1.138', '1.137', '1.136', '1.135', '1.134', '1.133', '1.132', '1.131', '1.130'],
      changes: [
        'Dashboard UX updates: added search for addons, new filters in different sections, and updated connected accounts display',
        'Card gateway updates: added the possibility to reconnect merchant accounts, new attributes for payment schemes, extra request parameters in the overview, additional reconciliation for refunds, Google Pay integration',
        'Merchant portal setup restrictions',
        'And overall performance improvements',
      ],
    },
  ]

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
                BrosPay Changelog
              </h1>
              <div id="release-notes">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Release Notes</h2>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                  BrosPay follows Semantic Versioning and regularly updates the platform and its APIs. You can periodically check this page to keep abreast of new or updated features, bug fixes, known issues, and deprecated functionality.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                  This changelog lists releases by date and version number along with associated changes.
                </p>
              </div>
            </div>

            {/* Release Notes List */}
            <div className="space-y-8">
              {releaseNotes.map((release, index) => (
                <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 font-heading">
                        {release.title}
                      </h3>
                      {release.versions.length > 0 && (
                        <p className="text-[18px] text-gray-600 font-body">
                          Versions: {release.versions.join(', ')}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 font-body whitespace-nowrap ml-4">
                      {release.date}
                    </span>
                  </div>
                  {release.changes.length > 0 && (
                    <ul className="list-disc list-inside space-y-2">
                      {release.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="text-[18px] text-gray-700 leading-relaxed font-body">
                          {change}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Other Resources Section */}
            <div id="other-resources" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8 mt-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Other resources</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                To view release notes for versions prior to 2022, see the 2021, 2020, and 2019 archive pages.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                You also can follow us for the latest news and updates on{' '}
                <Link
                  href="https://twitter.com/insideBrosPay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body"
                >
                  @insideBrosPay
                </Link>
                .
              </p>
            </div>

            {/* Question Section */}
            <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Question</h3>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                We are always here to hear your thoughts, questions, and feedback!
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                Send us your questions and suggestions at{' '}
                <Link
                  href="mailto:support@valorapay.com"
                  className="text-[#4730B8] hover:text-[#5a3fc9] underline font-body"
                >
                  support@valorapay.com
                </Link>
                .
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

