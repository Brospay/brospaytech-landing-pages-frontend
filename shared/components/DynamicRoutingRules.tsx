'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dynamic Routing Rules section component
 * Shows payment conditions and provider routing
 */
export function DynamicRoutingRules() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const routingConditions = [
    { 
      name: 'Card issuer (country, bank, INN/BIN)',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Card type',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Card brand',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Auth mode (CVV/3DS)',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Geolocation',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Store',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Amount',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Currency',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlighted: true,
    },
    { 
      name: 'Date & Time',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlighted: false,
    },
    { 
      name: 'Metadata',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7" />
        </svg>
      ),
      highlighted: false,
    },
  ]

  const providers = [
    { name: 'Mastercard', logo: '/assets/checkout_page/mastercard.svg', highlighted: false },
    { name: 'Visa', logo: '/assets/checkout_page/visa.svg', highlighted: false },
    { name: 'PayPal', logo: '/assets/checkout_page/paypal.svg', highlighted: false },
    { name: 'Skrill', logo: '/assets/checkout_page/skril.svg', highlighted: false },
    { name: 'Stripe', logo: '/assets/landing_page/global_coverage/stripe.svg', highlighted: false },
    { name: 'Alipay', logo: '/assets/checkout_page/alipay.svg', highlighted: false },
    { name: 'Giropay', logo: '/assets/checkout_page/giro.svg', highlighted: true },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image - Same as GlobalAccess */}
      <div 
        className="absolute inset-0 global-access-bg"
        style={{ 
          willChange: 'auto', 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Dynamic Routing Rules
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            All transactions coming through ValoraPay can be instantly analysed and routed to the optimal provider based on a variety of flexible payment routing parameters.
          </p>
        </div>

        {/* Routing Flow Diagram */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden border border-gray-700">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc9bea]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#bc9bea]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 items-center relative z-10">
            {/* Payment Input */}
            <div className="text-center relative z-10">
              <div className="inline-flex flex-col items-center gap-3 mb-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#bc9bea] to-[#bc9bea] flex items-center justify-center shadow-xl border-2 border-[#bc9bea]/50">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">Payment</h3>
            </div>

            {/* Routing Conditions */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-4 font-heading text-center lg:text-left">Routing conditions</h3>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-6 relative border border-gray-600/50">
                {/* Dashed vertical line on left */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#bc9bea]/30 opacity-60"></div>
                {/* Dashed vertical line on right */}
                <div className="absolute right-0 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-[#bc9bea]/30 opacity-60"></div>
                
                <div className="space-y-2 relative">
                  {routingConditions.map((condition, index) => {
                    const isCurrency = condition.name === 'Currency'
                    return (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all relative ${
                          isCurrency 
                            ? 'bg-gradient-to-r from-[#bc9bea] to-[#bc9bea] border-2 border-[#bc9bea]/50 shadow-lg' 
                            : 'hover:bg-gray-600/50 border border-transparent'
                        }`}
                      >
                        <div className={`flex-shrink-0 ${isCurrency ? 'text-white' : 'text-gray-300'}`}>
                          {condition.icon}
                        </div>
                        <span className={`text-sm font-body ${isCurrency ? 'text-white font-semibold' : 'text-gray-300'}`}>
                          {condition.name}
                        </span>
                        {isCurrency && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Provider Output */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <h3 className="text-lg font-bold text-white mb-4 font-heading text-center w-full">Provider</h3>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-6 relative border border-gray-600/50 w-full flex flex-col items-center justify-center">
                {/* Dashed vertical line on left */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#bc9bea]/30 opacity-60 hidden lg:block"></div>
                
                <div className="space-y-2 w-full flex flex-col items-center justify-center">
                  {providers.map((provider, index) => {
                    const isGiropay = provider.name === 'Giropay'
                    return (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 transition-all border-2 relative flex items-center justify-center w-full ${
                          isGiropay 
                            ? 'bg-gradient-to-r from-[#bc9bea] to-[#bc9bea] border-[#bc9bea]/50 shadow-lg' 
                            : 'bg-gray-600/80 hover:bg-gray-500/80 border-transparent hover:border-gray-500/50'
                        }`}
                      >
                        {provider.logo ? (
                          <div className="flex items-center justify-center min-h-[40px] w-full">
                          <img 
                            src={provider.logo} 
                            alt={provider.name} 
                              className="max-w-full h-10 object-contain mx-auto"
                              loading="lazy"
                            onError={(e) => {
                              // Fallback if logo doesn't exist
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                  parent.innerHTML = `<span class="text-sm font-semibold text-white text-center block">${provider.name}</span>`
                              }
                            }}
                          />
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-white text-center block w-full">
                            {provider.name}
                          </span>
                        )}
                        {isGiropay && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Purple Arrow Path - Payment to Conditions */}
            <div className="hidden lg:block absolute left-1/3 top-[calc(50%+140px)] transform -translate-x-1/2 -translate-y-1/2 z-0">
              <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bc9bea" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#bc9bea" stopOpacity="1" />
                  </linearGradient>
                </defs>
                {/* Glow effect */}
                <path d="M5 25 L85 25" stroke="#bc9bea" strokeWidth="6" strokeLinecap="round" opacity="0.2" className="blur-md"/>
                {/* Main arrow */}
                <path d="M5 25 L85 25" stroke="url(#arrowGradient1)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M80 20 L85 25 L80 30" stroke="url(#arrowGradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="url(#arrowGradient1)"/>
                {/* Animated pulse dots */}
                <circle cx="20" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse"/>
                <circle cx="45" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }}/>
                <circle cx="70" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.6s' }}/>
              </svg>
            </div>

            {/* Purple Arrow Path - Conditions to Provider */}
            <div className="hidden lg:block absolute left-2/3 top-[calc(50%+140px)] transform -translate-x-1/2 -translate-y-1/2 z-0">
              <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bc9bea" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#bc9bea" stopOpacity="1" />
                  </linearGradient>
                </defs>
                {/* Glow effect */}
                <path d="M15 25 L95 25" stroke="#bc9bea" strokeWidth="6" strokeLinecap="round" opacity="0.2" className="blur-md"/>
                {/* Main arrow */}
                <path d="M15 25 L95 25" stroke="url(#arrowGradient2)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M90 20 L95 25 L90 30" stroke="url(#arrowGradient2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="url(#arrowGradient2)"/>
                {/* Animated pulse dots */}
                <circle cx="30" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse"/>
                <circle cx="55" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }}/>
                <circle cx="80" cy="25" r="2" fill="#bc9bea" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.6s' }}/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

