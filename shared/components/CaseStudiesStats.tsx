'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Case Studies Stats component
 * Shows key statistics
 */
export function CaseStudiesStats() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 100 })

  const stats = [
    {
      value: '800M+',
      label: 'successful transactions across the world powered by ValoraPay',
      icon: (
        <svg className="w-12 h-12 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 'Principal members',
      label: 'Principal members of Visa and Mastercard use ValoraPay as a gateway for card-acquiring services',
      icon: (
        <svg className="w-12 h-12 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      value: '3 out of 5',
      label: 'largest Forex brokers worldwide are our clients',
      icon: (
        <svg className="w-12 h-12 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: 'Top 20',
      label: 'We have companies from the gambling industry\'s top 20 on board',
      icon: (
        <svg className="w-12 h-12 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section 
      ref={sectionFade.ref as React.RefObject<HTMLElement>} 
      style={sectionFade.style} 
      className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 font-heading">
                {stat.value}
              </div>
              <p className="text-[16px] text-gray-600 leading-relaxed font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

