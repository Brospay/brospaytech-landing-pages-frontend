'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Card Vault & Tokenisation section component
 * Shows tokenisation flow
 */
export function CardVaultTokenisation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const benefits = [
    'Charge one card multiple times, without asking a customer to re-enter the details',
    "Make a free of charge authorisation to block funds on the customer's card to have time for customer verification using our fraud score",
    'Offer one-click payments to simplify the purchasing flow',
    'Create charges, subscriptions, or plans with just a few lines of code',
  ]

  const tokenisationSteps = [
    {
      step: 1,
      title: 'Customer Enters Card Data',
      description: 'A customer inputs their credit card details. It can be done by using a custom form, Checkout, or directly with API.',
    },
    {
      step: 2,
      title: 'Token Is Created On Our Side',
      description: 'A token is created in our API and card details are sent to our token server.',
    },
    {
      step: 3,
      title: 'Token Is Sent Back To You',
      description: 'The token is sent to your backend. You can securely process the payments, even without PCI compliance — leave it to us.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Card Vault & Tokenisation
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Enjoy safe transactions and tokenised data without any additional fees. Accept payments with or without PCI compliance thanks to our tokenisation technology, which always keeps your customers' data secure <strong>and enables you to focus on your business.</strong>
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600 font-body">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Tokenisation Flow */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Card Visualization */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Card */}
                <div className="w-72 h-44 bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-xl p-5 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-9 bg-yellow-400 rounded"></div>
                    <span className="text-white/80 text-sm font-body">VISA</span>
                  </div>
                  <div className="text-white/80 text-lg font-mono mb-4">---- ---- ---- ----</div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white/50 text-xs font-body">Card holder</p>
                      <p className="text-white text-sm font-body">Alex Bolton</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-body">Valid thru</p>
                      <p className="text-white text-sm font-body">10/28</p>
                    </div>
                  </div>
                </div>

                {/* Token Info */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 font-body">Card Fingerprint</span>
                      <span className="font-mono text-[#4730B8]">QSHAT...7A</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 font-body">Fraud Score</span>
                      <span className="text-green-600 font-semibold font-body">Safe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Steps */}
            <div className="space-y-6">
              {tokenisationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8E4FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#4730B8] font-bold font-heading">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">{step.title}</h3>
                    <p className="text-gray-600 text-sm font-body">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

