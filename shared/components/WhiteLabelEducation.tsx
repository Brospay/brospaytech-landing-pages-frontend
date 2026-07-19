'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Education section component
 * FAQ and educational content about white label solutions
 */
export function WhiteLabelEducation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is a white label payment provider?',
      answer: "A white label payment provider is a ready-made payment processing platform that can be rebranded and customized with your company's branding. It allows you to offer payment services under your own brand without building the technology from scratch.",
    },
    {
      question: 'How it works?',
      answer: "White label payment provider releases you from developing payment software, purchasing hardware security modules, building server infrastructure, integrating banks and processors, and continuously maintaining your software. With a white label provider, all technical aspects are handled for you to start managing your payment business right away.",
    },
    {
      question: 'Why choose a white label PSP software?',
      answer: "Speed: Get all technology in less than a month vs 3+ years for custom development. Costs: Avoid development, licensing, compliance, and equipment expenses. Sophistication: Access 500+ payment methods, currencies, and features immediately without integration efforts.",
    },
    {
      question: 'Who can benefit the most from partnering with a white label payment service provider?',
      answer: "Both established payment service providers and newcomers can benefit. Existing PSPs can enhance their offering with new features and geographies. New market entrants can start offering PSP solutions almost immediately, skipping lengthy licensing and development processes.",
    },
    {
      question: 'How scalable are white label provider solutions for growing payment service providers?',
      answer: "White label provider solutions are designed to grow with your business. With BrosPay's platform, PSPs can easily handle increasing transaction volumes, add new payment methods or providers, and expand into global markets without costly redevelopments.",
    },
    {
      question: "What makes BrosPay's white label PSP proposition stand out from other PSP solutions?",
      answer: "BrosPay's white label PSP combines the speed of a ready-made solution with the flexibility typically reserved for custom-built platforms. You get a fully functional PSP infrastructure including a branded merchant portal, access to 550+ payment providers and methods, routing and cascading tools, and compliance features.",
    },
  ]

  const integrationSteps = [
    {
      step: 1,
      title: 'Integration with a solution provider',
      description: "We start by creating an organisation for our client on the platform. They receive access to Dashboard, a starting point for managing all operations.",
    },
    {
      step: 2,
      title: 'Set up a merchant portal',
      description: "We roll out a merchant portal on your domain and under your brand. It's where your merchants can manage transactions, monitor activity, and view balances.",
    },
    {
      step: 3,
      title: 'Brand a payment page',
      description: "We offer customisable payment pages, applying clients' brands to them. Optionally, a company can use its own designs.",
    },
    {
      step: 4,
      title: 'Get documentation',
      description: "Branded detailed documentation and full API references are available for your merchants to explore the platform's capabilities.",
    },
    {
      step: 5,
      title: 'Start onboarding your merchants',
      description: "That's it! As the owner, you're free to open merchant accounts on the platform and onboard your clients using your Dashboard.",
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-8 leading-[3.05563rem] tracking-[-0.075rem] font-body text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 font-heading pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#4730B8] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed font-body">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading text-center">
            How To Get Started With A White Label Payment Provider?
          </h3>
          <p className="text-gray-600 mb-8 text-center font-body">
            You should take into account that there are some business-related preparations before integrating a white label payment provider. After all preparations, you can start integrating BrosPay's solution.
          </p>
          <div className="space-y-4">
            {integrationSteps.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold font-heading">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 font-heading">{item.title}</h4>
                  <p className="text-gray-600 text-sm font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

