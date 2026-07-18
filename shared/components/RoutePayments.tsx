'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Route Payments section component
 * Features all smart processing capabilities
 */
export function RoutePayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const routingFeatures = [
    {
      title: 'Routing',
      description: 'Set up optimal routing schemes to auto forward each transaction to the most efficient route, increasing your acceptance rates.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Cascading',
      description: 'Re-route each transaction until successful completion to minimise declines and achieve independence from technical issues on PSP\'s side.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Splitting',
      description: 'Handle bulk payments with ease, completing them through multiple payment providers and methods.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Blocking',
      description: 'Our platform incorporates a strong set of tools helping you to spot fraudulent transactions in advance and avoid time and money losses.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: 'Converting',
      description: 'Allow customers to view prices and pay in their currency while settling your balance in the currency of your choice.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Triggering',
      description: 'Change the way the transaction is processed before routing. It allows to automatically decide whether a CVV or 3DS is necessary.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'P2P control',
      description: 'P2P transactions can be automatically routed to the appropriate transit account, meeting your requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Retries',
      description: 'Automatically retry failed transactions with intelligent retry logic to maximize success rates and reduce manual intervention.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Title left, Description right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Route Payments
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              Explore how ValoraPay's routing engine can help you boost conversions, reduce processing costs, and diversify risks. Whether you're looking to optimise your payment processing or seeking advanced payment routing strategies, we have the solution.
            </p>
          </div>
        </div>

        {/* Routing Features Grid - 4 columns on first row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {routingFeatures.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {feature.icon}
                </div>
              </div>
              {/* Title below icon */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading leading-tight text-left mb-4">{feature.title}</h3>
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
            <div
              key={index + 4}
              className="flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {feature.icon}
                </div>
              </div>
              {/* Title below icon */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading leading-tight text-left mb-4">{feature.title}</h3>
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
            href="/routing-cascading"
            className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a26a0] hover:underline transition-all font-body cursor-pointer"
          >
            Explore all smart processing features
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
    </section>
  )
}

