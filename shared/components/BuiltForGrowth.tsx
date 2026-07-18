'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Built For Growth section component
 * Shows unlimited payment methods supported
 */
export function BuiltForGrowth() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const paymentMethods = [
    { name: 'Discover', logo: '/assets/checkout_page/discover.png' },
    { name: 'Visa', logo: '/assets/checkout_page/visa.svg' },
    { name: 'Mastercard', logo: '/assets/checkout_page/mastercard.svg' },
    { name: 'JCB', logo: '/assets/checkout_page/jcb.svg' },
    { name: 'American Express', logo: '/assets/checkout_page/american.svg' },
    { name: 'Apple Pay', logo: '/assets/checkout_page/apple.svg' },
    { name: 'Google Pay', logo: '/assets/checkout_page/google.svg' },
    { name: 'Samsung Pay', logo: '/assets/checkout_page/samsung.svg' },
    { name: 'Masterpass', logo: '/assets/checkout_page/masterpass.svg' },
    { name: 'Visa Checkout', logo: '/assets/checkout_page/visa-checkout.svg' },
    { name: 'Alipay', logo: '/assets/checkout_page/alipay.svg' },
    { name: 'Skrill', logo: '/assets/checkout_page/skril.svg' },
    { name: 'PayPal', logo: '/assets/checkout_page/paypal.svg' },
    { name: 'Neteller', logo: '/assets/checkout_page/neteller.svg' },
    { name: 'WeChat', logo: '/assets/checkout_page/wechat.svg' },
    { name: 'Bitcoin', logo: '/assets/checkout_page/bitcoin.svg' },
    { name: 'Ripple', logo: '/assets/checkout_page/ripple.svg' },
    { name: 'Ethereum', logo: '/assets/checkout_page/ethereum.svg' },
    { name: 'Litecoin', logo: '/assets/checkout_page/litecoin.svg' },
    { name: 'Tether', logo: '/assets/checkout_page/tethe.svg' },
    { name: 'SEPA Direct Debit', logo: '/assets/checkout_page/sepa.svg' },
    { name: 'SEPA Bank Transfer', logo: '/assets/checkout_page/sepa.svg' },
    { name: 'SWIFT', logo: '/assets/checkout_page/swift.svg' },
    { name: 'Giropay', logo: '/assets/checkout_page/giro.svg' },
    { name: 'CHAPS', logo: '/assets/checkout_page/chaps.svg' },
    { name: 'Klarna', color: 'bg-pink-400', text: 'K' },
    { name: 'Bitpay', color: 'bg-blue-800', text: 'BP' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <p className="text-[#4730B8] font-semibold text-sm uppercase tracking-wider mb-2 font-body">
              Optimise performance based on your data
            </p>
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Built for growth
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-gray-600 leading-relaxed font-body">
              Checkout is a self-sufficient payment solution built to suit any business model and size. Go global and scale up seamlessly and with minimal efforts on the payment acceptance side. We've got you covered.
            </p>
          </div>
        </div>

        {/* Unlimited Payment Methods */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 font-heading">
            Unlimited payment methods
          </h3>
          <p className="text-[18px] text-gray-600 mb-8 font-body">
            Checkout supports almost every payment method imaginable right out of the box.
          </p>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {method.logo ? (
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {method.text}
                  </div>
                )}
                <span className="text-xs text-gray-500 mt-2 text-center font-body truncate w-full">
                  {method.name}
                </span>
              </div>
            ))}
          </div>

          {/* Explore All Link */}
          <div className="mt-8 text-center">
            <a
              href="/payment-methods"
              className="inline-flex items-center gap-2 text-[#4730B8] font-semibold hover:text-[#3a26a0] transition-colors font-body"
            >
              Hundreds of payment methods available. Explore all
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

