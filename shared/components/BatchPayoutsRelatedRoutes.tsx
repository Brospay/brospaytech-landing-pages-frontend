'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Batch Payouts Related Routes section component
 * Shows related pages to explore
 */
export function BatchPayoutsRelatedRoutes() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const routes = [
    {
      title: 'Payments',
      description: 'A unified interface allowing the way of accepting payments to be centralised, standardised, and streamlined.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      link: '/payments',
    },
    {
      title: 'Dashboard',
      description: 'A feature-rich user interface to operate and run day-to-day operations without the need for coding.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      link: '#dashboard',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
          Routes to explore more
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.link}
              className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0 group-hover:bg-[#4730B8] group-hover:text-white transition-colors">
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
    </section>
  )
}

