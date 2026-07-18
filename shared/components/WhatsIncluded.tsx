'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * What's Included section component
 * Shows Payments, Smart processing, Control, Management features
 */
export function WhatsIncluded() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const categories = [
    {
      title: 'Payments & Payouts',
      items: [
        'Payments',
        'Checkout',
        'Invoicing',
        'Payment links',
        'Subscriptions',
        'Recurring payments',
        'Instant payouts',
        'Batch payouts',
      ],
    },
    {
      title: 'Smart processing',
      items: [
        'Routing',
        'Cascading',
        'Currency conversion',
        'Splitting',
        'Anti-fraud',
        'Triggering',
        'P2P control',
      ],
    },
    {
      title: 'Control',
      items: [
        'Merchant management',
        'Reconciliations',
        'Monitoring',
        'Reporting',
        'Analytics',
        'Alerting',
      ],
    },
    {
      title: 'Management',
      items: [
        'Dashboard',
        'Merchant portal',
        'Telegram bot',
      ],
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What's Included In The White Label Solution?
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading border-b border-gray-100 pb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4730B8]"></div>
                    <span className="text-gray-600 text-sm font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/payments"
            className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:underline font-body"
          >
            Explore all features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

