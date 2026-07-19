'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Global Financial Access section component matching Figma design
 * Features:
 * - Dark purple/black gradient background
 * - Heading about global financial markets
 * - Tabs with dynamic content: Connect, Process, Optimise, Manage, Market, Develop
 * - Three cards: Currencies, Stocks, Crypto
 * - Smooth fade-in animations
 */
export function GlobalAccess() {
  const [activeTab, setActiveTab] = useState('Connect')
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })

  const tabs = ['Connect', 'Process', 'Optimise', 'Manage', 'Market', 'Develop']
  // Content data for different tabs
  const tabContent = {
    Connect: {
      cards: [
        {
          title: 'Payment providers',
          description: 'Select and connect PSPs in a few clicks',
          type: 'providers',
          providers: [
            { name: 'Alipay', icon: '/assets/landing_page/spotlight/ali-pay.webp' },
            { name: 'Stripe', icon: '/assets/landing_page/spotlight/stripe.webp' },
            { name: 'Neteller', icon: '/assets/landing_page/spotlight/neteller.webp' },
            { name: 'Skrill', icon: '/assets/landing_page/spotlight/skrill.webp' },
            { name: 'PayPal', icon: '/assets/landing_page/spotlight/PayPal.png' },
            { name: 'Visa', icon: '/assets/landing_page/spotlight/visa.png' },
          ],
          engineDescription: 'Carefully equips you with a whole set of intelligent payment processing tools, bringing the maximum performance of your operations.',
        },
        {
          title: 'Payment methods',
          description: 'Choose any option for payment acceptance',
          type: 'methods',
          methods: [
            { name: 'DISCOVER', icon: '/assets/landing_page/spotlight/discover.png' },
            { name: 'Apple Pay', icon: '/assets/landing_page/spotlight/apple.png' },
            { name: 'Bitcoin', icon: '/assets/landing_page/spotlight/Bitcoin.svg.webp' },
            { name: 'VISA', icon: '/assets/landing_page/spotlight/visa.png' },
            { name: 'Google Pay', icon: '/assets/landing_page/spotlight/googlepay.png' },
            { name: 'Ripple', icon: '/assets/landing_page/spotlight/ripple.svg' },
            { name: 'AMERICAN EXPRESS', icon: '/assets/landing_page/spotlight/American_Express-Logo.wine.png' },
            { name: 'Samsung Pay', icon: '/assets/landing_page/spotlight/Samsung_Pay_icon.svg.png' },
            { name: 'Ethereum', icon: '/assets/landing_page/spotlight/Ethereum-Logo.png' },
          ],
        },
        {
          title: 'Payout methods',
          description: 'Make payouts using any tool of your choice',
          type: 'payouts',
          currencies: ['$', '€', '¥'],
        },
        {
          title: 'Security & Compliance',
          description: 'The highest standards of payment security. Our platform implements advanced encryption protocols, PCI DSS compliance, and multi-layer fraud detection systems to ensure every transaction is protected. With real-time monitoring, automated risk assessment, and comprehensive audit trails, you can trust that your payment operations are secure and compliant with global financial regulations.',
          type: 'security',
        },
      ],
    },
    Process: {
      cards: [
        {
          title: 'Payments',
          description: 'Gain full control of all your transactions',
          type: 'payments',
        },
        {
          title: 'Checkout',
          description: 'Ready-made solution for higher conversion',
          type: 'checkout',
        },
        {
          title: 'Payouts',
          description: 'Handle payouts automatically and manually',
          type: 'payouts',
        },
        {
          title: 'Batch payouts',
          description: 'Streamline your payment operations with our powerful batch payout solution. Process thousands of payments simultaneously with a single CSV upload, reducing manual work and minimizing errors. Our intelligent system automatically validates recipient data, handles currency conversions, and ensures secure transfers to multiple payment methods. Whether you need to pay vendors, freelancers, or partners, batch payouts save you time and resources while maintaining the highest standards of accuracy and compliance.',
          type: 'batch-payouts',
        },
      ],
    },
    Optimise: {
      cards: [
        {
          title: 'Routing & Cascading',
          description: 'Embrace digitalisation to the fullest extent',
          type: 'routing',
          providers: [
            { name: 'Mastercard', active: true },
            { name: 'paysafecard', active: false },
            { name: 'Neteller', active: false },
          ],
        },
        {
          title: 'Currency conversion',
          description: 'Save on fees and earn on fluctuations',
          type: 'currency',
          rates: {
            from: 'EUR',
            to: 'USD',
            rate1: '1 EUR = 1.12 USD',
            rate2: '1 USD = 0.89 EUR',
          },
        },
        {
          title: 'Reconciliations',
          description: 'Reconcile without efforts',
          type: 'reconciliations',
          transactions: [
            { amount: '$240.59', matched: true },
            { amount: '$780.00', matched: true },
            { amount: '$249.99', matched: true },
          ],
        },
        {
          title: 'Batch payouts',
          description: 'Fast payouts to thousands of recipients',
          type: 'batch-payouts',
        },
      ],
    },
    Manage: {
      cards: [
        {
          title: 'Dashboard',
          description: 'A single place to manage all processes',
          type: 'dashboard',
          transactions: [
            { status: 'PAID', amount: '$53.00', method: 'VISA', id: '8837620', date: '28.04.2020, 18:37' },
            { status: 'FAILED', amount: '$33.50', method: 'Card', id: '4567862', date: '22.04.2020, 15:21' },
            { status: 'PAID', amount: '$12.80', method: 'VISA', id: '7725189', date: '15.04.2020, 12:24' },
          ],
        },
        {
          title: 'Merchant management',
          description: 'Holistic software for storefronts management',
          type: 'merchant-flow',
          flows: [
            { userColor: 'blue', storeNumber: 1, storeActive: true },
            { userColor: 'purple', storeNumber: 2, storeActive: false },
            { userColor: 'dark-blue', storeNumber: 3, storeActive: false },
          ],
        },
        {
          title: 'Merchant portal',
          description: 'Intuitive merchant management interface',
          type: 'merchant-users',
          users: [
            { name: 'Max Cooper', email: 'max.cooper@valorapay.com', role: 'Administrator', status: 'online', location: 'Mobile, USA' },
            { name: 'Bernard Robertson', email: 'bernard.rob@valorapay.com', role: 'Developer', status: 'offline' },
            { name: 'Shane Alexander', email: 'shane.alex@valorapay.com', role: 'Developer', status: 'online', location: 'Mobile, France' },
          ],
        },
        {
          title: 'Analytics',
          description: 'Unlock powerful insights with our comprehensive analytics dashboard. Track real-time performance metrics, monitor transaction trends, and analyze revenue patterns across all your stores and payment channels. Our intelligent reporting system provides detailed breakdowns by store, payment method, currency, and time period, helping you make data-driven decisions. Visualize your business growth with interactive charts, identify opportunities for optimization, and stay ahead with predictive analytics that forecast future trends based on historical data.',
          type: 'analytics',
          stores: ['Store 1', 'Store 2', 'Store 3'],
        },
      ],
    },
    Market: {
      cards: [
        {
          title: 'Merchant management',
          description: 'Holistic software for storefronts management',
          type: 'merchant-flow',
          flows: [
            { userColor: 'green', storeNumber: 1, storeActive: true },
            { userColor: 'green', storeNumber: 2, storeActive: false },
            { userColor: 'orange', storeNumber: 3, storeActive: false },
          ],
        },
        {
          title: 'Currency conversion',
          description: 'Save on fees and earn on fluctuations',
          type: 'currency-market',
          rates: {
            from: 'USD',
            to: 'CAD',
            rate1: '1 USD = 1.36 CAD',
            rate2: '1 CAD = 0.74 USD',
          },
        },
        {
          title: 'White label merchant portal',
          description: 'Branded payment experience for your merchants',
          type: 'white-label-portal',
          transactions: [
            { status: 'PAID', amount: '$53.00', method: 'VISA', id: '8837620', date: '28.04.2020, 18:37' },
            { status: 'FAILED', amount: '$33.50', method: 'Mastercard', id: '4567862', date: '22.04.2020, 15:21' },
            { status: 'PAID', amount: '$12.80', method: 'VISA', id: '7725189', date: '15.04.2020, 12:24' },
          ],
        },
        {
          title: 'White label payment provider',
          description: 'Your own-branded payment orchestration platform',
          type: 'white-label-provider',
          providers: [
            { name: 'bitpay', icon: null },
            { name: 'PayPal', icon: '/assets/landing_page/spotlight/PayPal.png' },
            { name: 'Stripe', icon: '/assets/landing_page/spotlight/stripe.webp' },
            { name: 'adyen', icon: null },
            { name: 'VISA', icon: '/assets/landing_page/spotlight/visa.png' },
            { name: 'DISCOVER', icon: '/assets/landing_page/spotlight/discover.png' },
            { name: 'Skrill', icon: '/assets/landing_page/spotlight/skrill.webp' },
            { name: 'CHAPS', icon: null },
            { name: 'NETELLER', icon: '/assets/landing_page/spotlight/neteller.webp' },
            { name: 'SEPA', icon: null },
            { name: 'Apple Pay', icon: '/assets/landing_page/spotlight/apple.png' },
            { name: 'TARGET', icon: null },
          ],
        },
      ],
    },
    Develop: {
      cards: [
        {
          title: 'Documentation',
          type: 'documentation',
        },
        {
          title: 'API references',
          type: 'api-references',
        },
        {
          title: 'Sandbox',
          type: 'sandbox',
        },
        {
          title: 'SDKs',
          type: 'sdks',
        },
      ],
    },
  }

  const currentContent = tabContent[activeTab as keyof typeof tabContent] || tabContent.Connect

  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 xl:py-48 relative overflow-hidden min-h-[600px] lg:min-h-[800px]">
      {/* Background Image - Fixed to prevent movement from transforms */}
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

      {/* Content with fade-in animation - transform only affects this div */}
      <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            <span className="block lg:block">Access Global Financial Markets</span>
            <span className="block lg:block">with Real-Time Analytics</span>
          </h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] text-sm sm:text-base font-medium transition-all duration-200 font-body ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'Connect' ? (
          <>
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {currentContent.cards.slice(0, 3).map((card, cardIndex) => (
                <div key={cardIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
                      {card.title}
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                  </div>
                  {'description' in card && typeof card.description === 'string' && (
                    <p className="text-sm text-white/70 mb-4 font-body">{String(card.description)}</p>
                  )}
                  {card.type === 'providers' && (
                    <div className="mt-6">
                      {'engineDescription' in card && typeof card.engineDescription === 'string' && (
                        <div className="text-xs text-white/60 mb-4 font-body leading-relaxed">{String(card.engineDescription)}</div>
                      )}
                      <div className="grid grid-cols-2 gap-3">
                        {'providers' in card && Array.isArray(card.providers) && card.providers.map((provider: any, idx: number) => {
                          const providerName = typeof provider === 'string' ? provider : provider.name;
                          return (
                            <button
                              key={idx}
                              className="p-3 rounded-lg flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                            >
                              {typeof provider === 'object' && provider.icon ? (
                                <img 
                                  src={provider.icon} 
                                  alt={providerName}
                                  className="h-6 w-auto object-contain"
                                />
                              ) : (
                                <span className="text-xs font-semibold text-white">{providerName}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {card.type === 'methods' && (
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {'methods' in card && Array.isArray(card.methods) && card.methods.slice(0, 9).map((method: any, idx: number) => (
                        <button
                          key={idx}
                          className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer hover:scale-105 group"
                        >
                          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-2 p-2 group-hover:bg-gray-100 transition-colors">
                            {method.icon ? (
                              <img 
                                src={method.icon} 
                                alt={method.name} 
                                className="w-full h-full object-contain" 
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-600 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-300 font-semibold">{method.name.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-white/80 text-center font-medium leading-tight">{method.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {card.type === 'payouts' && (
                    <div className="mt-6 flex items-center justify-center">
                      <img 
                        src="/assets/landing_page/spotlight/payment-methods.png" 
                        alt="Payment methods" 
                        className="w-full max-w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Second Row - 1 Card (Full Width) */}
            {currentContent.cards.length > 3 && (
              <div className="w-full">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-end">
                    {/* Left Side - Text Content */}
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
                          {currentContent.cards[3].title}
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </h3>
                      </div>
                      {'description' in currentContent.cards[3] && typeof currentContent.cards[3].description === 'string' && (
                        <p className="text-sm text-white/70 font-body leading-relaxed">{String(currentContent.cards[3].description)}</p>
                      )}
                    </div>
                    
                    {/* Right Side - Image */}
                    {currentContent.cards[3].type === 'security' && (
                      <div className="flex items-end justify-center lg:justify-end w-full h-full pt-6 lg:pt-8">
                        <img 
                          src="/assets/landing_page/global_access/connect/card_4.png" 
                          alt="Security & Compliance" 
                          className="w-full max-w-[400px] h-auto object-cover object-bottom"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : activeTab === 'Develop' ? (
          <>
            {/* Single Row - 4 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {currentContent.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    {'type' in card && card.type === 'documentation' && (
                      <div className="mb-4 w-16 h-16 flex items-center justify-center">
                        <div className="relative w-12 h-16">
                          <div className="absolute left-0 top-0 w-1/2 h-full bg-white rounded-l-lg"></div>
                          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-400 rounded-r-lg"></div>
                        </div>
                      </div>
                    )}
                    {'type' in card && card.type === 'api-references' && (
                      <div className="mb-4 w-16 h-16 flex items-center justify-center">
                        <div className="text-5xl font-mono">
                          <span className="text-white">&lt;</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-white">&gt;</span>
                        </div>
                      </div>
                    )}
                    {'type' in card && card.type === 'sandbox' && (
                      <div className="mb-4 w-16 h-16 flex items-center justify-center">
                        <div className="text-5xl font-mono">
                          <span className="text-white">&gt;</span>
                          <span className="text-gray-400">_</span>
                        </div>
                      </div>
                    )}
                    {'type' in card && card.type === 'sdks' && (
                      <div className="mb-4 w-16 h-16 flex items-center justify-center">
                        <div className="relative w-14 h-14">
                          {/* 3D Cube */}
                          <div className="absolute inset-0 transform rotate-[-30deg]">
                            {/* Top face */}
                            <div className="absolute top-0 left-1/2 w-8 h-8 bg-gray-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                            {/* Front face */}
                            <div className="absolute bottom-0 left-0 w-10 h-10 bg-gray-400 transform translate-y-1/2">
                              <div className="absolute inset-2 bg-white"></div>
                            </div>
                            {/* Right face */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-500 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Title with Arrow */}
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg lg:text-xl font-bold text-white">
                        {card.title}
                      </h3>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : activeTab === 'Process' || activeTab === 'Optimise' || activeTab === 'Manage' || activeTab === 'Market' ? (
          <>
            {/* First Row - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {currentContent.cards.slice(0, 3).map((card, cardIndex) => (
                <div key={cardIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
                      {card.title}
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                  </div>
                  {'description' in card && typeof card.description === 'string' && (
                    <p className="text-sm text-white/70 mb-4 font-body">{String(card.description)}</p>
                  )}
                  {card.type === 'payments' && (
                    <div className="mt-6 flex items-center justify-center">
                      <img 
                        src="/assets/landing_page/spotlight/process/payment.png" 
                        alt="Payments" 
                        className="w-full max-w-[280px] h-auto object-contain rounded-lg"
                      />
                    </div>
                  )}
                  {card.type === 'checkout' && (
                    <div className="mt-6 bg-gray-900 rounded-lg p-4 max-w-[350px] mx-auto">
                      <div className="text-white text-xs mb-2">Rugby Championship, Final VIP Ticket</div>
                      <div className="text-white font-bold mb-3">$245.00</div>
                      <div className="text-white/70 text-xs mb-2">Select payment method:</div>
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded p-2 flex items-center gap-2">
                          <div className="w-6 h-4 bg-gray-600 rounded"></div>
                          <span className="text-white text-xs">Credit Card</span>
                        </div>
                        <div className="bg-primary-gradient rounded p-2 flex items-center justify-between border border-white/20">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white/20 rounded"></div>
                            <span className="text-white text-xs font-bold">Neteller</span>
                          </div>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {card.type === 'payouts' && (
                    <div className="mt-6 space-y-2">
                      <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between border border-white/20">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">VISA</span>
                          </div>
                          <span className="text-white/70 text-xs">4111 **** **** 3285</span>
                        </div>
                        <div className="w-4 h-4 border-2 border-white/30 rounded-[10px]"></div>
                      </div>
                      <div className="bg-primary-gradient rounded-lg p-3 flex items-center justify-between border border-white/20">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">AE</span>
                          </div>
                          <span className="text-white text-xs font-semibold">3759 **** **** 001</span>
                        </div>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between border border-white/20">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">MC</span>
                          </div>
                          <span className="text-white/70 text-xs">5500 **** **** 1124</span>
                        </div>
                        <div className="w-4 h-4 border-2 border-white/30 rounded-[10px]"></div>
                      </div>
                    </div>
                  )}
                  {card.type === 'routing' && (
                    <div className="mt-6 space-y-2">
                      {'providers' in card && Array.isArray(card.providers) && card.providers.map((provider: any, idx: number) => (
                        <div key={idx} className={`rounded-lg p-3 flex items-center justify-between ${provider.active ? 'bg-primary-gradient border border-white/20' : 'bg-white/10 border border-white/20'}`}>
                          <div className="flex items-center gap-2">
                            {provider.name === 'Mastercard' && (
                              <div className="w-8 h-5 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded flex items-center justify-center">
                                <span className="text-white text-[8px] font-bold">MC</span>
                              </div>
                            )}
                            {provider.name === 'paysafecard' && (
                              <div className="w-6 h-6 flex items-center justify-center">
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                            {provider.name === 'Neteller' && (
                              <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center">
                                <span className="text-white text-[8px] font-bold">N</span>
                              </div>
                            )}
                            <span className={`text-xs ${provider.active ? 'text-white font-semibold' : 'text-white/70'}`}>
                              {provider.name}
                            </span>
                          </div>
                          <div className={`w-10 h-6 rounded-[10px] flex items-center transition-colors ${provider.active ? 'bg-[#bc9bea] justify-end pr-1' : 'bg-gray-400 justify-start pl-1'}`}>
                            <div className="w-4 h-4 bg-white rounded-[10px]"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.type === 'currency' && 'rates' in card && (
                    <div className="mt-6 flex flex-col items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-[10px] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">€</span>
                        </div>
                        <div className="bg-primary-gradient rounded-lg px-4 py-2 border border-white/20">
                          <span className="text-white text-sm font-bold">EUR / USD</span>
                        </div>
                        <div className="w-16 h-16 bg-black rounded-[10px] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">$</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-center">
                        {typeof card.rates === 'object' && card.rates && 'rate1' in card.rates && (
                          <>
                            <div className="text-white text-xs">{String((card.rates as any).rate1 || '')}</div>
                            <div className="text-white text-xs">{String((card.rates as any).rate2 || '')}</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {card.type === 'currency-market' && 'rates' in card && (
                    <div className="mt-6 flex flex-col items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-[10px] flex items-center justify-center">
                          <span className="text-[#bc9bea] text-2xl font-bold">$</span>
                        </div>
                        <div className="bg-primary-gradient rounded-lg px-4 py-2 border border-white/20">
                          {typeof card.rates === 'object' && card.rates && 'from' in card.rates && (
                            <span className="text-white text-sm font-bold">
                              {String((card.rates as any).from || '')} / {String((card.rates as any).to || '')}
                            </span>
                          )}
                        </div>
                        <div className="w-16 h-16 bg-black rounded-[10px] flex items-center justify-center">
                          <span className="text-[#bc9bea] text-2xl font-bold">C$</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-center">
                        {typeof card.rates === 'object' && card.rates && 'rate1' in card.rates && (
                          <>
                            <div className="text-white text-xs">{String((card.rates as any).rate1 || '')}</div>
                            <div className="text-white text-xs">{String((card.rates as any).rate2 || '')}</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {card.type === 'white-label-portal' && (
                    <div className="mt-6 bg-gray-900 rounded-lg p-3 overflow-x-auto">
                      <div className="min-w-[300px]">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          <span className="text-white text-xs font-bold">BrosPay</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-gray-300 mb-2 pb-2 border-b border-gray-700">
                          <div>Status</div>
                          <div>Amount</div>
                          <div>Method</div>
                          <div>ID</div>
                          <div>Date</div>
                        </div>
                        {'transactions' in card && Array.isArray(card.transactions) && card.transactions.map((txn: any, idx: number) => (
                          <div key={idx} className={`grid grid-cols-5 gap-2 text-xs py-2 ${idx === 2 ? 'bg-[#bc9bea]/30' : ''} rounded`}>
                            <div>
                              <span className={`px-2 py-1 rounded text-[10px] font-bold ${txn.status === 'PAID' ? 'bg-primary-gradient text-white border border-white/20' : 'bg-red-500 text-white'}`}>
                                {txn.status}
                              </span>
                            </div>
                            <div className="text-white font-semibold">{txn.amount}</div>
                            <div>
                              <span className={`px-2 py-1 rounded text-[10px] ${txn.method === 'VISA' ? 'bg-blue-600 text-white' : 'bg-orange-400 text-black'}`}>
                                {txn.method}
                              </span>
                            </div>
                            <div className="text-gray-400">{txn.id}</div>
                            <div className="text-gray-400">{txn.date}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {card.type === 'white-label-provider' && (
                    <div className="mt-6">
                      <div className="grid grid-cols-4 gap-2">
                        {'providers' in card && Array.isArray(card.providers) && card.providers.slice(0, 8).map((provider: any, idx: number) => {
                          const providerName = typeof provider === 'string' ? provider : (provider?.name || '');
                          const providerIcon = typeof provider === 'object' && provider?.icon ? provider.icon : null;
                          return (
                            <div key={idx} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center p-2 hover:bg-gray-700 transition-colors border border-white/10">
                              {providerIcon ? (
                                <img 
                                  src={providerIcon} 
                                  alt={providerName}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <span className="text-white text-[8px] font-semibold text-center leading-tight">{providerName}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {card.type === 'reconciliations' && (
                    <div className="mt-6 space-y-2">
                      {'transactions' in card && Array.isArray(card.transactions) && card.transactions.map((txn: any, idx: number) => (
                        <div key={idx} className="bg-gray-200 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                            <span className="text-gray-600 text-xs font-bold">A</span>
                          </div>
                          <span className="text-gray-700 text-xs font-semibold">{txn.amount}</span>
                          <div className="ml-auto flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-green-600 text-xs font-semibold">Correct</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.type === 'dashboard' && (
                    <div className="mt-6 bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-white/80 mb-2 pb-2 border-b border-white/20">
                        <div>Status</div>
                        <div>Amount</div>
                        <div>Method</div>
                        <div>ID</div>
                        <div>Date</div>
                      </div>
                      {'transactions' in card && Array.isArray(card.transactions) && card.transactions.map((txn: any, idx: number) => (
                        <div key={idx} className={`grid grid-cols-5 gap-2 text-xs py-2 ${idx === 1 ? 'bg-[#bc9bea]/30' : ''} rounded`}>
                          <div>
                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${txn.status === 'PAID' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                              {txn.status}
                            </span>
                          </div>
                          <div className="text-white font-semibold">{txn.amount}</div>
                          <div>
                            <span className={`px-2 py-1 rounded text-[10px] ${txn.method === 'VISA' ? 'bg-blue-600 text-white' : 'bg-[#bc9bea] text-white'}`}>
                              {txn.method}
                            </span>
                          </div>
                          <div className="text-white/70">{txn.id}</div>
                          <div className="text-white/70">{txn.date}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.type === 'merchant-flow' && (
                    <div className="mt-6 space-y-3">
                      {'flows' in card && Array.isArray(card.flows) && card.flows.map((flow: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center ${
                            flow.userColor === 'blue' ? 'bg-blue-600' : 
                            flow.userColor === 'purple' ? 'bg-[#bc9bea]' : 
                            flow.userColor === 'green' ? 'bg-green-600' :
                            flow.userColor === 'orange' ? 'bg-orange-500' :
                            'bg-blue-900'
                          }`}>
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 flex items-center gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className={`w-1 h-1 rounded-[10px] ${
                                flow.userColor === 'blue' ? 'bg-blue-600' : 
                                flow.userColor === 'purple' ? 'bg-[#bc9bea]' : 
                                flow.userColor === 'green' ? 'bg-green-600' :
                                flow.userColor === 'orange' ? 'bg-orange-500' :
                                'bg-blue-900'
                              }`}></div>
                            ))}
                          </div>
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            flow.storeActive ? 'bg-primary-gradient border border-white/20' : 'bg-gray-300'
                          }`}>
                            <span className="text-white text-sm font-bold">{flow.storeNumber}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.type === 'merchant-users' && (
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-end mb-2">
                        <button className="text-xs px-3 py-1 bg-primary-gradient text-white rounded hover:opacity-90 transition-opacity border border-white/20">
                          + Add new user
                        </button>
                      </div>
                      {'users' in card && Array.isArray(card.users) && card.users.map((user: any, idx: number) => (
                        <div key={idx} className={`bg-white/10 rounded-lg p-3 border border-white/20 ${idx === 0 ? 'bg-[#bc9bea]/30' : ''}`}>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-sm font-semibold text-white">{user.name}</div>
                              <div className="text-xs text-white/70">{user.email}</div>
                            </div>
                            <div className={`w-2 h-2 rounded-[10px] ${user.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white/80">{user.role}</span>
                              <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            {user.location && (
                              <span className="text-xs text-white/60">{user.location}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.type === 'analytics' && (
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-[#bc9bea] rounded"></div>
                          <span className="text-xs text-white">{'stores' in card && Array.isArray(card.stores) && card.stores[0] ? String(card.stores[0]) : ''}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-[#bc9bea] rounded"></div>
                          <span className="text-xs text-white">{'stores' in card && Array.isArray(card.stores) && card.stores[1] ? String(card.stores[1]) : ''}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-600 rounded"></div>
                          <span className="text-xs text-white">{'stores' in card && Array.isArray(card.stores) && card.stores[2] ? String(card.stores[2]) : ''}</span>
                        </div>
                      </div>
                      <div className="h-32 bg-white/10 rounded-lg flex items-end justify-between p-2 gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end gap-0.5">
                            <div className="w-full bg-blue-600 rounded-t" style={{ height: `${20 + i * 5}%` }}></div>
                            <div className="w-full bg-[#bc9bea] rounded-t" style={{ height: `${25 + i * 4}%` }}></div>
                            <div className="w-full bg-[#bc9bea] rounded-t" style={{ height: `${30 + i * 3}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Second Row - 1 Card (Full Width) */}
            {currentContent.cards.length > 3 && (
              <div className="w-full">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
                          {currentContent.cards[3].title}
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </h3>
                      </div>
                      {'description' in currentContent.cards[3] && typeof currentContent.cards[3].description === 'string' && (
                        <p className="text-sm text-white/70 font-body">{String(currentContent.cards[3].description)}</p>
                      )}
                    </div>
                    
                    {/* Right Side - Image/Diagram */}
                    {currentContent.cards[3].type === 'batch-payouts' && (
                      <div className="flex items-end justify-center lg:justify-end w-full h-full pt-6 lg:pt-8">
                        <img 
                          src="/assets/landing_page/spotlight/process/batchpayout.webp" 
                          alt="Batch payouts" 
                          className="w-full max-w-[400px] h-auto object-cover object-bottom"
                        />
                      </div>
                    )}
                    {currentContent.cards[3].type === 'analytics' && (
                      <div className="flex items-end justify-center lg:justify-end w-full h-full pt-6 lg:pt-8">
                        <img 
                          src="/assets/landing_page/spotlight/manage/analytics.png" 
                          alt="Analytics" 
                          className="w-full max-w-[400px] h-auto object-cover object-bottom"
                        />
                      </div>
                    )}
                    {'type' in currentContent.cards[3] && currentContent.cards[3].type === 'white-label-provider' && (
                      <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-lg">
                          <div className="grid grid-cols-4 gap-2">
                            {/* Central highlighted hexagon */}
                            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                              <div className="aspect-square bg-primary-gradient rounded-lg flex items-center justify-center p-2 hover:opacity-90 transition-opacity border border-white/20">
                                <span className="text-white text-[10px] font-bold text-center">Your PSP</span>
                              </div>
                            </div>
                            {/* Other provider logos */}
                            {'providers' in currentContent.cards[3] && Array.isArray(currentContent.cards[3].providers) && currentContent.cards[3].providers.slice(0, 11).map((provider: any, idx: number) => {
                              const providerName = typeof provider === 'string' ? provider : (provider?.name || '');
                              const providerIcon = typeof provider === 'object' && provider?.icon ? provider.icon : null;
                              return (
                                <div key={idx} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center p-2 hover:bg-gray-700 transition-colors border border-white/10">
                                  {providerIcon ? (
                                    <img 
                                      src={providerIcon} 
                                      alt={providerName}
                                      className="w-full h-full object-contain"
                                    />
                                  ) : (
                                    <span className="text-white text-[8px] font-semibold text-center leading-tight">{providerName}</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {currentContent.cards.map((card, cardIndex) => (
              <div key={cardIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-white mb-6">{card.title}</h3>
                <div className="space-y-4">
                  {'items' in card && Array.isArray(card.items) && card.items.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <div>
                        <div className="text-white font-medium">{item.label}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">{item.value}</div>
                        <div className={`text-sm ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

