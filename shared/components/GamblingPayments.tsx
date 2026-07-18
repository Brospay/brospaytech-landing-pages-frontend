'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingPayments() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const benefits = [
    {
      text: (
        <>
          <strong>New integrations with payment providers go live every day,</strong> making ValoraPay the fastest-growing payment orchestration platform ever.
        </>
      ),
    },
    {
      text: (
        <>
          <strong>550+ ready-made integrations</strong> with global and local payment providers and acquirers are already available.
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Direct integrations with Apple Pay and Google Pay</strong> offer you more <span className="text-[#4730B8] font-semibold">routing</span> and payment processing optimisation opportunities.
        </>
      ),
    },
  ]

  const paymentProviders = [
    { name: 'Amazon Pay', src: '/assets/landing_page/global_coverage/amazon.svg', top: '15%', left: '25%' },
    { name: 'PayPal', src: '/assets/landing_page/global_coverage/paypal.svg', top: '20%', left: '20%' },
    { name: 'Skrill', src: '/assets/landing_page/global_coverage/skrill.svg', top: '18%', left: '30%' },
    { name: 'WePay', src: '/assets/landing_page/global_coverage/wepay.svg', top: '45%', left: '25%' },
    { name: '2Checkout', src: '/assets/landing_page/global_coverage/2checkout.svg', top: '50%', left: '30%' },
    { name: 'd.local', src: '/assets/landing_page/global_coverage/dlocal.svg', top: '35%', left: '45%' },
    { name: 'Stripe', src: '/assets/landing_page/global_coverage/stripe.svg', top: '30%', left: '50%' },
    { name: 'Adyen', src: '/assets/landing_page/global_coverage/adyen.svg', top: '28%', left: '52%' },
    { name: 'Square', src: '/assets/landing_page/global_coverage/square.svg', top: '40%', left: '20%' },
    { name: 'Payline', src: '/assets/landing_page/global_coverage/payline.svg', top: '55%', left: '50%' },
    { name: 'Nuvei', src: '/assets/landing_page/global_coverage/nuvei.svg', top: '25%', left: '75%' },
    { name: 'BitPay', src: '/assets/landing_page/global_coverage/bitpay.svg', top: '30%', left: '80%' },
    { name: 'Klarna', src: '/assets/landing_page/global_coverage/klarna.svg', top: '35%', left: '55%' },
    { name: 'Coingate', src: '/assets/landing_page/global_coverage/coingate.svg', top: '50%', left: '60%' },
    { name: 'Paysafe', src: '/assets/landing_page/global_coverage/paysafe.svg', top: '45%', left: '65%' },
    { name: 'Neteller', src: '/assets/landing_page/global_coverage/neteller.svg', top: '70%', left: '55%' },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Powering Your Business Growth Without Delay
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body">
              As online casino, poker, or betting platforms grow, multiple gambling payment gateways become a must. ValoraPay is the ultimate payment solution provider for online casinos, offering instant access to hundreds of ready-made integrations.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FCD34D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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

          {/* Right Side - World Map with Payment Icons (Same as Payments component) */}
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
            
            {/* Payment Icons - Positioned on map in random non-overlapping positions (Same as Payments component) */}
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
      </div>
    </section>
  )
}

