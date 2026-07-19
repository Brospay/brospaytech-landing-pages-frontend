'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Make Payouts section component
 * Shows automated and manual payout options with visual representations
 */
export function MakePayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Make Payouts
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            BrosPay allows you to easily handle global payouts both automatically and manually.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Automated Payouts */}
          <div className="relative">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block bg-black text-white px-4 py-2 text-sm font-bold font-body">
                AUTOMATED PAYOUTS
              </span>
            </div>


            {/* Text Descriptions */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  Instant payouts
                </h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Send payouts directly to recipients within minutes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading">
                  <Link href="/routing-cascading" className="text-[#4730B8] hover:text-[#3a26a0] transition-colors">
                    Routing & Cascading →
                  </Link>
                </h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Our intelligent processing engine ensures optimal routing of each payout, while automated failovers help to finalise all your payout requests.
                </p>
              </div>
            </div>
          </div>

          {/* Manual Payouts */}
          <div className="relative">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block bg-black text-white px-4 py-2 text-sm font-bold font-body">
                MANUAL PAYOUTS
              </span>
            </div>


            {/* Text Descriptions */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  Manual payouts
                </h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Create payout invoices and initiate transactions manually in a few clicks.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading">
                  <Link href="/batch-payouts" className="text-[#4730B8] hover:text-[#3a26a0] transition-colors">
                    Batch payouts →
                  </Link>
                </h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Send global payouts to an unlimited amount of recipients simultaneously and regardless of the payout method by uploading a batch file.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-heading">
                  <Link href="/dashboard" className="text-[#4730B8] hover:text-[#3a26a0] transition-colors">
                    Payment dashboard →
                  </Link>
                </h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Use Dashboard to create a payout file and upload it to send funds to multiple recipients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
