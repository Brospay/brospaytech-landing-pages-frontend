'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Reconciliations FAQ section component
 * FAQ questions about reconciliations
 */
export function ReconciliationsFAQ() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is payment reconciliations?',
      answer: `Reconciliations represent a process of payment data synchronisation. Inner transactional data of a business account is compared with vendors' statements to make sure all expected payments or/and payouts have been actually finalised (i.e. successfully processed).

The overarching aim of this procedure is to define the cash position and help both sides spot discrepancies or make sure all data in certain accounts coincide.

To better understand the concept of reconciliation, imagine two ledgers or datasets. One of these comprises all transaction details from your account, another — details about payments on the provider's side. After initiating payments and receiving payouts during a specific time period, it's important to reconcile the balances.`,
    },
    {
      question: 'Discrepancies in reconciliations: what is to be done?',
      answer: `Reconciling your account statements, you might stumble upon certain balance mismatches. Such discrepancies can take place in several cases:

• A certain amount of money transfers or checks you've issued have not been processed yet
• A deposit in transit — your internal outflow is processed, but your bank is still on it

Advanced payment reconciliation solutions help businesses detect and resolve these mismatches faster, reducing the risk of errors and delays. Monitoring your internal financial processes allows you to keep your balances healthy and provides for more informed company-wide strategic decisions.`,
    },
    {
      question: 'What are the advantages and disadvantages of reconciliations?',
      answer: `Pros:
• Reduces unnecessary manual work
• Allows to keep further accounting mistakes at bay
• Eliminates the human-factor error
• Helps pinpoint fraudulent transactions
• Helps to plan further spendings and investments
• Allows to diagnose the relationship between incoming and outgoing payment flows
• Helps to define the processes that need your specific attention

Cons:
• It implies specific issues when done manually (human-factor errors might take place)
• Results may have missing transactions (can happen if a transaction was modified during the process)
• Uncleared checks or mismatches (might be caused by various reasons on your bank's or provider's side)`,
    },
    {
      question: 'What types and methods of reconciliation are there?',
      answer: `Reconciliations are generally divided into two categories — manual and automatic. Both types are widely used but are intended for different types and sizes of organisations. The bigger the organisation is, the better it is to opt for automated payment reconciliation instead of the manual one.

They also define the following types of financial reconciliations:
• Vendor reconciliation
• Bank reconciliation
• Customer reconciliations
• Internal company or business-specific reconciliation`,
    },
    {
      question: 'Why is it important to reconcile accounts?',
      answer: `The essential point of payment processing reconciliation is the ability to face facts. It allows you to see if all the expected transactions recorded on your side were actually processed and finalised.

In case there are some pending transactions or some errors happened, payment reconciliation tool enables you to see it on time and take reasonable actions. Pinpointing weak points and spotting collisions in your records allows for proper control of your payments flows.

Reconciliations are suitable for various purposes depending on your business needs, including invoice reconciliation, fee reconciliation, and merchant reconciliation.`,
    },
    {
      question: "How can BrosPay's payment reconciliation platform help me?",
      answer: `Our platform is fully equipped to automatically tackle instant reconciliations for several accounts (including various methods and currencies). You can also import providers' statements in bulk and execute manual analysis of your accounts statements.

Tackling reconciliations with BrosPay, you avoid unnecessary manual work. The essential points on behalf of payment reconciliation services are reliability and time-efficiency. It helps you match the data from your accounts with that from the providers' side quicker, leaving you more spare time to be spent on strategic analysis of the received data.`,
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
            Find guidance on everything related to reconciliations — how they work, best practices, and ways to keep your financial records accurate and transparent.
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

