'use client'

import { useState, useEffect } from 'react'
import { FAQ } from './FAQ'

/**
 * Payment Methods page component
 * Features:
 * - Global payment methods list
 * - Continent and country filters
 * - Payment method types information
 * - Clean, readable layout matching platform aesthetics
 * - Responsive design
 */
interface PaymentMethodsProps {
  initialContinent?: string
}

export function PaymentMethods({ initialContinent = 'All' }: PaymentMethodsProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>(initialContinent)
  const [selectedCountry, setSelectedCountry] = useState<string>('All')
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [selectedAlphabet, setSelectedAlphabet] = useState<string>('All')
  const [itemsToShow, setItemsToShow] = useState<number>(20) // 4 rows × 5 columns = 20 items

  // Update selectedContinent when initialContinent changes
  useEffect(() => {
    setSelectedContinent(initialContinent)
  }, [initialContinent])

  // Reset itemsToShow when alphabet filter changes
  useEffect(() => {
    setItemsToShow(20)
  }, [selectedAlphabet])

  const continents = ['All', 'Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']

  // Sample countries list (you can expand this with all countries from the content)
  const countries = [
    { name: 'All countries', code: 'All', flag: '🌍', continent: 'All' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺', continent: 'Oceania' },
    { name: 'Thailand', code: 'TH', flag: '🇹🇭', continent: 'Asia' },
    { name: 'Hong Kong', code: 'HK', flag: '🇭🇰', continent: 'Asia' },
    { name: 'Albania', code: 'AL', flag: '🇦🇱', continent: 'Europe' },
    { name: 'Belgium', code: 'BE', flag: '🇧🇪', continent: 'Europe' },
    { name: 'France', code: 'FR', flag: '🇫🇷', continent: 'Europe' },
    { name: 'Germany', code: 'DE', flag: '🇩🇪', continent: 'Europe' },
    { name: 'Italy', code: 'IT', flag: '🇮🇹', continent: 'Europe' },
    { name: 'Spain', code: 'ES', flag: '🇪🇸', continent: 'Europe' },
    { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', continent: 'Europe' },
    { name: 'United States', code: 'US', flag: '🇺🇸', continent: 'North America' },
    { name: 'Canada', code: 'CA', flag: '🇨🇦', continent: 'North America' },
    { name: 'Mexico', code: 'MX', flag: '🇲🇽', continent: 'North America' },
    { name: 'Brazil', code: 'BR', flag: '🇧🇷', continent: 'South America' },
    { name: 'Argentina', code: 'AR', flag: '🇦🇷', continent: 'South America' },
    { name: 'China', code: 'CN', flag: '🇨🇳', continent: 'Asia' },
    { name: 'Japan', code: 'JP', flag: '🇯🇵', continent: 'Asia' },
    { name: 'India', code: 'IN', flag: '🇮🇳', continent: 'Asia' },
    { name: 'Singapore', code: 'SG', flag: '🇸🇬', continent: 'Asia' },
    { name: 'South Africa', code: 'ZA', flag: '🇿🇦', continent: 'Africa' },
    { name: 'Nigeria', code: 'NG', flag: '🇳🇬', continent: 'Africa' },
    { name: 'Kenya', code: 'KE', flag: '🇰🇪', continent: 'Africa' },
    { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', continent: 'Oceania' },
  ]

  const filteredCountries = countries.filter((country) => {
    // Always show "All countries" first
    if (country.code === 'All') return true
    // Filter by continent
    if (selectedContinent !== 'All' && country.continent !== selectedContinent) return false
    // Filter by selected country
    if (selectedCountry !== 'All' && country.code !== selectedCountry) return false
    return true
  }).sort((a, b) => {
    // Sort "All countries" to the top
    if (a.code === 'All') return -1
    if (b.code === 'All') return 1
    return 0
  })

  return (
    <div>
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Section */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 mb-12 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              {/* Continent Filter */}
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold text-gray-900 mb-3 font-heading">
                  Continent
                </label>
                <div className="flex flex-wrap gap-2">
                  {continents.map((continent) => (
                    <button
                      key={continent}
                      type="button"
                      onClick={() => {
                        setSelectedContinent(continent)
                        setSelectedCountry('All')
                      }}
                      className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-colors font-body ${
                        selectedContinent === continent
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {continent === 'North America' ? 'N. America' : continent === 'South America' ? 'S. America' : continent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country Filter */}
              <div className="w-full lg:w-auto lg:min-w-[300px]">
                <label className="block text-sm font-semibold text-gray-900 mb-3 font-heading">
                  Country
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-left flex items-center justify-between hover:bg-gray-100 transition-colors font-body"
                  >
                    <span className="flex items-center gap-2">
                      {selectedCountry === 'All' ? (
                        <>
                          <span>🌍</span>
                          <span>All countries</span>
                        </>
                      ) : (
                        <>
                          <span>{countries.find((c) => c.code === selectedCountry)?.flag}</span>
                          <span>{countries.find((c) => c.code === selectedCountry)?.name}</span>
                        </>
                      )}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isCountryDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsCountryDropdownOpen(false)}
                      ></div>
                      <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                        {countries
                          .filter((country) => selectedContinent === 'All' || country.continent === selectedContinent)
                          .map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country.code)
                                setIsCountryDropdownOpen(false)
                              }}
                              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors font-body ${
                                selectedCountry === country.code ? 'bg-primary/10' : ''
                              }`}
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span className="text-sm text-gray-700">{country.name}</span>
                            </button>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Providers Section */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 mb-12 shadow-sm">
            {/* Alphabet Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedAlphabet('All')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors font-body ${
                    selectedAlphabet === 'All'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setSelectedAlphabet(letter)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-body ${
                      selectedAlphabet === letter
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Providers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
              {(() => {
                const allProviders = [
                // A
                { name: '24-7 Bill Pay', logo: null, hasDot: true },
                { name: '7-Eleven', logo: null, hasDot: true },
                { name: 'aCuenta', logo: null, hasDot: true },
                { name: 'An Binh Commercial Joint Stock Bank', logo: null, hasDot: true },
                { name: 'Abaqoos', logo: null, hasDot: true },
                { name: 'ABN AMRO Bank', logo: null, hasDot: true },
                { name: 'ACB Bank', logo: null, hasDot: true },
                { name: 'AcceptEmail', logo: null, hasDot: true },
                { name: 'Acceptgiro', logo: null, hasDot: true },
                { name: 'account2account', logo: null, hasDot: true },
                { name: 'Acertemos', logo: null, hasDot: false },
                { name: 'Automated Clearing House (ACH)', logo: null, hasDot: false },
                { name: 'Kcell/Activ', logo: null, hasDot: false },
                { name: 'Activa WesternUnion', logo: null, hasDot: false },
                { name: 'AdvCash', logo: null, hasDot: true },
                { name: 'Affin Bank Berhad', logo: null, hasDot: false },
                { name: 'Affin Bank Berhad (FPX), Malaysia', logo: null, hasDot: false },
                { name: 'Afirme online banking', logo: null, hasDot: true },
                { name: 'AfterPay', logo: null, hasDot: true },
                { name: 'Agentes Bancarios', logo: null, hasDot: false },
                { name: 'BANCO AGRARIO', logo: null, hasDot: true },
                { name: 'Vietnam Bank for Agriculture and Rural Development', logo: null, hasDot: true },
                { name: 'Agricultural Bank of China', logo: null, hasDot: true },
                { name: 'Airtel money', logo: null, hasDot: true },
                { name: 'AT Ghana', logo: null, hasDot: true },
                { name: 'Akbank', logo: null, hasDot: true },
                { name: 'Aktia', logo: null, hasDot: true },
                { name: 'Aktivbank', logo: null, hasDot: true },
                { name: 'Älandsbanken', logo: null, hasDot: true },
                { name: 'Alfamart', logo: null, hasDot: true },
                { name: 'Algorand', logo: null, hasDot: true },
                { name: 'Alipay', logo: null, hasDot: true },
                { name: 'Allahabad Bank', logo: null, hasDot: true },
                { name: 'Alliance Bank Malaysia Berhad', logo: null, hasDot: true },
                { name: 'Alliance Bank (FPX), Malaysia', logo: null, hasDot: true },
                { name: 'Almacenes Exito', logo: null, hasDot: true },
                { name: 'Tele2/Altel', logo: null, hasDot: true },
                { name: 'Amazon Pay', logo: null, hasDot: true },
                { name: 'AmBank', logo: null, hasDot: true },
                { name: 'Ambank (FPX), Malaysia', logo: null, hasDot: true },
                { name: 'American Express', logo: null, hasDot: true },
                { name: 'Andhra Bank', logo: null, hasDot: true },
                { name: 'Any.Money', logo: null, hasDot: true },
                { name: 'Apostar', logo: null, hasDot: true },
                { name: 'Apple Pay', logo: null, hasDot: true },
                { name: 'Apuestas Cucuta 75', logo: null, hasDot: true },
                { name: 'Argencard', logo: null, hasDot: true },
                { name: 'Bank Artha Graha', logo: null, hasDot: true },
                { name: 'Asia Commercial Bank', logo: null, hasDot: true },
                { name: 'Asia Commercial Bank QR', logo: null, hasDot: true },
                { name: 'Astropay', logo: null, hasDot: true },
                { name: 'Astropay Wallet', logo: null, hasDot: true },
                { name: 'Astropay - Cash / Invoice', logo: null, hasDot: true },
                { name: 'Astropay - Direct Bank Transfer', logo: null, hasDot: true },
                { name: 'Astropay - Manual Bank Transfer', logo: null, hasDot: true },
                { name: 'Astropay - Unionpay', logo: null, hasDot: true },
                { name: 'AU Small Finance Bank', logo: null, hasDot: true },
                { name: 'Aura', logo: null, hasDot: true },
                { name: 'Australia and New Zealand Banking Group', logo: null, hasDot: true },
                { name: 'Axis Bank', logo: null, hasDot: true },
                { name: 'AzerTurkBank', logo: null, hasDot: true },
                { name: 'North Asia Commercial Joint Stock Bank', logo: null, hasDot: true },
                { name: 'Banamex', logo: null, hasDot: true },
                { name: 'Banbif', logo: null, hasDot: true },
                { name: 'BANCAMIA', logo: null, hasDot: true },
                { name: 'BancNet', logo: null, hasDot: true },
                { name: 'Banco Azteca', logo: null, hasDot: true },
                { name: 'Banco Bci', logo: null, hasDot: true },
                { name: 'Banco BICE', logo: null, hasDot: true },
                // B
                { name: 'Banco Bolivariano', logo: null, hasDot: true },
                { name: 'Banco Bradesco S.A.', logo: null, hasDot: true },
                { name: 'Caixa Econômica Federal', logo: null, hasDot: true },
                { name: 'Banco Ciudad', logo: null, hasDot: true },
                { name: 'Banco CrediChile', logo: null, hasDot: true },
                { name: 'Banco Credicoop', logo: null, hasDot: true },
                { name: 'Banco de Antigua', logo: null, hasDot: true },
                { name: 'Banco de Chile', logo: null, hasDot: true },
                { name: 'Banco De Credito', logo: null, hasDot: true },
                { name: 'Banco de Crédito', logo: null, hasDot: true },
                { name: 'Banco Del Barrio', logo: null, hasDot: true },
                { name: 'Banco Estado', logo: null, hasDot: true },
                { name: 'Banco Falabella', logo: null, hasDot: true },
                { name: 'Banco Guayaquil', logo: null, hasDot: true },
                { name: 'Banco GyT Continental', logo: null, hasDot: true },
                { name: 'Banco Internacional', logo: null, hasDot: true },
                { name: 'Banco Nación', logo: null, hasDot: true },
                { name: 'Banco Nacional', logo: null, hasDot: true },
                { name: 'Banco Original', logo: null, hasDot: true },
                { name: 'Banco Pichincha', logo: null, hasDot: true },
                { name: 'Banco Ripley', logo: null, hasDot: true },
                { name: 'Banco Safra', logo: null, hasDot: true },
                { name: 'Banco Santander', logo: null, hasDot: true },
                { name: 'Banco do Brasil', logo: null, hasDot: true },
                { name: 'Banco Itaú', logo: null, hasDot: true },
                { name: 'Bancontact', logo: null, hasDot: true },
                { name: 'Bancontact/Mister Cash', logo: null, hasDot: true },
                { name: 'Banco Pastor', logo: null, hasDot: true },
                { name: 'Banco Popular', logo: null, hasDot: true },
                { name: 'Banc Sabadell', logo: null, hasDot: true },
                { name: 'Bandhan Bank', logo: null, hasDot: true },
                { name: 'Bangkok Bank', logo: null, hasDot: true },
                { name: 'Bangkok Bank netbanking', logo: null, hasDot: true },
                { name: 'Bank Central Asia', logo: null, hasDot: true },
                { name: 'Bank Islam Malaysia', logo: null, hasDot: true },
                { name: 'Bank Islam Malaysia (FPX)', logo: null, hasDot: true },
                { name: 'Bank Negara Indonesia', logo: null, hasDot: true },
                { name: 'Bank Negara Indonesia (VA)', logo: null, hasDot: true },
                { name: 'PT. Bank Neo Commerce', logo: null, hasDot: true },
                { name: 'Bank Of Baroda', logo: null, hasDot: true },
                { name: 'Bank of China', logo: null, hasDot: true },
                { name: 'Bank of Communication', logo: null, hasDot: true },
                { name: 'Bank of India', logo: null, hasDot: true },
                { name: 'Bank QR', logo: null, hasDot: true },
                { name: 'Bank Rakyat Indonesia', logo: null, hasDot: true },
                { name: 'Bank Rakyat', logo: null, hasDot: true },
                { name: 'Bank Rakyat (FPX), Malaysia', logo: null, hasDot: true },
                { name: 'Bank Simpanan Nasional', logo: null, hasDot: true },
                { name: 'Bank Simpanan Nasional (FPX), Malaysia', logo: null, hasDot: true },
                { name: 'Bank Transfer', logo: null, hasDot: true },
                { name: 'Bank Transfer Aggregated', logo: null, hasDot: true },
                { name: 'Klarna bank transfer', logo: null, hasDot: true },
                { name: 'Bank Transfer (P2P)', logo: null, hasDot: true },
                { name: 'Bank Transfer QR', logo: null, hasDot: true },
                { name: 'Bank Transfer VA', logo: null, hasDot: true },
                { name: 'Bankaxess', logo: null, hasDot: true },
                { name: 'Bankia', logo: null, hasDot: true },
                { name: 'Bank Inter', logo: null, hasDot: true },
                { name: 'Bank Link', logo: null, hasDot: true },
                { name: 'Bank of China netbanking', logo: null, hasDot: true },
                { name: 'Bank Zachodni WBK', logo: null, hasDot: true },
                { name: 'Banorte online banking', logo: null, hasDot: true },
                { name: 'Banrisul Banricompras', logo: null, hasDot: true },
                { name: 'Baoviet Joint Stock Commercial Bank', logo: null, hasDot: true },
                { name: 'BarPay', logo: null, hasDot: true },
                { name: 'Barzahlen', logo: null, hasDot: true },
                { name: 'BAZ SuperApp', logo: null, hasDot: true },
                { name: 'BBVA', logo: null, hasDot: true },
                { name: 'BBVA Bancomer', logo: null, hasDot: true },
                { name: 'BBVA COLOMBIA SA', logo: null, hasDot: true },
                { name: 'Bbva Continental', logo: null, hasDot: true },
                { name: 'BBVA Continental', logo: null, hasDot: true },
                { name: 'BBVA Frances', logo: null, hasDot: true },
                { name: 'BCAVA', logo: null, hasDot: true },
                { name: 'BCP', logo: null, hasDot: true },
                { name: 'BDO Over-The-Counter', logo: null, hasDot: true },
                { name: 'Belfius DirectNet', logo: null, hasDot: true },
                { name: 'BIDV Bank', logo: null, hasDot: true },
                { name: 'BIDV Bank QR', logo: null, hasDot: true },
                { name: 'Big C', logo: null, hasDot: true },
                { name: 'Billink', logo: null, hasDot: true },
                { name: 'PayPal Credit', logo: null, hasDot: true },
                { name: 'Billpay', logo: null, hasDot: true },
                { name: 'BillSAFE', logo: null, hasDot: true },
                { name: 'Binance Coin', logo: null, hasDot: true },
                { name: 'Binance smart chain', logo: null, hasDot: true },
                { name: 'Binance Usd', logo: null, hasDot: true },
                { name: 'Binance Pay', logo: null, hasDot: true },
                { name: 'Bitcoin', logo: null, hasDot: true },
                { name: 'Bitcoin Cash', logo: null, hasDot: true },
                { name: 'BitexPRO', logo: null, hasDot: true },
                { name: 'BitexPRO advwallet', logo: null, hasDot: true },
                { name: 'BitexPRO P2P', logo: null, hasDot: true },
                { name: 'BitexPRO payeer', logo: null, hasDot: true },
                { name: 'BitexPRO wallet', logo: null, hasDot: true },
                { name: 'Bizum', logo: null, hasDot: true },
                { name: 'Bkash Limited', logo: null, hasDot: true },
                { name: 'BKM Express', logo: null, hasDot: true },
                { name: 'BLIK', logo: null, hasDot: true },
                { name: 'BNCVA', logo: null, hasDot: true },
                { name: 'BNIVA', logo: null, hasDot: true },
                { name: 'BNP Paribas Bank', logo: null, hasDot: true },
                { name: 'Bodega Aurrera', logo: null, hasDot: true },
                { name: 'BANCO DE BOGOTA DESARROLLO 2013', logo: null, hasDot: true },
                { name: 'Boleto Bancario', logo: null, hasDot: true },
                { name: 'Boost', logo: null, hasDot: true },
                { name: 'BPAY', logo: null, hasDot: true },
                { name: 'Bradesco Comércio Eletrônico', logo: null, hasDot: true },
                { name: 'BRI Bank', logo: null, hasDot: true },
                { name: 'BRIVA', logo: null, hasDot: true },
                { name: 'BSIVA', logo: null, hasDot: true },
                { name: 'Bank BTN', logo: null, hasDot: true },
                { name: 'Bank BTPN', logo: null, hasDot: true },
                { name: 'BudPay aggregated', logo: null, hasDot: true },
                { name: 'Bank KB Bukopin', logo: null, hasDot: true },
                { name: 'Busan Bank', logo: null, hasDot: true },
                { name: 'Bybit Pay', logo: null, hasDot: true },
                // C
                { name: 'Cabal', logo: null, hasDot: true },
                { name: 'Caja Arequipa', logo: null, hasDot: true },
                { name: 'Caja Cusco', logo: null, hasDot: true },
                { name: 'Caja Desarrollo', logo: null, hasDot: true },
                { name: 'Caja Huancayo', logo: null, hasDot: true },
                { name: 'Caja ICA', logo: null, hasDot: true },
                { name: 'Caja Piura', logo: null, hasDot: true },
                { name: 'BANCO CAJA SOCIAL', logo: null, hasDot: true },
                { name: 'Caja Tacna', logo: null, hasDot: true },
                { name: 'Caja Trujillo', logo: null, hasDot: true },
                { name: 'Caja Vecina', logo: null, hasDot: true },
                { name: 'Calimax', logo: null, hasDot: true },
                { name: 'CALYPSO PAY LTD - Empayre', logo: null, hasDot: true },
                { name: 'CALYPSO PAY LTD - GateExpress', logo: null, hasDot: true },
                { name: 'Canara Bank', logo: null, hasDot: true },
                { name: 'Capayable', logo: null, hasDot: true },
                { name: 'Capitec Pay', logo: null, hasDot: true },
                { name: 'Payment card', logo: null, hasDot: true },
                { name: 'Card transfer', logo: null, hasDot: true },
                { name: 'Card Transfer Aggregated', logo: null, hasDot: true },
                { name: 'Card Transfer Aggregated P2P', logo: null, hasDot: true },
                { name: 'Humo card transfer', logo: null, hasDot: true },
                { name: 'Uzcard card transfer', logo: null, hasDot: true },
                { name: 'Cardano', logo: null, hasDot: true },
                { name: 'Carrier Billing', logo: null, hasDot: true },
                { name: 'CartaSi', logo: null, hasDot: true },
                { name: 'Carte Bancaires', logo: null, hasDot: true },
                { name: 'Carte Bleue', logo: null, hasDot: true },
                { name: 'Carulla', logo: null, hasDot: true },
                { name: 'Cascad', logo: null, hasDot: true },
                { name: 'Cash', logo: null, hasDot: true },
                { name: 'CASHlib Voucher', logo: null, hasDot: true },
                { name: 'CASHU', logo: null, hasDot: true },
                { name: 'Cebuana Pawnshop', logo: null, hasDot: true },
                { name: 'Cellular World', logo: null, hasDot: true },
                { name: 'Central Bank of India', logo: null, hasDot: true },
                { name: 'CepBank', logo: null, hasDot: true },
                { name: 'Ceská Sporitelna', logo: null, hasDot: true },
                { name: 'VietCredit Finance Joint Stock Company', logo: null, hasDot: true },
                { name: 'Chainlink', logo: null, hasDot: true },
                { name: 'China Citic Bank', logo: null, hasDot: true },
                { name: 'China Construction Bank', logo: null, hasDot: true },
                { name: 'China Everbright Bank', logo: null, hasDot: true },
                { name: 'China Merchants Bank', logo: null, hasDot: true },
                { name: 'China Minsheng Bank', logo: null, hasDot: true },
                { name: 'China Postal Savings Bank', logo: null, hasDot: true },
                { name: 'China Union Pay', logo: null, hasDot: true },
                { name: 'China UnionPay', logo: null, hasDot: true },
                { name: 'CIB Smart Wallet', logo: null, hasDot: true },
                { name: 'Ciber Pay', logo: null, hasDot: true },
                { name: 'Cifrograd', logo: null, hasDot: true },
                { name: 'CIMB Bank Vietnam Limited', logo: null, hasDot: true },
                { name: 'CIMB Bank (FPX)', logo: null, hasDot: true },
                { name: 'CIMBVA', logo: null, hasDot: true },
                { name: 'CIMB Clicks Bank', logo: null, hasDot: true },
                { name: 'CIMB Clicks Indonesia', logo: null, hasDot: true },
                { name: 'Bank CIMB Niaga', logo: null, hasDot: true },
                { name: 'CIMB Thai Bank Public Company Limited', logo: null, hasDot: true },
              ]

                const filteredProviders = allProviders.filter((provider) => {
                  if (selectedAlphabet === 'All') return true
                  return provider.name.charAt(0).toUpperCase() === selectedAlphabet
                })

                const displayedProviders = filteredProviders.slice(0, itemsToShow)
                const hasMore = filteredProviders.length > itemsToShow

                return (
                  <>
                    {displayedProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group relative"
                  >
                    {/* Blue Dot Indicator */}
                    {provider.hasDot && (
                      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-[10px]"></div>
                    )}
                    
                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-3 group-hover:border-primary transition-colors">
                      {provider.logo ? (
                        <img
                          src={provider.logo}
                          alt={provider.name}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-8 h-8 text-gray-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[10px] text-gray-400 font-body">NOT FOUND</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Provider Name */}
                    <p className="text-xs text-gray-700 text-center font-body leading-tight line-clamp-2">
                      {provider.name}
                    </p>
                  </div>
                    ))}
                    
                    {/* Load More Button */}
                    {hasMore && (
                      <div className="col-span-full flex justify-center mt-6">
                        <button
                          type="button"
                          onClick={() => setItemsToShow((prev) => prev + 20)}
                          className="px-8 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body"
                        >
                          Load More
                        </button>
                      </div>
                    )}
                  </>
                )
              })()}
            </div>
          </div>

          {/* Apply Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Apply as PSP Card */}
            <div className="bg-gray-100 border border-gray-200 rounded-[30px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Apply as a PSP
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-body mb-6">
                Showcase your solutions directly to the target audience.
              </p>
              <a
                href="#apply-psp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body"
              >
                Apply
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Apply as Partner Card */}
            <div className="bg-gray-100 border border-gray-200 rounded-[30px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Apply as a Partner
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-body mb-6">
                Become our partner and get qualified leads hassle-freely.
              </p>
              <a
                href="#apply-partner"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body"
              >
                Apply
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

