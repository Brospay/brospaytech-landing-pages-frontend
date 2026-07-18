'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Expand Globally Challenges section
 */
export function ExpandGloballyChallenges() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const challengeCategories = [
    {
      title: 'Hiring & Marketing',
      challenges: [
        {
          title: 'International recruiting',
          description: 'Regardless of your team\'s greatness, expanding without hiring additional personnel in the new markets is hard, and international recruiting is tricky. Even if you don\'t need to hire new people abroad, you\'ll have to relocate some of your current employees.',
        },
        {
          title: 'Cultural nuances and consumer behaviour',
          description: 'A significant challenge is understanding and adapting to a new market\'s cultural nuances and consumer behaviour. Each market has its unique preferences, values, and expectations that can dramatically affect your product\'s appeal, marketing strategy, and customer service approach.',
        },
        {
          title: 'Building brand recognition',
          description: 'Building brand recognition and trust can be a daunting task. Your brand may already have a loyal customer base and a well-established reputation in your home market. But in a new market, you start from scratch.',
        },
      ],
      color: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Regulations & Payments',
      challenges: [
        {
          title: 'Currency fluctuations',
          description: 'Operating in multiple countries exposes businesses to currency fluctuations, impacting pricing strategies, profit margins, and overall financial stability. Managing this risk requires careful financial planning, including using hedging strategies and maintaining flexibility in pricing.',
        },
        {
          title: 'Taxes and regulations',
          description: 'The new jurisdiction may charge larger taxes than you pay in your original market. Prepare by analysing which taxes, fees, and tariffs expansion to a particular country incurs. Additionally, legal conditions for your industry may be stricter in the new region, or you may have to comply with some specific local regulations.',
        },
        {
          title: 'International payments',
          description: 'Accepting payments from foreign customers and managing international payments would require a study. A lack of expertise in the topic can damage your expansion, and all your other efforts risk falling flat. For 39% of businesses, the complexity of international payments is holding them back.',
        },
      ],
      color: 'bg-purple-50 border-purple-100',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            The main challenges businesses face when expanding
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Let's not get too romantic about international expansion. Besides all the good that going global can bring your business, there's also a fly in the ointment you should be aware of.
          </p>
        </div>

        <div className="space-y-8">
          {challengeCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${category.color} rounded-[20px] p-6 lg:p-8 border-2`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.challenges.map((challenge, challengeIndex) => (
                  <div key={challengeIndex} className="bg-white rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {challenge.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-body">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

