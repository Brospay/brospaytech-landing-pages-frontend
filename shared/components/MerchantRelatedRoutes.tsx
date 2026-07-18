'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Merchant Related Routes section component
 * Shows related pages to explore
 */
export function MerchantRelatedRoutes() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const routes = [
    {
      title: 'Checkout',
      description: 'A universal ready-made payment acceptance solution, designed with the consumer in mind.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/checkout',
    },
    {
      title: 'Routing & Cascading',
      description: 'An intelligent processing engine ensures the highest success rates for all your transactions.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/routing-cascading',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
          Routes To Explore More
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

