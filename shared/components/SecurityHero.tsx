'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Security Hero section component
 * Features card encryption visualization
 */
export function SecurityHero() {
  const heroContent = useFadeIn({ threshold: 0.1, delay: 100 })
  const heroImage = useFadeIn({ threshold: 0.1, delay: 300 })

  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'We adhere to the PCI Data Security Standard for Service Providers.',
    },
    {
      title: 'Web Application Security',
      description: 'We follow the industry-standard secure coding guidelines.',
    },
    {
      title: 'Physical & Network Security',
      description: 'Data is hosted in dedicated facilities with 24x7 security.',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={heroContent.ref as React.RefObject<HTMLDivElement>} style={heroContent.style} className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-left">
              High Security Standards
            </h1>
            <p className="text-[18px] text-white/90 mb-8 max-w-xl leading-relaxed font-body text-left">
              <strong>We take security extremely seriously.</strong> Through rigorous security checks, safe data storage, employee screenings and compliance with every available regulation, we ensure the safety, stability and reliability of our payment platform. We always seek new technology, process, and risk assessment and independent testing to keep on improving.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#download"
                className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl tap-target flex items-center gap-3 group font-body"
              >
                Download presentation
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Card Encryption Visualization */}
          <div ref={heroImage.ref as React.RefObject<HTMLDivElement>} style={heroImage.style} className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Hidden Card */}
              <div className="absolute top-0 left-0 w-64 h-40 bg-gray-800 rounded-xl p-4 transform -rotate-6 opacity-50">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-2 bg-gray-600 rounded w-8"></div>
                    <div className="h-2 bg-gray-600 rounded w-8"></div>
                    <div className="h-2 bg-gray-600 rounded w-8"></div>
                    <div className="h-2 bg-gray-600 rounded w-8"></div>
                  </div>
                </div>
              </div>

              {/* Visible Card */}
              <div className="relative w-64 h-40 bg-gradient-to-br from-[#4730B8] to-[#6B4DE6] rounded-xl p-4 ml-16 mt-8 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-8 bg-yellow-400 rounded"></div>
                  <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-white/80 text-sm font-mono mb-2">•••• •••• •••• 4242</div>
                <div className="flex justify-between text-white/60 text-xs">
                  <span>SECURE CARD</span>
                  <span>12/28</span>
                </div>
              </div>

              {/* Security Features */}
              <div className="mt-8 space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="w-8 h-8 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm font-heading">{feature.title}</h3>
                      <p className="text-white/70 text-xs font-body">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

