'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Reconciliation Types section component
 * Shows Manual and Automated reconciliation types
 */
export function ReconciliationTypes() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })

  const manualFeatures = [
    {
      title: 'Manual reconciliations over API',
      description: "You can ask your provider for a statement by clicking just one button on the Dashboard.",
    },
    {
      title: 'Manual statement import',
      description: "Pull a statement directly from the provider and upload it to ValoraPay. It may be quite helpful in case of API or callback glitches.",
    },
    {
      title: 'Bulk statements import',
      description: "Easily import multiple statements you've got from the provider to manually reconcile them all at once.",
    },
  ]

  const automatedFeatures = [
    {
      title: 'Automatically process',
      description: 'Transactions and push them to the finalisation.',
    },
    {
      title: 'Delayed auto-reconciliations',
      description: 'Allows you to detect and account chargebacks or refunds.',
    },
    {
      title: 'Callbacks and API responses',
      description: 'ValoraPay supports both callbacks and API responses handling.',
    },
  ]

  const fileTypes = ['.XLS file', '.FTP file', '.CSV file']
  const paymentMethods = ['Apple Pay', 'SEPA', 'Bitcoin']

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Types of payment reconciliations
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            ValoraPay supports instant real-time payment reconciliation for multiple accounts, payment methods, and currencies. Payment reconciliation automation helps to switch your focus towards handling exceptions instead of time-consuming manual reconciliation of each transaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Manual Reconciliations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Manual reconciliations</h3>
            <p className="text-gray-600 mb-6 font-body">
              Our manual payment reconciliation provides independence from any technical issues which may occur on the provider's side.
            </p>
            <div className="space-y-4 mb-8">
              {manualFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 font-body">{feature.title}.</span>
                    <span className="text-gray-600 font-body"> {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* File Types */}
            <div className="flex flex-wrap gap-3">
              {fileTypes.map((file, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 font-body">{file}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap gap-3 mt-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#E8E4FF] rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-[#4730B8] font-body">{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automated Reconciliations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Automated reconciliations</h3>
            <p className="text-gray-600 mb-6 font-body">
              Automate the labour-intensive, error-prone reconciliations of transactions across multiple providers, accounts, and payment methods.
            </p>
            <div className="space-y-4">
              {automatedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4730B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 font-body">{feature.title}</span>
                    <span className="text-gray-600 font-body"> {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Automation Visualization */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#4730B8] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 font-body">Automatic transaction processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

