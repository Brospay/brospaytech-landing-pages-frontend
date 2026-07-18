'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Education section component
 * FAQ and educational content about Forex payment gateway
 */
export function ForexEducation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const faqs = [
    {
      question: 'How to set up Forex payment processing?',
      answer: 'The Forex market is the largest and most active financial market in the world. It is considered one of the most popular ways to make money online. If you want to start a Forex trading business, you can\'t do without an efficient Forex payment processing solution. To become a Forex trading player, you will need an online payment gateway and a Forex merchant account. A merchant account is a type of business bank account designed to accept all types of electronic payments. In turn, a payment gateway is a technology that securely processes digital transactions and establishes data transfers between a customer, a merchant, and their banks.',
    },
    {
      question: 'Why not all processors work with Forex merchants?',
      answer: 'Due to the fact that Forex trading involves a variety of currencies, many of which can be volatile and unpredictable, this industry entails many financial risks. That\'s why Forex is considered a high-risk business by most payment providers. However, it\'s still possible for a Forex merchant to get reliable and cost-efficient payment processing services and open a Forex merchant account. There are plenty of Forex payment solutions to choose from.',
    },
    {
      question: 'How to choose a Forex payment gateway?',
      answer: 'Forex belonging to a high-risk industry can make choosing a forex payment gateway a challenge. To choose the best solution, please check whether the payment processor has: Enough payment methods - Offering your clients the widest possible range of online payment and withdrawal methods is the essential step in launching a trading platform. Strong anti-fraud system - To become a reliable and secure Forex broker, make sure your platform meets the latest security standards. Risk management and tracking tools - Forex trading involves plenty of large transactions daily that need to be tracked. Automated aggregation of all business data is essential for your growth.',
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
            Find answers to common questions about Forex payment gateways
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:ring-offset-2 rounded-[20px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 font-heading pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#4730B8] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5">
                  <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

