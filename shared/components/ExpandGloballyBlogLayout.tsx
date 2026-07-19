'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Expand Globally Blog Layout - matches BrosPay blog post design
 */
export function ExpandGloballyBlogLayout() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Author and Date Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 font-body mb-4">
                <span className="font-semibold text-gray-900">BrosPay Team</span>
                <span>•</span>
                <span>February 24, 2024</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="mb-12 bg-blue-600 rounded-[20px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-4xl font-bold font-heading">100%</div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Have you heard of Slack, a widespread cloud-based messaging tool? We at BrosPay use it daily, just like other 38 million active users worldwide. In 2021, Slack was acquired for $27.7 billion. In 2012, it didn't even exist.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                Isn't it astounding to understand that many of today's most renowned, profitable, and globally omnipresent businesses started as pet projects not long ago? Their journey has been primarily facilitated by the possibilities of the Internet combined with well-crafted business expansion strategies.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                We've analysed numerous cases and studies to derive the best business expansion practices, gathering them into one blog post for your convenience. Here, you'll also find statistical data on why businesses usually consider expansion, critical indicators of expansion preparedness, and challenges occurring while expanding. And in the end, there are recommendations for taking a shortcut and accessing new markets faster.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-100 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Get your copy of our global payment methods guide
              </h3>
              <p className="text-gray-700 mb-4 font-body">
                Download our comprehensive guide to payment methods available worldwide.
              </p>
              <Link
                href="#download"
                className="inline-block px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
              >
                Download
              </Link>
            </div>

            {/* Why Expand Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Why expand?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Many companies believe that entering a new market would unveil new opportunities, help attract more customers, and earn more money. According to a survey by VelocityGlobal, more than half of tech businesses in the US and the UK named <strong className="font-heading">growing their customer base</strong> as one of the main reasons to enter new markets.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                For some, taking their operations global is a must to remain competitive. <strong className="font-heading">Scaling up</strong> and accelerating operations is the second most crucial factor for companies.
              </p>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                Besides these reasons that are on the surface, numerous others are not that evident. For instance, expanding to <strong className="font-heading">access talent</strong> is also common in tech. Interestingly, this reason was mentioned by American companies 10% more often than by British ones. In today's uncertain time, some businesses plan expansion to <strong className="font-heading">diversify their portfolio</strong> and alleviate the risks, namely the threat of trade barriers. <strong className="font-heading">Merger and acquisition</strong> deals also account for many respondents' answers.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-8">
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  <strong className="font-heading">Overall, businesses believe access to foreign markets would make them more successful.</strong> That's what 73% of senior decision-makers confirmed in GoCardless research.
                </p>
              </div>
              <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                However, not every business is ready to go global, requiring profound preparation and specific settings.
              </p>
            </div>

            {/* 7 Indicators Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                7 indicators that you're ready for expansion
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-8 font-body">
                Here are some signs indicating it's time to conquer a new market or increase your share of existing ones:
              </p>
              
              <ol className="space-y-6">
                {[
                  {
                    title: 'The industry you\'re in is gaining traction',
                    description: 'We hope you do track the progress of the industry you\'re in. If so, you\'ll know if the market is saturated or has a place for growth. Analysing and predicting market trends is also helpful and may allow you to seize occurring opportunities earlier than your competitors.',
                  },
                  {
                    title: 'Your company is ahead of the plan',
                    description: 'If you\'ve been outperforming your benchmarks for a few months, it may indicate either the chance to accelerate your activities or the weakness of your benchmarking. Make sure it\'s the first one.',
                  },
                  {
                    title: 'You have sufficient resources and a solid growth strategy',
                    description: 'You\'ll need time, money, and endeavour for a successful expansion. Calculate if you\'re capable of investing in your growth now.',
                  },
                  {
                    title: 'Your operational infrastructure can handle scaling',
                    description: 'If you\'ve ensured your current operational systems, processes, and technologies are scalable and can support growth without compromising quality or customer satisfaction, you should consider expanding.',
                  },
                  {
                    title: 'You\'ve gained significant market share in your domestic market',
                    description: 'In this case, one way to keep growing your business is to launch new products for the existing customer base, but it\'s quite risky and costly. So there\'s another way — taking your existing successful offering to a new market.',
                  },
                  {
                    title: 'You\'ve gathered a strong team of professionals who enjoy working with you',
                    description: 'We at BrosPay believe the team is what makes the difference. Reliable and committed colleagues who support your aspirations double your chances for success!',
                  },
                  {
                    title: 'Your reputation crossed the borders before your business did',
                    description: 'If you\'re one of those businesses people crave to have at their location, congratulations — you\'re doing great! The demand and the word-of-mouth support would facilitate your expansion immeasurably.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4730B8] text-white flex items-center justify-center font-bold text-sm font-heading mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Challenges Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                The main challenges businesses face when expanding
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-8 font-body">
                Let's not get too romantic about international expansion. Besides all the good that going global can bring your business, there's also a fly in the ointment you should be aware of.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                    Hiring & Marketing
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    First, regardless of your team's greatness, expanding without hiring additional personnel in the new markets is hard, and international <strong className="font-heading">recruiting</strong> is tricky. Even if you don't need to hire new people abroad (which is unlikely), you'll have to <strong className="font-heading">relocate</strong> some of your current employees. It is a challenging task, too. Not everyone in your team may want to migrate to the new location. For those who would, you'll have to provide favourable conditions, take care of the documents and procedures, and cover all the expenses.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    Secondly, a significant challenge is understanding and adapting to a <strong className="font-heading">new market's cultural nuances and consumer behaviour</strong>. Each market has its unique preferences, values, and expectations that can dramatically affect your product's appeal, marketing strategy, and customer service approach. That's why <strong className="font-heading">building brand recognition and trust</strong> can be a daunting task. Your brand may already have a loyal customer base and a well-established reputation in your home market. But in a new market, you start from scratch.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                    Regulations & Payments
                  </h3>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    Operating in multiple countries exposes businesses to <strong className="font-heading">currency fluctuations</strong>, impacting pricing strategies, profit margins, and overall financial stability. Managing this risk requires careful financial planning, including using hedging strategies and maintaining flexibility in pricing.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    Besides, the new jurisdiction may charge larger <strong className="font-heading">taxes</strong> than you pay in your original market. Prepare by analysing which taxes, fees, and tariffs expansion to a particular country incurs. Moreover, the payroll process differs internationally – many businesses consider it challenging.
                  </p>
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                    Additionally, legal conditions for your industry may be stricter in the new region, or you may have to comply with some specific local <strong className="font-heading">regulations</strong>. Safeguarding your intellectual property also becomes more complex as you enter new jurisdictions.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 my-6">
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      It's great to have a local <strong className="font-heading">expert consultant</strong> who has experience in successfully bringing companies to their market. Still, finding and hiring such an expert is a formidable challenge itself.
                    </p>
                  </div>
                  <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                    Last but not least, accepting payments from foreign customers and <strong className="font-heading">managing international payments</strong> would require a study. A lack of expertise in the topic can damage your expansion, and all your other efforts risk falling flat. <strong className="font-heading">For 39% of businesses, the complexity of international payments is holding them back.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* How to Enter Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                How to enter new markets faster?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-8 font-body">
                So, how to cope with all the challenges and access the new market faster? Following these four recommendations will boost your expansion.
              </p>

              {/* Video Placeholder */}
              <div className="bg-gray-900 rounded-[20px] p-8 lg:p-12 mb-8 relative overflow-hidden">
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center relative">
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold font-heading">How to enter new markets faster with BrosPay</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: 'Consult with a local expert',
                    description: 'As we\'ve mentioned, finding a local expert may be difficult and pricey, but it undoubtedly pays off. A person or a company with proven local expertise will prepare you for the market entrance much faster. They\'ll help you understand local regulations and taxes, find the best partners to start, teach you about local business culture, and provide critical insights into the new market. It\'s a double win if you find an expert with experience in your niche.',
                  },
                  {
                    title: 'Prepare infrastructure & Processes',
                    description: 'For a confident start, think through the workflow for your foreign operations and plan all the processes needed. Organise a team for your new market, buy or lease necessary equipment and software, carefully prioritise the tasks for the first weeks, and decide which processes would be handled by your local team and which would remain the headquarters\' responsibility.',
                  },
                  {
                    title: 'Ensure compliance',
                    description: 'Compliance with your new market\'s regulations is a must. The local expert would help you deal with compliance, but if you don\'t have one, consider hiring lawyers or compliance officers with local legal expertise.',
                  },
                  {
                    title: 'Find a partner to handle payments',
                    description: 'The right payment partner can considerably soften the load for you. Besides giving you access to payment methods needed for expansion, a good payment service provider will also offer a solid toolkit for efficient payment management and optimisation. They can also unload the burden of complying with payment security standards, like PCI DSS, and implementing new payment-related technologies, such as 3DS2.0, P2P routing, cascading, etc.',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* BrosPay Solution Call-out */}
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-8">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  For instance, BrosPay is a one-stop shop for growing businesses. Our solution not only allows connecting new payment methods in a few clicks but enables working with multiple payment providers conveniently, managing everything in a single place. We continuously work on upgrading our platform to ensure our clients get the best-in-class experience and technology.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  Moreover, our team deeply understands the global payment market and has experience dealing with numerous providers and acquirers. We use that knowledge to assist our clients as they scale up, suggesting the best solution for each payment challenge.
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
                We would be delighted to help you out on your expansion journey!
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                Book a demo to meet us, learn more about how BrosPay can help you handle payments, and have all your questions answered by qualified specialists.
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
                  Discover how BrosPay can help you optimize your payment processes and increase conversion rates.
                </p>
                <Link
                  href="#book-call"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

