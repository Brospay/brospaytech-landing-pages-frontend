'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * How It Works section for White Label page
 * Shows merchant-provider-ecosystem flow with enhanced visuals
 */
export function HowItWorksWhiteLabel() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const merchants = [
    { name: 'Merchant 1', icon: '🏪' },
    { name: 'Merchant 2', icon: '🏬' },
    { name: 'Merchant 3', icon: '🏢' },
  ]

  const paymentMethods = [
    { name: 'Mastercard', icon: '/assets/landing_page/global_coverage/mastercard.svg' },
    { name: 'Alipay', icon: '/assets/landing_page/global_coverage/alipay.svg' },
    { name: 'Neteller', icon: '/assets/landing_page/global_coverage/neteller.svg' },
    { name: 'Discover', icon: '/assets/landing_page/global_coverage/discover.svg' },
    { name: 'Visa', icon: '/assets/landing_page/global_coverage/visa.svg' },
    { name: 'Skrill', icon: '/assets/landing_page/global_coverage/skrill.svg' },
    { name: 'SEPA', icon: '/assets/landing_page/global_coverage/sepa.svg' },
    { name: 'PayPal', icon: '/assets/landing_page/global_coverage/paypal.svg' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How It Works
          </h2>
        </div>

        {/* Enhanced Flow Diagram */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16">
          {/* Merchants Section */}
          <div className="flex flex-col gap-4 relative z-10">
            <h3 className="text-center text-gray-700 text-base font-bold mb-4 font-body uppercase tracking-wide">Merchant</h3>
            {merchants.map((merchant, index) => (
              <div
                key={index}
                className="group relative w-36 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-[#4730B8] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">{merchant.icon}</span>
                <span className="text-sm text-gray-800 font-semibold font-body">{merchant.name}</span>
                {/* Decorative dots */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4730B8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Arrow 1 */}
          <div className="hidden lg:flex items-center relative z-10">
            <div className="relative">
              {/* Gradient line */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#4730B8] to-[#6B4DE6] rounded-full relative overflow-hidden">
                {/* Animated pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse-slow"></div>
              </div>
              {/* Arrow head with gradient */}
              <svg className="w-6 h-6 text-[#4730B8] absolute -right-2 top-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5l8 7-8 7V5z" />
              </svg>
              {/* Flow indicators */}
              <div className="absolute -top-2 left-1/4 w-1.5 h-1.5 bg-[#4730B8] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 left-2/4 w-1.5 h-1.5 bg-[#6B4DE6] rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Enhanced Payment Provider (Your PSP) */}
          <div className="flex flex-col items-center relative z-10">
            <h3 className="text-center text-gray-700 text-base font-bold mb-4 font-body uppercase tracking-wide">Payment Provider</h3>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4730B8] to-[#6B4DE6] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              {/* Main card */}
              <div className="relative w-48 h-48 bg-gradient-to-br from-[#4730B8] via-[#5A3FC5] to-[#6B4DE6] rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                
                <div className="text-center px-4">
                  <svg className="w-16 h-16 text-white mx-auto mb-3 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-white font-bold text-lg font-heading block">Your PSP</span>
                  <span className="text-white/80 text-xs font-body mt-1 block">White Label</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Arrow 2 */}
          <div className="hidden lg:flex items-center relative z-10">
            <div className="relative">
              {/* Gradient line */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#4730B8] to-[#6B4DE6] rounded-full relative overflow-hidden">
                {/* Animated pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse-slow"></div>
              </div>
              {/* Arrow head with gradient */}
              <svg className="w-6 h-6 text-[#4730B8] absolute -right-2 top-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5l8 7-8 7V5z" />
              </svg>
              {/* Flow indicators */}
              <div className="absolute -top-2 left-1/4 w-1.5 h-1.5 bg-[#4730B8] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 left-2/4 w-1.5 h-1.5 bg-[#6B4DE6] rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Enhanced Payment Ecosystem */}
          <div className="flex flex-col items-center relative z-10">
            <h3 className="text-center text-gray-700 text-base font-bold mb-4 font-body uppercase tracking-wide">Payment Ecosystem</h3>
            <div className="grid grid-cols-4 gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 shadow-lg">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative w-16 h-16 bg-white rounded-xl shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-[#4730B8] transition-all duration-300 flex items-center justify-center p-2 hover:scale-110"
                >
                  {method.icon ? (
                    <img
                      src={method.icon}
                      alt={method.name}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-[8px] text-gray-600 font-bold text-center font-body">{method.name}</span>
                  )}
                  {/* Hover indicator */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#4730B8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4730B8]/5 via-transparent to-[#6B4DE6]/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed font-body mb-6">
              The time when payment service providers offered only payment capabilities has passed. To stay competitive today, you have to expand your offering with both global and local options, as well as with value-added services catering to merchants' needs.
            </p>
            <p className="text-[#4730B8] font-bold text-xl font-body inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              This is not an easy task, but we have got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  )
}

