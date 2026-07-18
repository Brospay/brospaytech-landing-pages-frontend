'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Infrastructure Reliability section component
 * Shows 6 reliability features with tooltips
 */
export function InfrastructureReliability() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const features = [
    {
      title: 'Hosting Facilities',
      description: 'ValoraPay currently hosts its main systems in separate data centres in Europe and in the United States provided by Amazon Web Services. We administer and manage all our servers and do not outsource any administration to third parties for payment processing.',
    },
    {
      title: '99.95% Uptime',
      description: "ValoraPay's systems have been designed for maximum uptime through a redundant and stateless service-oriented architecture that simultaneously accepts payments on multiple physical hosting locations.",
    },
    {
      title: 'Monitoring',
      description: "Our Internet-facing systems are probed from points all over the world at least every five minutes to assess availability. ValoraPay's entire infrastructure is monitored by a series of internal monitoring platforms that alert our engineers around the clock, 365 days a year.",
    },
    {
      title: 'DDoS Protection',
      description: 'We use technologies from well-established and trustworthy service providers to prevent DDoS attacks on our servers. These technologies offer multiple DDoS mitigation capabilities to prevent disruptions caused by bad traffic.',
    },
    {
      title: 'Latency',
      description: 'Our data centres have strategic location to serve our core geographic regions and to ensure the minimum amount of latency. Wherever we can, we peer as close as possible to strategic Internet Exchanges to further reduce latency.',
    },
    {
      title: 'Processing Speed',
      description: "ValoraPay's standard real-time reporting dashboard provides detailed analytics and insights into your payment processing performance with minimal delay.",
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Infrastructure Reliability
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay's PCI-compliant payment platform runs entirely on AWS, relying on security best practices and auditability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
              onMouseEnter={() => setActiveTooltip(feature.title)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#E8E4FF] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">{feature.title}</h3>
                <svg
                  className="w-4 h-4 text-[#4730B8] cursor-pointer ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              {activeTooltip === feature.title && (
                <div className="absolute left-0 right-0 top-full mt-2 z-50 p-4 bg-gray-900 text-white rounded-lg shadow-lg mx-4">
                  <p className="text-sm font-body">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

