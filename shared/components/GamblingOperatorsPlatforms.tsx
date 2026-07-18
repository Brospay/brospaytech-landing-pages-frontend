'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

export function GamblingOperatorsPlatforms() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24 bg-white rounded-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Single Solution for Gambling Operators and Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            The payment gateway built for both operators and gambling platforms — deliver seamless player payments, streamline operations, and scale globally with one secure, high-performance solution.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column - For Operators */}
          <div className="flex flex-col">
            {/* Payment Pages Illustration */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-sm h-56 bg-gray-800 rounded-2xl p-6 shadow-2xl">
                {/* Purple squares grid */}
                <div className="grid grid-cols-4 gap-3 h-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-[#4730B8] rounded-lg shadow-md hover:bg-[#5a42c9] transition-colors"></div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              For Operators
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-body">
              Customisable payment pages and hosted iFrames with full PCI DSS compliance
            </p>
          </div>

          {/* Right Column - For Platforms */}
          <div className="flex flex-col">
            {/* Portal Device Illustration */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-sm h-56 bg-white rounded-2xl p-6 shadow-2xl border-2 border-gray-800">
                {/* Gray bar at top */}
                <div className="w-full h-12 bg-gray-300 rounded-lg mb-4"></div>
                {/* Additional content area */}
                <div className="space-y-3">
                  <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              For Platforms
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-body">
              Convenient portal to manage all in one point and deliver players support for every project
            </p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="flex items-center justify-center gap-4">
          <div className="text-[#4730B8] text-6xl font-bold font-body">[</div>
          <p className="text-3xl font-bold text-gray-900 font-heading">
            Seamless integrations every single day!
          </p>
          <div className="text-[#4730B8] text-6xl font-bold font-body">]</div>
        </div>
      </div>
    </section>
  )
}

