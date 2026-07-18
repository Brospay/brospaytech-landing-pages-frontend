'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Chargeback How It Works section component
 * Shows the dispute resolution process flow
 */
export function ChargebackHowItWorks() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-0">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body">
              Combination of real-time intelligence and automated workflows for streamlined dispute resolution.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-body">
              The system facilitates immediate communication between merchants and card issuers, providing clear transaction details that reduce the chances of disputes escalating.
            </p>
          </div>

          {/* Right Side - Flowchart */}
          <div className="relative w-full overflow-x-auto scrollbar-hide">
            <div className="relative w-full min-w-[600px] h-[500px] lg:h-[600px] mx-auto">
              {/* SVG for arrows */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                {/* Customer to Issuing Bank */}
                <path
                  d="M 60 250 L 180 250"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                    markerEnd="url(#arrowhead-primary)"
                />
                
                {/* Issuing Bank to Third-party solution (up) */}
                <path
                  d="M 180 200 L 180 120"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                    markerEnd="url(#arrowhead-primary)"
                />
                
                {/* Third-party solution to ValoraPay */}
                <path
                  d="M 180 120 L 360 120"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                    markerEnd="url(#arrowhead-primary)"
                />
                
                {/* ValoraPay to Acquiring Bank (down) */}
                <path
                  d="M 360 120 L 360 200"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                    markerEnd="url(#arrowhead-primary)"
                />
                
                {/* ValoraPay to Merchant */}
                <path
                  d="M 360 200 L 480 200"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                    markerEnd="url(#arrowhead-primary)"
                />
                
                {/* Bidirectional arrow: Issuing Bank to Acquiring Bank */}
                <path
                  d="M 180 250 L 360 250"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  markerStart="url(#arrowhead-primary)"
                  markerEnd="url(#arrowhead-primary)"
                />
                {/* Red X circle on bidirectional arrow */}
                <circle cx="270" cy="250" r="8" fill="#EF4444" />
                <path d="M 266 246 L 274 254 M 274 246 L 266 254" stroke="white" strokeWidth="1.5" />
                
                {/* Bidirectional arrow: Acquiring Bank to Merchant */}
                <path
                  d="M 360 250 L 480 250"
                  stroke="#4730B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  markerStart="url(#arrowhead-primary)"
                  markerEnd="url(#arrowhead-primary)"
                />
                {/* Red X circle on bidirectional arrow */}
                <circle cx="420" cy="250" r="8" fill="#EF4444" />
                <path d="M 416 246 L 424 254 M 424 246 L 416 254" stroke="white" strokeWidth="1.5" />
                
                {/* Arrow marker definition */}
                <defs>
                  <marker
                    id="arrowhead-primary"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#4730B8" />
                  </marker>
                </defs>
              </svg>

              {/* Flowchart Blocks */}
              <div className="relative z-10">
                {/* Customer - Blue */}
                <div className="absolute left-0 top-[200px] w-[120px] h-[100px] bg-blue-600 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-white text-sm font-semibold font-heading text-center">Customer</span>
                </div>

                {/* Issuing Bank - Purple */}
                <div className="absolute left-[120px] top-[200px] w-[120px] h-[100px] bg-purple-600 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-white text-sm font-semibold font-heading text-center">Issuing bank</span>
                </div>

                {/* Acquiring Bank - Blue */}
                <div className="absolute left-[360px] top-[200px] w-[120px] h-[100px] bg-blue-600 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-white text-sm font-semibold font-heading text-center">Acquiring bank</span>
                </div>

                {/* Merchant - Orange */}
                <div className="absolute left-[480px] top-[200px] w-[120px] h-[100px] bg-orange-500 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-white text-sm font-semibold font-heading text-center">Merchant</span>
                </div>

                {/* Third-party solution - Yellow (above Issuing Bank) */}
                <div className="absolute left-[120px] top-[20px] w-[120px] h-[100px] bg-yellow-400 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-gray-900 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-900 text-sm font-semibold font-heading text-center">Third-party solution</span>
                </div>

                {/* ValoraPay - Blue (above Acquiring Bank) */}
                <div className="absolute left-[360px] top-[20px] w-[120px] h-[100px] bg-blue-600 rounded-lg flex flex-col items-center justify-center p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="8" y="8" width="8" height="8" rx="2" />
                  </svg>
                  <span className="text-white text-sm font-semibold font-heading text-center">ValoraPay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-0 text-center">
          <div className="bg-gray-900 rounded-[20px] p-8 lg:p-12">
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-bold text-[#4730B8] font-heading">[</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                Stop losing revenue due to chargebacks
              </h3>
              <span className="text-6xl font-bold text-[#4730B8] font-heading">]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

