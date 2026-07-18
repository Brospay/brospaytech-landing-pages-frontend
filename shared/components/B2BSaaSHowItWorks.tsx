'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * B2B SaaS How It Works section
 */
export function B2BSaaSHowItWorks() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const steps = [
    {
      title: 'Customer enters card details',
      description: 'Customer enters their card details on your checkout page.',
    },
    {
      title: 'Gateway encrypts information',
      description: 'Gateway encrypts the received information and securely sends an authorization request to the acquiring bank.',
    },
    {
      title: 'Card network processes',
      description: 'The card network sends confirmation to the acquiring bank and informs it of the amount to be debited.',
    },
    {
      title: 'Issuer checks balance',
      description: 'The issuer checks the customer\'s account balance and sends transaction confirmation back to the network.',
    },
    {
      title: 'Transaction approved',
      description: 'After transaction approval, funds are debited from the customer\'s account and credited to your merchant account.',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How does the SaaS payment gateway work?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            The payment gateway acts as an intermediary, protecting cardholders' data through encryption, tokenization, and other security measures.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

