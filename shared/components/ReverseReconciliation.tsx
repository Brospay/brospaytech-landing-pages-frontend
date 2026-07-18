'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Reverse Reconciliation section component
 * Shows 3 methods for reverse reconciliation
 */
export function ReverseReconciliation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const methods = [
    {
      title: 'Automated system',
      description: 'Use our reconciliations API to have all the data you need at your fingertips.',
      link: '/docs',
      linkText: 'Explore the documentation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Manual processes',
      description: "Export ValoraPay's detailed statements manually by downloading a .xls file.",
      link: '/docs',
      linkText: 'Explore the documentation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Direct DB connection',
      description: 'Gain access to the original data on all your transactions.',
      link: '/docs',
      linkText: 'Explore the documentation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Double-check with reverse reconciliation
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            Identify omissions and errors in your own records by comparing them with the entries and the closing balances in ValoraPay's payment reconciliation system.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#4730B8] flex items-center justify-center text-white mb-4">
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 font-heading">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 font-body">
                {method.description}
              </p>

              {/* Link */}
              <Link
                href={method.link}
                className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#5a40d0] transition-colors font-body"
              >
                {method.linkText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

