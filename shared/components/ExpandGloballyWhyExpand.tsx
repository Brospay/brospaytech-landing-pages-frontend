'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Expand Globally Why Expand section
 */
export function ExpandGloballyWhyExpand() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const reasons = [
    {
      title: 'Growing customer base',
      description: 'More than half of tech businesses in the US and the UK named growing their customer base as one of the main reasons to enter new markets.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Scaling up',
      description: 'For some, taking their operations global is a must to remain competitive. Scaling up and accelerating operations is the second most crucial factor for companies.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Access talent',
      description: 'Expanding to access talent is also common in tech. Interestingly, this reason was mentioned by American companies 10% more often than by British ones.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Diversify portfolio',
      description: 'In today\'s uncertain time, some businesses plan expansion to diversify their portfolio and alleviate the risks, namely the threat of trade barriers.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Merger and acquisition',
      description: 'Merger and acquisition deals also account for many respondents\' answers when considering expansion.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Why expand?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Many companies believe that entering a new market would unveil new opportunities, help attract more customers, and earn more money. Overall, businesses believe access to foreign markets would make them more successful. That's what 73% of senior decision-makers confirmed in GoCardless research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

