'use client'

import Link from 'next/link'
import { glossaryTerms } from '@/shared/data/glossaryTerms'

interface GlossaryDetailData {
  id: string
  term: string
  content: {
    intro?: string
    sections: Array<{
      title: string
      content: string
      subsections?: Array<{
        title: string
        content: string
        list?: string[]
      }>
    }>
  }
}

// Sample detailed content for 3DS payment gateway
const glossaryDetails: Record<string, GlossaryDetailData> = {
  '1': {
    id: '1',
    term: '3DS payment gateway',
    content: {
      intro: '3D Secure is a user authorisation protocol for card-not-present operations. The concept of a 3D Secure technology arose since three domains are involved here: a merchant or an acquirer, who requests the payment card data, a payment system that redirects the payer to a password confirmation page, and the card issuer\'s domain or a specialised service, where a confirmation page is formed, and the entered security codes are checked.',
      sections: [
        {
          title: 'What is a 3D Secure payment gateway?',
          content: 'A 3DS payment gateway is a gateway that utilises the 3D Secure protocol for users\' authorisation when they pay for their purchases in an online store. Making an online payment via such a secure payment gateway, a cardholder should prove their identity by entering a code, a temporary PIN, or a password. By partnering with a reliable 3DS provider, businesses can ensure that their customers benefit from enhanced protection against fraud while enjoying a seamless checkout experience.',
        },
        {
          title: 'How does a 3DS payment gateway work?',
          content: 'When you use 3D Secure gateways, the process of authentication comprises the following steps:',
          subsections: [
            {
              title: '',
              content: '',
              list: [
                'Collection of card data. It requires the credit card number, expiration date, cardholder\'s name, and authentication code (for example, CVC2).',
                '3D Secure registration check. The system checks if the card is registered for 3D Secure authorisation.',
                'Redirecting to the 3D Secure page. If the outcome of the previous step is positive, the purchaser is redirected to their card provider\'s 3DS page.',
                'Additional security check. The client should provide a unique one-time code sent via email or message.',
                'Redirecting back to the website. After the successful authentication, the client is returned to the merchant\'s website to proceed with the purchase.',
                'Confirmation of payment. After the redirection to the website, the purchaser is informed of the successful outcome of their payment processing.',
              ],
            },
          ],
        },
        {
          title: 'Why use 3D Secure payment gateway?',
          content: 'The 3DS payment processing minimises card fraud risks for merchants due to the liability shift. The issuing bank is responsible for the transactions performed with this type of verification. All the authentication data provided by the customers is stored on the payment server of the issuing bank. The online store does not have access to it, except for a part of the information on the payment card details, but in the amount allowed by the PCI DSS. Payment gateway providers take these measures to increase cardholders\' data security. If to look at the advantages of 3DS payment gateways for merchants, the main one is decreasing the likelihood of chargebacks. It is important for high-risk merchant accounts and for general business performance health.',
        },
        {
          title: 'What is 3D Secure 2.0?',
          content: '3DS 2.0 is a next-generation version of the 3DS protocol developed and owned by EMVCo. It aims to eliminate the pain points of version 1.0 and significantly increase the attractiveness of the technology for market participants, the quality of the assessment of the transaction legitimacy, and the need for its authentication.',
          subsections: [
            {
              title: 'Compared to 3D Secure 1.0, the following changes have been implemented in version 2.0:',
              content: '',
              list: [
                'Support for various devices and channels was added. The new mobile SDKs enable authentication directly within the mobile application without redirection to the card issuer\'s website.',
                'More convenient authentication methods, such as biometrics and tokens, are used instead of static passwords.',
                'The amount of data transmitted for authentication has been significantly increased, allowing for high-quality Risk-Based Authentication (RBA).',
              ],
            },
          ],
        },
        {
          title: 'The benefits of implementing 3DS 2.0',
          content: 'With 3DS 2.0 updates, merchants can receive more data when interacting with issuing banks and payment gateways. It allows them to collect valuable insights about the transactions after the payment is made. For instance, the number of times a customer was redirected to the 3D Secure payment page and the percentage of authenticated payments can provide a complete picture of customer behaviour. This, in turn, provides analysts with important statistics on fraudulent transactions and activities, helping to improve the protection system.',
          subsections: [
            {
              title: 'Key benefits include:',
              content: '',
              list: [
                'Adaptive payment process in mobile phone browsers, as well as mobile applications.',
                'The ability to embed the authentication process into applications (without going to the browser).',
                'Ability to approve a transaction without manual data entry.',
                'Additional authentication methods using biometrics and security tokens.',
                'Increased convenience for consumers, resulting in lower shopping cart abandonment rates.',
              ],
            },
          ],
        },
      ],
    },
  },
  'saas-payment-gateway': {
    id: 'saas-payment-gateway',
    term: 'SaaS payment gateway',
    content: {
      intro: 'SaaS (Software as a Service) is a business model that involves providing software to customers for a monthly fee. SaaS is most commonly hosted in cloud infrastructure, which means that users do not need to install anything to access the product\'s functionality. In simple terms, the SaaS model is when a customer works with a ready-made solution online.',
      sections: [
        {
          title: 'What is the SaaS business model?',
          content: 'SaaS (Software as a Service) is a business model that involves providing software to customers for a monthly fee. SaaS is most commonly hosted in cloud infrastructure, which means that users do not need to install anything to access the product\'s functionality.',
          subsections: [
            {
              title: 'The most popular types of SaaS services include:',
              content: '',
              list: [
                'Customer Resource Management (CRM)',
                'Enterprise Resource Planning (ERP)',
                'Accounting and Billing',
                'Project Management',
                'Web Hosting & E-commerce',
                'Human Resources',
                'Data Management',
              ],
            },
            {
              title: '',
              content: 'SaaS billing types are quite diverse. In most cases, a user purchases a service subscription to gain access to the product\'s functionality. The types of subscriptions can vary depending on the period of time, the number of users, the feature set, etc. Usually, the most expensive subscription includes almost limitless possibilities, including the development of customised solutions according to customer wishes and additional integrations with the platforms they use.',
            },
            {
              title: '',
              content: 'Convenience, flexibility, and relatively low expenses compared to licensing fees in software installations make SaaS products highly attractive to users worldwide. Recognising the profitability of this type of business, developers began to offer software, apps, databases, CRMs, and other products on a subscription basis on a massive scale.',
            },
          ],
        },
        {
          title: 'How do SaaS payments work?',
          content: 'If you are a software company that sells SaaS services, then you are most likely selling through a subscription model and offering your customers access to your product or service for a fixed period of time, usually monthly or annually. In order to make money from SaaS payments, you need to facilitate them. You can do this by setting up your own payment gateway or working with a third-party payment processor that can handle all aspects of accepting credit card payments on your behalf.',
          subsections: [
            {
              title: '',
              content: 'The process is quite simple: the customer buys your product or service online, pays you, and the payment is processed by your chosen SaaS payment system, which takes care of everything from taking the money from their credit card to transferring it into your bank account.',
            },
            {
              title: '',
              content: 'SaaS companies handle payments in a variety of ways, ranging from collecting credit card information upfront to asking for it after the customer has already signed up. But there is something that unites such payments: they\'re impossible without SaaS payment processing solutions.',
            },
          ],
        },
        {
          title: 'What is SaaS payment processing?',
          content: 'SaaS payment processing refers to the ability of businesses to collect payments from customers without having to deal with the hassle of building and maintaining their own payment processing infrastructure. This is accomplished by using a third-party payment processor, which handles all aspects of online payment processing from start to finish.',
          subsections: [
            {
              title: '',
              content: 'Usually, SaaS payment solutions are cloud-based platforms that integrate seamlessly with your existing financial infrastructure, enabling you to accept payments in multiple currencies without having to build your own processing. The SaaS payment platform\'s benefits include centralised, secure, scalable payment processing, integration with any billing system or payment service, the flexibility to use multiple payment methods, real-time reporting, and analytics tools.',
            },
            {
              title: '',
              content: 'Setting up SaaS payment processing is one of the most critical steps in starting your company. Not only does it help you get paid, but it provides an easy way for your customers to pay you.',
            },
            {
              title: 'Merchant account for SaaS businesses',
              content: 'A merchant account is an essential tool for SaaS (Software as a Service) businesses looking to accept online payments. It enables these businesses to process credit and debit card transactions from their customers securely and efficiently. In this context, a merchant account serves as a bank account that holds funds collected from these transactions before they are deposited into the business\'s actual bank account.',
            },
            {
              title: '',
              content: 'Upon registration with a payment service provider, you gain access to their software, enabling you to process transactions promptly. While the SaaS payment gateway and merchant account are often offered by the same payment system, it\'s worth noting that they can also exist as separate entities.',
            },
          ],
        },
        {
          title: 'How does the SaaS payment gateway work?',
          content: 'Let\'s find out how the SaaS payment gateway participates in processing online payments:',
          subsections: [
            {
              title: '',
              content: '',
              list: [
                'Customer enters their card details on a merchant\'s checkout page.',
                'Gateway encrypts the received information and securely sends an authorisation request to the merchant\'s acquiring bank. It also sends another request to the card network serving the cardholder (Visa, Mastercard, or other).',
                'The card network sends a confirmation to the acquiring bank and informs it of the amount to be debited from the customer\'s account.',
                'The issuer checks the customer\'s account balance and sends the transaction confirmation back to the network.',
                'After transaction approval, the funds will be debited from the customer\'s account and credited to the merchant\'s account.',
              ],
            },
            {
              title: '',
              content: 'Being an intermediary of each electronic transaction, the payment gateway protects cardholders\' data from breaches and unauthorised use by applying encryption, tokenisation, and other security measures.',
            },
          ],
        },
        {
          title: 'Why is a SaaS payment gateway important for business?',
          content: 'There are numerous benefits associated with utilising a SaaS payment gateway.',
          subsections: [
            {
              title: '',
              content: 'Firstly, it eliminates the need for additional hardware or software, streamlining the payment acceptance process. This not only simplifies operations but also reduces maintenance costs. Moreover, SaaS payment gateways adhere to stringent security standards, ensuring a high level of protection for both merchants and customers. Additionally, such gateways offer effortless integration into existing websites and e-commerce stores without requiring any extra coding. Most gateways come equipped with ready-made plugins, making the integration process seamless and hassle-free.',
            },
          ],
        },
        {
          title: 'How to choose a SaaS payment gateway?',
          content: 'Business owners are often confused about which SaaS payment gateway to use for their business. There are so many SaaS payment solutions out there, so it can be hard to know where to start. Given that clients\' satisfaction directly impacts the success of a SaaS business, the choice of a payment gateway requires careful consideration.',
          subsections: [
            {
              title: 'Security & compliance',
              content: 'Despite the robust security tools that providers have, there\'s always a risk of data breaches and fraud. Such incidents can harm the reputation of a company and lead to a loss of revenue. Only those SaaS payment solutions that meet the strictest requirements of the Payment Card Industry Data Security Standard (PCI DSS) can efficiently protect your customers\' sensitive data. Check out all the security measures and tools a particular provider uses and make sure that they have a valid certificate of compliance with PCI DSS.',
            },
            {
              title: 'Payment options available',
              content: 'If a SaaS product aims to reach an international audience, they need to adapt to customers\' payment preferences and the methods available in their region. The more options you integrate into your website, the more likely customers will subscribe. At Corefy, we support more than 400 payment methods, allowing you to enter the international market quickly.',
            },
            {
              title: 'Fees',
              content: 'Understand the fee structure of the payment gateway, including transaction fees, setup fees, monthly fees, and any additional costs. Compare different options and consider the volume of transactions you anticipate to ensure the pricing aligns with your budget.',
            },
            {
              title: 'Recurring payments',
              content: 'Almost all SaaS organisations run on a recurring payments basis, which means that customers can purchase access to a product for a regular fee based on a monthly, semi-annual or annual subscription. By providing your clients with the opportunity to activate recurring billing, you save them from being left without your service at the most inappropriate moment. What\'s more, you protect your business from losing clients.',
            },
            {
              title: 'Reporting and analytics',
              content: 'Look for payment gateways that provide comprehensive reporting and analytics features. These insights can help you track transaction data, monitor sales trends, identify issues, and optimise your payment processes.',
            },
            {
              title: '',
              content: 'SaaS payment facilitation requires a complex and thorough approach, as well as an in-depth analysis of your target audience. The good news is that our payment orchestration platform is capable of meeting all your SaaS business needs. Please contact us for more details!',
            },
          ],
        },
      ],
    },
  },
  'crypto-payment-processing': {
    id: 'crypto-payment-processing',
    term: 'Cryptocurrency payment processing',
    content: {
      intro: 'Crypto payment processing is the handling of transactions made with digital currencies like Bitcoin or Ethereum. As cryptocurrency payments become more widespread, services such as crypto payment processors and crypto payment gateways are gaining traction. Together, they form a growing infrastructure known as cryptocurrency payment processing — enabling businesses to accept and manage payments in digital currencies.',
      sections: [
        {
          title: 'What is crypto payment processing?',
          content: 'Crypto payment processing is the handling of transactions made with digital currencies like Bitcoin or Ethereum. As cryptocurrency payments become more widespread, services such as crypto payment processors and crypto payment gateways are gaining traction. Together, they form a growing infrastructure known as cryptocurrency payment processing — enabling businesses to accept and manage payments in digital currencies.',
          subsections: [
            {
              title: 'What is a cryptocurrency payment?',
              content: 'Simply put, a cryptocurrency payment is a transaction where crypto is used instead of fiat money. It relies on blockchain technology for validation, making it secure, transparent, and borderless.',
            },
          ],
        },
        {
          title: 'Pros and cons of crypto payments processing',
          content: 'Adopting crypto payment systems can bring many benefits, but it also comes with challenges.',
          subsections: [
            {
              title: 'Advantages of crypto payment processing',
              content: '',
              list: [
                'Independent. Crypto payments are decentralised – they are not controlled by any central authority or institution, which makes such transactions faster, cheaper, and more secure.',
                'Fast and secure. Crypto transactions are processed quickly, and the blockchain technology used to process them is highly secure.',
                'Cost-efficient. Because no intermediaries are involved in the process, transaction fees for crypto payments are generally lower than those for traditional payment methods, such as credit cards or bank transfers.',
                'Globally accessible. Crypto payments can be made from anywhere in the world, and there are no restrictions on who can make or receive payments. This makes it a great option for businesses that operate globally.',
                'Anonymous. Some cryptocurrencies offer a high degree of anonymity, which can be important for individuals who value privacy and security.',
                'No chargebacks. Chargebacks, which occur when a customer disputes a transaction and the funds are returned to them, are impossible with crypto payments. This means that businesses don\'t have to worry about losing money due to chargebacks.',
              ],
            },
            {
              title: '',
              content: 'Overall, crypto payment processing offers many advantages, making it a great option for businesses looking to streamline their payment processes and reduce costs.',
            },
            {
              title: 'Disadvantages of crypto payments processing',
              content: '',
              list: [
                'Volatility. One of the main features of cryptocurrencies is volatility. It is almost impossible to sell and buy, for instance, Ethereum or bitcoin cryptocurrency at the same price. That is why merchants who want to accept cryptocurrency payments risk receiving less than they intended.',
                'Scalability. The speed of cryptocurrency systems lags behind their fiat counterparts. The bitcoin network processes 4-5 transactions per second. The throughput of the Ethereum network is up to 30 transactions per second. The Ripple system allows for processing up to 1,500 transactions per second and EOS — up to 4,000. At the same time, Visa can process up to 24,000 transactions per second.',
                'Regulations. Cryptocurrency is not a legal tender in most jurisdictions, so accepting such payments sometimes creates legal difficulties for merchants. Problems also arise when paying taxes on income or profits that have been received in cryptocurrency.',
              ],
            },
          ],
        },
        {
          title: 'Should you accept crypto payments?',
          content: 'The demand for crypto payments grows as customers look for faster and more flexible ways to transact online. For businesses, working with a reliable crypto payment provider can open new markets, reduce costs, and improve customer experience.',
          subsections: [
            {
              title: 'Key reasons to consider:',
              content: '',
              list: [
                'Geographic coverage. Crypto payments solve the problem of payment landscape fragmentation. Users from almost any country can pay for the services or products of companies located in another country. With cards and e-wallets, this is often not possible.',
                'Reliability. Traditional processors or banks may decline a transaction for many reasons, such as a payment on a casino website. In such cases, cryptocurrency is the optimal solution: a blockchain wallet cannot block a transaction.',
                'Cost-efficiency. The cost of a crypto transaction is about 1% of the amount.',
                'Withdrawal speed. Processing of an e-wallet withdrawal can take about a week in some industries. Withdrawing in crypto happens several times quicker.',
              ],
            },
          ],
        },
        {
          title: 'What is a crypto payment gateway?',
          content: 'A crypto payment gateway or a crypto payment processor is a service or platform that processes payments in digital currencies and allows merchants to accept cryptocurrency payments. It acts as an intermediary and carries out six main functions:',
          subsections: [
            {
              title: '',
              content: '',
              list: [
                'Registers the crypto holder\'s or payer\'s data;',
                'Converts the amount at the specified exchange rate, if necessary;',
                'Executes verification (for example, via 3DS);',
                'Accepts cryptocurrency payments from a buyer;',
                'Sends transaction data to the blockchain and registers confirmations from nodes;',
                'Converts the received coins into fiat money (at the merchant\'s request);',
                'Transfers payments to a merchant;',
                'Provides confirmation of payment processing for both parties.',
              ],
            },
            {
              title: '',
              content: 'In short, it simplifies crypto merchant processing and allows businesses to offer more crypto payment methods to their customers.',
            },
          ],
        },
        {
          title: 'How does a crypto payment gateway work?',
          content: 'To pay with crypto, the customer only needs the recipient\'s wallet address. The process can be done by copying the address into a wallet app or by scanning a QR code. The blockchain then validates the transaction, and both parties receive confirmation.',
        },
        {
          title: 'Types of popular crypto payment gateways',
          content: 'There are two common models of cryptocurrency payment systems:',
          subsections: [
            {
              title: 'Crypto-fiat',
              content: 'In this case, the merchant receives fiat money into his account due to the process called a conversion. The commission is, on average, 1% or more, but this adds regulatory, banking, and exchange risks; also, additional counterparties arise. This kind of business is more profitable and more difficult to run.',
            },
            {
              title: 'Crypto-crypto',
              content: 'Purchasers make crypto payments, and merchants receive payments in this currency. Thus, the crypto payment processor does not use the banking infrastructure but, at the same time, earns very little because the transaction fees are about 0.5%, of which about 0.1% is spent on trading costs during the exchange.',
            },
            {
              title: '',
              content: 'Both models support modern crypto payment flows, giving businesses the flexibility to attract new customers.',
            },
          ],
        },
        {
          title: 'How to choose a crypto payment provider',
          content: 'There are plenty of payment processors for cryptocurrencies, but how to choose the best one? Modern crypto payment platforms go beyond simple transaction handling. They often include features like automated risk monitoring, advanced reporting dashboards, real-time currency conversion, and intelligent routing. These tools allow businesses to optimise approval rates, reduce costs, and deliver smoother checkout experiences.',
          subsections: [
            {
              title: '',
              content: 'A good provider should offer a complete crypto processing infrastructure that supports multiple currencies and provides flexible settlement options, whether in crypto or fiat. This ensures that your business can adapt to customer preferences while protecting itself from volatility.',
            },
            {
              title: '',
              content: 'Equally important is understanding how secure the cryptocurrency processor is. Compliance should be at the core: the provider must support KYC/AML processes, fraud prevention mechanisms, and PCI DSS compliance to safeguard both your business and your customers.',
            },
            {
              title: '',
              content: 'When comparing options, it\'s essential to evaluate the provider\'s position within the broader ecosystem of cryptocurrency payment gateways. Some cryptocurrency payment processors focus only on basic acceptance, while others act as a complete orchestration layer, giving you access to hundreds of local and global payment methods in one place.',
            },
            {
              title: '',
              content: 'Finally, a strong crypto payment processor for businesses is not just a technical vendor but a partner. The right provider will help you expand into new markets, reduce operational risks, and grow sustainably by giving you the flexibility to adopt new coins and scale as demand increases.',
            },
          ],
        },
        {
          title: 'How to accept bitcoin payments?',
          content: 'Developing an in-house crypto payment system is complex and costly. A better option is to integrate a ready-made crypto payments processor for businesses, which handles the technical side, supports multiple currencies, and keeps the system updated.',
          subsections: [
            {
              title: '',
              content: 'If you want to start accepting crypto without building everything from scratch, Corefy can be your trusted payment processor for cryptocurrency. We enable businesses to accept payments and make payouts via over 550 methods and different currencies, including crypto, via more than 650 providers. Get in touch with our team to know more and find out how your business can benefit from our solutions.',
            },
          ],
        },
      ],
    },
  },
}

