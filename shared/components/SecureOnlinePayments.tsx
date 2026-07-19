'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Secure Online Payments section component
 * Educational content about payment security
 */
export function SecureOnlinePayments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const securityStandards = [
    {
      title: 'PCI DSS',
      description: 'Our platform complies with the strictest security standard — PCI DSS Level 1. The annual onsite audit ensures the highest levels of compliance are maintained. It also allows us to relieve the PCI burden from our customers and deal with the banks on their behalf.',
    },
    {
      title: 'VISA TPA & MRP',
      description: 'Being registered in Mastercard Registration Program and as VISA Third Party Agent, we provide our clients with an additional safety layer.',
    },
    {
      title: 'ISO 9001, 27001',
      description: 'BrosPay has both ISO 9001 and ISO 27001 standards. ISO 9001 specifies the requirements for Quality Management System. ISO/IEC 27001:2013 certification covers Application, Systems, People, Technology, and Processes.',
    },
    {
      title: 'PSD2',
      description: 'We support PSD2 - the Payment Services Directive that enables third-party providers to manage bank customers\' finances with their direct permission and through enhanced authentication.',
    },
    {
      title: 'GDPR',
      description: 'GDPR is aimed to protect the personal data and privacy of European Union citizens. The regulation ensures that clients\' identity details are collected only when they have given explicit and reasonable consent.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Secure Online Payments
          </h2>
          <p className="text-[18px] text-gray-300 leading-relaxed font-body">
            Security of online payments is a significant concern not only for cardholders. Banks, payment service providers, platforms, and merchants are also interested in the security of the payment process.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 font-heading">How It Works?</h3>
          <p className="text-gray-300 leading-relaxed font-body">
            Security of payment data underlies every solution of our platform. BrosPay complies with the highest standards through rigorous security checks, safe data storage, staff control, and compliance with all the available regulations. We take the matter of security seriously to ensure the maximum data safety and reliability of the platform.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 font-body">
            The new technologies are always on our radars: we assess risks and perform independent audits to ensure stability, reliability, and safety throughout the platform.
          </p>
        </div>

        {/* Security Standards */}
        <div className="space-y-4">
          {securityStandards.map((standard, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2 font-heading">{standard.title}</h3>
              <p className="text-gray-400 font-body">{standard.description}</p>
            </div>
          ))}
        </div>

        {/* Secure Payment Methods */}
        <div className="bg-[#4730B8] rounded-2xl p-8 mt-8">
          <h3 className="text-xl font-bold text-white mb-4 font-heading">Secure Payment Methods</h3>
          <p className="text-white/90 leading-relaxed font-body">
            Our payment orchestration platform uses 3D Secure technologies (both 1 and 2). This helps to verify a cardholder's identity in real-time and make each transaction secure. After entering the card number, its owner is redirected to the issuing bank server. Usually, after that banks send an SMS with a secret code to be used as a confirmation. When the received code is entered, the cardholder's identity is confirmed and the transaction is authorised.
          </p>
        </div>
      </div>
    </section>
  )
}

