'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Mass Payouts Education section component
 * Educational content about mass payouts, how to make them, and what to look for
 */
export function MassPayoutsEducation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const keyCharacteristics = [
    {
      title: 'Simplicity',
      description: "For online businesses, dealing with massive payouts may seem complicated. That's why we suggest looking for a payment partner that will go beyond offering you a sophisticated and easy-to-use payment platform. A valid payment partner would be willing to assist you and share their payment knowledge.",
    },
    {
      title: 'Versatility',
      description: 'When choosing a partner, deep dive into the characteristics and components of the provided payout tool. It should not just cover your needs but be universal, future-proof, and versatile. Take the number of supported payment methods and currencies into account.',
    },
    {
      title: 'Speed',
      description: "For many businesses, mass payouts is a complex and time-demanding activity. That's why the payment platform should allow your company to execute mass payouts easily and fast enough to meet the growing expectations of your customers, affiliates, partners, suppliers, or other money recipients.",
    },
    {
      title: 'Controllability',
      description: 'The payment platform that allows businesses to monitor how mass payouts progress in real time and how the statuses of each payment change has a serious advantage. Especially if the platform also enables reports generation, reconciliation, and company access management.',
    },
  ]

  const howToSteps = [
    'Making a mass payout spreadsheet file with numerous items.',
    'Uploading it to our payment platform.',
    "Watching how the money successfully goes out to all your counterparties!",
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How to make mass payouts? */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How to Make Mass Payouts?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
              If the mass payout process is a crucial component of your business activity, making it as efficient as possible is very important. That's why you need a solution for <strong>automating</strong> your account payable processes.
            </p>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
              If your business also involves accepting online payments, you should make the most out of your payment service supplier. Today, most of them offer support for <strong>both payments and payouts</strong>, and that's much more time- and cost-efficient than going through solution research and onboarding to handle the mass payout function.
            </p>
          </div>
        </div>

        {/* What to look for in a mass payout solution? */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What to Look for in a Mass Payout Solution?
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-body">
            Before spending money and onboarding to any payment solution supplier, it's important to evaluate your business needs and check what features are crucial for your company.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {keyCharacteristics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-[10px] bg-[#4730B8] flex items-center justify-center text-white font-bold text-lg mb-4 font-heading">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to make a batch payout using ValoraPay? */}
        <div className="bg-[#4730B8] rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
            How to make a batch payout using ValoraPay?
          </h2>
          <p className="text-white/90 leading-relaxed mb-8 font-body">
            Payment orchestration platform ValoraPay is the technical partner you can completely trust with your online payments. Our platform offers sophisticated mass payouts capabilities, allowing you to send out money to thousands of users worldwide at once by following three simple steps:
          </p>
          <div className="space-y-4 mb-8">
            {howToSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-[10px] bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-heading">
                  {index + 1}
                </div>
                <p className="text-white/90 font-body pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-white/90 leading-relaxed mb-8 font-body">
            Once it's done, you'll be able to download a digital report with the data on every payment and share it within your company or network.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-[10px] hover:bg-gray-100 transition-colors font-body"
          >
            Contact us to learn more
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

