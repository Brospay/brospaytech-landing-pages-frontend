'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { FAQ } from './FAQ'
import { ClientStories } from './ClientStories'

/**
 * Pricing page component
 * Features:
 * - Hero section with heading and description
 * - Pricing plans (Standard, Professional, Enterprise)
 * - Comparison table
 * - Add-ons section
 * - Customer Success & Support plans
 * - Calculator section
 * - FAQ section
 * - Smooth fade-in animations
 */
interface PricingProps {
  activeTab?: 'products' | 'customer-success'
}

export function Pricing({ activeTab = 'products' }: PricingProps) {
  const [showMore, setShowMore] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'professional' | 'enterprise'>('standard')
  const [transactionCount, setTransactionCount] = useState(10000)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [selectedSupport, setSelectedSupport] = useState<string[]>([])
  const [showAddOns, setShowAddOns] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  // Update transaction count when plan changes
  const handlePlanChange = (plan: 'standard' | 'professional' | 'enterprise') => {
    setSelectedPlan(plan)
    if (plan === 'standard') {
      setTransactionCount(10000)
    } else if (plan === 'professional') {
      setTransactionCount(100000)
    }
  }

  const plans = [
    {
      name: 'Standard',
      description: 'For small and medium-sized businesses',
      monthlyFee: 2500,
      currency: '€',
      transactions: 10000,
      pricePerTransaction: '€0.072',
      headerColor: 'from-blue-500 to-blue-600',
      features: [
        'Tools for optimised checkout flows',
        'Access to global payment capabilities after a single integration with us',
        'Comprehensive security and rigorous compliance',
        'Payouts using bank cards and alternative methods',
        'A unified dashboard for efficient management',
        'Connect an unlimited number of payment providers from the hub',
      ],
    },
    {
      name: 'Professional',
      description: 'For larger businesses or those seeking advanced administration tools',
      monthlyFee: 6000,
      currency: '€',
      transactions: 100000,
      pricePerTransaction: '€0.024',
      headerColor: 'from-green-500 to-green-600',
      showStar: true,
      features: [
        'Creation of a hosted payment page in your design once per year',
        '1 new payment flow integration per month',
        'Phone, chat, and email support',
        'White label package (merchant portal, documentation, ledger)',
        'Financial analytics and reporting',
      ],
      includesStandard: true,
    },
    {
      name: 'Enterprise',
      description: 'For very large businesses or those in highly regulated industries',
      monthlyFee: 'Tailored',
      currency: '',
      transactions: '> 1,000,000',
      pricePerTransaction: 'Tailored',
      headerColor: 'from-orange-500 to-orange-600',
      features: [
        'Robust developer platform and third-party integrations',
        'Ready-made add-ons and on-demand development',
        'Comprehensive testing tools',
        'Direct database access',
      ],
      includesStandard: true,
      includesProfessional: true,
    },
  ]

  const addOns = [
    {
      title: 'Custom hosted payment page',
      description: 'We can develop a payment page according to your specific requirements and tailored to your design.',
      price: '€1,500 / one time',
      icon: (
        <div className="relative">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-[10px] flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: 'New payment flow integration',
      description: 'We can integrate any payment provider out there on demand.',
      price: '€1,500 / one time',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'White-label pack',
      description: 'If you need more than one client-facing interface, we can develop another one for you.',
      price: '€1,500 / per month',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ]

  const supportPlans = [
    {
      name: 'Standard',
      description: 'High-quality support and resources available to every ValoraPay client.',
      price: 'Included with every plan',
      features: [
        'Dedicated Account Manager',
        'Guided journeys',
        'Initial training',
      ],
    },
    {
      name: 'Premier',
      description: 'Get expert advice, recommendations and support whenever you need it',
      price: '20% of the invoice per month',
      features: [
        'Success guidance',
        'Customer support',
        'Development support',
      ],
      includesStandard: true,
    },
    {
      name: 'Turnkey',
      description: 'Reach your goals faster with unlimited access to expert assistance and consultancy',
      price: '30% of the invoice per month',
      features: [
        'Onboarding assistance',
        'Admin assistance',
        'Facilitator assistance',
      ],
      includesStandard: true,
      includesPremier: true,
    },
  ]

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price
    return new Intl.NumberFormat('en-US').format(price)
  }

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Content Section with Gray Background */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'products' && (
            <>
              {/* Pricing Plans */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-[30px] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 font-heading">{plan.name}</h3>
                          {plan.showStar && (
                            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-body">{plan.description}</p>
                      </div>

                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 font-body mb-1">Infrastructure fee per month</p>
                          <div className="text-3xl font-bold text-gray-900 font-heading">
                            {typeof plan.monthlyFee === 'string' ? plan.monthlyFee : `${plan.currency}${formatPrice(plan.monthlyFee)}`}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 font-body mb-1">
                            The total number of <span className="font-semibold">successful</span> transactions, free of charge per month
                          </p>
                          <div className="text-2xl font-bold text-gray-900 font-heading">
                            {typeof plan.transactions === 'string' ? plan.transactions : formatPrice(plan.transactions)}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 font-body mb-1">Price for each transaction exceeding the plan</p>
                          <div className="text-lg font-semibold text-gray-900 font-heading">{plan.pricePerTransaction}</div>
                        </div>
                      </div>

                      <div className="flex-1 mb-6">
                        {plan.includesStandard && (
                          <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Standard features plus:</p>
                        )}
                        {plan.includesProfessional && (
                          <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Professional features plus:</p>
                        )}
                        {!plan.includesStandard && !plan.includesProfessional && (
                          <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Top features:</p>
                        )}
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-600 font-body">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="#book-a-call"
                        className="w-full px-6 py-3 bg-primary text-white text-center text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body flex items-center justify-center gap-2"
                      >
                        Book a call
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table Section */}
              <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden mb-16">
                <div className="p-6 lg:p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
                      Compare All Plans
                    </h2>
                  </div>
                  <div className="border border-gray-200 rounded-[30px] p-6 lg:p-8 overflow-x-auto bg-white">
                    <div className="min-w-full">
                      <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">BASICS</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Standard</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Professional</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">
                        <div className="flex items-center gap-2">
                          Infrastructure fee per month
                          <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title="A monthly fee for using ValoraPay's payment infrastructure and platform">
                            <span className="text-white text-[10px] font-bold">i</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">€2,500</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">€6,000</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">Custom</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">
                        <div className="flex items-center gap-2">
                          Total number of successful transactions free of charge per month
                          <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title="Here's how much transactions are included in each plan">
                            <span className="text-white text-[10px] font-bold">i</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">10,000</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">100,000</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">&gt; 1,000,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">
                        <div className="flex items-center gap-2">
                          Price for each transaction exceeding the plan
                          <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title="The price we charge for each transaction over the plan's limit">
                            <span className="text-white text-[10px] font-bold">i</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">€0.072</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">€0.024</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">Custom</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">Hosted payment pages with custom design</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">—</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">1 free per year</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">New payment flow integration</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">—</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">1 per month</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-600 font-body">White label package</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">—</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                      <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                    </tr>
                  </tbody>
                </table>

                {/* Features Limits Section - Hidden initially */}
                {showMore && (
                  <>
                    <table className="w-full border-collapse mt-4">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">FEATURES LIMITS</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Standard</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Professional</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Merchant accounts</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Provider accounts</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">∞</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Routing schemes</td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Exchange schemes</td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">
                            <a href="/integrations/payment-providers" className="flex items-center gap-2 text-primary hover:text-primary/80">
                              500+ ready connectors
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* SLA Section */}
                    <table className="w-full border-collapse mt-4">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">SLA</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Standard</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Professional</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">
                            <a href="https://status.paycore.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                              Uptime
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">99.5%</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">99.5%</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">99.5%</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Dedicated Account Manager</td>
                          <td className="py-4 px-4 text-center font-body">—</td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">
                            <div className="flex items-center gap-2">
                              Technical support
                              <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title="9 AM to 9 PM, unlimited requests">
                                <span className="text-white text-[10px] font-bold">i</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Fraud & Risk Management</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Custom development</td>
                          <td className="py-4 px-4 text-center font-body">—</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Personalized training</td>
                          <td className="py-4 px-4 text-center font-body">—</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Dedicated Slack channel</td>
                          <td className="py-4 px-4 text-center font-body">—</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                          <td className="py-4 px-4 text-sm text-gray-900 text-center font-body">On demand</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 text-sm text-gray-600 font-body">Customer support</td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}
              </div>

              {/* Download and Show More/Hide buttons */}
              <div className="mt-8 flex items-center justify-between">
                <a
                  href="#download-pdf"
                  className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-[10px] hover:bg-primary/90 transition-colors flex items-center gap-2 font-body"
                >
                  Download the comparison chart in PDF
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-4 py-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2 font-body"
                >
                  {showMore ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Hide
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Show more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
                </div>
              </div>
            </div>

              {/* Add-ons Section */}
              <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Add-Ons
              </h2>
              <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
                Extend your capabilities with add-ons
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 hover:shadow-lg transition-shadow flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary">
                      {addon.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading text-center">{addon.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 font-body leading-relaxed text-center flex-1">{addon.description}</p>
                  
                  {/* Price */}
                  <p className="text-base font-semibold text-gray-900 font-body text-center">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

              {/* Calculate Your Price Section - Outside max-w container to match Hero width */}
              <div className="mb-16 mx-5">
                <div className="relative overflow-hidden rounded-[20px]">
                {/* Background Image - Same as GlobalAccess */}
                <div 
                  className="absolute inset-0 global-access-bg"
                  style={{ 
                    willChange: 'auto', 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8">
                    <h2 className="text-[2.4rem] font-medium text-[#000] mb-8 text-center leading-[3.05563rem] tracking-[-0.075rem] font-body">
                      Calculate Your Price
                    </h2>

                  {/* Plan Selection Tabs */}
                  <div className="flex items-center justify-center gap-4 mb-8 border-b border-gray-200">
                    <button
                      onClick={() => handlePlanChange('standard')}
                      className={`px-6 py-3 text-sm font-medium transition-colors font-body relative ${
                        selectedPlan === 'standard'
                          ? 'text-gray-900 border-b-2 border-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Standard Plan
                    </button>
                    <button
                      onClick={() => handlePlanChange('professional')}
                      className={`px-6 py-3 text-sm font-medium transition-colors font-body relative ${
                        selectedPlan === 'professional'
                          ? 'text-gray-900 border-b-2 border-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Professional Plan
                    </button>
                    <button
                      onClick={() => handlePlanChange('enterprise')}
                      className={`px-6 py-3 text-sm font-medium transition-colors font-body relative ${
                        selectedPlan === 'enterprise'
                          ? 'text-gray-900 border-b-2 border-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Enterprise Plan
                    </button>
                  </div>

                  {selectedPlan === 'enterprise' ? (
                    /* Enterprise Plan Special UI */
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-lg bg-yellow-400 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                        Running a large enterprise with millions of transactions per month?
                      </h3>
                      <p className="text-[18px] text-gray-600 mb-8 max-w-2xl mx-auto font-body">
                        Contact us to estimate the price for the most optimal offering tailored to your business needs.
                      </p>
                      <a
                        href="#contact-sales"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors font-body"
                      >
                        Contact Sales
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  ) : (
                    <>
                      {/* Current Plan Details */}
                      <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                        <div>
                          <p className="text-sm text-gray-500 font-body mb-2">Transactions per month</p>
                          <p className="text-3xl font-bold text-gray-900 font-heading">
                            {transactionCount.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-gray-400">—</div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-sm text-gray-500 font-body">Estimated monthly cost</p>
                            <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title="Estimated cost based on selected plan">
                              <span className="text-white text-[10px] font-bold">i</span>
                            </div>
                          </div>
                          <p className="text-3xl font-bold text-gray-900 font-heading">
                            {selectedPlan === 'standard' && '€2,500'}
                            {selectedPlan === 'professional' && '€6,000'}
                          </p>
                        </div>
                      </div>

                      {/* Transaction Slider */}
                      <div className="mb-8">
                        <div className="relative pt-8">
                          {/* Special offer labels */}
                          <div className="absolute top-0 left-0">
                            <span className="text-xs text-primary font-semibold font-body">Special offer</span>
                          </div>
                          <div className="absolute top-0 right-0">
                            <span className="text-xs text-primary font-semibold font-body">Special offer</span>
                          </div>

                          {/* Slider Track */}
                          <div 
                            className="relative h-2 bg-gray-200 rounded-[10px] mt-4"
                            style={{
                              '--slider-width': selectedPlan === 'standard' 
                                ? `${Math.min((transactionCount / 100000) * 100, 100)}%`
                                : `${Math.min((transactionCount / 1000000) * 100, 100)}%`,
                              '--slider-handle-left': selectedPlan === 'standard'
                                ? `calc(${Math.min((transactionCount / 100000) * 100, 100)}% - 16px)`
                                : `calc(${Math.min((transactionCount / 1000000) * 100, 100)}% - 16px)`
                            } as React.CSSProperties}
                          >
                            {/* Highlighted Segment */}
                            <div 
                              className="absolute h-2 bg-gradient-to-r from-primary to-primary/80 rounded-[10px]"
                              style={{ width: 'var(--slider-width)' }}
                            ></div>
                            
                            {/* Custom Slider Handle */}
                            <div 
                              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center shadow-lg pointer-events-none z-20"
                              style={{ left: 'var(--slider-handle-left)' }}
                            >
                              <div className="flex items-center gap-0.5 text-white text-[10px] font-bold">
                                <span>&lt;</span>
                                <span>&gt;</span>
                              </div>
                            </div>
                            
                            {/* Slider Input */}
                            <input
                              type="range"
                              min="0"
                              max={selectedPlan === 'standard' ? 100000 : 1000000}
                              step={selectedPlan === 'standard' ? 1000 : 10000}
                              value={transactionCount}
                              onChange={(e) => setTransactionCount(Number(e.target.value))}
                              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider z-10"
                            />
                          </div>

                          {/* Slider Labels */}
                          <div className="flex justify-between mt-4 text-xs text-gray-500 font-body relative">
                            <span>0</span>
                            {selectedPlan === 'standard' ? (
                              <>
                                <span className="absolute left-[25%]">10K</span>
                                <span className="absolute left-[50%]">20K</span>
                                <span className="absolute left-[75%]">30K</span>
                              </>
                            ) : (
                              <>
                                <span className="absolute left-[10%]">100K</span>
                                <span className="absolute left-[50%]">500K</span>
                                <span className="absolute left-[90%]">1M</span>
                              </>
                            )}
                            <span>∞</span>
                          </div>

                          {/* Cost per transaction label */}
                          {((selectedPlan === 'standard' && transactionCount > 10000 && transactionCount < 100000) ||
                            (selectedPlan === 'professional' && transactionCount > 100000 && transactionCount < 1000000)) && (
                            <div 
                              className="absolute top-[-20px] pointer-events-none" 
                              style={{ 
                                '--label-left': selectedPlan === 'standard'
                                  ? `${Math.min((transactionCount / 100000) * 100, 100)}%`
                                  : `${Math.min((transactionCount / 1000000) * 100, 100)}%`,
                                left: 'var(--label-left)',
                                transform: 'translateX(-50%)' 
                              } as React.CSSProperties}
                            >
                              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded font-body whitespace-nowrap">
                                €{selectedPlan === 'standard' ? '0.072' : '0.024'}/tr.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                  {/* Add-ons Section */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 font-heading">Add-ons</h3>
                        <p className="text-sm text-gray-600 font-body">Customise and enhance your plan with additional features.</p>
                      </div>
                      <button
                        onClick={() => setShowAddOns(!showAddOns)}
                        className="w-10 h-10 rounded-[10px] bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors flex-shrink-0"
                      >
                        {showAddOns ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {showAddOns && (
                      <div className="mt-4 space-y-2">
                        {addOns.map((addon, index) => (
                          <label key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedAddOns.includes(addon.title)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedAddOns([...selectedAddOns, addon.title])
                                } else {
                                  setSelectedAddOns(selectedAddOns.filter(title => title !== addon.title))
                                }
                              }}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 font-body">{addon.title}</p>
                              <p className="text-xs text-gray-600 font-body">{addon.price}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                      {/* Additional Support Section */}
                      <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 font-heading">Additional support</h3>
                        <p className="text-sm text-gray-600 font-body">Get the most out of ValoraPay with additional guidance and support.</p>
                      </div>
                      <button
                        onClick={() => setShowSupport(!showSupport)}
                        className="w-10 h-10 rounded-[10px] bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors flex-shrink-0"
                      >
                        {showSupport ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {showSupport && (
                      <div className="mt-4 space-y-2">
                        {supportPlans.slice(1).map((plan, index) => (
                          <label key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedSupport.includes(plan.name)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedSupport([...selectedSupport, plan.name])
                                } else {
                                  setSelectedSupport(selectedSupport.filter(name => name !== plan.name))
                                }
                              }}
                              className="w-4 h-4 text-primary rounded focus:ring-primary"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 font-body">{plan.name}</p>
                              <p className="text-xs text-gray-600 font-body">{plan.price}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                      {/* Estimated Cost Footer */}
                      <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-body mb-1">Estimated cost for the selected plan and add-ons:</p>
                        <p className="text-2xl font-bold text-gray-900 font-heading">
                          {(() => {
                            let baseCost = 0
                            if (selectedPlan === 'standard') baseCost = 2500
                            else if (selectedPlan === 'professional') baseCost = 6000
                            
                            // Calculate transaction cost if exceeding plan limit
                            let transactionCost = 0
                            if (selectedPlan === 'standard' && transactionCount > 10000) {
                              transactionCost = (transactionCount - 10000) * 0.072
                            } else if (selectedPlan === 'professional' && transactionCount > 100000) {
                              transactionCost = (transactionCount - 100000) * 0.024
                            }
                            
                            // Add add-ons cost (one-time costs not included in monthly)
                            let addOnsCost = 0
                            if (selectedAddOns.includes('White-label pack')) {
                              addOnsCost += 1500 // per month
                            }
                            
                            // Add support cost
                            let supportCost = 0
                            if (selectedSupport.includes('Premier')) {
                              supportCost = baseCost * 0.2
                            } else if (selectedSupport.includes('Turnkey')) {
                              supportCost = baseCost * 0.3
                            }
                            
                            const total = baseCost + transactionCost + addOnsCost + supportCost
                            return `€${total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
                          })()} / monthly
                        </p>
                      </div>
                    </div>
                    <a
                      href="#contact-sales"
                      className="px-6 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors flex items-center gap-2 font-body whitespace-nowrap"
                    >
                      Contact Sales
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                      </div>
                    </>
                  )}
                  </div>
                </div>
              </div>
            </div>

              {/* Gain More Features Section */}
              <div className="mb-16 bg-gray-900 rounded-[30px] p-8 lg:p-12">
                {/* Top Band - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
                  {/* Routing & Cascading */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                      Routing & Cascading
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Set up and automate routing rules and strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Find the lowest-cost route for each transaction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Automated retries and failover</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Split large transactions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Handle P2P payments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Dynamic currency conversion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Active monitoring of all available providers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Blocking rule engine</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Enable or disable 3DS</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Smart blacklisting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Optimisation presets</span>
                      </li>
                    </ul>
                  </div>

                  {/* Batch payouts */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                      Batch payouts
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Workload optimisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Spreadsheet-like execution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Use multiple payout methods</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Send any amounts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Process consequently or instantly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Auto-retries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Unlimited number of recipients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Export .csv or .xls reports</span>
                      </li>
                    </ul>
                  </div>

                  {/* Merchant portal */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                      Merchant portal
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">A straightforward back office for your merchants</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Displays equally well on any device with any screen size</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Adjust the merchant back office to flaunt your brand</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Access all features and monitor real-time performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Manage access rights and the team's activity by setting up roles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Middle Band - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  {/* Payment dashboard */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                      Payment dashboard
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">All payment data at one point</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Manage and configure all processes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Utilise reports and analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Access control</span>
                      </li>
                    </ul>
                  </div>

                  {/* Security & Compliance */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                      Security & Compliance
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">PCI DSS Level 1 compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Data encryption</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Web application security</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Physical & Network security</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* GAIN MORE Separator */}
                <div className="text-center my-12">
                  <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-wider font-heading">GAIN MORE</h2>
                </div>

                {/* Bottom Band - White label payment platform */}
                <div>
                  <h3 className="text-xl font-bold text-blue-500 mb-6 font-heading flex items-center gap-2">
                    White label payment platform
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Out-of-the-box support for any payment and payout method</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Reduce the costs up to 75% as we host and maintain the platform for you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Apply your branding on the robust payment platform</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Equipped with tools and features for any kind of payment businesses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1 flex-shrink-0">✔</span>
                        <span className="text-white text-sm font-body">Take action faster with real-time monitoring and alerting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {activeTab === 'customer-success' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <>
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
                    Customer Success & Support Plans
                  </h2>
                  <div className="max-w-3xl mx-auto space-y-4 text-[18px] text-gray-600 leading-relaxed font-body">
                    <p>
                      We develop payment solutions for more than 10 years. This is how we've learned what works, what doesn't, and what helps our clients to reach the top.
                    </p>
                    <p>
                      With this knowledge and experience, we are ready to guide you every step of the way with personalised support and consultancy.
                    </p>
                    <p>
                      Every ValoraPay customer has our Standard plan. Our Premier and Turnkey plans offer additional guidance and support to help you succeed faster.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {supportPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-[30px] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow"
                    >
                      {/* Colored Gradient Header */}
                      {plan.name === 'Standard' && (
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 w-full"></div>
                      )}
                      {plan.name === 'Premier' && (
                        <div className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 w-full"></div>
                      )}
                      {plan.name === 'Turnkey' && (
                        <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 w-full"></div>
                      )}
                      
                      <div className="p-6 lg:p-8 flex flex-col flex-1">
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 font-heading">{plan.name}</h3>
                            {plan.name === 'Premier' && (
                              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 font-body mb-4">{plan.description}</p>
                          <div className="text-2xl font-bold text-gray-900 font-heading">
                            {plan.price}
                            {plan.price !== 'Included with every plan' && (
                              <span className="text-base font-normal text-gray-500 block mt-1">per month</span>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 mb-6">
                          {plan.includesStandard && (
                            <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Standard features plus:</p>
                          )}
                          {plan.includesPremier && (
                            <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Premier features plus:</p>
                          )}
                          {!plan.includesStandard && !plan.includesPremier && (
                            <p className="text-sm font-semibold text-gray-900 mb-3 font-body">Top features:</p>
                          )}
                          <ul className="space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600 font-body">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href="#book-a-call"
                          className="w-full px-6 py-3 bg-primary text-white text-center text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body flex items-center justify-center gap-2"
                        >
                          Book a call
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Table Section */}
              <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden mb-16">
                <div className="p-6 lg:p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
                      Compare Features to Find the Plan That's Right for You
                    </h2>
                  </div>
                  <div className="border border-gray-200 rounded-[30px] p-6 lg:p-8 overflow-x-auto bg-white">
                  <div className="min-w-full">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50 rounded-tl-lg">BASICS</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Standard</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50">Premier</th>
                          <th className="text-center py-4 px-4 text-sm font-bold text-gray-900 font-heading bg-gray-50 rounded-tr-lg">Turnkey</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { feature: 'Dedicated Account Manager', standard: true, premier: true, turnkey: true },
                          { feature: 'Guided journeys', standard: true, premier: true, turnkey: true },
                          { feature: 'Events', standard: true, premier: true, turnkey: true },
                          { feature: 'Initial training', standard: true, premier: true, turnkey: true },
                          { feature: 'Success guidance', standard: false, premier: true, turnkey: true },
                          { feature: 'Customer support', standard: true, premier: true, turnkey: true },
                          { feature: 'Developer support', standard: false, premier: true, turnkey: true },
                          { feature: 'Onboarding assistance', standard: false, premier: false, turnkey: true },
                          { feature: 'Admin assistance', standard: false, premier: false, turnkey: true },
                          { feature: 'Merchant support', standard: false, premier: false, turnkey: true },
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-4 px-4 text-sm text-gray-900 font-body">
                              <div className="flex items-center gap-2">
                                {row.feature}
                                <div className="w-4 h-4 rounded-[10px] bg-primary flex items-center justify-center cursor-help" title={`Information about ${row.feature}`}>
                                  <span className="text-white text-[10px] font-bold">i</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              {row.standard ? (
                                <span className="text-gray-900 text-lg font-bold">✔</span>
                              ) : (
                                <span className="text-gray-400 text-lg">—</span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-center">
                              {row.premier ? (
                                <span className="text-gray-900 text-lg font-bold">✔</span>
                              ) : (
                                <span className="text-gray-400 text-lg">—</span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-center">
                              {row.turnkey ? (
                                <span className="text-gray-900 text-lg font-bold">✔</span>
                              ) : (
                                <span className="text-gray-400 text-lg">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

              {/* Client Stories Section */}
              <div className="mb-16">
                <ClientStories />
              </div>
            </>
          </div>
        )}

      </section>

      {/* FAQ Section - Outside white background to match home page */}
      <FAQ />
    </div>
  )
}

