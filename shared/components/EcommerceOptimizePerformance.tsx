'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Optimize Performance section component
 * Shows how to optimize performance based on data with dashboard visualization
 */
export function EcommerceOptimizePerformance() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const steps = [
    {
      number: '1',
      title: 'Collect',
      description: 'Aggregate all your payment data across various vendors automatically.',
    },
    {
      number: '2',
      title: 'Normalise',
      description: 'Get coherent information instead of elaborate datasets.',
    },
    {
      number: '3',
      title: 'Analyse',
      description: 'Turn the raw data into actionable insights using auto-generated reports.',
    },
  ]

  const paymentMethods = [
    { name: 'Skrill', color: 'bg-purple-500', count: 2370, balance: '1,860.00 USD' },
    { name: 'WeChat Pay', color: 'bg-green-500', count: 1765, balance: '550.25 EUR' },
    { name: 'Alipay', color: 'bg-blue-400', count: 672, balance: '400.50 GBP' },
    { name: 'Bitcoin', color: 'bg-orange-500', count: 79, balance: '389.99 BTC' },
    { name: 'Sepa', color: 'bg-blue-600', count: 35, balance: '60.00 USD' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Optimise Performance Based on Your Data
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-body">
              Manage the payment process and all day-to-day operations with a single dashboard. Analyse your payment data to gain unique optimisation insights.
            </p>

            {/* Steps with Yellow Numbering */}
            <div className="relative">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 mb-8 relative">
                  {/* Yellow Circle with Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#4730B8] flex items-center justify-center font-bold text-white text-lg font-heading z-10 relative">
                      {step.number}
                    </div>
                    {/* Purple connecting line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-[#4730B8]"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                      {step.title}.
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/ecommerce_page/optimise_performance.png"
              alt="Optimise performance based on your data"
              className="w-full max-w-lg h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

