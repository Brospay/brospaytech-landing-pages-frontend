'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Financial Institution Challenges section - 5 major challenges
 */
export function FinancialInstitutionChallenges() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const challenges = [
    {
      number: 1,
      title: 'Data security & cyber incidents',
      description: 'As data breaches become prevalent, the security of customers\' payment data and transaction processing becomes one of the major concerns worldwide. Virtual threats jeopardise not only money but clients\' personal data as well.',
      solutions: [
        'Two-factor authorisation',
        'Biometric authentication',
        'Data encryption',
        'Real-time alerts and notifications',
        'Behaviour analysis',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Regulatory compliance & changes in legislation',
      description: 'The financial sector is one of the most regulated, requiring strict compliance with various governmental regulations. Financial institutions, banks, and payment service providers must comply with these standards and regulations to deliver customer services securely. This challenge becomes acute when expanding to new countries.',
      solutions: [
        'Make sure software and applications are legally compliant',
        'Hire legal counsellors with latest rules knowledge',
        'Partner with a payment platform that complies with all industry standards',
        'Use PCI-compliant payment intermediary',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Cross-border payments',
      description: 'Providing smooth cross-border payment services is a challenge for both banks and PSPs. The reasons lie in the number of intermediaries and payment processing fees they all charge for their services and currency conversion while processing a transaction. As a result, cross-border payments might be slow and expensive.',
      solutions: [
        'Partner with a payment gateway that processes payments utilising smart routing',
        'Use dynamic currency conversion',
        'Increase the efficiency of each transaction',
        'Broaden your audience',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Mobile & tech expertise',
      description: 'More and more users are becoming digital-savvy, displaying a shift in payment preferences to online methods. Moreover, users don\'t want just an opportunity to use digital payment services; they look for a seamless and secure user experience. Non-user-friendly apps and services result in lost clients and profit.',
      solutions: [
        'Hire a team of experienced developers to create a high-end solution',
        'Rely on ready-made solutions maintained by their creators',
        'Use white-label business model solutions',
        'Focus on seamless and secure user experience',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 5,
      title: 'Personalisation of services',
      description: 'This aspect is a core value for banking services. Modern personalised banking services are like a personal financial wellness coach who interacts with you when needed via the channel you want and offers solutions that meet your needs. People demand convenience from modern products and service providers.',
      solutions: [
        'Understand your customers\' behaviour and trends',
        'Use payment reconciliation and transactional data analysis',
        'Get deeper insights into your audience\'s habits and preferences',
        'Analyse users\' preferred payment methods and time for payment',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Five biggest payment challenges financial service companies face
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            With new technologies, increased security requirements, and ever-evolving customer experience expectations, it's no surprise that banks, PSPs, and other financial institutions might face a number of payment industry challenges.
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.number}
              className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary">
                    {challenge.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading">
                      {challenge.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-heading">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 font-body">
                    {challenge.description}
                  </p>
                  <div className="bg-gray-50 rounded-[15px] p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                      What can be done?
                    </h4>
                    <ul className="space-y-2">
                      {challenge.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 font-body">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

