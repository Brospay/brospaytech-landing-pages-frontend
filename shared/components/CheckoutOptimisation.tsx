'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Checkout Optimisation section component
 * Shows optimisation features and tools
 */
export function CheckoutOptimisation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const optimisationTools = [
    {
      title: 'Routing and cascading',
      description: 'These innovative tools route your online transactions most efficiently according to selected parameters, saving time and cutting costs, and automatically reroute them when needed to eliminate declines.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: 'Tokenisation',
      description: 'One-click transactions reduce friction and skyrocket conversion. The ability to pay in one tap enriches the customer experience.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Personalisation',
      description: 'Display a selection of payment options recommended personally for each of your shoppers. Advanced checkout solutions can memorise the latest and most used methods.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Localisation',
      description: "A checkout can identify and adapt to a buyer's geolocation, switching to the correct language and displaying local payment options first.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: '"Remember me"',
      description: 'Show your appreciation to returning customers by eliminating the need for repeated data entry. Empower them to manage saved credit cards and other payment methods.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Abandoned cart recovery',
      description: "If your customer forgets to finalise the transaction, it's great to have their cart automatically taken care of, saving all the items for them to return and proceed.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  const relatedRoutes = [
    {
      title: 'Routing & Cascading',
      description: 'An intelligent processing engine ensures the highest success rates for all your transactions.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      link: '/payments',
    },
    {
      title: 'Analytics',
      description: 'Transform previously disjointed data into insights on how to optimise processes and costs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      link: '/payments',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to optimise the checkout process
          </h2>
          <p className="text-[18px] text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
            The fact that your customer reached the checkout doesn't imply a completed transaction. You should try and optimise your checkout process to make your success rates flourish.
          </p>
        </div>

        {/* Optimisation Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {optimisationTools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[10px] bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] mb-4">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                {tool.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* How ValoraPay Can Help */}
        <div className="bg-[#4730B8] rounded-2xl p-8 lg:p-12 text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
            How ValoraPay can help with online checkout services
          </h3>
          <p className="text-[18px] text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-body">
            Having more than ten years of experience in developing and promoting online payment products, ValoraPay has tested and learned what works best in terms of digital payments. Contact us to see all the features mentioned above in action and get the best online checkout for your company.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-[10px] hover:bg-gray-100 transition-colors font-body"
          >
            Get in touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Routes to Explore */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
            Routes to explore more
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedRoutes.map((route, index) => (
              <Link
                key={index}
                href={route.link}
                className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-[10px] bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0 group-hover:bg-[#4730B8] group-hover:text-white transition-colors">
                  {route.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 font-heading group-hover:text-[#4730B8] transition-colors">
                    {route.title}
                  </h4>
                  <p className="text-gray-600 font-body">
                    {route.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

