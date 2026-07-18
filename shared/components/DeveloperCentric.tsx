'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Developer Centric section component
 * Shows integration options for developers
 */
export function DeveloperCentric() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTab, setActiveTab] = useState('hosted')

  const integrationOptions = [
    {
      id: 'hosted',
      title: 'Ready for use',
      description: 'Checkout is a secure, ValoraPay-hosted payment page that lets you collect payments with minimal development effort. Just redirect your customers to our hosted page.',
      features: ['No PCI compliance needed', 'Automatic updates', 'Mobile optimised', 'Customisable branding'],
      code: `// Redirect to hosted checkout
const checkout = await ValoraPay.createCheckout({
  amount: 4999,
  currency: 'USD',
  success_url: 'https://your-site.com/success',
  cancel_url: 'https://your-site.com/cancel'
});

window.location.href = checkout.url;`,
    },
    {
      id: 'embedded',
      title: 'Embedded',
      description: 'Embed our checkout directly into your website for a seamless experience. Keep customers on your domain while we handle the payment processing.',
      features: ['Seamless UX', 'Full control', 'Custom styling', 'Event callbacks'],
      code: `// Embed checkout in your page
const checkout = ValoraPay.Checkout({
  container: '#checkout-container',
  publicKey: 'pk_live_xxx',
  amount: 4999,
  currency: 'USD',
  onSuccess: (result) => {
    console.log('Payment successful:', result);
  }
});

checkout.mount();`,
    },
    {
      id: 'api',
      title: 'API integration',
      description: 'Full API access for complete control over the checkout experience. Build your own UI while leveraging our powerful payment infrastructure.',
      features: ['Complete flexibility', 'Custom flows', 'Server-side control', 'Webhooks'],
      code: `// Server-side payment creation
const payment = await ValoraPay.payments.create({
  amount: 4999,
  currency: 'USD',
  payment_method: 'card',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2025,
    cvc: '123'
  }
});

console.log(payment.status); // 'succeeded'`,
    },
  ]

  const activeOption = integrationOptions.find(opt => opt.id === activeTab)

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Developer-centric
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            In a rapidly changing world of payments, integration should be a piece of cake. This is what it's like with our Checkout. Save time, costs and development efforts by choosing the integration option that fulfils your needs, opportunities and expectations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {integrationOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`px-6 py-3 rounded-[10px] font-semibold transition-all font-body ${
                activeTab === option.id
                  ? 'bg-[#4730B8] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {option.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeOption && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                {activeOption.title}
              </h3>
              <p className="text-[18px] text-gray-300 mb-8 leading-relaxed font-body">
                {activeOption.description}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {activeOption.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-[10px] bg-[#4730B8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-body">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/docs"
                  className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#5a40d0] transition-colors font-body"
                >
                  View documentation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Code Snippet */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              {/* Code Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-700/50 border-b border-gray-700">
                <div className="w-3 h-3 rounded-[10px] bg-red-500"></div>
                <div className="w-3 h-3 rounded-[10px] bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-[10px] bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">example.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code>
                    {activeOption.code.split('\n').map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        {line.startsWith('//') ? (
                          <span className="text-gray-500">{line}</span>
                        ) : line.includes('const ') ? (
                          <>
                            <span className="text-purple-400">const </span>
                            <span className="text-blue-300">{line.replace('const ', '').split(' ')[0]}</span>
                            <span className="text-gray-300">{line.replace('const ' + line.replace('const ', '').split(' ')[0], '')}</span>
                          </>
                        ) : line.includes('await ') ? (
                          <>
                            <span className="text-purple-400">await </span>
                            <span className="text-yellow-300">{line.replace('await ', '').split('(')[0]}</span>
                            <span className="text-gray-300">({line.split('(').slice(1).join('(')}</span>
                          </>
                        ) : line.includes(':') && !line.includes('//') ? (
                          <>
                            <span className="text-gray-300">  </span>
                            <span className="text-orange-400">{line.trim().split(':')[0]}</span>
                            <span className="text-gray-300">:</span>
                            <span className="text-green-400">{line.split(':').slice(1).join(':')}</span>
                          </>
                        ) : (
                          <span className="text-gray-300">{line}</span>
                        )}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

