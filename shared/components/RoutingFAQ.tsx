'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Routing FAQ section component
 * FAQ questions about routing and cascading
 */
export function RoutingFAQ() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is payment routing?',
      answer: `Payment routing is a go-to technology for payment processing, built for online businesses and institutions that accept payments by working with multiple payment service providers (PSPs). It implies sending each transaction to the most suitable PSP or acquirer based on selected parameters.

There are two fundamental ways in which payment routing works:
• Static payment routing requires the manual creation of complex routing schemes
• Dynamic payment routing is much more agile, with rules that can switch in real time

ValoraPay enables intelligent or smart payment routing that uses your transaction data to predict the best route for every single transaction in real time.`,
    },
    {
      question: 'How to set up payment routing?',
      answer: `First, you'll need to find a technical payment partner that offers such a feature and connect it. Then, it's time to develop a payment routing strategy that meets your specific business needs.

Payment routing parameters you can consider include:
• Card issuer (country, bank, INN/BIN)
• Card type and brand
• Authorisation mode (CVV/3DS)
• Country of the buyer
• Store and transaction amount
• Transaction currency
• Date and time of payment
• Metadata`,
    },
    {
      question: 'What is cascading?',
      answer: `Payment cascading is an important feature in payment infrastructure. In a complex multiple provider setup, this technical solution instantly and automatically forwards the online transaction to a different PSP in case of failure.

For example, if the first PSP declines the payment for any reason (risk assessment, authorisation error, provider's downtime), the failed transaction will be routed to a different PSP for a retry. This allows merchants to increase the acceptance rate and improve customer experience, as everything happens seamlessly for the buyer.`,
    },
    {
      question: 'Why route your payments?',
      answer: `Payment routing enables online businesses with multiple merchant accounts at different PSPs to gain three main benefits:

• Optimised payment performance: Intelligent routing provides a great opportunity to increase acceptance rates, boosting conversion and overall performance

• Considerably lower transaction cost: You can send each payment to the provider that charges the lowest fee, especially important for merchants operating across different countries and currencies

• Protection from downtimes and failed transactions: Intelligent routing helps alleviate the risk of losses caused by issues on specific payment provider side, and allows retrying declined transactions with a different PSP`,
    },
    {
      question: 'What is the difference between payment routing and cascading?',
      answer: `Payment routing selects the most suitable provider at the start of a transaction based on your configured rules and parameters.

Payment cascading comes into play when the initial provider declines the payment — the transaction is then automatically retried with alternative providers until it's approved or no routes remain.

Using both ensures higher approval rates and better customer experience. These technologies usually come tied together in modern payment orchestration platforms like ValoraPay.`,
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            FAQ
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed font-body">
            Understand the essentials of routing and cascading, along with tips and insights to improve payment performance and efficiency.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4 font-heading">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#E8E4FF] flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line font-body">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

