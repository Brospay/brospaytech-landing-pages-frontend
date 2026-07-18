'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dating What ValoraPay Offers section
 */
export function DatingWhatValoraPayOffers() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: '550+ ready-made integrations',
      description: 'Get instant access to 550+ ready-made integrations with payment providers and acquirers; you don\'t have to build complex connections yourself.',
    },
    {
      title: 'Easy merchant account setup',
      description: 'If you already have merchant accounts, simply enter your credentials in our Dashboard and start accepting payments. No merchant accounts yet? We can help you get them through our PayAtlas.',
    },
    {
      title: 'Broad payment coverage',
      description: 'Whether your members are paying from across town or the globe, our broad payment coverage means you can accept their preferred methods without extra development hassle.',
    },
    {
      title: 'Secure checkout',
      description: 'Using our infrastructure, you provide your clients with a secure checkout that helps process payments quickly, safely, and with fewer declines — all while building the trust that keeps them coming back.',
    },
    {
      title: 'Customisable analytics',
      description: 'Our customisable analytics and reporting tools help you see exactly what\'s working, spot issues early, and fine-tune your strategy.',
    },
    {
      title: 'High-risk payment expertise',
      description: 'We specialize in handling high-risk payments and payouts efficiently, with experience in managing chargebacks, fraud prevention, and compliance requirements.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What does ValoraPay offer to online dating merchants?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Running an online dating platform comes with its fair share of payment headaches, including juggling multiple providers, fighting chargebacks, and keeping global users happy. That's where ValoraPay steps in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

