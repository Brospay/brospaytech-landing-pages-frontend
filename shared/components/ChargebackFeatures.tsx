'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Chargeback Features section component
 * Shows key features for simplifying post-purchase challenges
 */
export function ChargebackFeatures() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'Faster dispute resolution',
      description: 'By identifying and resolving disputes early, you enhance the customer experience, maintain lower dispute ratios, and reduce financial risks.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Increased revenue recovery',
      description: 'Expert chargeback management and evidence submission significantly increase the chances of recovering revenue that would otherwise be lost to disputes.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Reduced chargebacks and fraud',
      description: 'Prevent disputes before they become chargebacks by providing real-time transaction details to customers and issuers, minimising misunderstandings and unauthorised claims.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-gray-900 rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body text-left">
            Simplify Post-Purchase Challenges
          </h2>
          <p className="text-lg text-white/90 max-w-3xl font-body text-left">
            Optimise your dispute management, prevent chargebacks, and safeguard against fraud with our all-in-one solution.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-[20px] p-6 lg:p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-[10px] bg-primary/20 flex items-center justify-center flex-shrink-0 text-white">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

