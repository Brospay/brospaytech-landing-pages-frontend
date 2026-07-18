'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingEducation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const faqs = [
    {
      question: 'What is a gambling payment gateway?',
      answer: 'A gambling payment gateway is a type of payment gateway designed specifically for online gambling businesses such as casinos, sports betting sites, poker rooms, and lotteries. Like any payment gateway, it is a secure technology that authorises and processes online transactions by encrypting payment details, sending them to the payment processor or acquirer, receiving the approval or decline, and returning the result to the merchant\'s website or app. What makes a payment gateway for gambling different is that it operates in a high-risk industry. Online gambling involves wagering money for the chance to win more, and is considered high-risk by banks and payment processors due to strict regulations, fraud risks, and chargeback potential.',
    },
    {
      question: 'What payment challenges do gambling businesses face, and how can ValoraPay help overcome them?',
      answer: 'Running an online gambling business comes with unique payment hurdles. At ValoraPay, our gambling payment gateway is built to help operators and platforms tackle them head-on: Getting a merchant account – with 550+ high-risk-friendly providers already integrated, you only need to connect your MIDs to start processing. Offering the right payment methods – from cards and e-wallets to crypto, we help you add the payment options players in your markets prefer. Managing deposits and payouts – accept and send payments through multiple channels with equal speed and reliability. Reducing chargebacks – use our advanced risk tools to keep chargeback rates low and protect your accounts. Navigating high-risk conditions – lower fraud exposure, meet global compliance standards, and optimise costs in a high-fee industry.',
    },
    {
      question: 'How to choose a payment gateway for online gambling?',
      answer: 'When selecting a payment gateway for online gambling, look for one that solves your industry-specific challenges — from maximising player conversions to meeting strict compliance requirements. The right gambling payment gateway should: Support deposits and payouts through multiple payment methods. Offer a fast, user-friendly checkout to reduce abandonment. Comply with regulations and security standards like PCI DSS. Provide transparent, competitive fees. Cover your target markets with relevant local payment options.',
    },
    {
      question: 'Can ValoraPay help me accept payments for my gambling or betting platform?',
      answer: 'Yes. ValoraPay provides a payment gateway for gambling that supports online casinos, poker rooms, and sports betting sites. With 550+ providers integrated, we enable you to process deposits and payouts through cards, e-wallets, bank transfers, and crypto — all from a single connection. Our smart routing boosts acceptance rates, while fast payouts and fraud protection keep players satisfied.',
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
            Find answers to common questions about gambling payment processing
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

