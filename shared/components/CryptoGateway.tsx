'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Crypto Gateway section
 */
export function CryptoGateway() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const functions = [
    'Registers the crypto holder\'s or payer\'s data',
    'Converts the amount at the specified exchange rate, if necessary',
    'Executes verification (for example, via 3DS)',
    'Accepts cryptocurrency payments from a buyer',
    'Sends transaction data to the blockchain and registers confirmations from nodes',
    'Converts the received coins into fiat money (at the merchant\'s request)',
    'Transfers payments to a merchant',
    'Provides confirmation of payment processing for both parties',
  ]

  const types = [
    {
      title: 'Crypto-fiat',
      description: 'The merchant receives fiat money into his account due to the process called conversion. The commission is, on average, 1% or more, but this adds regulatory, banking, and exchange risks.',
      color: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Crypto-crypto',
      description: 'Purchasers make crypto payments, and merchants receive payments in this currency. The transaction fees are about 0.5%, of which about 0.1% is spent on trading costs during the exchange.',
      color: 'bg-purple-50 border-purple-100',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What is a crypto payment gateway?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            A crypto payment gateway or crypto payment processor is a service or platform that processes payments in digital currencies and allows merchants to accept cryptocurrency payments.
          </p>
        </div>

        {/* Functions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Main functions:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {functions.map((func, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 rounded-[15px] p-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-body">{func}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading text-center">
            Types of popular crypto payment gateways
          </h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {types.map((type, index) => (
              <div
                key={index}
                className={`${type.color} rounded-[20px] p-6 lg:p-8 border-2 hover:shadow-lg transition-shadow`}
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                  {type.title}
                </h4>
                <p className="text-gray-700 leading-relaxed font-body">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

