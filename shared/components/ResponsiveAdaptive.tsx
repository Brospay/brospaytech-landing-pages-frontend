'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Responsive and Adaptive section component
 * Shows cross-screen, cross-platform, and cross-browser compatibility
 */
export function ResponsiveAdaptive() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const crossScreen = [
    {
      name: 'Mobile',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" />
        </svg>
      ),
    },
    {
      name: 'Tablet',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="12" y1="21" x2="12" y2="21.01" />
        </svg>
      ),
    },
    {
      name: 'Laptop',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="12" rx="2" />
          <line x1="2" y1="16" x2="22" y2="16" />
          <line x1="6" y1="20" x2="6.01" y2="20" />
          <line x1="10" y1="20" x2="10.01" y2="20" />
        </svg>
      ),
    },
    {
      name: 'Desktop',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ]

  const crossPlatform = [
    {
      name: 'Web',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
          <text x="8" y="7" fontSize="6" fill="currentColor" fontWeight="bold">www</text>
        </svg>
      ),
    },
    {
      name: 'In-app',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="8" height="16" rx="1" />
          <rect x="13" y="4" width="8" height="16" rx="1" />
          <line x1="8" y1="8" x2="8" y2="8" />
          <line x1="18" y1="8" x2="18" y2="8" />
        </svg>
      ),
    },
    {
      name: 'TV',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="15" rx="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      ),
    },
  ]

  const crossBrowser = [
    {
      name: 'Chrome',
      logo: '/assets/checkout_page/browser/chrome.svg',
    },
    {
      name: 'Safari',
      logo: '/assets/checkout_page/browser/safari.svg',
    },
    {
      name: 'Firefox',
      logo: '/assets/checkout_page/browser/firefox.svg',
    },
    {
      name: 'Opera',
      logo: '/assets/checkout_page/browser/opera.svg',
    },
    {
      name: 'Mobile browsers',
      logo: '/assets/checkout_page/browser/mobile-browsers.svg',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Unconditional Responsiveness and Adaptivity
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay's Checkout works properly on literally every device, app and screen size you could think of.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cross-screen */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Cross-screen</h3>
            <div className="space-y-4">
              {crossScreen.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="text-[#4730B8]">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-900 font-body">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-platform */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Cross-platform</h3>
            <div className="space-y-4">
              {crossPlatform.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="text-[#4730B8]">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-900 font-body">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-browser */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Cross-browser</h3>
            <div className="space-y-4">
              {crossBrowser.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-900 font-body">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

