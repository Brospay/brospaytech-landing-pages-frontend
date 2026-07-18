'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Marketplace What Is Payment Gateway section
 */
export function MarketplaceWhatIsGateway() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const steps = [
    {
      step: 1,
      title: 'Customer makes order',
      description: 'A consumer selects the product and makes an order on a merchant\'s website. They choose a preferred payment method and enter debit/credit card details on the checkout page.',
    },
    {
      step: 2,
      title: 'Gateway encrypts information',
      description: 'A gateway receives the information, encrypts it, and sends an authorisation request to the acquiring bank.',
    },
    {
      step: 3,
      title: 'Card network processes',
      description: 'The acquiring bank sends a request to the card network (Visa, Mastercard, or other) serving the cardholder.',
    },
    {
      step: 4,
      title: 'Issuer validates',
      description: 'The card network contacts a consumer\'s issuing bank to check if the card is valid and if there\'re enough funds to withdraw.',
    },
    {
      step: 5,
      title: 'Transaction approved',
      description: 'The issuer authorises the transaction and sends a confirmation to the acquiring bank via a gateway. The payment gateway informs the consumer of a successful transaction.',
    },
    {
      step: 6,
      title: 'Funds transferred',
      description: 'After this, the funds will be debited from the consumer\'s account and credited to the merchant\'s account.',
    },
  ]

  const functions = [
    'Authentication',
    'Customer\'s data encryption',
    'Routing the data between processing participants (processor, acquirer, issuer, card network)',
    'Notification about approval/rejection of the transaction',
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What is a payment gateway?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            A payment gateway is a technology that allows merchants to accept and process online transactions securely. We can compare it to a regular POS terminal that sellers use to accept debit/credit cards in brick-and-mortar stores.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-center">
            How the gateway is involved in an online transaction:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-body text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Functions */}
        <div className="bg-white rounded-[20px] p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Payment gateway functions
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
            A payment gateway can be described as an intermediary service that processes electronic transactions and routes payment information between merchants, banks, and other processing participants through a single communication protocol. It accompanies each transaction from start to finish, ensuring the protection of card data and preventing possible leaks or fraudsters.
          </p>
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
      </div>
    </section>
  )
}

