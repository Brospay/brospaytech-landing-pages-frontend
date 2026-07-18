'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Forex Security section component
 * Shows "Enjoy advantages of card tokenisation" with tokenization process visualization
 */
export function ForexSecurity() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  const stages = [
    {
      title: 'Absence of the compliance burden and enhanced payment acceptance rates.',
      visual: 'card',
    },
    {
      title: 'Data collection, storage, and transmission are secure and PCI-compliant.',
      visual: 'servers',
    },
    {
      title: 'Card tokenisation with a white label payment page.',
      visual: 'tokens',
    },
  ]

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-24 sm:py-32 lg:py-40 xl:py-48 relative overflow-hidden min-h-[600px] lg:min-h-[800px] rounded-[20px]">
      {/* Background Image - Same as GlobalAccess */}
      <div 
        className="absolute inset-0 global-access-bg rounded-[20px]"
        style={{ 
          willChange: 'auto', 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
      </div>

      {/* Content with fade-in animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-white mb-6 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Enjoy Advantages of Card Tokenisation
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-body">
            Streamline your traders' payment experience with tokenisation. We remove the need to reenter the payment details, decreasing the likelihood of data theft and enabling fast & safe one-click payment for your returning and VIP customers.
          </p>
        </div>

        {/* Tokenization Process Flow */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start relative">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex flex-col">
                {/* Visual Representation */}
                <div className="mb-6 min-h-[200px] flex items-center justify-center">
                  {stage.visual === 'card' && (
                    <div className="bg-gray-100 rounded-lg p-6 border border-gray-300 w-full">
                      <div className="text-gray-600 text-sm mb-4 font-body">Credit card data</div>
                      <div className="space-y-3">
                        <div className="bg-white rounded px-4 py-3 text-gray-900 font-mono text-sm border border-gray-200">
                          4176 2943 2813 3912
                        </div>
                        <div className="bg-white rounded px-4 py-3 text-gray-900 font-body text-sm border border-gray-200">
                          Alex Bolton
                        </div>
                        <div className="flex gap-2">
                          <div className="bg-white rounded px-4 py-3 text-gray-900 font-mono text-sm flex-1 border border-gray-200">10</div>
                          <div className="bg-white rounded px-4 py-3 text-gray-900 font-mono text-sm flex-1 border border-gray-200">22</div>
                          <div className="bg-white rounded px-4 py-3 text-gray-900 font-mono text-sm flex-1 border border-gray-200">***</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {stage.visual === 'servers' && (
                    <div className="flex flex-col items-center gap-3 w-full">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-100 rounded-lg p-4 border border-gray-300 w-full max-w-[200px]">
                          <div className="space-y-2">
                            {[1, 2, 3, 4, 5].map((line) => (
                              <div key={line} className="h-1 bg-gray-300 rounded"></div>
                            ))}
                            <div className="flex justify-end gap-1 mt-2">
                              <div className="w-2 h-2 rounded-full bg-[#FCD34D]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#FCD34D]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#FCD34D]"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {stage.visual === 'tokens' && (
                    <div className="grid grid-cols-3 gap-3 w-full max-w-[300px] mx-auto">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className={`bg-gray-100 rounded-lg p-6 border border-gray-300 flex items-center justify-center aspect-square ${
                            i === 4 ? 'bg-[#FCD34D] border-[#FCD34D]' : ''
                          }`}
                        >
                          <span className={`text-2xl font-bold ${i === 4 ? 'text-black' : 'text-gray-900'}`}>
                            t
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed font-body text-center">
                  {stage.title}
                </p>
              </div>
            ))}
          </div>
          
          {/* Horizontally aligned arrows between columns - positioned at fixed vertical level */}
          <div className="hidden md:block absolute top-[100px] left-0 right-0 z-10">
            <div className="relative h-full">
              {/* Arrow 1 - Between column 1 and 2 */}
              <div className="absolute left-1/3 transform -translate-x-1/2">
                <svg
                  className="w-12 h-12 lg:w-16 lg:h-16 text-[#4730B8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              {/* Arrow 2 - Between column 2 and 3 */}
              <div className="absolute left-2/3 transform -translate-x-1/2">
                <svg
                  className="w-12 h-12 lg:w-16 lg:h-16 text-[#4730B8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

