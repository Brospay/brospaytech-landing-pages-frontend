'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * White Label Gateway Education section component
 * FAQ and educational content about white label payment gateway
 */
export function WhiteLabelGatewayEducation() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const faqs = [
    {
      question: 'What is a white label payment gateway?',
      answer: 'White label payment gateway is a ready-made solution that allows businesses or brands to start processing payments under their own brand using the third-party technical infrastructure. To put it simply, a brand just purchases a ready-made payment gateway and puts its own logo on it to start processing payments right away.',
    },
    {
      question: 'Who can benefit from a white label payment gateway?',
      answer: 'Any business considering offering digital payments processing should investigate what opportunities a white label gateway system presents. White label payment gateways are an end-to-end solution specifically designed for merchants, software providers, financial institutions, resellers, and other businesses looking to facilitate online payments.',
    },
    {
      question: 'Why use a white label payment gateway?',
      answer: 'White label payment gateway software is easier to implement and allows business owners to save resources. It helps businesses decrease the time to market and start offering services right away after a single integration. You\'ll have ready-made integrations to connect and offer to your merchants at the very start, and compliance with standards like PCI DSS is handled by the service provider.',
    },
    {
      question: 'What\'s the difference between a white label payment gateway and a white label payment processor?',
      answer: 'A white label payment gateway gives you the infrastructure to route and manage online transactions under your brand, while a white label payment processor actually handles the transaction processing itself. Many businesses choose a merchant white-label payment solution that combines both, giving them end-to-end control over payments without building technology from scratch.',
    },
    {
      question: 'Can I offer white label merchant services to my clients through this solution?',
      answer: 'Yes. With our white label payment gateway, you can provide full white label merchant services, including payment acceptance, routing, reporting, and risk management. This allows you to expand your portfolio, add value for your clients, and generate a new revenue stream without taking on the heavy lifting of compliance and infrastructure management.',
    },
    {
      question: 'Does the solution include a merchant portal for white label merchant management?',
      answer: 'Yes. Our white label payment gateway comes with a customizable merchant portal that empowers you to deliver a complete merchant white-label payment solution. Through the portal, your clients can easily track transactions, manage payouts, view detailed analytics, and configure settings — all under your brand.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Payment Gateways Explained
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Every business is unique, but many have something in common. We collected the essentials on what companies of different types, sizes, and industries should look for in a payment gateway.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

