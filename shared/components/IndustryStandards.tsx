'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Industry Standards section component
 * Shows compliance badges and certifications
 */
export function IndustryStandards() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const standards = [
    {
      title: 'PCI DSS Level 1',
      description: 'Having successfully passed the independent audit and assessment, we received the certificate of PCI DSS version 3.2.1 compliance.',
      icon: '🔒',
    },
    {
      title: 'VISA TPA',
      description: "We're a part of Visa Third Party Agent (TPA) program.",
      icon: '💳',
    },
    {
      title: 'Mastercard MRP',
      description: "We're a part of Mastercard Registration Program (MRP).",
      icon: '💳',
    },
    {
      title: 'GDPR',
      description: 'We strictly adhere to the data protection principles of the General Data Protection Regulation (GDPR).',
      icon: '🇪🇺',
    },
    {
      title: 'AWS',
      description: 'Our payment platform runs entirely on Amazon Web Services (AWS), a secure cloud services platform.',
      icon: '☁️',
    },
    {
      title: 'Cloudflare',
      description: 'Cloudflare helps us mitigate DDoS attacks of all forms and sizes and enhances the security of our platform.',
      icon: '🛡️',
    },
    {
      title: 'Google Pay',
      description: "ValoraPay is Google Pay's certified participating processor.",
      icon: '🅖',
    },
    {
      title: 'Apple Pay',
      description: "We've implemented the Apple Pay token decrypt service.",
      icon: '',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Conforms To Industry Standards
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            Understanding that security is one of the key requirements when it comes to online payments, we always seek to comply with the latest industry standards and adopt the most advanced security practices.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#4730B8] flex items-center justify-center text-xl mb-4">
                {standard.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">{standard.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

