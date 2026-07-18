'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * DCC Education section component
 * Educational content about dynamic currency conversion
 */
export function DCCEducation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const prosForCustomers = [
    'Allows to pay in the currency of customers\' choice and make purchases more convenient',
    'Adds transparency and control through providing detailed information on each transaction',
    'Helps to make purchasing more informed and confident, improving the overall shopping experience',
  ]

  const prosForBusiness = [
    'Helps to boost your income, generating additional revenue flows — the conversion fees',
    'Allows to establish the exchange rates at the POS and reduce the risk of currency fluctuations',
    'Mitigates the cost of acceptance allowing you to offset the fees for accepting foreign credit cards',
    'Increases customer satisfaction and loyalty, removing uncertainty and making purchases more convenient',
    'Ability to accept payments from international payers in their preferred currency attracts new customers and helps your business expand',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is DCC */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What Is the Dynamic Currency Conversion
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
            Dynamic currency conversion (DCC) is the process of converting a card transaction amount from one currency (payer's) to another (payee's). In other words, it is a technology that helps to pay abroad using your payment card when a payment is performed in a foreign currency.
          </p>
          <p className="text-gray-600 leading-relaxed font-body">
            Merchants or banks usually provide the DCC service. It is performed when customers pay abroad with a bank card or withdraw money via an ATM, and the currency of their card account differs from the local one. The dynamic conversion implies additional transaction fees that depend on the service provider.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">How It Works</h3>
          <p className="text-gray-600 leading-relaxed mb-6 font-body">
            When a customer decides to pay with a payment card, the merchant's DCC terminal will determine the card-issuing country through the card's ID number (first six digits). If it's a foreign card, the payer will be noticed about the available options, and the transaction will be routed through a specific provider offering the dynamic currency conversion service.
          </p>
          <p className="text-gray-600 leading-relaxed font-body">
            Suppose the cardholder chooses to pay in his or her national currency. In that case, the DCC provider will debit the account in the payer's national currency, and the merchant's account will be credited with the amount of the transaction in the local currency. Providers usually levy fees for this service.
          </p>
        </div>

        {/* Pros and Cons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Advantages and Disadvantages of DCC</h3>
          
          {/* Pros */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h4 className="text-xl font-bold text-green-600 mb-6 font-heading">Pros</h4>
            <p className="text-gray-600 leading-relaxed mb-6 font-body">
              DCC being offered, the terminal displays the transaction amount in the customer's home currency. Cardholders can choose to process the transaction in their national or local currency.
            </p>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4 font-heading">For Customers:</h5>
              <ul className="space-y-3">
                {prosForCustomers.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-body">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4 font-heading">For Business Owners:</h5>
              <ul className="space-y-3">
                {prosForBusiness.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-body">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cons */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-bold text-red-500 mb-6 font-heading">Cons</h4>
            <p className="text-gray-600 leading-relaxed mb-4 font-body">
              The main drawback of the DCC is the unfavourable exchange rate and fees applied to the transaction. It can result in higher charges from their credit card. And in many cases, the payer is unaware of the additional and often unnecessary costs of a DCC transaction.
            </p>
            <p className="text-gray-600 leading-relaxed font-body">
              The amount of the currency conversion margin added with DCC varies depending on the provider, acquiring bank or payment processor, and merchant. This margin is added to any fees charged by the payer's bank or credit card company when purchasing overseas.
            </p>
          </div>
        </div>

        {/* Let overseas customers pay */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Let Overseas Customers Pay in Their Local Currency</h3>
          <p className="text-gray-600 leading-relaxed mb-6 font-body">
            Having different payment options on your website attract customers from abroad. And if you're up to scaling your business, it's a surefire way to do it faster. You just post the prices in currencies you want to support, and you're ready to accept online payments in them.
          </p>
          <p className="text-gray-600 leading-relaxed font-body">
            The DCC enables your international customers to view prices and pay online in their preferred currency. At the same time, your balance is settled in the currency of your choice. The DCC feature allows you to send payments and make payouts in another currency even if you don't maintain a balance in it.
          </p>
        </div>

        {/* Supported currencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Supported Currencies and Countries</h3>
          <p className="text-gray-600 leading-relaxed font-body">
            ValoraPay supports an impressive list of currencies (160+) and currency pairs (1000+) to facilitate shopping and selling worldwide. The list comprises the following currency types: National, Cryptocurrency, Voucher, Digital, Technical, Game, Virtual, Cash, and Alternative.
          </p>
        </div>

        {/* Transparent exchange rates */}
        <div className="bg-[#4730B8] rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-heading">Transparent Exchange Rates at ValoraPay</h3>
          <p className="text-white/90 leading-relaxed mb-6 font-body">
            Simply put, an exchange rate is the value of one currency versus another. Usually, exchange rates fluctuate based on supply and demand in the market. But sometimes, they are strictly regulated by governments or central banks.
          </p>
          <p className="text-white/90 leading-relaxed mb-6 font-body">
            ValoraPay offers a variety of connected exchange rate sources that get automatic updates. They are used in transaction processing if the payee's and the payer's currency do not match.
          </p>
          <p className="text-white/90 leading-relaxed font-body">
            Our payment orchestration platform allows for implementing different exchange rates and set fees per each client and currency pair based on an array of sources (central and commercial banks or FX-rate providers). To increase the overall efficiency, choose from the following types of exchange rates: direct, indirect, commercial, and fixed.
          </p>
        </div>
      </div>
    </section>
  )
}

