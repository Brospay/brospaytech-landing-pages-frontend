'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Route Payouts section component
 * Shows 7 routing features for payouts
 */
export function RoutePayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const routingFeatures = [
    {
      title: 'Routing',
      description: 'Set up optimal routing schemes to automatically forward each transaction to the most efficient route, increasing your acceptance rates.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: 'Cascading',
      description: "Re-route each transaction until successful completion to minimise declines and achieve independence from technical issues on PSP's side.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
    },
    {
      title: 'Splitting',
      description: 'Handle bulk payments with ease, completing them through multiple payment providers and methods.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Blocking',
      description: 'Our platform incorporates a strong set of tools helping you to spot fraudulent transactions in advance and avoid time and money losses.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: 'Converting',
      description: 'Easily set up rules for every currency pair conversion and freely choose an exchange rate source.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Triggering',
      description: 'Change the way the transaction is processed before routing.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'P2P control',
      description: 'P2P transactions can be automatically routed to the appropriate transit account, meeting your requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Retries',
      description: 'Automatically retry failed transactions with intelligent retry logic to maximize success rates and reduce manual intervention.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Route Payouts
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              Explore how BrosPay's routing engine can help you boost conversions, reduce processing costs, and diversify risks. Whether you're looking to optimise your payment processing or seeking advanced payment routing strategies, we have the solution.
            </p>
          </div>
        </div>

        {/* Routing Features Grid - 4 columns on first row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {routingFeatures.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="w-16 h-16 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {feature.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading leading-tight text-left mb-4">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 4 features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {routingFeatures.slice(4).map((feature, index) => (
            <div key={index + 4} className="flex flex-col">
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="w-16 h-16 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {feature.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading leading-tight text-left mb-4">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a26a0] transition-colors font-body"
          >
            Explore all smart processing features
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

