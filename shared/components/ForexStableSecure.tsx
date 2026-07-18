'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Stable and Secure Performance section component
 * Shows security features for Forex payment processing
 */
export function ForexStableSecure() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    {
      title: 'Real-time fraud management',
      description: 'Real-time fraud management with firewall filters',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Limits on deposits and withdrawals',
      description: 'Limits on deposits and withdrawals, thresholds management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Smart blocklisting',
      description: 'Smart blocklisting against serial fraudsters',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Identity verification',
      description: 'Identity verification on first deposit and withdrawal request',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      badge: 'SOON',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Stable and Secure Performance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-body">
              Grant your payments with ultimate security. Belonging to the high-risk industry, Forex projects are prone to fraud attacks and have to strictly comply with the regulations.
            </p>
          </div>

          {/* Right - Credit Card Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Credit Card */}
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 shadow-xl">
                {/* VISA Logo */}
                <div className="mb-8">
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">VISA</span>
                  </div>
                </div>

                {/* Card Number */}
                <div className="mb-6">
                  <p className="text-white font-mono text-xl tracking-wider">
                    4066 2167 7629 ****
                  </p>
                </div>

                {/* Card Details */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/80 text-xs mb-1 font-body">CARD HOLDER</p>
                    <p className="text-white font-semibold text-sm font-body">J. GRIFFINS</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-xs mb-1 font-body">GOOD THRU</p>
                    <p className="text-white font-semibold text-sm font-body">04/22</p>
                  </div>
                </div>

                {/* Yellow Shield Icon */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-[#FCD34D] rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-white rounded-[20px] p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              {feature.badge && (
                <div className="absolute -top-2 -right-2 bg-[#FCD34D] text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                  {feature.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-gray-200 pt-8 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-12 logo-slider">
            {/* First set of logos */}
            <img src="/assets/ecommerce_page/google-auth.svg" alt="Google Authenticator" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/comodo_logo.svg" alt="Comodo SSL Certificate" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/google_pay.png" alt="Google Pay" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/apple_pay.svg" alt="Apple Pay" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/visa_logo.svg" alt="VISA" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/mastercard_logo.svg" alt="Mastercard" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/pci_logo.svg" alt="PCI Security Standards Council" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/gdpr_logo.svg" alt="GDPR Compliant" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/aws_logo.svg" alt="Amazon Web Services" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            {/* Duplicate set for seamless loop */}
            <img src="/assets/ecommerce_page/google-auth.svg" alt="Google Authenticator" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/comodo_logo.svg" alt="Comodo SSL Certificate" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/google_pay.png" alt="Google Pay" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/apple_pay.svg" alt="Apple Pay" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/visa_logo.svg" alt="VISA" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/mastercard_logo.svg" alt="Mastercard" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/pci_logo.svg" alt="PCI Security Standards Council" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/gdpr_logo.svg" alt="GDPR Compliant" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/aws_logo.svg" alt="Amazon Web Services" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

