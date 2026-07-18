'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Secure Infrastructure section component
 * Shows AWS, Cloudflare, Comodo, 2FA
 */
export function SecureInfrastructure() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const infrastructurePartners = [
    {
      name: 'Amazon Web Services',
      description: 'Our payment platform runs entirely on Amazon Web Services (AWS), a secure cloud services platform that offers computing power, database storage, and other functionality helping us scale and grow.',
      icon: 'AWS',
    },
    {
      name: 'Cloudflare',
      description: 'Cloudflare helps us mitigate DDoS attacks of all forms and sizes and enhances the security of our platform.',
      icon: 'CF',
    },
    {
      name: 'SSL Certificate',
      description: 'Our website is secured by SSL certificate.',
      icon: '🔐',
    },
    {
      name: 'Two-Factor Authentication',
      description: 'Our users are prompted to authenticate with their password and verification code. The additional layer of security ensures that only authorised ValoraPay users can access their account.',
      icon: '2FA',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Secure Infrastructure
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay meets <strong>the highest standards of security</strong>, <strong>integrity</strong> and <strong>stability</strong>. We understand that you entrust your data to us, and we do everything possible to keep it secure and continuously look for opportunities to improve.
          </p>
        </div>

        {/* Infrastructure Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructurePartners.map((partner, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#4730B8] flex items-center justify-center text-white font-bold text-lg mb-4">
                {partner.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-heading">{partner.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

