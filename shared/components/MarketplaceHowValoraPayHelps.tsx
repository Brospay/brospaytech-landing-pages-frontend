'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Marketplace How ValoraPay Helps section
 */
export function MarketplaceHowValoraPayHelps() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How ValoraPay can help?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            It's difficult to underestimate the functionality of a payment gateway for marketplaces, as the security of transactions is paramount to customers shopping online. By providing them with maximum data protection on your marketplace, you will increase loyalty to your company and boost your revenue accordingly.
          </p>
        </div>

        <div className="bg-white rounded-[20px] p-8 lg:p-12 border-2 border-primary/20">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-body text-center">
            At ValoraPay, we offer much more than just a payment gateway. Take your marketplace to a new level with our e-commerce management tools.
          </p>
          <div className="flex justify-center">
            <a
              href="/contacts"
              className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
            >
              Find out what we can do for you
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

