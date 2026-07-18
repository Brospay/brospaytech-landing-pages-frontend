'use client'

import { useState, useEffect } from 'react'
import { FAQ } from './FAQ'

/**
 * Payment Providers page component
 * Features:
 * - Global payment service providers list
 * - Continent and country filters
 * - Payment provider information
 * - Clean, readable layout matching platform aesthetics
 * - Responsive design
 */
interface PaymentProvidersProps {
  initialContinent?: string
}

export function PaymentProviders({ initialContinent = 'All' }: PaymentProvidersProps) {
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

  // Sample countries list
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

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

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
            <h2 className="text-xl font-semibold text-gray-900 mb-6 font-heading">
              Payment providers
            </h2>
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
                {alphabet.map((letter) => (
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
                  { name: 'Adyen', logo: null, hasDot: true },
                  { name: 'Alipay', logo: null, hasDot: true },
                  { name: 'Amazon Pay', logo: null, hasDot: true },
                  { name: 'American Express', logo: null, hasDot: true },
                  { name: 'Apple Pay', logo: null, hasDot: true },
                  { name: 'Authorize.Net', logo: null, hasDot: true },
                  // B
                  { name: 'Braintree', logo: null, hasDot: true },
                  { name: 'BitPay', logo: null, hasDot: true },
                  { name: 'BlueSnap', logo: null, hasDot: true },
                  // C
                  { name: 'Checkout.com', logo: null, hasDot: true },
                  { name: 'Coinbase Commerce', logo: null, hasDot: true },
                  { name: 'CyberSource', logo: null, hasDot: true },
                  // D
                  { name: 'Dwolla', logo: null, hasDot: true },
                  // F
                  { name: 'First Data', logo: null, hasDot: true },
                  { name: 'Fiserv', logo: null, hasDot: true },
                  // G
                  { name: 'Google Pay', logo: null, hasDot: true },
                  // K
                  { name: 'Klarna', logo: null, hasDot: true },
                  // M
                  { name: 'Mastercard', logo: null, hasDot: true },
                  { name: 'Mollie', logo: null, hasDot: true },
                  // P
                  { name: 'PayPal', logo: null, hasDot: true },
                  { name: 'Payoneer', logo: null, hasDot: true },
                  { name: 'PayU', logo: null, hasDot: true },
                  { name: 'Paysafe', logo: null, hasDot: true },
                  { name: 'Plaid', logo: null, hasDot: true },
                  // R
                  { name: 'Razorpay', logo: null, hasDot: true },
                  { name: 'Revolut', logo: null, hasDot: true },
                  // S
                  { name: 'Sage Pay', logo: null, hasDot: true },
                  { name: 'Samsung Pay', logo: null, hasDot: true },
                  { name: 'Skrill', logo: null, hasDot: true },
                  { name: 'Square', logo: null, hasDot: true },
                  { name: 'Stripe', logo: null, hasDot: true },
                  // T
                  { name: 'TransferWise', logo: null, hasDot: true },
                  { name: 'Trustly', logo: null, hasDot: true },
                  // V
                  { name: 'Visa', logo: null, hasDot: true },
                  { name: 'Viva Wallet', logo: null, hasDot: true },
                  // W
                  { name: 'WeChat Pay', logo: null, hasDot: true },
                  { name: 'Worldpay', logo: null, hasDot: true },
                  // Additional providers
                  { name: '2Checkout', logo: null, hasDot: true },
                  { name: 'Aeropay', logo: null, hasDot: true },
                  { name: 'Afterpay', logo: null, hasDot: true },
                  { name: 'Alma', logo: null, hasDot: true },
                  { name: 'Ayden', logo: null, hasDot: true },
                  { name: 'Bancontact', logo: null, hasDot: true },
                  { name: 'Bank of America', logo: null, hasDot: true },
                  { name: 'Barclays', logo: null, hasDot: true },
                  { name: 'BBVA', logo: null, hasDot: true },
                  { name: 'Bill.com', logo: null, hasDot: true },
                  { name: 'Cash App', logo: null, hasDot: true },
                  { name: 'Chase Paymentech', logo: null, hasDot: true },
                  { name: 'Citibank', logo: null, hasDot: true },
                  { name: 'Clearhaus', logo: null, hasDot: true },
                  { name: 'CoinGate', logo: null, hasDot: true },
                  { name: 'Cryptopay', logo: null, hasDot: true },
                  { name: 'Diners Club', logo: null, hasDot: true },
                  { name: 'Discover', logo: null, hasDot: true },
                  { name: 'ePayments', logo: null, hasDot: true },
                  { name: 'Epayservice', logo: null, hasDot: true },
                  { name: 'EPS', logo: null, hasDot: true },
                  { name: 'Faster Payments', logo: null, hasDot: true },
                  { name: 'Fidor Bank', logo: null, hasDot: true },
                  { name: 'FIS', logo: null, hasDot: true },
                  { name: 'Flutterwave', logo: null, hasDot: true },
                  { name: 'Fortumo', logo: null, hasDot: true },
                  { name: 'GiroPay', logo: null, hasDot: true },
                  { name: 'GoCardless', logo: null, hasDot: true },
                  { name: 'Helcim', logo: null, hasDot: true },
                  { name: 'iDEAL', logo: null, hasDot: true },
                  { name: 'Ingenico', logo: null, hasDot: true },
                  { name: 'JCB', logo: null, hasDot: true },
                  { name: 'JPMorgan Chase', logo: null, hasDot: true },
                  { name: 'Kabbage', logo: null, hasDot: true },
                  { name: 'KBC', logo: null, hasDot: true },
                  { name: 'Lemonway', logo: null, hasDot: true },
                  { name: 'Lydia', logo: null, hasDot: true },
                  { name: 'Mangopay', logo: null, hasDot: true },
                  { name: 'Merchant e-Solutions', logo: null, hasDot: true },
                  { name: 'Moneris', logo: null, hasDot: true },
                  { name: 'N26', logo: null, hasDot: true },
                  { name: 'Nets', logo: null, hasDot: true },
                  { name: 'Nexi', logo: null, hasDot: true },
                  { name: 'Opayo', logo: null, hasDot: true },
                  { name: 'Open Banking', logo: null, hasDot: true },
                  { name: 'Paybox', logo: null, hasDot: true },
                  { name: 'PayGate', logo: null, hasDot: true },
                  { name: 'Paymentwall', logo: null, hasDot: true },
                  { name: 'Payone', logo: null, hasDot: true },
                  { name: 'PayPal Credit', logo: null, hasDot: true },
                  { name: 'Paystack', logo: null, hasDot: true },
                  { name: 'Paytm', logo: null, hasDot: true },
                  { name: 'Paysera', logo: null, hasDot: true },
                  { name: 'Payza', logo: null, hasDot: true },
                  { name: 'PingPong', logo: null, hasDot: true },
                  { name: 'Pix', logo: null, hasDot: true },
                  { name: 'Qiwi', logo: null, hasDot: true },
                  { name: 'Rapyd', logo: null, hasDot: true },
                  { name: 'RBS Worldpay', logo: null, hasDot: true },
                  { name: 'Safaricom M-Pesa', logo: null, hasDot: true },
                  { name: 'Sberbank', logo: null, hasDot: true },
                  { name: 'SEPA', logo: null, hasDot: true },
                  { name: 'Shopify Payments', logo: null, hasDot: true },
                  { name: 'Sofort', logo: null, hasDot: true },
                  { name: 'Spreedly', logo: null, hasDot: true },
                  { name: 'SumUp', logo: null, hasDot: true },
                  { name: 'Tinkoff Bank', logo: null, hasDot: true },
                  { name: 'UnionPay', logo: null, hasDot: true },
                  { name: 'Venmo', logo: null, hasDot: true },
                  { name: 'Verifone', logo: null, hasDot: true },
                  { name: 'Vipps', logo: null, hasDot: true },
                  { name: 'Wells Fargo', logo: null, hasDot: true },
                  { name: 'Western Union', logo: null, hasDot: true },
                  { name: 'Wirecard', logo: null, hasDot: true },
                  { name: 'Yandex.Money', logo: null, hasDot: true },
                  { name: 'Zelle', logo: null, hasDot: true },
                  { name: 'Zimpler', logo: null, hasDot: true },
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
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