interface GlossaryDetailProps {
  termId: string
}

export function GlossaryDetail({ termId }: GlossaryDetailProps) {
  const detail = glossaryDetails[termId]
  const basicTerm = glossaryTerms.find((term) => term.id === termId)

  // If no detail and no basic term, show not found
  if (!detail && !basicTerm) {
    return (
      <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Term not found
            </h1>
            <Link
              href="/glossary"
              className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-body"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to glossary
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // If no detailed content, show basic term info
  if (!detail && basicTerm) {
    return (
      <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/glossary"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 font-body transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to glossary
          </Link>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
            {basicTerm.term}
          </h1>

          {/* Definition */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
            <p className="text-[18px] text-gray-700 leading-relaxed font-body">{basicTerm.definition}</p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
              Looking for secure payment solutions?
            </h3>
            <p className="text-[18px] text-white/90 mb-6 max-w-2xl mx-auto font-body">
              Our PCI DSS L1-compliant payment platform brings you a data protection toolkit to handle your company&apos;s sensitive payment information. Minimise risks and enjoy peace of mind by relying on industry-leading security practices.
            </p>
            <Link
              href="/contacts"
              className="inline-block bg-white text-[#4730B8] px-8 py-3 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/glossary"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 font-body transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to glossary
        </Link>

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
          {detail.term}
        </h1>

        {/* Intro */}
        {detail.content.intro && (
          <div className="mb-8">
            <p className="text-[18px] text-gray-700 leading-relaxed font-body">{detail.content.intro}</p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {detail.content.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-heading">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">{section.content}</p>
              )}
              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    {subsection.title && (
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading">
                        {subsection.title}
                      </h3>
                    )}
                    {subsection.content && (
                      <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                        {subsection.content}
                      </p>
                    )}
                    {subsection.list && (
                      <ul className="space-y-3 list-disc list-inside">
                        {subsection.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-[18px] text-gray-700 leading-relaxed font-body">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
            Looking for secure payment solutions?
          </h3>
          <p className="text-[18px] text-white/90 mb-6 max-w-2xl mx-auto font-body">
            Our PCI DSS L1-compliant payment platform brings you a data protection toolkit to handle your company&apos;s sensitive payment information. Minimise risks and enjoy peace of mind by relying on industry-leading security practices.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-[#4730B8] px-8 py-3 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

