'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Payments & Transactions section component matching Figma design
 * Features:
 * - Heading and description
 * - Global coverage metrics grid
 * - Map with payment icons
 * - Smooth fade-in animations
 */
export function Payments() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const metrics = [
    { value: '1200+', label: 'payment providers in network' },
    { value: '500+', label: 'ready-made integrations' },
    { value: '250+', label: 'payout methods' },
    { value: '200+', label: 'currencies and cryptos' },
    { value: '25', label: 'languages' },
    { value: 'Any', label: 'card type & payment flow' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Worldwide Payment Network
            </h2>
            <p className="text-[18px] text-gray-600 mb-8 leading-relaxed font-body">
              We've been working only with reliable companies around the world for many years. Be sure you'll find the right solution for your location with our payment orchestration platform.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 flex flex-col group hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[2rem] lg:text-[2.5rem] font-bold text-gray-900 font-body metric-value">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-[18px] text-gray-600 font-body group-hover:text-[#4730B8] transition-colors">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map with Payment Icons */}
          <div className="relative w-full">
            {/* Map Image - Larger size */}
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
      </div>
    </section>
  )
}

