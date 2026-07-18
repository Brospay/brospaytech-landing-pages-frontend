'use client'

import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Western Europe Related Articles section
 */
export function WesternEuropeRelatedArticles() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const relatedArticles = [
    {
      title: 'Payment operations: definition, importance & optimisation tips',
      date: 'December 2, 2025',
      readTime: '15 min',
      image: '/assets/ecommerce_page/hero_right.png',
      href: '/blog',
    },
    {
      title: 'Certified payment integrations: process, requirements, and best practices',
      date: 'December 2, 2025',
      readTime: '10 min',
      image: '/assets/ecommerce_page/hero_right.png',
      href: '/blog',
    },
    {
      title: 'Payment tokenisation: how it works, benefits, and implementation tips',
      date: 'November 12, 2025',
      readTime: '17 min',
      image: '/assets/ecommerce_page/hero_right.png',
      href: '/blog',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 font-heading">Related articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading group-hover:text-[#4730B8] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-body">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

