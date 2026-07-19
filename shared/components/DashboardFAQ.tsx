'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dashboard FAQ section component
 * FAQ questions about dashboard
 */
export function DashboardFAQ() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is a payment dashboard?',
      answer: `The payment dashboard is a feature-packed interface to operate payment and payout workflows provided to a business customer by their payment platform. It is designed to enable convenient access to management, monitoring, analytical, and reporting tools. It also allows viewing and configuring your account settings and connecting available integrations.

How it works?

Being interfaces, or web applications, payment dashboards epitomise a single access point to all the payment processes for your team.

At BrosPay, we create and set up an account for our customer's organisation as part of the onboarding process. We provide all the information, tutorials, and assistance as customers and their team start using it. Then, they can view and use their dashboard autonomously and request help from a dedicated Account Manager assigned to them by BrosPay. The solution gets automatically updated by us, so you don't need to involve developers in maintaining it.`,
    },
    {
      question: 'Why use a payment dashboard?',
      answer: `A payment gateway dashboard is a handy tool for all things payments. The key benefits of such a solution are multipurposeness, transparency, accountability, and security.

What's it for?

• Improved daily workflow - Turn previously resource-draining operational processes into actions you can complete automatically or in a few clicks, be it payment invoices creation, receipts generation, or refunds making.

• Configuring your account - Rich settings allow you to tailor the dashboard to your specific business needs easily. You can connect and disconnect ready-made providers and acquirers integrations by clicking a mouse, without developers' help.

• Transaction data collection and visualisation - Information on every transaction is available for you to view in real time. With this data, you can create useful and beautiful charts or smart objects to make it easily digestible.

• Reporting and analytics - Your team members can say goodbye to working hours on reports and handpicking relevant data. With BrosPay, you can generate reports with almost any information set for any period of time.`,
    },
    {
      question: 'How to benefit from access to real-time data?',
      answer: `One of the low-key but valuable payment processing dashboard's advantage is that it allows viewing and monitoring your payment flow in real-time mode. By clicking on any payment invoice or payout request, you can see its current status, available customer details (masked if sensitive), operational info about payment flow and method involved, etc.

Proactive monitoring allows you to evaluate your performance and take data into account to improve it. It's an excellent resource for growth.

Additionally, you can opt-in for notifications of reaching crucial figures. It helps to take action faster if something goes wrong. Just look for the Alerts button in the settings.`,
    },
    {
      question: 'How Reports & Analytics simplify daily business operations?',
      answer: `Another powerful payment dashboard features are reporting and analytics capabilities. Having all your transactional data from various sources gathered in one place is a perk itself, but the chance to turn it into actionable insights is much more valuable.

What has been a challenging, tedious and time-consuming task is now a piece of cake. BrosPay enables the automatic creation of out-of-the-box reports (transactional, balance, turnover, income, conversion, and many others), as well as custom ones based on specific parameters: requisites, customers, storefronts, accounts, currencies, amounts, payment and payout methods, etc.

Moreover, all the data in the payment processing dashboard can be visualised into graphs, charts, and smart objects for convenience and presentation purposes.

We've also integrated an SQL environment into our dashboard to enable advanced search and give you more opportunities to solve your business tasks.

Different export options make it easy to get a .csv or .xls file for use outside the platform.`,
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
            Explore answers to common questions about using and understanding your Dashboard, from daily operations to broader platform features.
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

