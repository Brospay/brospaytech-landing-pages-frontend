'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Certifications & Compliance section component
 * Shows PCI DSS, VISA TPA, MRP, Google Pay, Apple Pay, PSD2
 */
export function CertificationsCompliance() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const certifications = [
    {
      id: 'pci',
      title: 'PCI DSS Level 1 compliance',
      description: 'Payment Card Industry Data Security Standard (PCI DSS) is one of the security standards created by major payment systems. Compliance with this standard makes online transactions secure and protects them against identity theft.',
      features: [
        { title: 'Level 1 PCI compliant', description: 'ValoraPay meets the strictest requirements of the highest PCI DSS. It ensures that your payments are highly secure.' },
        { title: 'Industry recognition', description: "We are on Visa's Global Registry of Service Providers and Mastercard's Compliant Service Providers Lists." },
        { title: 'No need for you to be PCI compliant', description: 'Eliminate the hassle with PCI DSS compliance and let us deal with the banks on your behalf.' },
        { title: 'No prohibited data storage', description: 'We do not store raw magnetic-stripe, card validation codes or PIN block data.' },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'visa',
      title: 'VISA Third Party Agent (TPA) and Mastercard Registration Program (MRP)',
      description: 'Our VISA TPA and Mastercard MRP registrations are an added layer of security for our clients. All service providers who have access to cardholder data must comply with the data security requirements.',
      features: [],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: 'google',
      title: 'Google Pay',
      description: 'ValoraPay is officially featured in the Google Pay list of participating processors. It allows our clients to easily implement this in-demand payment method and securely process Google Pay transactions.',
      features: [],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 'apple',
      title: 'Apple Pay',
      description: "We've implemented the Apple Pay token decrypt service, which allows our clients to decrypt Apple Pay tokens and transfer the card data to the providers instead of transferring tokens.",
      features: [],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 'psd2',
      title: 'PSD2 compliant software',
      description: 'PSD2 is the second iteration of the Payment Services Directive implemented by the European Union. It enables bank customers to use third-party providers to manage their finances with strong customer authentication (SCA).',
      features: [],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Certifications & Compliance
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            We have a dedicated compliance team to review procedures and policies and to align them with standards, and to determine what controls, processes, and systems are needed for compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-[#E8E4FF] flex items-center justify-center text-[#4730B8] flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{cert.title}</h3>
                  <p className="text-gray-600 mb-4 font-body">{cert.description}</p>
                  
                  {cert.features.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      {cert.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 relative"
                          onMouseEnter={() => setActiveTooltip(`${cert.id}-${featureIndex}`)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-semibold font-body">{feature.title}</span>
                            <div className="relative">
                              <svg
                                className="w-4 h-4 text-[#4730B8] cursor-pointer"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              {activeTooltip === `${cert.id}-${featureIndex}` && (
                                <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
                                  <p className="text-sm font-body">{feature.description}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

