'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Beyond Batch Payouts section component
 * Shows advanced features with progress visualization
 */
export function BeyondBatchPayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Any Payout Method',
      description: 'Use multiple payout methods simultaneously. Mix SEPA and SWIFT transfers, or send money to PayPal wallets by ID and by phone number.',
    },
    {
      title: 'Any Amount & Splitting',
      description: 'Every item in a batch payout can be executed through multiple transactions, enabling successful processing of any amount.',
    },
    {
      title: 'Sequence & Parallel',
      description: 'Batch payout items can be processed consecutively, one by one, or instantly, all at once.',
    },
    {
      title: 'Auto-Retries',
      description: 'Re-route transactions until they are successfully completed or suspended, and manage failover by setting up attempt limits and routing rules for any resolution.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <h2 className="text-[2.4rem] font-medium text-white leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Beyond Batch Payouts
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-300 leading-relaxed font-body">
              Batch payouts is a comprehensive all-in-one solution that enables you to make mass payouts at any scale by leveraging as many payment methods and currencies as needed. With a range of supporting features, it saves you time, money, and nerves.
            </p>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-[#4730B8] font-semibold mt-4 hover:text-[#5a40d0] transition-colors font-body"
            >
              Download presentation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-body">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Progress Visualization */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h4 className="text-white font-semibold mb-6 font-heading">Processed items</h4>
            
            {/* Progress Bars */}
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-body">Processed</span>
                  <span className="text-white font-semibold font-body">85%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#4730B8] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-body">Success</span>
                  <span className="text-green-400 font-semibold font-body">78%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-body">Failed</span>
                  <span className="text-red-400 font-semibold font-body">7%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>

            {/* Estimated Amount */}
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-white font-semibold mb-4 font-heading">Estimated amount</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-body">Total amount</span>
                  <span className="text-white font-semibold font-body">2,150.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-body">Sent</span>
                  <span className="text-green-400 font-semibold font-body">2,085.50 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

