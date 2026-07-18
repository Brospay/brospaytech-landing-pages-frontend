'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Client Stories section component
 * Features:
 * - Heading and description
 * - Three client story cards with industry, target geo, and descriptions
 * - "Read the story" call-to-action links
 * - Smooth fade-in animations
 */
export function ClientStories() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const clientStories = [
    {
      slug: 'gambling-client',
      clientId: 'Client 🎰',
      industry: 'Gambling',
      targetGeo: 'International',
      description: 'We helped an international gambling and betting company expand operations and optimize conversion rates across diverse geographical locations.',
      image: '/assets/landing_page/client_stories/one_img.webp',
    },
    {
      slug: 'boosta',
      clientId: 'BOOSTA',
      industry: 'IT company',
      targetGeo: 'International',
      description: 'We operate payment flows in a multitenancy environment after a single integration.',
      isLogo: true,
      image: '/assets/landing_page/client_stories/two_img.webp',
    },
    {
      slug: 'forex-client',
      clientId: 'Client 💱',
      industry: 'Forex',
      targetGeo: 'International',
      description: 'A leading forex trading platform leveraged our platform to overcome payment processing challenges and streamline operations.',
      image: '/assets/landing_page/client_stories/three_img.webp',
    },
  ]

  return (
    <section 
      ref={sectionFade.ref as React.RefObject<HTMLElement>} 
      style={sectionFade.style} 
      className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Client stories
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
            See which challenges businesses solve and which results they achieve with ValoraPay's payment platform and expertise. We're excited to dive into your case!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clientStories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 flex flex-col hover:shadow-lg transition-all duration-200"
            >
              {/* Client Image */}
              {story.image && (
                <div className="mb-6 w-full h-[150px] lg:h-[180px] flex items-center justify-center rounded-lg overflow-hidden">
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
                {story.isLogo ? (
                  <div className="text-xl font-bold text-gray-900 font-heading mb-4">
                    {story.clientId}
                  </div>
                ) : (
                  <div className="text-xl font-bold text-gray-900 font-heading mb-4">
                    {story.clientId}
                  </div>
                )}
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

