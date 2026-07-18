'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Industries section component
 * Features:
 * - Industry-specific payment solutions cards
 * - Smooth fade-in animations
 * - Responsive grid layout
 */
export function Industries() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section 
      ref={sectionFade.ref as React.RefObject<HTMLElement>} 
      style={sectionFade.style} 
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Industry-Specific Payment Solutions
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
            Tailored payment setups designed to meet your industry's unique requirements and drive better customer experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {/* Gambling */}
          <a href="/gambling" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="14" height="14" rx="2" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <circle cx="12" cy="12" r="1.5" fill="#4730B8"/>
                <circle cx="18" cy="12" r="1.5" fill="#4730B8"/>
                <circle cx="15" cy="15" r="1.5" fill="#4730B8"/>
                <circle cx="12" cy="18" r="1.5" fill="#4730B8"/>
                <circle cx="18" cy="18" r="1.5" fill="#4730B8"/>
                <rect x="18" y="18" width="14" height="14" rx="2" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <circle cx="22" cy="22" r="1.5" fill="#4730B8"/>
                <circle cx="28" cy="22" r="1.5" fill="#4730B8"/>
                <circle cx="25" cy="25" r="1.5" fill="#4730B8"/>
                <circle cx="22" cy="28" r="1.5" fill="#4730B8"/>
                <circle cx="28" cy="28" r="1.5" fill="#4730B8"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                Gambling
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* ISO/MSP */}
          <a href="/iso-msp" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="20" height="24" rx="2" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <line x1="13" y1="13.5" x2="27" y2="13.5" stroke="#4730B8" strokeWidth="2" strokeLinecap="round"/>
                <line x1="13" y1="18.5" x2="27" y2="18.5" stroke="#4730B8" strokeWidth="2" strokeLinecap="round"/>
                <line x1="13" y1="23.5" x2="27" y2="23.5" stroke="#4730B8" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="5" r="2" stroke="#4730B8" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                ISO/MSP
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* iGaming */}
          <a href="/igaming" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="8" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <circle cx="17" cy="20" r="1.5" fill="#4730B8"/>
                <circle cx="23" cy="20" r="1.5" fill="#4730B8"/>
                <path d="M16 25C16 25 18 27 20 27C22 27 24 25 24 25" stroke="#4730B8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                iGaming
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Forex */}
          <a href="/forex" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="24" height="18" rx="2" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <path d="M12 20L16 16L20 20L24 16L28 20" stroke="#4730B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 24L28 24" stroke="#4730B8" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                Forex
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* PSP */}
          <a href="/blog/how-to-become-a-psp-without-development-efforts" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="24" height="18" rx="2" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <rect x="12" y="14" width="16" height="10" rx="1" stroke="#4730B8" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                PSP
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Crypto */}
          <a href="/glossary/crypto-payment-processing" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="10" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <path d="M20 12V16M20 24V28M12 20H16M24 20H28" stroke="#4730B8" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="20" cy="20" r="3" stroke="#4730B8" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                Crypto
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Marketplace */}
          <a href="/marketplace" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14L20 8L30 14V28H10V14Z" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <rect x="14" y="18" width="4" height="4" rx="1" stroke="#4730B8" strokeWidth="2" fill="none"/>
                <rect x="22" y="18" width="4" height="4" rx="1" stroke="#4730B8" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                Marketplace
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Dating & Adult */}
          <a href="/blog/online-dating-payment-processing" className="group bg-gray-50 hover:bg-blue-50 rounded-xl pt-3 pb-4 px-3 lg:px-5 flex flex-col items-center justify-between transition-all duration-200 hover:shadow-lg border border-transparent hover:border-blue-200 min-h-[120px] lg:min-h-[140px]">
            <div className="w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-3 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="10" stroke="#4730B8" strokeWidth="2" className="group-hover:stroke-[#5a3fc9] transition-colors"/>
                <circle cx="15" cy="18" r="3" stroke="#4730B8" strokeWidth="2" fill="none"/>
                <circle cx="25" cy="18" r="3" stroke="#4730B8" strokeWidth="2" fill="none"/>
                <path d="M14 25C14 25 16 27 20 27C24 27 26 25 26 25" stroke="#4730B8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <span className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-[#4730B8] transition-colors font-body text-center leading-tight">
                Dating & Adult
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-200 group-hover:bg-primary flex items-center justify-center group-hover:translate-x-1 transition-all">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

