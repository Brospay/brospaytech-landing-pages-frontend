'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function IGamingEducation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const faqs = [
    {
      question: 'How to set up iGaming payment processing?',
      answer: 'To set up iGaming payment processing, you need to integrate with a payment orchestration platform that supports high-risk industries. ValoraPay provides a comprehensive solution that includes multiple payment providers, fraud management, and compliance tools specifically designed for iGaming businesses. The integration process is straightforward and can be completed in a matter of weeks.',
    },
    {
      question: 'Why is iGaming considered high-risk?',
      answer: 'iGaming is considered high-risk due to the nature of online gambling and gaming transactions. This industry faces higher chargeback rates, regulatory complexities, and fraud risks. Payment processors require special handling and compliance measures to ensure secure transactions and regulatory adherence.',
    },
    {
      question: 'What payment methods are best for iGaming?',
      answer: 'The best payment methods for iGaming include e-wallets (like PayPal, Skrill, Neteller), credit/debit cards, bank transfers, and cryptocurrency. The choice depends on your target geography and player preferences. A payment orchestration platform like ValoraPay allows you to offer multiple payment methods and route transactions intelligently to maximise success rates.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto font-body">
            Find answers to common questions about iGaming payment processing
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] shadow-sm border border-gray-200"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 font-heading">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed font-body">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

