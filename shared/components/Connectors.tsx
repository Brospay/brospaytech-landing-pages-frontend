'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Connectors() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const tableOfContents = [
    { id: 'connectors', title: 'Connectors' },
    { id: 'how-to-connect', title: 'How to connect to the payment provider from this list' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  // Sample list of connectors - in a real implementation, this would be fetched or passed as props
  const connectors = [
    '2click', 'ABB', 'ADgroup', 'Alliancepay', 'AltitudePay', 'AML Node', 'AntrPay', 'any.cash', 'Any.Money', 'AnSpacePay',
    'AureaVia', 'Axcess Merchant Services', 'Appexmoney', 'Aspay', 'AsuPay', 'Astropay', 'B2pay', 'Bettertbro', 'BingoPay',
    'Bitandpay', 'Bitlabz', 'Bitpace', 'Blue World', 'BoxPlat', 'BTCBIT', 'Buckzy', 'Cardaq', 'CardifyX', 'CashBulls',
    'Cashfree', 'Cauri', 'Cecabank', 'Centpays', 'CCBill', 'CaresPay', 'CDN', 'Certus Finance', 'Changecoins', 'CoinGate',
    'CoinsPaid', 'Concept Pay', 'Commercial Industrial Bank', 'Concord Bank', 'Concordpay', 'Connectum', 'Constant payments',
    'Contiant', 'Convergegate', 'Kora', 'CPS', 'Creedo', 'Crederes', 'CrossPay', 'Cypix', 'D8Corporation', 'CirxusPay',
    'CitrinePay', 'Cryptopay', 'СrystalBank', 'Decard', 'Decta', 'Decta Soap', 'DeStream', 'Dimoco', 'DNS-pay', 'dLocal',
    'dotpay', 'D24', 'EasyBits.io', 'EasyTransfer', 'Ecobanq', 'ecoPayz', 'EleosPay', 'Espertopay', 'Emerald24', 'emerchantpay',
    'EMS', 'ePay', 'E-PRO', 'EPX', 'EspertoPay', 'EU Paymentz', 'Exactly', 'Ezeebill', 'Facilero', 'Fenige',
    'Fiat Systems', 'Fingenom', 'Finvert', 'First Atlantic Commerce', 'FlashPay', 'Fondy', 'Flexify', 'FMPay', 'FYST',
    'GateExpress', 'GateIQ', 'gate2way', 'GEO pay', 'Genome', 'Getapay', 'Global Money', 'Guavapay', 'GumBallPay', 'Hashconnect',
    'HelloPayment', 'Ikajo', 'Impaya', 'iPague', 'Infotrend solutions', 'InstaXchange', 'Intervale', 'ING Bank Poland', 'Inpay',
    'inqud', 'Intersect', 'Interkassa', 'IPS', 'Jeton', 'kalonpay', 'Kale.Money', 'Cyberpay', 'S3CPAY', 'JMITsolutions',
    'Katarun', 'Klarna', 'Kuna Pay', 'Kuna', 'Khanpay', 'Klasha', 'Klyme', 'Kitopay', 'Leikur', 'Leogaming',
    'Libernetix', 'LiqPay', 'Macropay', 'MagnetiqBank', 'MassPay', 'Match2Pay', 'MatrixPay', 'MaxPay', 'Mercuryo', 'MicroPayment',
    'MiFinity', 'MFStream', 'Mine.Exchange', 'Мonetix', 'MoneyPay', 'Monobank', 'MuchBetter', 'MTB Bank', 'Nayem', 'Nebeus',
    'Neteller', 'Netsellerpay', 'NixMoney', 'NMI', 'NorthPeakPay', 'Nuvei (ex. SafeCharge)', 'Octopays', 'Octopayz', 'Okpay',
    'OKTO', 'Onevision', 'OPay', 'Omno', 'One payment', 'Overpay', 'Pay4fun', 'Pay4funGo', 'Paygames', 'PSPGate',
    'PUMB (FUIB)', 'Pay-logic', 'PayAdmit', 'Paybis', 'PayBox', 'Pay.cc', 'PayClub', 'Paycos', 'Paydoo', 'Payes',
    'Payelu', 'PayerMax', 'PayFuture', 'PayforU', 'Payler', 'PayLink', 'PayMaxis', 'Paymaster', 'PaymentAsia', 'Payment Center',
    'Payment Rush', 'Payments Trust', 'paymentsPRO', 'Paymentwall', 'Paymentz', 'Paymix', 'PayNearMe', 'Payok', 'Payon',
    'Payneteasy', 'Paytend', 'PayPal', 'PayPound', 'Paytony', 'Paytently', 'Pay2Play', 'Paysafe', 'Paysafebd', 'paysafecard',
    'Paysage.io', 'Paysecure', 'PayzEasy', 'PaySoft', 'Paystrax', 'Payswiftly', 'Payway', 'PayWings', 'Payzln', 'PaToCrypt',
    'Perfect Money', 'Picksell', 'Pi Pay', 'Pivdenny Bank', 'Platio', 'PMSolutions', 'Portmone.com', 'Procard', 'Procard.Pay',
    'Prosperos', 'PSPark', 'Pylon', 'Raiffeisen Bank', 'Rampnow', 'Rapyd', 'RashPay', 'RazorPay', 'RealDeposits', 'Rixsus',
    'RubinPay', 'Ryvyl', 'SatchelPay', 'Securepaycard', 'Sends', 'Selcom', 'Sense Bank', 'SettleSpot', 'Shiftfour', 'Skrill',
    'Slyse', 'SaltEdge', 'Solid', 'Spayz', 'Spush', 'Symoco', 'Spoynt', 'SqalaPay', 'Square', 'Starkbank',
    'Startbutton', 'Stripe', 'Tapbank', 'Techtopay', 'Till Payments', 'TomPayment', 'TopPay', 'TOPAY.PRO', 'Transfr',
    'Transact World', 'Tranzzo', 'Triple000', 'Trust Payments', 'TrustPay', 'TwoPayLer', 'UAPay', 'UKRGASBANK', 'Unicorn',
    'UnitePlat', 'Unity Finance', 'Unlimint (ex. CardPay)', 'Utorg', 'VelPay', 'Vendo', 'VevoPay', 'VCreditos', 'VOLT',
    'Visa', 'WanguPay', 'WhiteBIT', 'WPayments', 'Wirecapital', 'Wirecard', 'WonderlandPay', 'WorldPay', 'WPay', 'xpate',
    'Xpay', 'Yelopay', 'Yotta', 'Zotapay', 'TakapayJazzCash', 'TBN', 'Card Gateway', 'Manual', 'External Provider'
  ]

  const filteredConnectors = connectors.filter(connector =>
    connector.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[20px] p-6 shadow-sm sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Table of contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-body ${
                      activeSection === item.id
                        ? 'bg-[#4730B8] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Payment providers
              </h1>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                What we include under the term "Payment Service Provider (PSP)"
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  <strong className="font-heading">Payment Service Provider (PSP)</strong> is a third party that helps merchants accept and facilitate payments.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  PSPs partner with acquiring banks to offer merchants the capability to accept payments. They often offer services in addition to processing transactions. These services include Payment Card Industry Data Security Standard (PCI) compliance, fraud protection, and the ability to process different currencies and translate different languages.
                </p>
              </div>
            </div>

            {/* Connectors Section */}
            <div id="connectors" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">Connectors</h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                This section explains how to connect your payment providers' accounts and the ValoraPay platform. It describes setup processes and helps you to put in place new services that can relay requests to the payment or payout gateways.
              </p>
            </div>

            {/* How to Connect Section */}
            <div id="how-to-connect" className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">
                How to connect to the payment provider from this list
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Step-by-Step</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                  Usually, the connection algorithm includes the following steps:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-[18px] text-gray-700 font-body">
                  <li>Create an account on the side of the payment provider</li>
                  <li>Set up your provider or merchant account and get credentials for the further connection</li>
                  <li>Connect the account in the ValoraPay Dashboard</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Please note</h3>
                <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-700 font-body">
                  <li>Sub-steps can be different, since methods of data storage, delivery and organisation are unique for each provider.</li>
                  <li>The credential parameters format must be appropriate to the connection form's requirements.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Contact us</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                  If you have any questions, feature suggestions or ideas, feel free to contact our support team via email.
                </p>
              </div>
            </div>

            {/* Connectors List Section */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-heading">
                Available Connectors
              </h2>
              
              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search connectors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body"
                />
              </div>

              {/* Connectors Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredConnectors.map((connector, index) => (
                  <Link
                    key={index}
                    href={`/docs/connectors/${connector.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="block p-4 bg-gray-50 hover:bg-[#4730B8]/10 rounded-xl border border-gray-200 hover:border-[#4730B8] transition-colors text-center font-body"
                  >
                    <span className="text-gray-700 hover:text-[#4730B8] font-medium">
                      {connector}
                    </span>
                  </Link>
                ))}
              </div>

              {filteredConnectors.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[18px] text-gray-500 font-body">
                    No connectors found matching "{searchQuery}"
                  </p>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-[18px] text-gray-600 font-body">
                  Showing {filteredConnectors.length} of {connectors.length} connectors
                </p>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-6 lg:p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Can't find what you're looking for?
              </h3>
              <p className="text-[18px] text-white/90 mb-6 font-body">
                Contact our support team for help.
              </p>
              <Link
                href="/contacts"
                className="inline-block bg-white text-[#4730B8] px-8 py-3 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

