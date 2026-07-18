'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Gateway Industries section component
 * Shows industry-specific solutions
 */
export function WhiteLabelGatewayIndustries() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const industries = [
    { name: 'Online retail', icon: '🛒' },
    { name: 'E-commerce', icon: '🛍️' },
    { name: 'iGaming', icon: '🎮' },
    { name: 'E-education', icon: '📚' },
    { name: 'SaaS', icon: '💻' },
    { name: 'Travel & tickets', icon: '✈️' },
    { name: 'Airlines', icon: '🛫' },
    { name: 'Forex', icon: '💱' },
    { name: 'Dating & Adult', icon: '💑' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Your Business Needs in the Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Get the optimal payment setup for your industry to ensure better payment experience for you customers and win over competitors.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-xl bg-gray-100 group-hover:bg-primary/10 transition-colors flex items-center justify-center mx-auto mb-4 text-4xl">
                {industry.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors font-heading">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

