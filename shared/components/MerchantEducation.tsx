'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Merchant Education section component
 * Educational content about payments management and merchant software
 */
export function MerchantEducation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const advantages = [
    'Make the billing management more efficient',
    "Save money, for you don't need to purchase any additional software or equip your team with additional financial experts",
    'Manage all daily payment processes via one reliable dashboard',
    'Split the financial flows across various projects via merchant accounts at certain PSPs',
    'Ensure money security since all the data is reliably encrypted',
  ]

  const softwareFeatures = [
    'Get reports for analysing business performance',
    'Understand and analyse the structure of your financial processes across every payment system',
    'Segment the data and ensure independent workflows for different entities',
    "Track all payment systems' transactional data",
    'Download customised or predefined reports with detailed information on all payments',
    'Manage everyday tasks conveniently through a single point',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is payments management */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What Is Payments Management?
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
            Payments management might become tangled as your online business develops and expands. In this case, payment management automation tools and technology solutions might come in handy. By choosing a reliable and feature-rich software solution, you'll be able to efficiently manage financial flows, billing and payment processes and avoid disorder in settlement with the counterparties — banks and service providers.
          </p>
          <p className="text-gray-600 leading-relaxed font-body">
            Developing such a payment management software, or merchant management control system, takes time and effort. At the same time, such a payment management solution improves the payment discipline, adds to the transparency of transactions, and strengthens internal control.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            How It Works?
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
            Globalisation, digitalisation, and automation are moving forward at warp speed, bringing e-commerce to a new level. Online businesses sell their products and services worldwide, regardless of borders, time differences, and preferred payment options for billing.
          </p>
          <p className="text-gray-600 leading-relaxed font-body">
            There are three main powerhouses that help money reach its payees: payment gateways, payment processors, and merchant accounts. Orchestrating the whole payment process might be challenging — customers use credit and debit cards, different currencies, including digital ones, and other billing options. A payment management system allows for monitoring business with several storefronts and managing its payment processes and financial flows via a single access point.
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Advantages Of Payment Management Software
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed mb-6 font-body">
            The particular advantages depend on what's included in payment management software, but generally, implementing a merchant management solution (MMS) makes it easy to:
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-body">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Merchant management software by BrosPay */}
        <div className="bg-[#4730B8] rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
            Merchant Management Software By BrosPay
          </h2>
          <p className="text-white/90 leading-relaxed mb-6 font-body">
            BrosPay equips merchants with reliable payment management software that allows them to control financial flows at several points of sale at once. Payment management software provides analytics on money movement across several accounts. It displays the data about the processed transactions per day and allows you to set alerts about important incidents so that you don't miss any critical data.
          </p>
          <p className="text-white/90 leading-relaxed mb-8 font-body">
            With the payment management software by BrosPay, you can compare different periods and analyse your business management performance. This tool for merchant management allows you to monitor the conversion rates of different periods to understand the overall efficiency and throughput of payment processing software.
          </p>
          <p className="text-white/90 leading-relaxed mb-6 font-body">
            The merchant management tool by BrosPay allows you to:
          </p>
          <ul className="space-y-3 mb-8">
            {softwareFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90 font-body">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/80 leading-relaxed font-body">
            Equip your online business with cross-functional automation and payment management software to efficiently monitor and operate your transaction flows across multiple payment systems.
          </p>
        </div>
      </div>
    </section>
  )
}

