'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Boost Conversions Blog Layout - matches ValoraPay blog post design
 */
export function BoostConversionsBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const tactics = [
    {
      number: 1,
      title: 'Convey free shipping and free returns',
      description: 'One of the most cited reasons for cart abandonment is the added cost of shipping. A study by the National Retail Federation found that offering free shipping directly correlates with a reduction in cart abandonment rates. Moreover, a clear and lenient return policy can significantly diminish purchase hesitancy, thereby boosting conversion rates.',
      tips: [
        'Make your free shipping and returns policies visible throughout the customer journey, especially on product pages and within the checkout process.',
        'If free shipping is conditional upon reaching a certain order value, ensure this threshold is clearly communicated and consider adding a progress indicator in the cart.',
        'To alleviate purchase hesitancy, offer a straightforward, hassle-free returns process and clearly communicate this on your site.',
      ],
      example: 'IKEA\'s approach to returns and shipping is a clear example. Their 365-day return policy for unopened products, hassle-free returns, and the \'Love it or exchange it\' 90-day trial for mattresses reduce purchase hesitations, encouraging customers to complete transactions with the assurance that their satisfaction is a priority.',
    },
    {
      number: 2,
      title: 'Simplify the checkout process',
      description: 'A complex or lengthy checkout process can deter customers from completing their purchases. Streamlining the checkout to remove unnecessary steps and asking for only essential information can reduce friction and improve the overall user experience.',
      tips: [
        'Review your checkout process and eliminate any unnecessary steps or fields. Aim for a balance between collecting essential information and maintaining simplicity.',
        'Implement a progress bar to visually indicate how many steps are left in the checkout process, setting clear expectations for the customer.',
        'Optimise form fields — use predictive input and autofill where possible to reduce the amount of typing required, speeding up the checkout process for the user.',
      ],
    },
    {
      number: 3,
      title: 'Eliminate mandatory sign-ups',
      description: 'Forcing customers to create an account before they can make a purchase is a significant barrier that can lead to increased cart abandonment.',
      tips: [
        'Offer a guest checkout option alongside the option to create an account, making it as accessible as possible.',
        'Instead of forcing account creation, highlight the benefits (e.g., faster future checkouts, order tracking) to encourage customers to sign up voluntarily.',
        'If customers choose to create an account, make the process as seamless as possible, potentially allowing them to do so after completing their purchase.',
      ],
      example: 'LEGO\'s checkout process exemplifies this approach. Customers are given the choice to continue as guests or to log in or register, which can streamline the process and reduce friction.',
    },
    {
      number: 4,
      title: 'Enhance the mobile checkout experience',
      description: 'According to Statista, mobile sales reached $2.2 trillion in 2023 and now account for 60% of all e-commerce sales worldwide. It means optimising the mobile checkout experience is no longer optional — it\'s imperative.',
      tips: [
        'Implement responsive design. Ensure your checkout page automatically adjusts to fit the screen of any device, providing an optimal viewing experience across all platforms.',
        'Use digital wallets. Integrate payment options like Apple Pay, Google Pay, and PayPal, allowing users to complete their purchases with a single touch or click.',
        'Optimise form fields. Reduce the number of form fields and use autofill where possible to streamline the mobile checkout process.',
      ],
      example: 'Sephora\'s mobile checkout offers plenty of payment options, including mobile wallets with quick payment flows. For those who prefer paying with a card, Sephora ensured autofill for card details fields, making the checkout process faster and more convenient.',
    },
    {
      number: 5,
      title: 'Offer multiple payment methods',
      description: 'Providing a variety of payment options caters to different customer preferences and can significantly reduce cart abandonment.',
      tips: [
        'Research your target market to understand which payment methods are most popular in your region.',
        'Include traditional options like credit/debit cards alongside modern alternatives like digital wallets, buy now pay later, and bank transfers.',
        'Display payment method logos prominently to build trust and reassure customers about security.',
      ],
    },
    {
      number: 6,
      title: 'Display trust signals and security badges',
      description: 'Building trust is crucial for online transactions. Displaying security badges, SSL certificates, and trust signals can reassure customers and reduce purchase hesitancy.',
      tips: [
        'Show SSL certificates and security badges prominently on your checkout page.',
        'Display customer reviews and ratings if available.',
        'Include clear privacy policies and terms of service links.',
      ],
    },
    {
      number: 7,
      title: 'Optimise page loading speed',
      description: 'Slow-loading checkout pages can lead to frustration and cart abandonment. Ensuring fast page load times is essential for maintaining customer engagement.',
      tips: [
        'Optimise images and reduce file sizes.',
        'Minimize the use of heavy scripts and third-party tools.',
        'Use a content delivery network (CDN) to improve loading times globally.',
      ],
    },
    {
      number: 8,
      title: 'Implement exit-intent popups',
      description: 'Exit-intent popups can capture customers who are about to leave and offer incentives to complete their purchase.',
      tips: [
        'Offer a discount or free shipping for completing the purchase.',
        'Keep the popup simple and non-intrusive.',
        'Test different offers to see what works best for your audience.',
      ],
    },
    {
      number: 9,
      title: 'Show real-time inventory and urgency',
      description: 'Creating a sense of urgency can encourage customers to complete their purchase quickly.',
      tips: [
        'Display stock levels if inventory is limited.',
        'Show countdown timers for limited-time offers.',
        'Highlight items that are selling fast.',
      ],
    },
    {
      number: 10,
      title: 'Provide clear order summary and total',
      description: 'Transparency in pricing is crucial. Customers want to see exactly what they\'re paying for, including all fees and taxes.',
      tips: [
        'Break down all costs clearly: subtotal, shipping, taxes, and total.',
        'Show itemized order details.',
        'Make the total amount prominent and easy to find.',
      ],
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
                <span>February 21, 2024</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-gradient-to-r from-[#4730B8] to-purple-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">70%</div>
                <p className="text-white/90 mt-2 font-body">Cart abandonment rate</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                The efficiency of your checkout process is not just a component of your e-commerce strategy — it's the backbone. With statistics from 2023 revealing a staggering 70% cart abandonment rate, optimising your checkout conversion rate becomes critical. This article explores strategic enhancements to your checkout process that can significantly uplift your sales.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Need a hand in conversion optimisation?
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Explore ValoraPay's Checkout solution and an array of features it provides for your conversion rates growth.
              </p>
              <Link
                href="/checkout"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Learn more
              </Link>
            </div>

            {/* What is Checkout Conversion Rate */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                What is the checkout conversion rate?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The checkout conversion rate is a pivotal metric, denoting the percentage of customers who complete a purchase against the total number who added items to their cart. This figure reflects the efficacy of your checkout process — a high conversion rate implies a seamless, frictionless checkout experience. In contrast, a lower rate signals potential hurdles customers face during the final purchase stages.
              </p>
            </div>

            {/* Benchmarks Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Benchmarks and industry averages
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Benchmarks for checkout conversion rates fluctuate across industries, yet a universal truth remains:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 my-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  <strong className="font-heading">A rate lingering below 30% signifies a substantial opportunity for improvement.</strong>
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Another essential metric directly related to your conversion rates is shopping cart abandonment. The Baymard Institute's comprehensive analysis underscores an average abandonment rate of nearly 70%, pointing to a widespread challenge across e-commerce platforms to retain customers through the final purchase phase.
              </p>
            </div>

            {/* How to Calculate Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to calculate the checkout conversion rate?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                The formula for calculating your checkout conversion rate is straightforward: divide the number of completed purchases by the total number of shopping carts created, then multiply by 100 to derive a percentage. This calculation offers a clear lens through which to view your checkout process's effectiveness, serving as a baseline for measuring the impact of any optimisations you implement.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-6">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  <strong className="font-heading">Formula:</strong> (Completed Purchases ÷ Shopping Carts Created) × 100 = Conversion Rate %
                </p>
              </div>
            </div>

            {/* Why Checkout Experience is Essential */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Why the checkout experience is essential for the conversion rate?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                For every online business, the usability of its website is the bedrock of its success. In this regard, it is crucial to think of a checkout page as the essential component of your website, which it truly is. However, some businesses still neglect it, resulting in consumers' frustration and lost sales.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Various studies confirm that more than half of consumers have experienced technical issues at the checkout page or abandoned a complicated payment process in the past. For merchants, it means an inevitable increase in the shopping cart abandonment rate.
              </p>
            </div>

            {/* 10 Ways to Increase Conversion Rate */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-heading">
                How to increase the checkout conversion rate: 10 ways
              </h2>
              
              <div className="space-y-12">
                {tactics.map((tactic) => (
                  <div key={tactic.number} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-lg font-heading">
                        {tactic.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                          {tactic.title}
                        </h3>
                        <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                          {tactic.description}
                        </p>
                        {tactic.tips && (
                          <div className="bg-gray-50 rounded-xl p-6 mb-4">
                            <h4 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                              Best practices:
                            </h4>
                            <ul className="list-disc list-inside space-y-2">
                              {tactic.tips.map((tip, index) => (
                                <li key={index} className="text-[18px] text-gray-700 leading-relaxed font-body">
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {tactic.example && (
                          <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6">
                            <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                              <strong className="font-heading">Example:</strong> {tactic.example}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Strategies with ValoraPay */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Advanced strategies and techniques for conversion optimisation with ValoraPay
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-8 font-body">
                ValoraPay offers a suite of features designed to enhance checkout conversion rates, with clients observing an increase between 10-25%. This section delves into how our payment orchestration platform empowers businesses with advanced strategies and techniques for conversion optimisation, supported by illustrative client stories.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Instant and one-click payments
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    ValoraPay simplifies the checkout experience with instant and one-click payments, eliminating the need for returning customers to re-enter their payment details. This convenience significantly reduces checkout time, a key factor in boosting conversion rates, as it aligns with the modern consumer's expectation for speed and efficiency.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Custom payment routing strategy and cascading schemes
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    ValoraPay enables the creation of tailored routing and cascading strategies that consider a wide range of transaction parameters, from card issuer details to transaction amounts. This granularity in routing decisions ensures that each transaction is processed through the pathway with the highest likelihood of approval.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    Our PSP client's journey from a 56.2% conversion rate to an impressive 85.1% within a year underscores the power of a meticulously crafted routing strategy, combined with cascading and UX improvements, in achieving significant conversion rate growth.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Card bindings for higher acceptance rates
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    The card binding feature offered by ValoraPay significantly enhances payment acceptance rates by optimising transaction flows based on historical success. By binding a customer's card to the Merchant ID (MID) that previously processed a successful transaction, subsequent payments are streamlined, leading to improved approval rates.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Payment team as a service
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    Payment team as a service is how we refer to the payment guidance and support we provide to our clients. Based on our payment expertise, we perform tasks varying from daily operations to forming feature requests, solving issues with providers, developing payment expansion strategies, and more.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    Here's a brief recap of a case that illustrates our capacity to pinpoint and resolve intricate problems, leading to substantial conversion rate improvements: a major PSP client faced a dismal 14% conversion rate with Google Pay due to issues in the provider's interaction with the issuer. ValoraPay's intervention rectified these issues and boosted the conversion rate to 84% after implementing recommended adjustments.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                    Proactive monitoring with ValoraPay's Dashboard
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    By providing a comprehensive overview of transaction data, our Dashboard enables businesses to identify and address inefficiencies within their payment processes, allowing for continuous optimisation based on real-time performance. This works especially well with the payment team as a service, when our Account Managers monitor clients' data to help them detect areas for improvement.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    One example is the case of our ISO/MSP client. Their dedicated Account Manager noticed that transactions in a particular currency were unstable on their live graphs – the conversion was low due to many failed transactions. Together with the client, they analysed the transaction statuses and found the reason – they used only one payment provider for this currency, and this provider experienced downtimes. After connecting one more provider and configuring cascading rules, the number of failed transactions decreased.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Conclusion
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Enhancing the checkout process is a multifaceted strategy that requires attention to detail, a deep understanding of customer behaviour, and continuous optimisation. By implementing the strategies outlined in this guide, e-commerce businesses can significantly improve their checkout conversion rates, leading to increased sales and customer satisfaction. The key is to start small, test continuously, and always keep the customer's experience at the forefront of your optimisation efforts.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center mb-12">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Get in touch!
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                We would be delighted to help you optimise your e-commerce checkout conversion rate and answer all your questions.
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
                  Need to boost your conversions?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Discover how ValoraPay can help you optimize your payment processes and increase conversion rates.
                </p>
                <Link
                  href="#book-call"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Get started
                </Link>
              </div>

              {/* ROI Calculator CTA */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Discover the hidden cost of payment complexity
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  If you work with many PSPs but haven't optimised your payment routing and processing, you might be leaving money on the table. See how much additional revenue you could unlock with smart orchestration.
                </p>
                <Link
                  href="/roi-calculator"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Calculate your ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

