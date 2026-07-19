'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Gateway Comparison section component
 * Shows comparison between building your own vs using white label
 */
export function WhiteLabelGatewayComparison() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const ownSolution = [
    'Hire a team of at least 5 developers',
    'Long time to market',
    'Infrastructure costs (AWS, etc)',
    'Manual payment process management or cumbersome automation',
    'All product design and UX efforts are on you (dashboard, payment page, etc.)',
    'Integrate each payment provider separately',
    'PCI DSS compliance burden',
    'Labour-intensive upgrades and technical maintenance',
  ]

  const whiteLabel = [
    'Dedicated payment team. We strive to be your partner, not a vendor',
    'All infrastructure costs are included in the price',
    'Access to the network of 650+ payment providers',
    'Focus on your key competence, leaving all the technical matters to the team of payment professionals',
    'New payment provider integrations become available daily',
    'Out-of-the-box compliance with PCI DSS',
    'Constant upgrades of integrations and infrastructure maintenance included',
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            The Choice Is Yours
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Develop Your Own Solution */}
          <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#FEF3C7] flex items-center justify-center text-3xl leading-none select-none">
                😰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                Develop your own solution…
              </h3>
            </div>
            <ul className="space-y-3 mb-6">
              {ownSolution.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-900 mt-0.5 flex-shrink-0 font-body">-</span>
                  <span className="text-gray-900 font-body">{item}</span>
                </li>
              ))}
            </ul>
            {/* Cost Box */}
            <div className="bg-gray-100 rounded-lg p-4 mt-6">
              <p className="text-gray-900 font-bold font-body">MVP 200k + monthly costs</p>
            </div>
          </div>

          {/* Opt for White Label */}
          <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#FCD34D] flex items-center justify-center text-2xl leading-none relative select-none">
                <span className="absolute -top-0.5 -left-0.5 text-xs opacity-90">⭐</span>
                <span className="text-2xl">😊</span>
                <span className="absolute -bottom-0.5 -right-0.5 text-xs opacity-90">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                Opt for BrosPay's white label
              </h3>
            </div>
            <ul className="space-y-3 mb-6">
              {whiteLabel.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FCD34D] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900 font-body">{item}</span>
                </li>
              ))}
            </ul>
            {/* Cost Box */}
            <div className="bg-gray-900 rounded-lg p-4 mt-6">
              <p className="text-white font-bold text-center font-body">✨ from 2k per month ✨</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

