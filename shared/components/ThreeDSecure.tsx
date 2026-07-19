'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * 3D Secure section component
 * Shows 3DS1 & 3DS2 features
 */
export function ThreeDSecure() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const features = [
    {
      title: 'Native In-App Authentication',
      description: "3DS2 enables the issuer to perform the authentication within your app or payment form. The shopper's identity may be verified using passive, biometric, and two-factor authentication approaches.",
    },
    {
      title: 'Keep Your Transactions SCA-Compliant',
      description: 'With built-in support for both 3D Secure 1 & 2 authentication protocols, BrosPay can help ensure your transactions meet SCA requirements.',
    },
    {
      title: 'Shift Chargeback Liability',
      description: 'For eligible cards, 3DS2 can move liability for chargebacks due to fraud from the merchant to the card issuer.',
    },
    {
      title: 'Lift Authorisation Rates',
      description: 'Data shows that issuers may approve more transactions when using 3DS2.',
    },
    {
      title: 'Take Advantage Of Exemptions',
      description: "BrosPay's solution supports exemptions available under SCA requirements, so your customers can experience the least possible amount of friction on applicable transactions.",
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            3D Secure (3DS)
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            BrosPay supports both 3D Secure 1 and 3D Secure 2 authentication protocols. 3DS2 offers a better shopper experience than 3DS1 and enables a smooth in-app authentication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - 3DS Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[450px] bg-gray-800 rounded-[40px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#4730B8] px-4 py-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-bold font-heading">3D Secure</h4>
                        <p className="text-white/70 text-xs font-body">Authentication Required</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center py-4">
                      <div className="w-16 h-16 rounded-full bg-[#E8E4FF] mx-auto flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-body">Verify your identity</p>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-center text-lg font-mono"
                        readOnly
                      />
                      <button className="w-full py-3 bg-[#4730B8] text-white rounded-lg font-semibold font-body">
                        Verify
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 text-center font-body">
                      A verification code has been sent to your registered mobile number
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm relative"
                onMouseEnter={() => setActiveTooltip(feature.title)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="w-10 h-10 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 font-body">{feature.title}</span>
                    <svg
                      className="w-4 h-4 text-[#4730B8] cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {activeTooltip === feature.title && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-50 p-4 bg-gray-900 text-white rounded-lg shadow-lg mx-4">
                    <p className="text-sm font-body">{feature.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

