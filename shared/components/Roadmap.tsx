'use client'

import React, { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

interface Milestone {
  year: string
  month?: string
  title: string
  description: string
  category?: string
}

/**
 * Roadmap page component
 * Features:
 * - Past achievements timeline
 * - Future plans timeline
 * - Elegant timeline design matching platform aesthetics
 * - Toggle between Past and Future views
 */
export function Roadmap() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [activeTab, setActiveTab] = useState<'past' | 'future'>('past')

  const pastMilestones: Milestone[] = [
    {
      year: '2024',
      month: 'December',
      title: 'Achieved annual growth rate of 150%',
      description: 'Our annual growth rate reached an impressive 150%, reflecting our relentless commitment to innovation, client satisfaction, and unifying the payment world.',
    },
    {
      year: '2024',
      month: 'December',
      title: '500+ ready-made integrations',
      description: 'The number of ready-made connections with payment providers and acquirers on our platform has now surpassed 500.',
    },
    {
      year: '2024',
      month: 'November',
      title: 'Partnered with Verifi by VISA and Ethoca by Mastercard',
      description: 'We established strategic partnerships with Verifi by VISA and Ethoca by Mastercard, enabling our clients to benefit from enhanced chargeback prevention and dispute resolution tools.',
    },
    {
      year: '2024',
      month: 'November',
      title: 'Payment expertise praised by 89%',
      description: 'According to the NPS survey we conducted in Q3 2024, 89% of our clients commend the efficiency and expertise of our payment team as a service.',
    },
    {
      year: '2024',
      month: 'September',
      title: 'BrosPay V2 Beta launch',
      description: 'The next-gen version of our payment orchestration platform went into beta testing with clients in live mode. This is a completely revamped platform with an intuitive interface, advanced customisable checkout, new processing features and optimised performance.',
    },
    {
      year: '2024',
      month: 'August',
      title: 'Set up scoreboards for clients',
      description: 'We equipped our clients with customised scoreboard devices, configured to display real-time insights into their payment performance on our platform.',
    },
    {
      year: '2024',
      month: 'July',
      title: 'Released PayAtlas',
      description: 'We launched a global payment community platform designed for online businesses to simplify searching for the right payment provider and for payment professionals to showcase their services.',
    },
    {
      year: '2024',
      month: 'February',
      title: 'Processed 800+ million transactions',
      description: "We've crossed the mark of 800+ million successful transactions processed by our platform.",
    },
    {
      year: '2024',
      month: 'January',
      title: '400+ ready-made integrations',
      description: 'The number of integrations with payment providers and acquirers available to our clients out of the box exceeded 400.',
    },
    {
      year: '2023',
      month: 'August',
      title: '100+ routing attributes',
      description: 'The number of routing condition attributes exceeded 100. The available payment routing attributes allow our clients to configure custom routes for their transactions based on their unique needs.',
    },
    {
      year: '2023',
      month: 'August',
      title: 'First-ever payment comics',
      description: 'In collaboration with our Lead Product Architect, we have created the world\'s first payment comic book. This story uncovers how payments work in the funniest way possible.',
    },
    {
      year: '2023',
      month: 'June',
      title: 'Firewall launch',
      description: 'We developed the Firewall, a customisable multi-level antifraud solution that determines whether to process transactions based on rules you set.',
    },
    {
      year: '2023',
      month: 'May',
      title: 'Reconciliations centre release',
      description: 'It is an addon engineered and designed to automate transaction data reconciliations across multiple accounts at different providers.',
    },
    {
      year: '2023',
      month: 'May',
      title: '300 ready-made integrations',
      description: 'The number of ready-made connections with payment providers and acquirers on our platform has exceeded 300!',
    },
    {
      year: '2023',
      month: 'April',
      title: 'Best global orchestration payment platform 2023',
      description: 'The UK Enterprise Awards 2023 recognised BrosPay as the best payment orchestration platform of 2023.',
    },
    {
      year: '2022',
      month: 'November',
      title: '250+ ready-made integrations',
      description: 'The number of ready-made integrations on our platform exceeded 250.',
    },
    {
      year: '2022',
      month: 'November',
      title: 'Direct integration with Apple Pay',
      description: "We've implemented the Apple Pay token decrypt service, allowing clients to decrypt the tokens independently of the payment provider.",
    },
    {
      year: '2022',
      month: 'August',
      title: '200+ ready-made integrations',
      description: 'The number of integrations with payment providers and acquirers available to our clients out of the box exceeded 200.',
    },
    {
      year: '2021',
      month: 'December',
      title: '150+ ready-made integrations',
      description: 'The number of ready-made integrations with payment vendors on our platform exceeded 150.',
    },
    {
      year: '2021',
      month: 'April',
      title: '100+ ready-made integrations',
      description: 'The number of integrations with payment providers and acquirers available to our clients out of the box exceeded 100.',
    },
    {
      year: '2021',
      month: 'February',
      title: 'Rebranded to BrosPay',
      description: 'We left our previous brand name behind and became BrosPay, with a neat new website full of interactivity.',
    },
    {
      year: '2020',
      month: 'December',
      title: 'Processed 100+ million transactions',
      description: 'In 2020, we successfully processed 106 million transactions.',
    },
    {
      year: '2020',
      month: 'July',
      title: 'PCI DSS L1',
      description: 'BrosPay passes the PCI DSS certification, Level 1.',
    },
    {
      year: '2019',
      month: 'November',
      title: 'BrosPay 1.0 Release',
      description: 'We upgraded and released the new 1.0 version of BrosPay.',
    },
    {
      year: '2019',
      month: 'July',
      title: 'PCI DSS Attestation of Compliance',
      description: 'BrosPay successfully passed the PCI DSS compliance audit.',
    },
    {
      year: '2019',
      month: 'April',
      title: 'Omnichannel large Batch payouts',
      description: 'BrosPay released user interfaces to process a large number of payouts using numerous different payment options at once by uploading a batch file.',
    },
    {
      year: '2019',
      month: 'March',
      title: 'White label payment provider solution',
      description: 'BrosPay released a white label payment provider solution for banks, acquirers and payment service providers.',
    },
    {
      year: '2018',
      month: 'November',
      title: 'First public beta',
      description: 'We released the beta version of upcoming BrosPay 1.0 for testing during Web Summit 2018.',
    },
    {
      year: '2016',
      month: 'January',
      title: 'The idea of BrosPay appeared',
      description: 'We decided to develop a solution that will help unify the payment world.',
    },
  ]

  const futureMilestones: Milestone[] = [
    {
      year: '2025',
      month: 'Q2',
      title: 'BrosPay V2 public release',
      description: 'The new version of our payment orchestration platform is currently in development and is scheduled for public launch in Q2 2025. This completely revamped platform features an intuitive interface, advanced customisable checkout, new processing capabilities, and optimised performance.',
    },
    {
      year: '2025',
      month: 'November',
      title: 'Showcase at SiGMA Central Europe',
      description: 'Join us at Booth 3330 at SiGMA Central Europe from 3 to 6 November, where we plan to showcase our innovative payment orchestration solutions and connect with industry leaders for future collaborations and partnerships.',
    },
    {
      year: '2025',
      title: 'Next-gen white label for payment institutions',
      description: 'We aim to launch the second version of our Merchant portal, specifically tailored for payment institutions. This white-label solution will empower our clients to provide their customers with enhanced functionality and a seamless user experience.',
    },
    {
      year: '2025',
      title: 'AI-powered payment routing',
      description: "We&apos;re developing an AI assistant to help clients build intelligent, optimised routing schemes without tedious manual work. This tool will enhance transaction success rates while minimising costs and complexity.",
    },
    {
      year: '2025',
      title: '24/7 support',
      description: 'To better serve our clients, we plan to introduce around-the-clock support, ensuring assistance is available whenever needed, no matter the time zone.',
    },
    {
      year: '2025',
      title: 'PayAtlas Community',
      description: "We&apos;re creating the PayAtlas Community, a platform where clients can gain competitive insights, access industry experts, and share knowledge for mutual growth.",
    },
    {
      year: '2026',
      title: 'Advanced analytics suite',
      description: 'We plan to launch a powerful analytics suite to provide deep insights into payment performance, trends, and optimisation opportunities for our clients.',
    },
    {
      year: '2026',
      title: 'Subscription management module',
      description: 'We will roll out a subscription management tool to help businesses automate and streamline recurring payment processes, boosting efficiency and customer retention.',
    },
    {
      year: '2026',
      title: 'Payment facilitator service',
      description: 'We are exploring the launch of a comprehensive facilitator service, where we go beyond providing technical payment infrastructure. This turnkey solution would offer clients end-to-end payment expertise, including assistance with merchant accounts, tailored support, and strategic guidance.',
    },
    {
      year: '2026',
      title: 'Expansion to new markets',
      description: "We'll focus our activities on expanding to the LatAm and MENA regions and targeting the e-commerce industry. We expect to expand our global footprint and bring our solutions to a broader audience.",
    },
  ]

  // Group milestones by year
  const groupByYear = (milestones: Milestone[]) => {
    return milestones.reduce((acc, milestone) => {
      if (!acc[milestone.year]) {
        acc[milestone.year] = []
      }
      acc[milestone.year].push(milestone)
      return acc
    }, {} as Record<string, Milestone[]>)
  }

  const pastGrouped = groupByYear(pastMilestones)
  const futureGrouped = groupByYear(futureMilestones)

  const currentMilestones = activeTab === 'past' ? pastGrouped : futureGrouped
  const years = Object.keys(currentMilestones).sort((a, b) => 
    activeTab === 'past' ? parseInt(b) - parseInt(a) : parseInt(a) - parseInt(b)
  )

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Main Content Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Side - Label */}
            <div>
              <p className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8 font-heading">
                Our Journey
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                {activeTab === 'past' 
                  ? 'Take a peep at BrosPay\'s highlights — this is how we made it to now'
                  : 'We want to expand globally and unify the payments world. Here is our action plan'}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body text-justify">
                {activeTab === 'past'
                  ? 'From our humble beginnings to becoming a leading payment orchestration platform, discover the milestones that shaped BrosPay into what it is today.'
                  : 'Our vision for the future includes cutting-edge features, global expansion, and innovative solutions that will continue to transform the payment industry.'}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12"></div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-[10px] text-base font-semibold transition-all font-body ${
                activeTab === 'past'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Past
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-6 py-3 rounded-[10px] text-base font-semibold transition-all font-body ${
                activeTab === 'future'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Future
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-[#EFEFEF] pb-16 sm:pb-20 lg:pb-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {years.map((year, yearIndex) => (
              <div key={year} className="relative">
                {/* Year Header */}
                <div className="mb-8">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 font-heading">{year}</h3>
                  <div className="w-20 h-0.5 mt-2" style={{ backgroundColor: '#4730B8' }}></div>
                </div>

                {/* Milestones for this year */}
                <div className="space-y-8">
                  {currentMilestones[year].map((milestone, index) => (
                    <div
                      key={`${year}-${index}`}
                      className="relative pl-8 md:pl-12 lg:pl-16"
                    >
                      {/* Timeline Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      
                      {/* Milestone Dot */}
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-[10px] border-4 border-white shadow-md z-10" style={{ backgroundColor: '#4730B8', transform: 'translateX(-50%)' }}></div>
                      
                      {/* Milestone Card */}
                      <div className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                        {milestone.month && (
                          <p className="text-sm font-medium text-[#4730B8] mb-2 uppercase tracking-wider font-body">
                            {milestone.month}
                          </p>
                        )}
                        <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 font-heading">
                          {milestone.title}
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed font-body">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600 mb-6 font-body">
              {activeTab === 'past'
                ? 'Stay tuned with BrosPay cause we are not going to rest on our laurels.'
                : 'Join us on this journey as we continue to innovate and shape the future of payments.'}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body group"
            >
              Get in touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

