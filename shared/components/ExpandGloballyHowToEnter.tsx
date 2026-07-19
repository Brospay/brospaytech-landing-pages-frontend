'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Expand Globally How to Enter New Markets section
 */
export function ExpandGloballyHowToEnter() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const recommendations = [
    {
      title: 'Consult with a local expert',
      description: 'As we\'ve mentioned, finding a local expert may be difficult and pricey, but it undoubtedly pays off. A person or a company with proven local expertise will prepare you for the market entrance much faster. They\'ll help you understand local regulations and taxes, find the best partners to start, teach you about local business culture, and provide critical insights into the new market. It\'s a double win if you find an expert with experience in your niche.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Prepare infrastructure & Processes',
      description: 'For a confident start, think through the workflow for your foreign operations and plan all the processes needed. Organise a team for your new market, buy or lease necessary equipment and software, carefully prioritise the tasks for the first weeks, and decide which processes would be handled by your local team and which would remain the headquarters\' responsibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Ensure compliance',
      description: 'Compliance with your new market\'s regulations is a must. The local expert would help you deal with compliance, but if you don\'t have one, consider hiring lawyers or compliance officers with local legal expertise.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Find a partner to handle payments',
      description: 'The right payment partner can considerably soften the load for you. Besides giving you access to payment methods needed for expansion, a good payment service provider will also offer a solid toolkit for efficient payment management and optimisation. They can also unload the burden of complying with payment security standards, like PCI DSS, and implementing new payment-related technologies, such as 3DS2.0, P2P routing, cascading, etc.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to enter new markets faster?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            So, how to cope with all the challenges and access the new market faster? Following these four recommendations will boost your expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {recommendation.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {recommendation.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {recommendation.description}
              </p>
            </div>
          ))}
        </div>

        {/* BrosPay Solution Section */}
        <div className="bg-gradient-to-r from-[#4730B8]/10 to-purple-100 rounded-[20px] p-8 lg:p-12 border-2 border-[#4730B8]/20">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-[#4730B8] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                BrosPay: Your one-stop shop for growing businesses
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                BrosPay is a one-stop shop for growing businesses. Our solution not only allows connecting new payment methods in a few clicks but enables working with multiple payment providers conveniently, managing everything in a single place. We continuously work on upgrading our platform to ensure our clients get the best-in-class experience and technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
                Moreover, our team deeply understands the global payment market and has experience dealing with numerous providers and acquirers. We use that knowledge to assist our clients as they scale up, suggesting the best solution for each payment challenge.
              </p>
              <Link
                href="#book-call"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4730B8] text-white text-base font-semibold rounded-[10px] hover:bg-[#5a3fc9] transition-colors shadow-lg hover:shadow-xl tap-target font-body"
              >
                Book a demo to learn more
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

