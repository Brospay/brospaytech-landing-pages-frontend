'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Payouts FAQ section component
 * Accordion-style FAQ for payouts
 */
export function PayoutsFAQ() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the international payout system?',
      answer: "Payouts mean the disbursement of funds from a payer's account to a payee's one. Frequently, there might be several payees or recipients of funds. The international payout system represents a set of tools that provide online businesses with an opportunity to make outgoing electronic transactions to partners, contractors, or clients across the globe.\n\nIt is impossible to run an online business without making payouts. Business owners use this type of transactions to pay out salaries to their employees, freelancers, or suppliers to their accounts globally and initiate other types of outgoing payments to partners, clients, etc.",
    },
    {
      question: 'How can BrosPay assist me in handling global payouts?',
      answer: "The global payout solution by BrosPay is a ready-made tool that allows businesses to send instant singular or mass payouts to any recipient, in any currency, both automatically and manually. Additionally, the platform provides an opportunity to easily control all the incoming and outgoing transactions in a unified dashboard.\n\nOur platform provides online businesses with a range of smart tools to make financial flows in your company smooth and efficient. We empower you to initiate payouts in any currency via multiple methods and monitor the transaction data to analyse it further.",
    },
    {
      question: 'Which countries can I send payouts to with BrosPay?',
      answer: "With BrosPay's extensive provider network, you can send payouts to almost any country worldwide. Coverage depends on the providers you connect, making our payout platform flexible for both regional and global businesses.",
    },
    {
      question: 'How fast can I send payouts with BrosPay?',
      answer: "Payout speed depends on the connected provider, but BrosPay's payout solution enables you to set up automatic routing through the fastest available channels. This helps you offer instant or near-instant payouts, reducing delays and improving customer satisfaction.",
    },
    {
      question: "How do I get started with BrosPay's payout platform?",
      answer: "Getting started with BrosPay's payout platform is simple and doesn't require heavy development work. First, book a call with our team to discuss your payout needs and target regions. Next, we'll help you connect to the right payment providers from our network of 550+ integrations. Once your accounts are linked, you can start sending payouts through our dashboard or automate them via our payouts API.\n\nWith our ready-made infrastructure, you can launch fast and begin managing global mass payouts securely and efficiently.",
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
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Get answers to general and practical questions about payouts, including setup, management, and optimising your processes.
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
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 font-heading pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#4730B8] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed font-body whitespace-pre-line">
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

