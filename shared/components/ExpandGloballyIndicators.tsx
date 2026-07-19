'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Expand Globally Indicators section - 7 indicators that you're ready for expansion
 */
export function ExpandGloballyIndicators() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const indicators = [
    {
      number: 1,
      title: 'The industry you\'re in is gaining traction',
      description: 'We hope you do track the progress of the industry you\'re in. If so, you\'ll know if the market is saturated or has a place for growth. Analysing and predicting market trends is also helpful and may allow you to seize occurring opportunities earlier than your competitors.',
    },
    {
      number: 2,
      title: 'Your company is ahead of the plan',
      description: 'If you\'ve been outperforming your benchmarks for a few months, it may indicate either the chance to accelerate your activities or the weakness of your benchmarking. Make sure it\'s the first one.',
    },
    {
      number: 3,
      title: 'You have sufficient resources and a solid growth strategy',
      description: 'You\'ll need time, money, and endeavour for a successful expansion. Calculate if you\'re capable of investing in your growth now.',
    },
    {
      number: 4,
      title: 'Your operational infrastructure can handle scaling',
      description: 'If you\'ve ensured your current operational systems, processes, and technologies are scalable and can support growth without compromising quality or customer satisfaction, you should consider expanding.',
    },
    {
      number: 5,
      title: 'You\'ve gained significant market share in your domestic market',
      description: 'In this case, one way to keep growing your business is to launch new products for the existing customer base, but it\'s quite risky and costly. So there\'s another way — taking your existing successful offering to a new market.',
    },
    {
      number: 6,
      title: 'You\'ve gathered a strong team of professionals who enjoy working with you',
      description: 'We at BrosPay believe the team is what makes the difference. Reliable and committed colleagues who support your aspirations double your chances for success!',
    },
    {
      number: 7,
      title: 'Your reputation crossed the borders before your business did',
      description: 'If you\'re one of those businesses people crave to have at their location, congratulations — you\'re doing great! The demand and the word-of-mouth support would facilitate your expansion immeasurably.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            7 indicators that you're ready for expansion
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Here are some signs indicating it's time to conquer a new market or increase your share of existing ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {indicators.map((indicator) => (
            <div
              key={indicator.number}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                  {indicator.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    {indicator.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {indicator.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

