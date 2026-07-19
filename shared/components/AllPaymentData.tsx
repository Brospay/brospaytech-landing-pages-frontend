'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * All Payment Data section component
 * Shows payment data management at one point
 */
export function AllPaymentData() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const events = [
    { type: 'Webhook notification was received', time: '19:08', date: '11.04.2024' },
    { type: 'Payment of type "PayPal" paid', time: '19:08', date: '11.04.2024' },
    { type: 'Payment of type "PayPal" created', time: '19:07', date: '11.04.2024' },
    { type: 'Payment of type "E-commerce" paid', time: '19:07', date: '11.04.2024' },
    { type: 'Payment of type "E-commerce" created', time: '19:06', date: '11.04.2024' },
  ]

  const features = [
    { bold: 'Make refunds', text: 'in one click' },
    { bold: 'Payment', text: 'statements' },
    { bold: 'Event', text: 'history' },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              All Payment Data At One Point
            </h2>
            <p className="text-[18px] text-gray-300 leading-relaxed mb-8 font-body">
              Manage all payment processes and configure your BrosPay account from a single payment tracking dashboard. This powerful interface allows you to view all data, monitor your integrations, manage payments and refunds, respond to disputes, and many more.
            </p>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-body">
                    <strong className="text-white">{feature.bold}</strong>{' '}
                    <span className="text-gray-400">{feature.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Event History */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-heading">Event History</h3>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4730B8]"></div>
                    <span className="text-sm text-gray-300 font-body">{event.type}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 font-body">{event.date}, {event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

