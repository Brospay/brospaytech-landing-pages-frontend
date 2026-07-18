'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Card Vault & Tokenisation section component
 * Shows card tokenization features and benefits
 */
export function EcommerceCardVault() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const benefits = [
    'Charge one card multiple times, without asking a customer to re-enter the details',
    'Make a free-of-charge authorisation to block funds on the customer\'s card until verification and antifraud check',
    'Offer one-click payments to simplify the purchasing flow',
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Card Vault & Tokenisation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Enjoy safe transactions and tokenised data without additional fees. Our tokenisation technology allows accepting card payments whether you're PCI compliant or not, keeping your customers' data secure.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - Card Vault Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/ecommerce_page/card_vault.png"
              alt="Card vault and tokenisation"
              className="w-full max-w-lg h-auto object-contain"
              loading="eager"
            />
          </div>

          {/* Right - Benefits */}
          <div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Partner Logos Slider */}
        <div className="border-t border-gray-200 pt-8 overflow-hidden">
          <div className="flex items-center gap-12 logo-slider">
            {/* First set of logos */}
            <img src="/assets/ecommerce_page/apple_pay.svg" alt="Apple Pay" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/visa_logo.svg" alt="VISA" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/mastercard_logo.svg" alt="Mastercard" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/pci_logo.svg" alt="PCI Security Standards Council" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/gdpr_logo.svg" alt="GDPR Compliant" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/aws_logo.svg" alt="Amazon Web Services" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/cloudflare.svg" alt="Cloudflare" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/google-auth.svg" alt="Google Authenticator" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/comodo_logo.svg" alt="Comodo SSL Certificate" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            {/* Duplicate set for seamless loop */}
            <img src="/assets/ecommerce_page/apple_pay.svg" alt="Apple Pay" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/visa_logo.svg" alt="VISA" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/mastercard_logo.svg" alt="Mastercard" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/pci_logo.svg" alt="PCI Security Standards Council" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/gdpr_logo.svg" alt="GDPR Compliant" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/aws_logo.svg" alt="Amazon Web Services" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/cloudflare.svg" alt="Cloudflare" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/google-auth.svg" alt="Google Authenticator" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
            <img src="/assets/ecommerce_page/comodo_logo.svg" alt="Comodo SSL Certificate" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

