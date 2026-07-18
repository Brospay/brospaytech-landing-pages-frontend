'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Dashboard Mobile App section component
 * Shows Telegram bot and mobile features
 */
export function DashboardMobileApp() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const features = [
    {
      title: 'Multi-Account Access',
      description: 'When you add multiple ValoraPay accounts, you can switch between them without having to log out and log back in.',
    },
    {
      title: 'Balance Report',
      description: 'Provides information on opening and closing balances, as well as on debit and credit turnover for a selected period for every account used.',
    },
    {
      title: 'Transaction Search',
      description: 'Search for necessary transactions by ID or external ID you supplied regardless of transaction origins.',
    },
    {
      title: 'Push Notifications',
      description: 'Get updates directly to your mobile phone. You are always aware when you receive each payment.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[500px] bg-gray-800 rounded-[40px] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-[#4730B8] px-4 py-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold font-heading">ValoraPay Bot</h4>
                    <p className="text-white/70 text-xs font-body">Your dashboard assistant</p>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-xs text-gray-700 font-body">Welcome! How can I help you today?</p>
                    </div>
                    <div className="bg-[#E8E4FF] rounded-lg p-3 max-w-[80%] ml-auto">
                      <p className="text-xs text-gray-700 font-body">Show my balance</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-xs text-gray-700 font-body">Your current balance:</p>
                      <p className="text-lg font-bold text-[#4730B8] font-heading">$54,320.00</p>
                    </div>
                    <div className="bg-[#E8E4FF] rounded-lg p-3 max-w-[80%] ml-auto">
                      <p className="text-xs text-gray-700 font-body">Recent transactions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#4730B8] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#4730B8] rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-gray-900 mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              Dashboard On The Go
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8 font-body">
              Access the data you have with ValoraPay on the go, when and where you need it, without even leaving a messenger.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-heading">{feature.title}</h3>
                    <p className="text-sm text-gray-600 font-body">{feature.description}</p>
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

