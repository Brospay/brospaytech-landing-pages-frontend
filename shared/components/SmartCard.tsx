'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Smart Card Features section component matching Figma design
 * Features:
 * - Payment methods list with toggle switches on left
 * - Content on right with heading, description
 * - Smooth fade-in animations
 */
interface SmartCardProps {
  showPaymentDetails?: boolean
}

export function SmartCard({ showPaymentDetails = false }: SmartCardProps = {}) {
  const [enabledProviders, setEnabledProviders] = useState<string[]>(['Discover', 'Stripe', 'Mastercard', 'Neteller', 'Visa', 'PayPal', 'Apple Pay'])
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const paymentProviders = [
    { name: 'Discover', icon: '/assets/landing_page/global_coverage/discover.svg' },
    { name: 'Stripe', icon: '/assets/landing_page/global_coverage/stripe.svg' },
    { name: 'Mastercard', icon: '/assets/landing_page/global_coverage/mastercard.svg' },
    { name: 'Neteller', icon: '/assets/landing_page/global_coverage/neteller.svg' },
    { name: 'Visa', icon: '/assets/landing_page/global_coverage/visa.svg' },
    { name: 'PayPal', icon: '/assets/landing_page/global_coverage/paypal.svg' },
    { name: 'Apple Pay', icon: '/assets/landing_page/global_coverage/apple.svg' },
    { name: 'Samsung Pay', icon: '/assets/landing_page/global_coverage/samsung.svg' },
    { name: 'Skrill', icon: '/assets/landing_page/global_coverage/skrill.svg' },
    { name: 'Adyen', icon: '/assets/landing_page/global_coverage/adyen.svg' },
  ]

  const toggleProvider = (name: string) => {
    setEnabledProviders(prev =>
      prev.includes(name)
        ? prev.filter(p => p !== name)
        : [...prev, name]
    )
  }

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Payment Providers List */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl p-6 overflow-hidden bg-light-gray">
              <div 
                className="scroll-container scroll-container-height"
              >
                {/* Duplicate list for seamless infinite scroll */}
                <div className="scroll-content space-y-2">
                  {[...paymentProviders, ...paymentProviders].map((provider, index) => {
                    const isEnabled = enabledProviders.includes(provider.name)
                    return (
                      <div
                        key={`${provider.name}-${index}`}
                        className="flex items-center gap-4 p-3 bg-white rounded-lg transition-colors"
                      >
                        {/* Icon */}
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={provider.icon}
                            alt={provider.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Name */}
                        <div className="flex-1">
                          <span className="text-[18px] text-gray-900 font-medium font-body">{provider.name}</span>
                        </div>
                        
                        {/* Toggle Switch */}
                        <button
                          onClick={() => toggleProvider(provider.name)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                            isEnabled ? 'bg-primary-gradient' : 'bg-gray-200'
                          }`}
                          role="switch"
                          aria-checked={isEnabled}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              isEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Connect Payments
            </h2>
            <p className="text-[18px] text-gray-600 mb-6 leading-relaxed font-body">
              Versatility is not just a word to us. We are constantly striving to enhance our offering and make every payment tool you might think of available and ready for you to use.
            </p>
            
            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 fill-primary" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  Dozens of ready-to-use payment provider integrations.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 fill-primary" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  Real-time transaction monitoring and analytics.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 fill-primary" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  Seamless API integration with comprehensive documentation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 fill-primary" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  Advanced fraud prevention and security features.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 fill-primary" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                  Multi-currency support with automatic conversion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Column Grid - Only show on payments page, below the main content */}
        {showPaymentDetails && (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Any payment provider */}
            <div>
              <div className="flex items-center gap-2 mb-4 relative">
                <h3 className="text-lg font-bold text-gray-900 font-heading">Any payment provider</h3>
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveTooltip('provider')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === 'provider' && (
                    <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        Reap the benefits of having hundreds of payment providers ready for you to connect to in a few clicks through ValoraPay's Provider hub.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {['Payment gateways', 'Payment aggregators', 'Payment facilitators', 'Credit card acquirers'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[18px] text-gray-700 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Any payment method */}
            <div>
              <div className="flex items-center gap-2 mb-4 relative">
                <h3 className="text-lg font-bold text-gray-900 font-heading">Any payment method</h3>
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveTooltip('method')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === 'method' && (
                    <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        Support for every possible payment method comes out of the box when you work with ValoraPay.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {['Credit cards', 'Bank transfers', 'Digital wallets', 'Cryptocurrencies', 'Mobile carriers', 'Utility bills', 'Local payment options'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[18px] text-gray-700 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Any payment flow */}
            <div>
              <div className="flex items-center gap-2 mb-4 relative">
                <h3 className="text-lg font-bold text-gray-900 font-heading">Any payment flow</h3>
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveTooltip('flow')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === 'flow' && (
                    <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        Our online payment solution is scalable and flexible enough to suit any business model, type and size.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  { name: 'Instant charge', hasInfo: true, tooltip: "Receive online payments from your customers instantly, with them making just a few clicks." },
                  { name: 'Delayed charge', hasInfo: true, tooltip: "Block the necessary amount on the customer's balance before charging." },
                  { name: 'Recurring payments', hasInfo: true, isBlue: true, tooltip: "Tokenisation allows you to automatically charge your customer the due amount on a regular basis." },
                  { name: 'OCT (Original Credit Transaction)', hasInfo: true, tooltip: "Make fast and secure push payments online directly to your customers' Visa and Mastercard." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center gap-1 flex-1 relative">
                      <span className={`text-[18px] font-body ${item.isBlue ? 'text-[#4730B8]' : 'text-gray-700'}`}>{item.name}</span>
                      {item.hasInfo && (
                        <div 
                          className="relative"
                          onMouseEnter={() => setActiveTooltip(`flow-${index}`)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <svg className="w-4 h-4 text-gray-500 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {activeTooltip === `flow-${index}` && (
                            <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                              <p className="text-sm text-gray-900 font-body">
                                {item.tooltip}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Any fiat & crypto currency */}
            <div>
              <div className="flex items-center gap-2 mb-4 relative">
                <h3 className="text-lg font-bold text-gray-900 font-heading">Any fiat & crypto currency</h3>
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveTooltip('currency')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {activeTooltip === 'currency' && (
                    <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-900 font-body">
                        We support processing payments in literally any currency of the world, as well as in crypto. Just connect with the right providers.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {['USD', 'EUR', 'GBP', 'BTC', 'LTC', '200+ currencies'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[18px] text-gray-700 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

