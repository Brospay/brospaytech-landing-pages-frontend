'use client'

import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Expand Globally Routes to Explore section
 */
export function ExpandGloballyRoutes() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const routes = [
    {
      title: 'Payment solutions',
      description: 'A unified interface allowing the way of accepting payments to be centralised, standardised, and streamlined.',
      href: '/payments',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Batch payouts',
      description: 'Send payouts to an unlimited amount of recipients simultaneously and regardless of payout methods.',
      href: '/batch-payouts',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 font-heading">Routes to explore more</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className="bg-gray-900 rounded-[20px] p-8 hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-[#4730B8] rounded-xl flex items-center justify-center text-white">
                  {route.icon}
                </div>
                <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                {route.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-body">
                {route.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

