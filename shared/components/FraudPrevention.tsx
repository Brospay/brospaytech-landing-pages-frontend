'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Fraud Prevention section component
 * Shows anti-fraud features
 */
export function FraudPrevention() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const antiFraudFeatures = [
    'Limits on transactions from one IP address',
    'Restrictions on the amount',
    'Number of purchases',
    'Constantly changing algorithm',
    'Assessment of customer behaviour in the payment flow',
    'Transactions based on statistics, etc.',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Fraud Prevention
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
              Our platform entails a system that evaluates transactions online and detects suspicious ones. After a thorough analysis of each transaction, the system recommends rejecting or applying an additional check. In case of a fraud suspicion, the system can prevent money debiting.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              ValoraPay anti-fraud system can operate according to different parameters:
            </p>
            <div className="space-y-3">
              {antiFraudFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-8 font-body">
              Anti-fraud evaluates all operations and identifies the abnormal and suspicious ones. It is also capable of identifying a fraudster with the maximum degree of probability or defining buyers' card transactions as trusted.
            </p>
            <p className="text-[#4730B8] font-semibold mt-4 font-body">
              Enjoy secure payments processing without putting your funds, reputation, and customers' sensitive data in jeopardy.
            </p>
          </div>

          {/* Right - Fraud Shield Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Shield */}
              <div className="w-64 h-72 relative">
                <svg className="w-full h-full" viewBox="0 0 200 240" fill="none">
                  <path
                    d="M100 10 L180 50 L180 120 C180 170 140 210 100 230 C60 210 20 170 20 120 L20 50 L100 10Z"
                    fill="url(#shieldGradient)"
                    stroke="#4730B8"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E8E4FF" />
                      <stop offset="100%" stopColor="#D4CCFF" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Shield Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#4730B8] flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-2 -left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-body">
                Safe
              </div>
              <div className="absolute top-1/4 -right-8 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-body">
                Blocked
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-body">
                Review
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

