/**
 * Case Studies Data
 * Contains all case study information
 */

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  clientName: string
  location: string
  industry: string
  targetGeo: string
  image: string
  aboutCompany: string
  backgroundBefore: string
  quote?: {
    text: string
    author: string
    role: string
  }
  whyChoose: string
  benefits: Array<{
    title: string
    description: string
    additionalContent?: string
  }>
  conclusion: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'forex-client',
    title: 'How a forex platform leveraged ValoraPay to improve payment acceptance and expand globally',
    subtitle: 'See how one of the leading forex trading platforms leveraged ValoraPay to overcome its payment processing challenges in various regions and streamline operations.',
    clientName: 'Forex client',
    location: 'London, United Kingdom',
    industry: 'Forex',
    targetGeo: 'International',
    image: '/assets/landing_page/client_stories/three_img.webp',
    aboutCompany: 'The client\'s company represents a leading online forex trading platform that has been offering traders in 170 countries a wide range of services since 2002.',
    backgroundBefore: 'At first, the company established direct integrations with payment providers and acquirers. But over the course of time, as their customer base and the number of processed transactions in different currencies grew exponentially, it was getting more complicated to manage all payment flows and integrations on their own. Thus, the company decided to seek professional help. Before discovering ValoraPay, our client partnered with another payment gateway to facilitate their payment processing and management. This partnership lasted one year and was terminated due to several reasons.',
    quote: {
      text: 'Our crucial need was connecting several new PSPs almost every month to make our traders\' payment journey convenient in every region. But it sometimes took them too long to establish integrations for us – the record is half a year for connecting one provider. Moreover, we didn\'t have any custom integrations included in our plan and were charged for each separately.',
      author: 'Head of Payments',
      role: 'at the client\'s company',
    },
    whyChoose: 'These aspects, topped with weak-quality support and price hikes, made our client seek an alternative to address all their needs. Communicating with their network, our client discovered ValoraPay\'s forex payment processing solution and decided to try it. It\'s been a year since we partnered with the client\'s company. Below you can see how our cooperation evolved, what the results are, and what\'s coming in the near future.',
    benefits: [
      {
        title: 'Unifying processes & decreasing operational costs',
        description: 'Leveraging ValoraPay\'s solution allowed our client to access a pool of ready-made connections with payment service providers via one integration with our platform. Also, managing all their payment flows through our payment dashboard helped centralise their operations and streamline payment processing.',
      },
      {
        title: 'Facilitated scalability',
        description: 'As our client expanded its customer base globally, the need to establish new integrations was vital. Poor choice of payment options could hinder customer acquisition and retention, as traders often prefer platforms that offer various payment options. Moreover, the high-risk nature of the client\'s business made it even more challenging to get high-risk MIDs with particular payment providers.',
        additionalContent: 'Integrating ValoraPay, they got access to a list of 250+ off-the-shelf integrations simultaneously, which kept growing with time. Also, they could request custom integrations for the convenience of their clients in different geographies.',
      },
      {
        title: 'Easy and efficient reconciliation',
        description: 'Working with multiple payment providers, our client faced challenges in reconciling transactions across various accounts. This created a time-consuming and error-prone process, leading to higher operational costs and settlement delays. ValoraPay\'s automated reconciliation capabilities simplified the process of reconciling transactions across various channels. By using real-time transaction data from ValoraPay, the client reduced their manual effort, minimised errors, and accelerated settlement times.',
      },
      {
        title: 'Conversion rates growth',
        description: 'Custom payment routing and cascading schemes. By configuring proper payment routing and cascading rules, our client heightened the efficiency of each transaction and increased their project profitability. The approach involved a meticulous analysis of traders\' behavioural patterns, allowing for the identification of key factors influencing conversion rates.',
        additionalContent: 'Card bindings. By leveraging our new Card binding feature, our client increased their acceptance rates. Here\'s how it works: our system recognises which MID processed a successful transaction and binds the card used for the payment to that specific MID for future transactions. The next time the customer uses that card, the payment is sent directly to that same MID, resulting in higher success rates.',
      },
    ],
    conclusion: 'With the help of our platform features and a dedicated Customer Success Manager, our client overcame several forex payment processing challenges, including stagnation in their conversion rates in a specific region and lack of scaling speed. A year of our cooperation resulted in improved operational efficiency, increased conversion rates, and customer satisfaction.',
  },
  {
    slug: 'gambling-client',
    title: 'How an international gambling company expanded operations and optimized conversion rates',
    subtitle: 'Discover how we helped an international gambling and betting company expand its operations and optimise conversion rates across diverse geographical locations.',
    clientName: 'Gambling client',
    location: 'International',
    industry: 'Gambling',
    targetGeo: 'International',
    image: '/assets/landing_page/client_stories/one_img.webp',
    aboutCompany: 'The client represents a leading international gambling and betting company operating across multiple jurisdictions worldwide.',
    backgroundBefore: 'The company faced significant challenges in managing payment processing across different regions, with varying regulatory requirements and payment method preferences. They needed a unified solution to streamline operations and improve conversion rates.',
    whyChoose: 'After evaluating multiple payment orchestration platforms, the client chose ValoraPay for its comprehensive high-risk payment processing capabilities and extensive provider network.',
    benefits: [
      {
        title: 'Global payment coverage',
        description: 'ValoraPay enabled the client to accept payments from customers worldwide through our extensive network of payment providers, each optimized for specific regions and payment methods.',
      },
      {
        title: 'Improved conversion rates',
        description: 'By implementing smart routing and cascading strategies, the client saw significant improvements in payment acceptance rates across all target markets.',
      },
      {
        title: 'Regulatory compliance',
        description: 'Our platform helped the client navigate complex regulatory requirements across different jurisdictions, ensuring compliance while maintaining operational efficiency.',
      },
      {
        title: 'Real-time analytics',
        description: 'Advanced analytics and reporting capabilities provided the client with real-time insights into payment performance, enabling data-driven decision making.',
      },
    ],
    conclusion: 'Through our partnership, the gambling client successfully expanded into new markets, improved conversion rates, and streamlined their payment operations, resulting in increased revenue and customer satisfaction.',
  },
  {
    slug: 'kuna',
    title: 'How Kuna became the first cryptocurrency exchange in Eastern Europe with unified payment operations',
    subtitle: 'We gave the first cryptocurrency exchange in the Eastern Europe region a single place to manage its operations and provide payment services to other businesses.',
    clientName: 'Kuna',
    location: 'Ukraine',
    industry: 'Crypto exchange',
    targetGeo: 'International, Europe',
    image: '/assets/landing_page/client_stories/two_img.webp',
    aboutCompany: 'Kuna is the first cryptocurrency exchange in Eastern Europe, providing trading services and payment solutions for businesses in the region.',
    backgroundBefore: 'As a pioneering crypto exchange, Kuna needed a robust payment infrastructure to support both their trading operations and their B2B payment services. Managing multiple payment integrations was becoming increasingly complex.',
    whyChoose: 'Kuna chose ValoraPay to consolidate their payment operations and provide seamless payment services to their business clients.',
    benefits: [
      {
        title: 'Unified payment management',
        description: 'ValoraPay provided Kuna with a single platform to manage all payment operations, simplifying their infrastructure and reducing operational overhead.',
      },
      {
        title: 'B2B payment services',
        description: 'The platform enabled Kuna to offer comprehensive payment services to other businesses, creating new revenue streams and expanding their market presence.',
      },
      {
        title: 'Multi-currency support',
        description: 'With ValoraPay\'s multi-currency capabilities, Kuna could seamlessly handle transactions in various fiat and cryptocurrencies.',
      },
      {
        title: 'Scalable infrastructure',
        description: 'As Kuna\'s business grew, ValoraPay\'s scalable infrastructure supported their expansion without requiring significant additional resources.',
      },
    ],
    conclusion: 'ValoraPay helped Kuna establish itself as a leading payment service provider in Eastern Europe, enabling them to offer comprehensive payment solutions while maintaining focus on their core cryptocurrency exchange business.',
  },
  {
    slug: 'psp-client',
    title: 'How a PSP streamlined operations with ValoraPay\'s white-label solution',
    subtitle: 'Learn how our White label payment provider solution facilitated the whole operational cycle for a payment company and helped them handle growing payment volume.',
    clientName: 'PSP client',
    location: 'Eastern Europe',
    industry: 'PSP',
    targetGeo: 'Eastern Europe',
    image: '/assets/landing_page/client_stories/one_img.webp',
    aboutCompany: 'The client is a payment service provider operating in Eastern Europe, serving merchants across various industries.',
    backgroundBefore: 'The PSP was struggling to manage growing payment volumes and needed a more efficient way to handle operations while maintaining their brand identity.',
    whyChoose: 'The client chose ValoraPay\'s white-label solution to streamline operations while preserving their brand and customer relationships.',
    benefits: [
      {
        title: 'White-label solution',
        description: 'ValoraPay\'s white-label platform allowed the PSP to maintain their brand identity while leveraging our robust payment infrastructure.',
      },
      {
        title: 'Operational efficiency',
        description: 'Automated reconciliation, reporting, and transaction management significantly reduced manual work and operational costs.',
      },
      {
        title: 'Volume handling',
        description: 'The platform\'s scalable architecture enabled the PSP to handle increasing payment volumes without performance degradation.',
      },
      {
        title: 'Provider network',
        description: 'Access to ValoraPay\'s extensive provider network gave the PSP more options to serve their merchants effectively.',
      },
    ],
    conclusion: 'With ValoraPay\'s white-label solution, the PSP successfully streamlined their operations, reduced costs, and improved their ability to serve merchants, positioning them for continued growth.',
  },
  {
    slug: 'boosta',
    title: 'How Boosta manages multiple products with ValoraPay\'s multitenancy solution',
    subtitle: 'The company with numerous products and websites conveniently operates their payment flows in the multitenancy environment after a single integration with us.',
    clientName: 'Boosta',
    location: 'International',
    industry: 'IT company',
    targetGeo: 'International',
    image: '/assets/landing_page/client_stories/two_img.webp',
    aboutCompany: 'Boosta is an IT company with multiple products and websites, each requiring payment processing capabilities.',
    backgroundBefore: 'Managing separate payment integrations for each product was becoming increasingly complex and costly, requiring significant development and maintenance resources.',
    whyChoose: 'Boosta chose ValoraPay for its multitenancy capabilities, allowing them to manage all products through a single integration.',
    benefits: [
      {
        title: 'Single integration',
        description: 'One integration with ValoraPay enabled Boosta to manage payment flows for all their products and websites, significantly reducing development time and costs.',
      },
      {
        title: 'Centralized management',
        description: 'The multitenancy environment provided centralized control over all payment operations while maintaining separation between different products.',
      },
      {
        title: 'Cost efficiency',
        description: 'By consolidating payment processing, Boosta reduced operational costs and simplified their payment infrastructure.',
      },
      {
        title: 'Easy scaling',
        description: 'Adding new products or websites became much simpler, requiring only configuration changes rather than new integrations.',
      },
    ],
    conclusion: 'ValoraPay\'s multitenancy solution transformed how Boosta manages payments across all their products, enabling them to focus on product development rather than payment infrastructure.',
  },
  {
    slug: 'coffeeok',
    title: 'How Coffeeok enhanced customer experience with personalized checkout',
    subtitle: 'With the help of ValoraPay, Ukrainian e-commerce merchant Coffeeok organised a personalised checkout experience and gained customer loyalty and trust.',
    clientName: 'Coffeeok',
    location: 'Ukraine',
    industry: 'E-commerce',
    targetGeo: 'Ukraine',
    image: '/assets/landing_page/client_stories/three_img.webp',
    aboutCompany: 'Coffeeok is a Ukrainian e-commerce merchant specializing in coffee products, serving customers across Ukraine.',
    backgroundBefore: 'Coffeeok needed to improve their checkout experience to reduce cart abandonment and increase customer satisfaction.',
    whyChoose: 'Coffeeok chose ValoraPay for its flexible checkout customization options and local payment method support.',
    benefits: [
      {
        title: 'Personalized checkout',
        description: 'ValoraPay enabled Coffeeok to create a customized checkout experience that matched their brand and improved user experience.',
      },
      {
        title: 'Local payment methods',
        description: 'Integration with local Ukrainian payment methods made it easier for customers to complete purchases.',
      },
      {
        title: 'Reduced abandonment',
        description: 'The improved checkout experience led to lower cart abandonment rates and higher conversion rates.',
      },
      {
        title: 'Customer trust',
        description: 'A seamless, secure checkout process helped build customer trust and loyalty, leading to repeat purchases.',
      },
    ],
    conclusion: 'By partnering with ValoraPay, Coffeeok successfully enhanced their checkout experience, resulting in improved conversion rates, customer satisfaction, and business growth.',
  },
  {
    slug: 'letyshops',
    title: 'How LetyShops scaled internationally with ValoraPay\'s payout solutions',
    subtitle: 'Discover the success story of LetyShops to learn how we helped them handle mass payouts and establish new integrations, equipping the company for international expansion.',
    clientName: 'LetyShops',
    location: 'Worldwide',
    industry: 'Cashback service',
    targetGeo: 'Worldwide',
    image: '/assets/landing_page/client_stories/one_img.webp',
    aboutCompany: 'LetyShops is a cashback service operating worldwide, providing rewards to customers for their online purchases.',
    backgroundBefore: 'As LetyShops expanded internationally, managing mass payouts across different countries and payment methods became increasingly challenging.',
    whyChoose: 'LetyShops chose ValoraPay for its comprehensive payout solutions and ability to handle high-volume transactions across multiple geographies.',
    benefits: [
      {
        title: 'Mass payout capabilities',
        description: 'ValoraPay\'s batch payout functionality enabled LetyShops to efficiently process thousands of payouts simultaneously.',
      },
      {
        title: 'Global reach',
        description: 'Access to ValoraPay\'s provider network allowed LetyShops to offer payouts in various countries and currencies.',
      },
      {
        title: 'Rapid integration',
        description: 'Quick integration with new payment providers enabled LetyShops to expand into new markets faster.',
      },
      {
        title: 'Cost optimization',
        description: 'Optimized payout routing helped LetyShops reduce transaction costs while maintaining fast processing times.',
      },
    ],
    conclusion: 'With ValoraPay\'s support, LetyShops successfully scaled their operations internationally, handling mass payouts efficiently and expanding into new markets with confidence.',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}

