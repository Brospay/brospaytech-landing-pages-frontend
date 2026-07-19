'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Case Studies component
 * Features all case studies from BrosPay
 */
export function CaseStudies() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const caseStudies = [
    {
      slug: 'forex-client',
      clientId: 'Forex client',
      industry: 'Forex',
      targetGeo: 'International',
      description: 'See how one of the leading forex trading platforms leveraged BrosPay to overcome its payment processing challenges in various regions and streamline operations.',
      image: '/assets/landing_page/client_stories/three_img.webp',
    },
    {
      slug: 'gambling-client',
      clientId: 'Gambling client',
      industry: 'Gambling',
      targetGeo: 'International',
      description: 'Discover how we helped an international gambling and betting company expand its operations and optimise conversion rates across diverse geographical locations.',
      image: '/assets/landing_page/client_stories/one_img.webp',
    },
    {
      slug: 'kuna',
      clientId: 'Kuna',
      industry: 'Crypto exchange',
      targetGeo: 'International, Europe',
      description: 'We gave the first cryptocurrency exchange in the Eastern Europe region a single place to manage its operations and provide payment services to other businesses.',
      image: '/assets/landing_page/client_stories/two_img.webp',
    },
    {
      slug: 'psp-client',
      clientId: 'PSP client',
      industry: 'PSP',
      targetGeo: 'Eastern Europe',
      description: 'Learn how our White label payment provider solution facilitated the whole operational cycle for a payment company and helped them handle growing payment volume.',
      image: '/assets/landing_page/client_stories/one_img.webp',
    },
    {
      slug: 'boosta',
      clientId: 'Boosta',
      industry: 'IT company',
      targetGeo: 'International',
      description: 'The company with numerous products and websites conveniently operates their payment flows in the multitenancy environment after a single integration with us.',
      image: '/assets/landing_page/client_stories/two_img.webp',
    },
    {
      slug: 'coffeeok',
      clientId: 'Coffeeok',
      industry: 'E-commerce',
      targetGeo: 'Ukraine',
      description: 'With the help of BrosPay, Ukrainian e-commerce merchant Coffeeok organised a personalised checkout experience and gained customer loyalty and trust.',
      image: '/assets/landing_page/client_stories/three_img.webp',
    },
    {
      slug: 'letyshops',
      clientId: 'LetyShops',
      industry: 'Cashback service',
      targetGeo: 'Worldwide',
      description: 'Discover the success story of LetyShops to learn how we helped them handle mass payouts and establish new integrations, equipping the company for international expansion.',
      image: '/assets/landing_page/client_stories/one_img.webp',
    },
  ]

  return (
    <section 
      ref={sectionFade.ref as React.RefObject<HTMLElement>} 
      style={sectionFade.style} 
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Client stories
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
            Discover how our payment orchestration platform and expert assistance have facilitated businesses across different regions and industries, from e-commerce merchants to payment institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 flex flex-col hover:shadow-lg transition-all duration-200"
            >
              {/* Client Image */}
              {story.image && (
                <div className="mb-6 w-full h-[150px] lg:h-[180px] flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={story.image}
                    alt={story.clientId}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Client Identifier */}
              <div className="mb-6">
                <div className="text-xl font-bold text-gray-900 font-heading mb-4">
                  {story.clientId}
                </div>
              </div>

              {/* Industry */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 font-body mb-1">Industry</p>
                <p className="text-base font-semibold text-gray-900 font-body">{story.industry}</p>
              </div>

              {/* Target Geo */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 font-body mb-1">Target geo</p>
                <p className="text-base font-semibold text-gray-900 font-body">{story.targetGeo}</p>
              </div>

              {/* Description */}
              <p className="text-[18px] text-gray-600 leading-relaxed font-body mb-6 flex-1">
                {story.description}
              </p>

              {/* Read the story link */}
              <Link
                href={`/case-studies/${story.slug}`}
                className="inline-flex items-center gap-2 text-base font-medium text-[#4730B8] hover:text-[#5a3fc9] transition-colors tap-target font-body group"
              >
                Read the story
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

