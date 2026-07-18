'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Forex Payment Reconciliations section component
 * Shows benefits and reconciliation table
 */
export function ForexReconciliations() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const benefits = [
    'Stay in control of business performance',
    'Monitor the incoming and outgoing flows',
    'Analyse discrepancies and pinpoint bottlenecks and fraud',
    'Track all mismatches and errors made by banks or providers',
    'Identify trends',
  ]

  const reconciliationData = [
    {
      method: 'Skrill',
      methodColor: 'bg-indigo-600',
      amount: '$1,000.00',
      providerAmount: '$1,000.00',
      status: 'Correct',
    },
    {
      method: 'stripe',
      methodColor: 'bg-blue-600',
      amount: '$320.50',
      providerAmount: '$320.50',
      status: 'Correct',
    },
    {
      method: 'VISA',
      methodColor: 'bg-blue-700',
      amount: '$2,200.00',
      providerAmount: '$2,200.00',
      status: 'Correct',
    },
    {
      method: 'NETELLER',
      methodColor: 'bg-green-600',
      amount: '$580.80',
      providerAmount: '$580.80',
      status: 'Correct',
    },
    {
      method: 'Apple Pay',
      methodColor: 'bg-black',
      amount: '$249.99',
      providerAmount: '$249.99',
      status: 'Correct',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-[2.4rem] font-medium text-[#000] leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Equip Yourself with Payment Reconciliations
            </h2>
            <span className="bg-[#FCD34D] text-black text-xs font-bold px-2.5 py-1 rounded uppercase mt-2">
              NEW
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed font-body">
            Organise and unify the transaction data with fully-equipped accounting software for Forex businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Payment Reconciliations Image */}
          <div className="relative">
            <img
              src="/assets/forex_page/Payment-Reconciliations.png"
              alt="Payment Reconciliations"
              className="w-full h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right Section - Benefits */}
          <div>
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed font-body pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/reconciliations"
              className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a2696] transition-colors font-body group"
            >
              Learn more about Reconciliations
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
