'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * ISO/MSP Education/FAQ section
 */
export function IsoMspEducation() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const faqs = [
    {
      question: 'Why build a custom payment gateway?',
      answer: 'Before you decide to create your own payment gateway, estimate the resources you have. First, realise that to develop a payment gateway from scratch, you\'ll need plenty of time – at least two years. Before you start accepting digital payments via your payment gateway solution, you will have to thoroughly research legal and compliance issues. It is necessary to comply with a range of standards and regulations to offer secure payment services to clients. Your next step will probably be hiring a team of developers and marketing specialists and building a strategy. Only after a bulk of operational tasks, you\'ll be able to get to the next level – integrate payment providers to offer different payment options to customers.',
    },
    {
      question: 'Who needs custom payment gateway software development?',
      answer: 'This estimation described above will help you to decide whether you\'d opt for developing your own payment gateway or relying on an existing payment gateway with a white label business model. A white label custom gateway is the best option for those who don\'t want to lose time on legal, development, and operational tasks. Owning a custom payment gateway is a great way to enhance the offering and income for payment service providers, merchants, banks, acquirers, ISOs and MSPs.',
    },
    {
      question: 'How much does it cost to build a payment gateway?',
      answer: 'Building your own payment gateway includes developing software, obtaining licenses, passing compliance audits, hiring staff, and establishing connections with third parties. Each step of the procedure requires financial inputs, not to mention time. To develop a payment gateway will cost you thousands of dollars, but it\'s difficult to estimate a specific sum, for this project also implies lifelong costs for product maintenance and salaries for the specialists who create and support it. Moreover, it\'s vital to lay in the cost possible mistakes at each stage of development.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl font-body"
          >
            Ready to boost your business to the next level?
            <svg
              className="w-5 h-5"
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
    </section>
  )
}

