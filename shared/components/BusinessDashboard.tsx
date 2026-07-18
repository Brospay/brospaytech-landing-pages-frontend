'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Business Dashboard section component matching Figma design
 * Features:
 * - Large heading
 * - Multiple dashboard cards showing business metrics
 * - Revenue insights and analytics
 * - Smooth fade-in animations
 */
export function BusinessDashboard() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
    <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
      Your Business Needs in the Spotlight
    </h2>
    <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
      Get the optimal payment setup for your industry to ensure better payment experience for your customers and win over competitors.
    </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* First Row - First Card (4 columns) */}
          <div 
            className="col-span-12 lg:col-span-4 rounded-[30px] p-8 lg:p-10 h-[450px] relative overflow-hidden bg-primary-gradient"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-[10px] text-sm font-medium text-black mb-6">
              FINANCE
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
              Keep track of your income and payment
            </h3>
            <a
              href="/payments"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-[10px] hover:bg-gray-800 transition-colors tap-target group font-body"
            >
              View more
              <span className="w-8 h-8 rounded-[10px] bg-white flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
            {/* Favicon Logo - Bottom Right */}
            <div className="absolute bottom-2 right-2">
              <img
                src="/assets/favicon.png"
                alt="ValoraPay Logo"
                className="w-[180px] lg:w-[220px] h-auto opacity-20"
                loading="lazy"
              />
            </div>
          </div>

          {/* First Row - Second Card (8 columns) */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 lg:h-[450px] relative flex flex-col overflow-hidden">
            {/* Content Wrapper */}
            <div className="flex flex-col">
              {/* Heading */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-heading leading-tight text-left">
                Open an account in minutes
              </h3>
              
              {/* Description */}
              <p className="text-[18px] text-gray-600 leading-relaxed font-body text-left mb-6">
                Experience seamless business banking with a local IBAN, free Mastercards, and fast international transfers.
              </p>
            </div>
            
            {/* Image - Bottom */}
            <div className="mt-auto w-full flex justify-center items-end">
              <img
                src="/assets/landing_page/spotlight/2ndcard_img.png"
                alt="Business banking account"
                className="h-auto w-full max-w-[60%] lg:max-w-[50%] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second Row - First Card (8 columns) */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 lg:h-[450px] relative flex flex-col overflow-hidden">
            {/* Content Wrapper - Prevents text from going behind image */}
            <div className="flex-1 flex flex-col pr-0 lg:pr-[55%] xl:pr-[60%]">
              {/* Title - Split across lines */}
              <div className="mb-6 text-left">
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1 font-heading leading-tight text-left">
                  Weekly revenue summary
                </h4>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 text-left font-heading leading-tight">
                  and insights
                </h4>
              </div>
              
              {/* Separator Line */}
              <div className="w-full h-px bg-gray-200 mb-6"></div>
              
              {/* Body Text */}
              <p className="text-[18px] text-gray-600 mb-8 leading-relaxed font-body text-left break-words">
                Get comprehensive insights into your weekly revenue trends, transaction patterns, and performance metrics to make informed business decisions.
              </p>
              
              {/* View More Link */}
              <div className="mt-auto text-left mb-4 lg:mb-0">
                <a href="/payments" className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors tap-target font-body group text-left">
                  View more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Spotlight Image - Below text on mobile, Right side on desktop */}
            <div className="lg:hidden mt-6 w-full flex justify-center">
              <img
                src="/assets/landing_page/spotlight/3rd_img.png"
                alt="Spotlight"
                className="h-auto w-full max-w-[300px] object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Spotlight Image - Right Side - Desktop only */}
            <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <img
                src="/assets/landing_page/spotlight/3rd_img.png"
                alt="Spotlight"
                className="h-auto w-auto max-w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second Row - Second Card (4 columns) */}
          <div className="col-span-12 lg:col-span-4 bg-[#000000] rounded-[30px] p-6 h-[450px] relative overflow-hidden">
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 font-heading">Predictive analytics</h4>
            {/* Spotlight Image - Bottom Attached */}
            <div className="absolute bottom-0 right-0 left-0">
              <img
                src="/assets/landing_page/spotlight/2nd_in_img.png"
                alt="Spotlight"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

