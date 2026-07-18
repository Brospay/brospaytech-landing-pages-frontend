'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import ReactCountryFlag from 'react-country-flag'

/**
 * Internationalisation section component
 * Shows currency, language and geolocation support
 */
export function Internationalisation() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  // Helper to render flag with fallback for special cases
  const renderFlag = (code: string) => {
    // Special cases that need emoji fallback
    if (code === 'EU') {
      return <span className="text-2xl">🇪🇺</span>
    }
    if (code === 'HK') {
      return <span className="text-2xl">🇭🇰</span>
    }
    
    try {
      return (
        <ReactCountryFlag
          countryCode={code}
          svg
          style={{
            width: '2rem',
            height: '1.5rem',
          }}
          className="rounded"
        />
      )
    } catch {
      return <span className="text-2xl">🏳️</span>
    }
  }

  const countries = [
    { name: 'Austria', code: 'AT' },
    { name: 'Scotland', code: 'GB' },
    { name: 'Norway', code: 'NO' },
    { name: 'GBP', code: 'GB' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Australia', code: 'AU' },
    { name: 'KRW', code: 'KR' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Israel', code: 'IL' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Armenia', code: 'AM' },
    { name: 'EUR', code: 'EU' },
    { name: 'Japan', code: 'JP' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Denmark', code: 'DK' },
    { name: 'UAE', code: 'AE' },
    { name: 'England', code: 'GB' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'China', code: 'CN' },
    { name: 'Greece', code: 'GR' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'UAH', code: 'UA' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'India', code: 'IN' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Finland', code: 'FI' },
    { name: 'Argentina', code: 'AR' },
    { name: 'USD', code: 'US' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Italy', code: 'IT' },
    { name: 'Canada', code: 'CA' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
    { name: 'JPY', code: 'JP' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Switzerland', code: 'CH' },
  ]


  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Internationalisation and localisation
          </h2>
          <p className="text-[18px] text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
            Our international Checkout solution supports an exhaustive list of <span className="text-[#4730B8] font-semibold">200+ currencies</span>, multi-language interface with support for <span className="text-[#4730B8] font-semibold">25 languages</span> and geolocation adaptability.
          </p>
        </div>

        {/* Animated Flags Grid */}
        <div className="relative overflow-hidden py-8">
          {/* First Row - Left to Right */}
          <div className="flex gap-4 mb-4 animate-scroll-left">
            {[...countries.slice(0, 22), ...countries.slice(0, 22)].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-[10px] px-4 py-2 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow"
              >
                {renderFlag(country.code)}
                <span className="text-sm font-medium text-gray-700 font-body whitespace-nowrap">{country.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex gap-4 animate-scroll-right">
            {[...countries.slice(22), ...countries.slice(22)].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-[10px] px-4 py-2 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow"
              >
                {renderFlag(country.code)}
                <span className="text-sm font-medium text-gray-700 font-body whitespace-nowrap">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#4730B8] mb-2 font-heading">200+</div>
            <p className="text-gray-600 font-body">Currencies supported</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#4730B8] mb-2 font-heading">25+</div>
            <p className="text-gray-600 font-body">Languages available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#4730B8] mb-2 font-heading">150+</div>
            <p className="text-gray-600 font-body">Countries covered</p>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

