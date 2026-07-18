'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dating Payment Gateway section
 */
export function DatingPaymentGateway() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              What is a dating payment gateway?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
              A dating payment gateway is a secure system that links your dating website or app to banks and payment processors. Think of it as a digital bridge that makes it possible for users to pay you by card, wallet, or other methods, while keeping their personal and payment details safe.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
              When integrated into your platform, a dating payment processor encrypts all transactions, ensuring payment security and protecting customers' personal information from potential fraud. It also supports different payment models, from one-time purchases to subscriptions, which is crucial for dating sites relying on recurring revenue.
            </p>
          </div>
          <div className="bg-gray-50 rounded-[20px] p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              Dating merchant accounts explained
            </h3>
            <p className="text-gray-600 leading-relaxed font-body mb-4">
              A dating merchant account is a type of bank account that allows your platform to accept and process payments, especially credit and debit card transactions, for dating services. As the dating business is high-risk, obtaining a merchant account often requires working with specialised providers familiar with matchmaking credit card processing and fraud prevention in the sector.
            </p>
            <p className="text-gray-600 leading-relaxed font-body">
              This account is tied to your payment gateway, enabling you to receive funds from transactions processed through your website or app. In short, your dating payment gateway ensures smooth, secure, and reliable payment flows for your platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

