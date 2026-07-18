'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Education section component
 * FAQ and educational content about e-commerce payment gateway
 * Uses the same design as the home page FAQ component
 */
export function EcommerceEducation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const faqs = [
    {
      question: 'What is an e-commerce payment gateway?',
      answer: 'Electronic or digital payments are almost impossible without a payment gateway. A payment gateway represents a technical solution to help those who sell products or services accept payments from their customers online. Thus, if a business doesn\'t utilise any payment gateway, it can\'t accept online payments from customers.',
    },
    {
      question: 'How does it work?',
      answer: 'The path of each transaction is quite simple. Customers place orders on a website, enter the cart, and proceed to checkout. At this stage, a payment gateway becomes engaged. It accepts the payment data, encrypts it, transfers it via a secure channel to a payment processor, and redirects the customer to it. The processor leads the customer through the steps needed to complete the payment and checks if the payment was successful. Then it displays a message with the appropriate status to the customer. The final point is when the customer is automatically returned to the online store.',
    },
    {
      question: 'Why do e-commerce businesses require a payment gateway?',
      answer: 'A payment gateway is a tool to process any type of transaction online. It also ensures the secure transfer of transaction data between a buyer, a merchant, and an acquirer. Benefits include full automation and fault tolerance, working hours 24/7/365, secure and encrypted information transmission, no need to buy hardware and specialised software, and payment details are provided only to the gateway, not to the merchant.',
    },
    {
      question: 'What is the difference between payment gateways and payment systems?',
      answer: 'A payment gateway is a complex of hardware and software that is responsible for payment processing. It encrypts the payment data and is responsible for the clients\' correct authorisation. It provides the interconnection between the buyer and the seller. Payment systems are responsible for accepting funds. In most cases, these are different systems, but large companies sometimes combine these two services into one.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto font-body">
            Find answers to common questions about e-commerce payment gateways
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors tap-target group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[18px] font-semibold text-gray-900 pr-8 font-body">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    } group-hover:text-gray-900`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-[18px] text-gray-600 mb-6 font-body">
              Still have questions?
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-lg tap-target group font-body"
            >
              Contact Support
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

