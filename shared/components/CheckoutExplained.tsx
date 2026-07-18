'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Checkout Explained section component
 * Explains what checkout is and how to get one
 */
export function CheckoutExplained() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const buyerSteps = [
    'Customer chooses a product or service',
    'Customer is redirected to the checkout page',
    'Customer selects a payment method',
    'Customer enters payment details',
    'Verification and fraud checks occur',
    'Customer receives confirmation',
  ]

  const getCheckoutOptions = [
    {
      title: 'Create it yourself',
      description: 'For this, your business needs a Development team with expertise in developing and maintaining online payment products. It would require significant resources (time, money, capabilities, workforce).',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Hire someone to develop',
      description: "Do this if you know for sure how your checkout should look. You'll have to find a trusted outsource partner and provide them with detailed technical requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Use a ready-made solution',
      description: 'Third-party professionals can take the development hassles off your shoulders, providing you with a well-honed, secure and fast online checkout solution out-of-the-box.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      highlighted: true,
    },
  ]

  const chooseCheckoutPoints = [
    {
      title: 'Security and compliance',
      description: 'Your partner should take care of tokenisation, end to end encryption, masking, and fraud protection for you.',
    },
    {
      title: 'Customisation opportunities',
      description: 'Your checkout should be customised to suit the look and feel of your website.',
    },
    {
      title: 'Variety of payment methods',
      description: "Analyse your target audience's preferences and select the reasonable number of methods.",
    },
    {
      title: 'Localised experience',
      description: 'Add local payment options for your foreign customers along with popular global ones.',
    },
    {
      title: 'Simple integration',
      description: 'Integration should be fast and simple with minimum time to start accepting payments.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is Online Checkout */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            <div>
              <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
                What is online checkout?
              </h2>
            </div>
            <div>
              <p className="text-[18px] text-gray-600 leading-relaxed font-body">
                Online checkout is a page where the customer is redirected after adding goods or services to their cart. It's where the actual payment happens—the customer enters their payment details, confirms the transaction, and receives a confirmation.
              </p>
            </div>
          </div>

          {/* Buyer's Journey */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 font-heading">
              The buyer's point of view
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyerSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4730B8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-heading">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-body">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Get a Checkout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              How to get a checkout for your business
            </h2>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              If you want to sell goods or services online, accept payments for subscriptions, or accept donations on your website, you need an online checkout. There are three ways you can get one:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {getCheckoutOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  option.highlighted
                    ? 'bg-[#4730B8] text-white'
                    : 'bg-white shadow-sm'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  option.highlighted
                    ? 'bg-white/20 text-white'
                    : 'bg-[#E8E4FF] text-[#4730B8]'
                }`}>
                  {option.icon}
                </div>
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 font-heading ${
                  option.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {option.title}
                </h3>
                <p className={`text-[16px] leading-relaxed font-body ${
                  option.highlighted ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {option.description}
                </p>
                {option.highlighted && (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-white font-semibold font-body">
                      Recommended
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How to Choose */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              How to choose from thousands of options
            </h2>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              Here are a few points you should take into account when either creating your checkout or searching for a partner with a suitable solution:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chooseCheckoutPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4730B8] flex items-center justify-center text-white font-bold text-lg mb-4 font-heading">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-gray-600 font-body">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

