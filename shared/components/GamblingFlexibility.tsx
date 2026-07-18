'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingFlexibility() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const features = [
    'Track and organise financial information with virtual merchant accounts.',
    'Offer relevant payment methods for each region.',
    'Create a unique payment processing flow and independent customisation for each gambling site or brand.',
    'Segregate payment traffic by source to ensure compliance with tax regulations.',
    'Streamline high-volume transactions and manage multiple brands more easily.',
    'Benefit from aggregated reports and forecasts for each sub-entity to compare sales and analyse competition.',
  ]

  const statusItems = [
    { label: 'Issuer', status: 'approved' },
    { label: 'Geolocation', status: 'approved' },
    { label: 'Authorisation', status: 'approved' },
    { label: 'License', status: 'approved' },
    { label: 'Organic SEO', status: 'approved' },
    { label: 'Google ADS', status: 'approved' },
    { label: 'Native ADS', status: 'approved' },
    { label: 'YouTube', status: 'denied' },
  ]

  const paymentMethods = [
    { name: 'Visa', logo: 'VISA', selected: true },
    { name: 'Mastercard', logo: 'MC', selected: false },
    { name: 'Giropay', logo: 'GP', selected: false },
    { name: 'AMEX', logo: 'AMEX', selected: false },
    { name: 'Sofort', logo: 'SO', selected: false },
  ]

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Make Your Online Gambling Business Flexible
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body">
            Virtual multicurrency merchant accounts provide additional flexibility for processing and managing incoming and outgoing payments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - UI Panel */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-[20px] p-6 lg:p-8 border border-gray-700">
            {/* Scanning Header */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white font-body">SCANNING...</p>
              <div className="flex gap-0.5">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-0.5 h-3 bg-gray-600 rounded"></div>
                ))}
              </div>
            </div>
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-blue-500 rounded-full relative" style={{ width: '60%' }}>
                <div className="absolute inset-0 bg-blue-400 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Scanning Animation & Payment Methods */}
              <div>
                {/* Scanning Square with Moving Line - Reduced Height */}
                <div className="relative w-full mb-4" style={{ height: '180px' }}>
                  {/* Blue wireframe brackets */}
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-lg">
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500"></div>
                    <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500"></div>
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500"></div>
                  </div>
                  {/* Moving horizontal line */}
                  <div className="absolute inset-x-0 h-0.5 bg-blue-500" style={{ 
                    animation: 'moveLine 2s ease-in-out infinite'
                  }}></div>
                  {/* Slot machine icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-bold text-blue-500 font-body">777</div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-1.5">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded-lg ${
                        method.selected ? 'bg-[#4730B8]' : 'bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold font-body">{method.logo}</span>
                        </div>
                        <span className="text-white text-sm font-body">{method.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-0.5 bg-white/50"></div>
                        {method.selected ? (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Brand Info & Verification Checks */}
              <div>
                {/* Brand Info Box */}
                <div className="bg-[#4730B8] rounded-lg p-3 mb-4">
                  <p className="text-white font-semibold text-sm mb-1 font-body">Brand: 777-spin.com</p>
                  <p className="text-white/90 text-xs font-body">MID number: 3974342</p>
                </div>

                {/* Status Items - Two Columns */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="space-y-2">
                    {statusItems.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-white text-xs font-body">{item.label}</span>
                        {item.status === 'approved' ? (
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {statusItems.slice(4).map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-white text-xs font-body">{item.label}</span>
                        {item.status === 'approved' ? (
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed font-body">
                    {feature.includes('payment processing') ? (
                      <>
                        {feature.split('payment processing')[0]}
                        <span className="text-blue-400 font-semibold">payment processing</span>
                        {feature.split('payment processing')[1]}
                      </>
                    ) : (
                      feature
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

