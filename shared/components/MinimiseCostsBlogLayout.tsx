'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Minimise Costs Blog Layout - matches ValoraPay blog post design
 */
export function MinimiseCostsBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const ways = [
    {
      number: 1,
      title: 'Boost transaction volume',
      description: 'Increasing transaction volume is a powerful strategy for lowering payment processing fees. Many payment service providers offer volume discounts, meaning the more you sell, the less you pay per transaction.',
      details: 'For example, a payment service provider (PSP) might charge 2.5% per transaction for merchants with monthly sales under $10,000 but reduce this to 2.0% for those exceeding $20,000.',
      tips: [
        'Businesses can boost volume by expanding marketing efforts, introducing loyalty programs, or offering promotions to encourage larger purchases.',
        'Offer time-limited promotions, upsell and cross-sell products, and use targeted email marketing to drive sales.',
      ],
    },
    {
      number: 2,
      title: 'Maintain a low-risk profile',
      description: 'Payment processors assess risk levels based on industry type, transaction patterns, and chargeback rates. Lower-risk merchants enjoy reduced fees and more favourable terms.',
      details: 'Each processor has its criteria for determining which merchants are high-risk, so it\'s essential to understand your payment partner\'s specific guidelines and requirements. While you may have limited control over your industry classification, there are proactive steps you can take to minimise other risk factors and avoid being labelled as high-risk.',
    },
    {
      number: 3,
      title: 'Minimise chargebacks',
      description: 'Chargebacks not only result in lost revenue but also increase processing costs. A business with a high chargeback rate might see its processing fees increase.',
      quote: {
        text: 'Chargebacks draw attention to the weaknesses of your business. If it\'s fraud, learn how to protect your business from it. If the reason is failed expectations, fix the descriptions of your goods.',
        author: 'Kostyantyn Silyuchenko',
        role: 'R&D Director at Chargeback Optimizer',
      },
      tips: [
        'Implement clear return policies, accurate product descriptions, and proactive customer service to reduce chargebacks.',
        'Use confirmation emails and follow-up surveys to ensure customer satisfaction.',
      ],
    },
    {
      number: 4,
      title: 'Promote debit card use',
      description: 'Debit card transactions typically incur lower fees than credit card transactions. Businesses can encourage debit card use by offering small discounts or rewards for debit payments.',
      details: 'For instance, offering loyalty program bonuses for debit card payments can lead to direct savings on processing fees while encouraging customer participation.',
    },
    {
      number: 5,
      title: 'Set transaction minimums for credit card purchases',
      description: 'Implementing a minimum transaction amount for credit card purchases can offset processing costs on small-ticket items.',
      details: 'For instance, setting a $10 minimum could prevent losses on transactions where the processing fee exceeds the profit margin. Ensure compliance with card network guidelines and local regulations, and communicate this policy clearly to customers to maintain satisfaction.',
    },
    {
      number: 6,
      title: 'Leverage address verification services (AVS)',
      description: 'AVS compares the billing address provided by the customer with the one on file with the card issuer, reducing fraud and associated fees.',
      details: 'Implementing AVS for online transactions can lower the risk of chargebacks, potentially qualifying your business for lower rates.',
    },
    {
      number: 7,
      title: 'Diversify payment providers',
      description: 'Relying on a single payment provider can be risky and costly. By diversifying providers, businesses can leverage competitive rates and ensure uninterrupted service.',
      details: 'This approach might involve integrating multiple gateways or negotiating specialised terms with providers based on transaction types or customer locations. For instance, using one provider for domestic transactions and another for international sales can optimise cost efficiency.',
      note: 'The downturn here is that you\'ll have to establish numerous integrations and bear the costs of multiple payment gateways, so this option only benefits large businesses.',
      example: 'Prior to becoming ValoraPay\'s client, crypto exchange Kuna realised a strong need to offer their clients a wide choice of payment options. This meant establishing direct integrations with payment vendors and their further support. Several direct integrations covered this requirement at the outset, but then Kuna stumbled upon the draining costs of processing fees and the constant need to connect the emerging payment methods. On top of that, each integration required developers\' assistance and updates. Integrating ValoraPay\'s payment orchestration platform provided Kuna with a payment team as a service and the ability to connect any of our 400+ integrated providers while we took care of supporting and updating all those integrations.',
    },
    {
      number: 8,
      title: 'Use smart processing tools',
      description: 'Smart processing features help make the most out of working with multiple payment service providers. It is a real money-saver for high-volume merchants.',
      details: 'ValoraPay\'s smart processing engine allows you to route each transaction cheaply and efficiently, depending on its currency, method, bank, amount, etc. Moreover, it helps distribute your cash flows across providers in the way you need. It also drives your conversion and saves your sales, rerouting transactions to another vendor if something goes wrong on the provider\'s side.',
      additional: 'Besides, you can enable dynamic currency conversion to work with multiple currencies conveniently and cost-efficiently.',
    },
    {
      number: 9,
      title: 'Conduct regular reviews of payment statements',
      description: 'Regularly reviewing your processing statements can uncover hidden fees, billing errors, or opportunities for savings.',
      details: 'For example, a detailed review might reveal that you\'re paying for unnecessary services or that your effective rate has increased over time. Identifying and addressing these issues can lead to immediate cost savings. Set aside time each month to scrutinise your statements or consider hiring an expert to perform this analysis.',
      quote: {
        text: 'Payment data provide you with valuable information on how much each transaction costs you, which means you can set up a payment routing system that saves you money. You can also integrate appropriate alternative payment methods if your transaction costs end up being too high. It\'s often an issue for cross-border card transactions.',
        author: 'Denys Kyrychenko',
        role: 'ValoraPay\'s Co-founder & CEO',
      },
    },
    {
      number: 10,
      title: 'Streamline payment processes',
      description: 'Optimise the checkout process to reduce cart abandonment and improve the customer experience.',
      details: 'This includes offering a guest checkout option, simplifying form fields, and ensuring your site\'s loading speed is fast. Efficient payment processes can lead to higher completion rates and lower fees over time.',
    },
    {
      number: 11,
      title: 'Negotiate fees with payment processors',
      description: 'Fees are often negotiable, especially for businesses with a solid transaction volume or growth trajectory.',
      details: 'With detailed knowledge of your online sales volume and transaction patterns, approach your payment processors to negotiate better terms. Highlight your growth trends and low chargeback rates as a key differentiator. An online merchant, for example, can demonstrate a consistent increase in sales volume over the past year as a bargaining chip for lower fees.',
    },
    {
      number: 12,
      title: 'Settle transactions promptly',
      description: 'Prompt settlement of transactions can lower fees associated with delayed processing.',
      details: 'Many processors charge higher fees for transactions not settled within 24 hours. A business can avoid higher charges by ensuring daily settlement, improving cash flow and reducing costs. It can also be automated to batch and settle transactions at the end of each business day.',
    },
    {
      number: 13,
      title: 'Optimise account and terminal settings',
      description: 'Review and adjust your payment terminal and account settings regularly to avoid paying for features you don\'t use.',
      details: 'Disabling unused services or features can lead to direct savings. The same applies to your accounts with payment providers. Refer to their pricing plan quotes to understand what you\'re paying for and whether you need all of it.',
    },
    {
      number: 14,
      title: 'Consult with payment processing experts',
      description: 'Consulting with experts can uncover savings opportunities and strategic advice on reducing fees.',
      details: 'These professionals can offer insights into the latest trends, tools, and negotiation strategies to help you secure the best rates and terms.',
    },
  ]

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Author and Date Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 font-body mb-4">
                <span className="font-semibold text-gray-900">ValoraPay Team</span>
                <span>•</span>
                <span>March 13, 2024</span>
                <span>•</span>
                <span>11 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">30%</div>
                <p className="text-white/90 mt-2 font-body">Savings on payment fees</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Fees are a fuel that makes payment infrastructure work. It is the cost of service of every participant in the transaction processing.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Our clients work with multiple payment providers, and paying all the online payment processing fees across all the vendors is often resource-draining. Of course, you can't wholly avoid paying fees, but you can try minimising the amount you must pay. In this article, we'll tell you how to do it.
              </p>
            </div>

            {/* Payment Processing Fees Explained */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Payment processing fees explained
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                To improve your knowledge of payment processing fees and their types, look at our article covering the basics. It contains the average card processing fees, a formula to calculate the total cost of accepting a card payment, and a convenient table comparing all fees.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  <strong className="font-heading">Payment processing fees</strong> are the costs merchants incur every time a customer uses a credit card or online payment method to make a transaction. A processing fee is a multifaceted charge comprised of several smaller fees assessed by different entities involved in the transaction process: the issuing bank, the acquiring bank, the payment processor, and the card networks like Visa and Mastercard. The fee compensates for the technology, security, and services provided during a payment transaction's authorisation, funding, and settlement stages.
                </p>
              </div>
            </div>

            {/* 14 Ways to Minimise Payment Fees */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-heading">
                14 ways to minimise payment fees
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-8 font-body">
                Now, let's jump into the ways to reduce payment processing costs.
              </p>
              
              <div className="space-y-12">
                {ways.map((way) => (
                  <div key={way.number} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-lg font-heading">
                        {way.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                          {way.title}
                        </h3>
                        <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                          {way.description}
                        </p>
                        {way.details && (
                          <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                            {way.details}
                          </p>
                        )}
                        {way.tips && (
                          <div className="bg-gray-50 rounded-xl p-6 mb-4">
                            <ul className="list-disc list-inside space-y-2">
                              {way.tips.map((tip, index) => (
                                <li key={index} className="text-[18px] text-gray-700 leading-relaxed font-body">
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {way.quote && (
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 my-4">
                            <p className="text-[18px] text-gray-700 leading-relaxed mb-2 font-body italic">
                              "{way.quote.text}"
                            </p>
                            <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                              <strong className="font-heading">{way.quote.author}</strong> — {way.quote.role}
                            </p>
                          </div>
                        )}
                        {way.note && (
                          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-6 my-4">
                            <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                              <strong className="font-heading">Note:</strong> {way.note}
                            </p>
                          </div>
                        )}
                        {way.example && (
                          <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-4">
                            <p className="text-[18px] text-gray-700 leading-relaxed mb-2 font-body">
                              <strong className="font-heading">Client's story:</strong>
                            </p>
                            <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                              {way.example}
                            </p>
                          </div>
                        )}
                        {way.additional && (
                          <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                            {way.additional}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How ValoraPay Can Help */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How ValoraPay can help
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Serving companies that work with multiple payment providers, ValoraPay empowers them to save on payment processing fees without lowering conversion rates. Intelligent payment routing technology enables this.
              </p>
              <div className="bg-gradient-to-r from-[#4730B8]/10 to-purple-100 rounded-[20px] p-8 border-2 border-[#4730B8]/20 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Companies achieve up to 40% increase in conversion rates after implementing the routing technology.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Any company leveraging multiple PSPs can automatically send each transaction to the provider that offers the best price. Finding the lowest-cost way for each transaction saves our clients up to 30% in payment fees. Besides, our Account Managers use their years of industry expertise to help our clients create custom payment routing schemes, allowing them to find the balance between economy and effectiveness.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center mb-12">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Get in touch with us!
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                We can offer you a live demo, answer your questions, help you configure the payment setup and start saving on PSP fees with ValoraPay.
              </p>
              <Link
                href="#book-call"
                className="inline-block bg-white text-[#4730B8] px-8 py-4 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* CTA Box */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-[20px] p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Need to minimise costs?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Discover how ValoraPay can help you save on payment processing fees and optimize your payment costs.
                </p>
                <Link
                  href="#book-call"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Get started
                </Link>
              </div>

              {/* Payment Fees Guide CTA */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-[20px] p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Payment fees guide
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Learn more about payment processing fees, their types, and how to calculate them.
                </p>
                <Link
                  href="/guides"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Learn more
                </Link>
              </div>

              {/* Payment Routing Guide CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Free payment routing guide
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Explore proven strategies to optimise payment processing costs and save on fees.
                </p>
                <Link
                  href="/guides"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

