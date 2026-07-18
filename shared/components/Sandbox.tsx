'use client'

import { useState } from 'react'

export function Sandbox() {
  const [activeTab, setActiveTab] = useState<'merchant' | 'provider'>('merchant')

  const constants = [
    { constant: 'FIRST_NAME', parameter: 'customer [first_name]' },
    { constant: 'LAST_NAME', parameter: 'customer [last_name]' },
    { constant: 'CARDHOLDER_NAME', parameter: 'customer [cardholder_name]' },
    { constant: 'COUNTRY', parameter: 'customer [address] [country]' },
    { constant: 'STATE', parameter: 'customer [address] [state]' },
    { constant: 'CITY', parameter: 'customer [address] [city]' },
    { constant: 'ADDRESS', parameter: 'customer [address] [address]' },
    { constant: 'STREET', parameter: 'customer [address] [street]' },
    { constant: 'POST_CODE', parameter: 'customer [address] [post_code]' },
    { constant: 'EMAIL', parameter: 'customer [email]' },
    { constant: 'PHONE', parameter: 'customer [phone]' },
    { constant: 'DATE_OF_BIRTH', parameter: 'customer [date_of_birth]' },
    { constant: 'BIRTH_DATE', parameter: 'customer [birth_date] ?? constants [birth_date]' },
    { constant: 'FULL_ADDRESS', parameter: 'customer [address] [full_address]' },
    { constant: 'REGION', parameter: 'customer [address] [region]' },
    { constant: 'PAYER_MIDDLE_NAME', parameter: 'customer [address] [middle_name]' },
    { constant: 'PAYER_ZIP', parameter: 'customer [address] [zip]' },
    { constant: 'TERM_URL_TARGET', parameter: 'customer [address] [url_target]' },
    { constant: 'CUSTOMER_REFERENCE_ID', parameter: 'customer [customer_reference_id] ?? constants [customer_reference_id]' },
    { constant: 'ProductName', parameter: 'metadata [product_name]' },
    { constant: 'ProductType', parameter: 'metadata [product_type]' },
    { constant: 'IP', parameter: 'constant [ip]' },
    { constant: 'LANG', parameter: 'constant [lang]' },
    { constant: 'REASON', parameter: 'constant [reason]' },
    { constant: 'SERVICEGROUP', parameter: 'constant [service_group]' },
    { constant: 'TAXCLASS', parameter: 'constant [tax_class]' },
    { constant: 'VARIANT', parameter: 'constant [variant]' },
    { constant: 'USER_DEVICE', parameter: 'constants [user_device]' },
    { constant: 'USER_AGENT', parameter: 'constants [user_agent]' },
    { constant: 'PAYMENT_PURPOSE', parameter: 'customer [metadata] [payment_purpose] ?? constants [payment_purpose]' },
    { constant: 'NATIONAL_ID', parameter: 'customer [national_id] ?? constants [national_id]' },
    { constant: 'OS', parameter: 'constant [os]' },
    { constant: 'OS_VERSION', parameter: 'constant [os_version]' },
    { constant: 'IS_MOBILE', parameter: 'constant [is_mobile]' },
    { constant: 'PLUGINS', parameter: 'constant [plugins]' },
    { constant: 'INDIVIDUAL_TAX_ID', parameter: 'customer [individual_tax_id]' },
    { constant: 'PASSPORT_NUMBER', parameter: 'customer [passport_number] ?? constants [passport_number]' },
  ]

  const defaultValues = [
    { parameter: 'TEST_TEST', value: "'192.168.0.1'" },
    { parameter: 'TEST_TEST', value: "'_test'" },
  ]

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Test Connector Documentation
          </h1>
          <p className="text-[18px] text-gray-700 leading-relaxed font-body">
            The Test Connector allows you to test payment and payout flows in a sandbox environment. 
            Set up your merchant and provider accounts to start testing your integration with ValoraPay.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex gap-4 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('merchant')}
              className={`pb-4 px-2 font-semibold text-[18px] font-body transition-colors ${
                activeTab === 'merchant'
                  ? 'text-[#4730B8] border-b-2 border-[#4730B8]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              H2H Merchant Account
            </button>
            <button
              onClick={() => setActiveTab('provider')}
              className={`pb-4 px-2 font-semibold text-[18px] font-body transition-colors ${
                activeTab === 'provider'
                  ? 'text-[#4730B8] border-b-2 border-[#4730B8]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Provider Account
            </button>
          </div>

          {/* Merchant Account Tab */}
          {activeTab === 'merchant' && (
            <div className="space-y-8">
              {/* Set up Account */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Set up Account H2H merchant account
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                      Step 1: Create Merchant Account
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      To create an account send connection request at the provider&apos;s website or contact manager directly. 
                      Submit the required documents to verify your account and gain access.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                      Step 2: Get required credentials
                    </h3>
                    <p className="text-[18px] text-gray-700 mb-4 leading-relaxed font-body">
                      Credentials that have to be issued:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-700 font-body">
                      <li>Merchant ID</li>
                      <li>API Key</li>
                      <li>Currency settings (You can set these parameters according to available currencies and features for your wallets and services, but it&apos;s necessary to check details of the connection with your ValoraPay account manager.)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connect Merchant Account */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Connect Merchant Account
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                    Step 1. Connect H2H account at the ValoraPay Dashboard
                  </h3>
                  <ol className="list-decimal list-inside space-y-4 text-[18px] text-gray-700 font-body">
                    <li>Go to the Provider Hub page in &apos;New connection&apos; section and choose <strong>H2H Merchant account</strong> option to open Connection form.</li>
                    <li>Enter credentials:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Merchant ID</li>
                        <li>API Key</li>
                        <li>Currency settings</li>
                      </ul>
                    </li>
                    <li>Click <strong>Connect</strong> to complete the setup.</li>
                  </ol>
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-[18px] text-green-800 font-body">
                      <strong>Success!</strong> You have connected <strong>Test</strong> H2H merchant account!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Provider Account Tab */}
          {activeTab === 'provider' && (
            <div className="space-y-8">
              {/* Set up Account */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Set up Account Provider account
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                      Step 1: Create Provider account
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                      To create an account send connection request at the provider&apos;s website or contact manager directly. 
                      Submit the required documents to verify your account and gain access.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                      Step 2: Get required credentials
                    </h3>
                    <p className="text-[18px] text-gray-700 mb-4 leading-relaxed font-body">
                      Credentials that have to be issued:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-700 font-body">
                      <li>Provider ID</li>
                      <li>API Key</li>
                      <li>Secret Key</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connect Provider Account */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Connect Provider Account
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                    Step 1. Connect Provider account at the ValoraPay Dashboard
                  </h3>
                  <ol className="list-decimal list-inside space-y-4 text-[18px] text-gray-700 font-body">
                    <li>Press <strong>Connect</strong> at Test Provider Overview page in &apos;New connection&apos; section and choose <strong>Provider account</strong> option to open Connection form.</li>
                    <li>Enter credentials:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Provider ID</li>
                        <li>API Key</li>
                        <li>Secret Key</li>
                      </ul>
                    </li>
                    <li>Click <strong>Connect</strong> to complete the setup.</li>
                  </ol>
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-[18px] text-green-800 font-body">
                      <strong>Success!</strong> You have connected <strong>Test</strong> Provider account!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* API Examples */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            API Examples
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Minimum data set to create a payment invoice
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`SALE
{
  "amount": 100,
  "currency": "USD",
  "customer": {
    "email": "customer@example.com"
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Maximum data set to create a payment invoice
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`SALE
{
  "amount": 100,
  "currency": "USD",
  "customer": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "customer@example.com",
    "phone": "+1234567890",
    "address": {
      "country": "US",
      "state": "NY",
      "city": "New York",
      "address": "123 Main St",
      "post_code": "10001"
    }
  },
  "metadata": {
    "product_name": "Test Product",
    "product_type": "digital"
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Minimum data set to create a payout invoice
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`PAYOUT
{
  "amount": 100,
  "currency": "USD",
  "customer": {
    "email": "recipient@example.com"
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Maximum data set to create a payout invoice
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`PAYOUT
{
  "amount": 100,
  "currency": "USD",
  "customer": {
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "recipient@example.com",
    "phone": "+1234567890",
    "address": {
      "country": "US",
      "state": "CA",
      "city": "Los Angeles",
      "address": "456 Oak Ave",
      "post_code": "90001"
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Constants */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
            Constants
          </h2>
          <p className="text-[18px] text-gray-700 mb-6 leading-relaxed font-body">
            If some parameters are not sent in the transaction creation request, they will take the values from the set constants.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-body">Constant</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-body">Parameter</th>
                </tr>
              </thead>
              <tbody>
                {constants.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm font-mono text-gray-900 font-body">{item.constant}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">{item.parameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Provider Options */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Provider Options
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                Ignore callback
              </h3>
              <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                For cascading to work correctly, we exclude the possibility of finalizing payments using asynchronous callbacks, 
                ignore the callback, do not change the status of the transaction on it in any way and rely only on the status 
                request for finalization (Reconciliation).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                Enable reconciliation for 3DS
              </h3>
              <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                Enable this option to use reconciliation for 3D Secure transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Default Values */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
            Default Values
          </h2>
          <p className="text-[18px] text-gray-700 mb-6 leading-relaxed font-body">
            If some parameters are not passed in the request to create a transaction and the corresponding constants have no values, 
            then default values will be passed instead.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-body">Parameter</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-body">Default Value</th>
                </tr>
              </thead>
              <tbody>
                {defaultValues.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm font-mono text-gray-900 font-body">{item.parameter}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-[#4730B8] to-[#5a3fc9] rounded-[20px] p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-heading">
            Still looking for help connecting your Test account?
          </h2>
          <p className="text-[18px] mb-6 max-w-2xl mx-auto leading-relaxed font-body">
            Please contact our support team!
          </p>
          <a
            href="/contacts"
            className="inline-block px-8 py-4 bg-white text-[#4730B8] font-semibold rounded-[10px] hover:bg-gray-100 transition-colors font-body"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

