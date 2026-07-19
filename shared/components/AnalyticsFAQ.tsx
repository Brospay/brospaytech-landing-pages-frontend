'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Analytics FAQ section component
 * FAQ questions about analytics
 */
export function AnalyticsFAQ() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is payment analytics?',
      answer: `Payment data represents an insightful set of transaction details that help businesses analyse their performance. Regularly monitoring and analysing the data enables merchants to track vital factors and changes in consumers' behaviour and make more educated decisions in further business development.

Our payment platform allows merchants to gain insightful transactional data for customer experience optimisation and fraud management. This software represents a set of smart payment analytics tools that automatically aggregates and unifies all your business data.

Payment analysis software by BrosPay allows you to have all the key payment metrics and historical data spread in front of your eyes, giving you a real-time view of your business performance:
• Transaction statuses
• Merchant account balances
• Chosen payment methods and authorisation rates
• Conversion rates per storefront
• Payment decline reasons
• Storefronts turnover`,
    },
    {
      question: 'How to create reports for financial analytics?',
      answer: `The Reports solution aggregates all the necessary data into insightful records. Our payment analytics solution provides a range of predefined types of reports: choose among out-of-the-box reports with the showings on payment & payout flows, providers, currency conversion, revenue changes, etc.

Or customise any of them according to your specific business needs, adding or removing certain criteria. You can also create a customised report with the particular aspects of your business operations, such as trend analysis, commission income, distribution, etc., using filters.

Benefits of Reports:
• Save lots of resources on creating datasets
• Dedicate your precious time to working with the data
• Choose only the essential indicators
• Schedule report generation and export
• Control your teammates' access to the information`,
    },
    {
      question: 'Why are payment analytics platforms important for growing businesses?',
      answer: `As your payment volume increases, manually tracking data becomes time-consuming and prone to errors. A payment analytics platform automates this process, giving you accurate insights in seconds.

This helps you quickly spot problems, reduce failed transactions, and improve your overall payment performance. With real-time data at your fingertips, you can make informed decisions faster and scale your business more efficiently.`,
    },
    {
      question: 'How to choose the best payment analytics solution for your business?',
      answer: `When comparing payment analytics solutions, look for features like:
• Real-time reporting
• Integration with multiple payment providers
• Flexible report customisation
• Scalability and global coverage

BrosPay combines all these features into one platform, making it a strong choice for businesses operating across different markets and currencies. Our solution adapts to your growing needs while maintaining simplicity and ease of use.`,
    },
    {
      question: 'What kind of data can I analyse in BrosPay?',
      answer: `You can analyse all key payment data, including:
• Transaction volume
• Approval rates
• Fees
• Chargebacks
• Refunds
• Provider performance

This comprehensive view helps you understand your business's health and the effectiveness of your payment strategy. You can drill down into specific metrics or get a high-level overview depending on your needs.`,
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            FAQ
          </h2>
          <p className="text-[18px] text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Learn more about BrosPay's analytics tools, reporting capabilities, and how to leverage data for better decision-making.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-white pr-4 font-heading">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#4730B8] flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line font-body">
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

