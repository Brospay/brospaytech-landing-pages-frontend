'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Scale Globally section component
 * Shows global payment capabilities for Forex with world map and provider logos
 */
export function ForexScaleGlobally() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const benefits = [
    {
      text: 'BrosPay is the fastest payment orchestration platform ever as we develop new integrations with providers each day.',
    },
    {
      text: '500+ ready-made integrations with payment providers available.',
    },
    {
      text: 'We have established direct integrations with Apple Pay and Google Pay.',
    },
  ]

  // Payment providers positioned on map
  const providers = [
    { name: 'PayPal', top: '15%', left: '20%' },
    { name: 'Stripe', top: '18%', left: '12%' },
    { name: 'Skrill', top: '25%', left: '18%' },
    { name: 'Adyen', top: '22%', left: '25%' },
    { name: 'Amazon Pay', top: '20%', left: '15%' },
    { name: 'd-local', top: '45%', left: '30%' },
    { name: 'Nuvei', top: '28%', left: '22%' },
    { name: 'Square', top: '16%', left: '10%' },
    { name: 'Bitpay', top: '19%', left: '14%' },
    { name: 'Paysafe', top: '24%', left: '20%' },
    { name: 'Klarna', top: '26%', left: '28%' },
    { name: 'Payline', top: '17%', left: '16%' },
    { name: '2checkout', top: '21%', left: '24%' },
    { name: 'WePay', top: '23%', left: '12%' },
    { name: 'CoinGate', top: '27%', left: '26%' },
    { name: 'Neteller', top: '29%', left: '18%' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title - Centered */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            A Single Solution to Connect Multiple Providers
          </h2>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Content - Benefits with Primary Color Checkmarks */}
          <div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - World Map with Payment Icons (Same as Home Page) */}
          <div className="relative w-full">
            {/* Map Image */}
            <div className="relative w-full">
              <img
                src="/assets/landing_page/global_coverage/map.svg"
                alt="Global coverage map"
                className="w-full h-auto object-contain rounded-lg min-h-[500px] lg:min-h-[600px]"
                loading="lazy"
              />
            </div>
            
            {/* Payment Icons - Positioned on map in random non-overlapping positions */}
            {[
              { src: '/assets/landing_page/global_coverage/adyen.svg', alt: 'Adyen', top: '8%', left: '15%', delay: 0 },
              { src: '/assets/landing_page/global_coverage/discover.svg', alt: 'Discover', top: '20%', left: '8%', delay: 1 },
              { src: '/assets/landing_page/global_coverage/apple.svg', alt: 'Apple Pay', top: '18%', left: '22%', delay: 2 },
              { src: '/assets/landing_page/global_coverage/mastercard.svg', alt: 'Mastercard', top: '12%', left: '38%', delay: 3 },
              { src: '/assets/landing_page/global_coverage/visa.svg', alt: 'Visa', top: '22%', left: '52%', delay: 4 },
              { src: '/assets/landing_page/global_coverage/paypal.svg', alt: 'PayPal', top: '16%', left: '72%', delay: 5 },
              { src: '/assets/landing_page/global_coverage/stripe.svg', alt: 'Stripe', top: '45%', left: '6%', delay: 6 },
              { src: '/assets/landing_page/global_coverage/samsung.svg', alt: 'Samsung Pay', top: '55%', left: '28%', delay: 0 },
              { src: '/assets/landing_page/global_coverage/alipay.svg', alt: 'Alipay', top: '42%', left: '48%', delay: 1 },
              { src: '/assets/landing_page/global_coverage/wechat.svg', alt: 'WeChat Pay', top: '48%', left: '65%', delay: 2 },
              { src: '/assets/landing_page/global_coverage/skrill.svg', alt: 'Skrill', top: '65%', left: '18%', delay: 3 },
              { src: '/assets/landing_page/global_coverage/neteller.svg', alt: 'Neteller', top: '70%', left: '50%', delay: 4 },
              { src: '/assets/landing_page/global_coverage/sepa.svg', alt: 'SEPA', top: '75%', left: '68%', delay: 5 },
              { src: '/assets/landing_page/global_coverage/T.svg', alt: 'T', top: '35%', left: '82%', delay: 6 },
            ].map((icon, index) => {
              const delayClasses = [
                'animate-float',
                'animate-float-delay-1',
                'animate-float-delay-2',
                'animate-float-delay-3',
                'animate-float-delay-4',
                'animate-float-delay-5',
                'animate-float-delay-6',
                'animate-float-delay-7',
              ]
              return (
                <div
                  key={index}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200 z-10 ${delayClasses[icon.delay] || 'animate-float'}`}
                  style={{
                    top: icon.top,
                    left: icon.left,
                  }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-full h-full object-contain drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Text - Primary Color Brackets */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl font-bold text-[#4730B8] font-heading">[</span>
            <p className="text-xl font-medium text-gray-900 font-body">
              We deliver integrations every single day
            </p>
            <span className="text-4xl font-bold text-[#4730B8] font-heading">]</span>
          </div>
        </div>
      </div>
    </section>
  )
}

