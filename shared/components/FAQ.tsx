'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * FAQ section component matching platform aesthetics
 * Features:
 * - Accordion-style expandable questions
 * - Smooth animations
 * - Platform-consistent styling
 * - Smooth fade-in animations
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const faqs = [
    {
      question: 'What is ValoraPay payment orchestration platform?',
      answer: 'ValoraPay is a universal feature-rich payment hub for online businesses and payment institutions. We integrate payment providers and acquirers all around the world to bring a unified communication, control, and management interface. Our platform helps businesses streamline payment processing, reduce integration complexity, and improve transaction success rates.',
    },
    {
      question: 'How do I get started with ValoraPay?',
      answer: 'Getting started is simple. Sign up for an account, complete the onboarding process, and connect your payment providers. Our team will guide you through the integration process, and you\'ll have access to comprehensive documentation and API references. You can also test in our sandbox environment before going live.',
    },
    {
      question: 'Which payment providers are supported?',
      answer: 'We support 1200+ payment providers in our network, including major processors like Stripe, PayPal, Adyen, and many regional providers. Our platform offers 500+ ready-made integrations, so you can connect with providers worldwide without additional development work.',
    },
    {
      question: 'What payment methods can I accept?',
      answer: 'With ValoraPay, you can accept various payment methods including credit and debit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay, Samsung Pay), bank transfers, local payment methods, and cryptocurrencies. Our platform supports 200+ currencies and cryptos, giving you global payment acceptance.',
    },
    {
      question: 'How does routing and cascading work?',
      answer: 'Our intelligent routing system automatically directs transactions to the best-performing payment provider based on success rates, costs, and region. Cascading allows failed transactions to automatically retry with alternative providers, maximizing your approval rates and ensuring smooth payment processing.',
    },
    {
      question: 'Is ValoraPay secure and compliant?',
      answer: 'Yes, security and compliance are our top priorities. We are PCI DSS Level 1 certified and comply with GDPR, PSD2, and other regional regulations. All transactions are encrypted, and we provide advanced fraud prevention tools, 3D Secure support, and comprehensive risk management features to protect your business and customers.',
    },
    {
      question: 'What kind of analytics and reporting do you provide?',
      answer: 'ValoraPay offers real-time transaction monitoring and comprehensive analytics dashboards. Track transaction success rates, revenue, refunds, chargebacks, and provider performance. Generate detailed reports, reconcile payments automatically, and gain insights into your payment operations to optimize performance and reduce costs.',
    },
    {
      question: 'Can I use ValoraPay for white-label solutions?',
      answer: 'Absolutely. ValoraPay offers white-label payment provider solutions that allow you to brand the platform as your own. Perfect for payment institutions, PSPs, and businesses that want to offer payment services under their brand. We provide full customization options and dedicated support for white-label implementations.',
    },
    {
      question: 'What support options are available?',
      answer: 'We provide comprehensive support through multiple channels including 24/7 technical support, dedicated account managers for enterprise clients, detailed documentation, API references, and an active developer community. Our support team is available via email, chat, and phone to assist with any questions or issues.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is flexible and scales with your business. We offer transparent transaction-based pricing with no hidden fees. Contact our sales team for a customized quote based on your transaction volume, required features, and business needs. We also provide an ROI calculator to help you estimate potential savings.',
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
            Find answers to common questions about our payment orchestration platform
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

