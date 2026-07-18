'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Developer Integration section component
 * Features API integration and developer resources
 */
export function DeveloperIntegration() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const integrationFeatures = [
    {
      title: 'RESTful API',
      description: 'Integrate ValoraPay into your system using our comprehensive RESTful API. Build custom solutions that fit your unique business needs.',
    },
    {
      title: 'SDKs',
      description: 'Get started quickly with our Software Development Kits available for popular programming languages. Reduce integration time and complexity.',
    },
    {
      title: 'Webhooks',
      description: 'Receive real-time notifications about payment events. Stay informed about transaction status changes, payment completions, and more.',
    },
    {
      title: 'Sandbox environment',
      description: 'Test your integration in a safe, isolated environment before going live. Experiment with different scenarios without affecting real transactions.',
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation with code examples, API references, and integration guides. Get started quickly with clear, actionable documentation.',
    },
    {
      title: 'Custom integration',
      description: 'Build your own custom integration using our flexible API. We provide the freedom to build your own custom integration.',
    },
  ]

  const codeExamples = [
    {
      title: 'Create payment',
      code: `create_payment ({
  "public_key":"pk_live_ClSQHi2T9WXuF****M69cS9zNOJy",
  "service":"payment_card",
  "amount":420.78,
  "currency":"USD",
  "reference_id":"order_123",
  "description":"Some goods",
})`,
    },
    {
      title: 'Handle callback',
      code: `handle ({
  "id":"pi_TV465FXkbGch3GNe",
  "status":"processed",
  "resolution":"ok",
  "amount":420.78,
  "currency":"UAH",
  "reference_id":"order_123",
  "test_mode":false
})`,
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Developer integration
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Integrate ValoraPay into your application with ease. Our developer-friendly tools and comprehensive documentation make integration simple and straightforward.
          </p>
        </div>

        {/* Integration Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {integrationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">{feature.title}</h3>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code Examples */}
        <div className="grid md:grid-cols-2 gap-8">
          {codeExamples.map((example, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">{example.title}</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono">{example.code}</code>
              </pre>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4730B8] text-white text-base font-semibold rounded-[10px] hover:bg-[#3a2696] transition-colors shadow-lg hover:shadow-xl tap-target font-body"
          >
            Explore the documentation
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

