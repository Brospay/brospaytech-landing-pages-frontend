'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Real-Time Dashboard section component
 * Shows payment methods table with real-time data
 */
export function RealTimeDashboard() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const paymentMethods = [
    { name: 'PayPal', count: 129, amount: '$3,940.00' },
    { name: 'Alipay', count: 144, amount: '$4,127.00' },
    { name: 'Stripe', count: 78, amount: '$2,875.00' },
    { name: 'Skrill', count: 83, amount: '$1,784.50' },
    { name: 'Neteller', count: 14, amount: '$724.80' },
    { name: 'paysafecard', count: 25, amount: '$1,218.00' },
  ]

  const totalAmount = '$14,669.30'

  const features = [
    'Relevant information for payment tracking in real time',
    'Convenient creation of personalised reports',
    'You are always aware when you receive each payment',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Payment Methods Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#4730B8] px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold font-body">June 2024</span>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-500 font-body">Payment method</span>
              <span className="text-sm font-semibold text-gray-500 text-center font-body">Count</span>
              <span className="text-sm font-semibold text-gray-500 text-right font-body">Amount</span>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {paymentMethods.map((method, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-500">{method.name[0]}</span>
                    </div>
                    <span className="text-sm text-gray-700 font-body">{method.name}</span>
                  </div>
                  <span className="text-sm text-gray-600 text-center font-body">{method.count}</span>
                  <span className="text-sm font-semibold text-gray-900 text-right font-body">{method.amount}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700 font-body">Total</span>
                <span className="text-xl font-bold text-[#4730B8] font-heading">{totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Real-Time Payment Dashboard
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-body">
              Get a real-time overview of your business efficiency. Monitor detailed analytics for all indicators of your turnover. Analyse financial flows to control and improve your business processes.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

