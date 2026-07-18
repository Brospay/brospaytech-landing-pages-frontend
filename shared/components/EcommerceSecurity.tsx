'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Security section component
 * Shows security features: Smart 3DS routing, Third-party risk scoring, Blocking rule engine, Smart blocklisting, Card vault & Tokenisation
 */
export function EcommerceSecurity() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const securityFeatures = [
    {
      title: 'Smart 3DS routing',
      description: 'Enable or disable 3DS when needed, or apply it selectively for transactions filtered by relevant parameters.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Third-party risk scoring',
      description: 'Connect your trusted antifraud and risk scoring systems, like Sift, MaxMind or Ravelin, for an extra layer of protection.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Blocking rule engine',
      description: 'Automatically cut off suspicious or undesirable traffic using blocking schemes with configurable dynamic rules.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: 'Smart blocklisting',
      description: 'After several failed attempts to complete a transaction, a payer can be added to the blocklist automatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: 'Card vault & Tokenisation',
      description: 'Enjoy safe transactions and tokenised data without additional fees. Our tokenisation technology allows accepting card payments whether you\'re PCI compliant or not, keeping your customers\' data secure.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Encryption & Data Protection',
      description: 'Advanced encryption protocols ensure all sensitive payment data is protected with industry-standard security measures and compliance with global data protection regulations.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]


  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-24 sm:py-32 lg:py-40 xl:py-48 relative overflow-hidden min-h-[600px] lg:min-h-[800px] rounded-[20px]">
      {/* Background Image - Same as GlobalAccess */}
      <div 
        className="absolute inset-0 global-access-bg rounded-[20px]"
        style={{ 
          willChange: 'auto', 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
      </div>

      {/* Content with fade-in animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Protect Your Customers' Data
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto font-body">
            Gain additional security layer and combat specific fraud issues and risks more effectively using our ready-made antifraud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-[10px] bg-white/20 flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

