'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Exchange Rates Data Sources section component
 * Shows FX providers, central banks, commercial banks
 */
export function ExchangeRatesDataSources() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const fxProviders = [
    { name: 'Coinbase', logo: null },
    { name: 'CoinGate', logo: null },
    { name: 'CryptoCompare', logo: null },
    { name: 'Currencylayer', logo: null },
    { name: 'Fixer.io', logo: null },
    { name: 'Valuta EX', logo: null },
  ]

  const centralBanks = [
    { name: 'European Union', flagCode: 'eu', code: 'EU' },
    { name: 'Armenia', flagCode: 'am', code: 'AM' },
    { name: 'Azerbaijan', flagCode: 'az', code: 'AZ' },
    { name: 'Georgia', flagCode: 'ge', code: 'GE' },
    { name: 'Kazakhstan', flagCode: 'kz', code: 'KZ' },
    { name: 'Kyrgyz Republic', flagCode: 'kg', code: 'KG' },
    { name: 'Moldova', flagCode: 'md', code: 'MD' },
    { name: 'Nigeria', flagCode: 'ng', code: 'NG' },
    { name: 'Poland', flagCode: 'pl', code: 'PL' },
    { name: 'Tajikistan', flagCode: 'tj', code: 'TJ' },
    { name: 'Tanzania', flagCode: 'tz', code: 'TZ' },
    { name: 'Turkey', flagCode: 'tr', code: 'TR' },
    { name: 'Turkmenistan', flagCode: 'tm', code: 'TM' },
    { name: 'Ukraine', flagCode: 'ua', code: 'UA' },
    { name: 'Uzbekistan', flagCode: 'uz', code: 'UZ' },
  ]

  const commercialBanks = [
    'Ukreximbank',
    'PrivatBank',
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Exchange Rates Data Sources
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Implement different currency exchange rates per client and currency pair to increase overall efficiency. Choose from direct, indirect, commercial or fixed types.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FX Rates Providers */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">FX rates providers</h3>
            <div className="grid grid-cols-2 gap-4">
              {fxProviders.map((provider, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors flex flex-col items-center justify-center gap-2">
                  {provider.logo ? (
                    <img 
                      src={provider.logo} 
                      alt={provider.name}
                      className="h-8 w-auto object-contain mb-1"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#4730B8]/10 flex items-center justify-center mb-1">
                      <span className="text-lg font-bold text-[#4730B8]">{provider.name.charAt(0)}</span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 font-body">{provider.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Central Banks */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Central banks</h3>
            <div className="grid grid-cols-2 gap-3">
              {centralBanks.map((bank, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`fi fi-${bank.flagCode} flex-shrink-0`} style={{ fontSize: '20px' }}></span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 font-body">{bank.code}</span>
                    <span className="text-sm text-gray-600 font-body">{bank.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Banks */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Commercial banks</h3>
            <div className="space-y-4">
              {commercialBanks.map((bank, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-700 font-body">{bank}</span>
                </div>
              ))}
            </div>

            {/* Rate Correction Visualization */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 font-heading">Rate correction</h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-body">Currency pair</span>
                    <span className="text-xs font-medium text-gray-700 font-body">USD/EUR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-body">Source</span>
                    <span className="text-xs font-medium text-gray-700 font-body">ECB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-body">Correction</span>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-[#E8E4FF] text-[#4730B8] rounded font-body">+1%</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-body">+2%</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-body">+5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

