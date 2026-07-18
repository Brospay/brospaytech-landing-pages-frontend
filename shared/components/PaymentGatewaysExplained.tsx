'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Payment Gateways Explained section component
 * Features educational content about payment gateways
 */
export function PaymentGatewaysExplained() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const gatewayTypes = [
    {
      title: 'High risk payment gateway',
      description: 'Specialized gateways designed for businesses in high-risk industries.',
    },
    {
      title: 'PCI compliant payment gateway',
      description: 'Gateways that meet Payment Card Industry Data Security Standard requirements.',
    },
    {
      title: 'Small business payment gateway',
      description: 'Affordable and easy-to-use gateways tailored for small businesses.',
    },
    {
      title: 'Gambling payment gateway',
      description: 'Specialized payment solutions for online gambling and gaming platforms.',
    },
    {
      title: 'Payment gateway for games',
      description: 'Payment solutions optimized for gaming platforms and in-game purchases.',
    },
    {
      title: 'Secure payment gateway',
      description: 'Gateways with advanced security features to protect transactions.',
    },
    {
      title: 'Payment gateway for ecommerce',
      description: 'Solutions designed specifically for online retail and e-commerce stores.',
    },
    {
      title: 'Payment gateway for marketplace',
      description: 'Multi-vendor payment solutions for marketplace platforms.',
    },
    {
      title: 'SAAS payment gateway',
      description: 'Payment solutions optimized for Software-as-a-Service businesses.',
    },
    {
      title: 'International payment gateway',
      description: 'Gateways that support multiple currencies and global transactions.',
    },
    {
      title: 'Bitcoin payment gateway',
      description: 'Payment solutions that accept cryptocurrency transactions.',
    },
    {
      title: '3DS payment gateway',
      description: 'Gateways with 3D Secure authentication for enhanced security.',
    },
  ]

  const contentSections = [
    {
      title: 'What is an online payment solution',
      content: 'An online payment solution is a vast concept denoting any technological product that enables receiving online payments from your customers. To get a better apprehension of online payment solutions, let\'s lay off online payment processing basics.',
    },
    {
      title: 'How to know if your business needs a payment solution',
      content: 'First of all, without such solutions, businesses would not be able to process customers\' financial data, and therefore, receive money from their online customers. However, nowadays, it\'s not the only reason. Payment products significantly affect customer experience, determining the quality of a checkout process, and thus your success rates. Moreover, transaction security and consumers\' data protection depend on the solution you\'ve chosen. That\'s why it can either strengthen or weaken your reputation in the eyes of your clients.',
    },
    {
      title: 'How to get a payment solution',
      content: 'There are two ways to get a payment solution for your business: Develop it in-house (an option for businesses having developers in their teams, but it can also be outsourced) or choose an existing one (you can partner with a payment service provider to avoid all the development hassles).',
    },
    {
      title: 'Critical characteristics of a good payment solution',
      content: 'As a business client whose primary goals are expanding operations and increasing revenue, we recommend you integrate a payment gateway that is secure, innovative, and scalable. Security is critical in payments. Innovation means the ability to keep up with the financial landscape changes. Scalability ensures the solution fulfils your needs in terms of market coverage.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Payment gateways explained
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Every business is unique, but many have something in common. We collected the essentials on what companies of different types, sizes, and industries should look for in a payment gateway.
          </p>
        </div>

        {/* Gateway Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {gatewayTypes.map((gateway, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">{gateway.title}</h3>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {gateway.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {contentSections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">{section.title}</h3>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#4730B8] rounded-xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
              Ready to boost your business to the next level?
            </h3>
            <p className="text-[18px] text-white/90 mb-6 max-w-2xl mx-auto font-body">
              Get in touch with us and we will try to provide you with the most relevant offer.
            </p>
            <a
              href="#book-call"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl tap-target font-body"
            >
              Book a call
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
      </div>
    </section>
  )
}

