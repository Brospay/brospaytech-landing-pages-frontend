'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * PSP White Label Solution section
 */
export function PSPWhiteLabel() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const benefits = [
    {
      title: 'No development efforts',
      description: 'Some companies can cover all technical aspects for you, offering white-label solutions at a reasonable price. Why waste time and resources trying to develop something that industry experts have already done?',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Out-of-the-box solution',
      description: 'A white-label payment service provider is an out-of-the-box solution that allows you to generate revenue by providing payment gateway services to merchants under your brand.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Focus on business operations',
      description: 'Relying on a ready-made product empowers you to switch focus from picking around technical issues to handling business operations and building strong client relationships.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const stats = [
    {
      label: 'Time to develop',
      value: '2 years',
      description: 'Developing your own payment software',
    },
    {
      label: 'MVP cost',
      value: '$200K+',
      description: 'Just an MVP would cost you',
    },
    {
      label: 'Time with white-label',
      value: '1-2 months',
      description: 'Start your business from scratch',
    },
    {
      label: 'Cost comparison',
      value: 'One coder\'s salary',
      description: 'Everything out of the box',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to take the technical pain out of becoming a PSP
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            White-label PSP is the answer! A white-label payment service provider is an out-of-the-box solution that allows you to generate revenue by providing payment gateway services to merchants under your brand.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Comparison */}
        <div className="bg-gray-50 rounded-[20px] p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-center">
            Quick Facts Comparison
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-[15px] p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-primary mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1 font-heading">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 font-body">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

