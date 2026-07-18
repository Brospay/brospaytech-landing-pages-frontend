'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

/**
 * Integrate Payouts section component
 * Shows integration options: APIs, SDKs, Docs, Callbacks
 */
export function IntegratePayouts() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 0 })
  const [activeTab, setActiveTab] = useState('create')

  const integrateFeatures = [
    {
      title: 'APIs',
      description: 'We offer both server and client APIs, along with detailed API references with thorough guides.',
    },
    {
      title: 'SDKs',
      description: 'Our software development kits give you the freedom to build your own custom integration.',
    },
    {
      title: 'Docs',
      description: 'We provide simple and complete integration & usage instructions.',
    },
    {
      title: 'Callbacks',
      description: 'Be automatically notified of everything that happens to your transactions.',
    },
  ]

  return (
    <section ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Integrate Payouts
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Minimal integration efforts, multiple options and detailed documentation will help you to get on board seamlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Features */}
          <div>
            <div className="space-y-4 mb-8">
              {integrateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[18px] text-gray-700 font-body">
                      <strong>{feature.title}.</strong> {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-[#4730B8] text-lg font-semibold hover:text-[#3a26a0] transition-colors font-body"
            >
              <div className="w-4 h-4 bg-[#4730B8] rounded"></div>
              Explore the documentation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Code Snippet */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab('create')}
                className={`px-6 py-3 text-sm font-medium transition-colors font-body ${
                  activeTab === 'create'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Create payout
              </button>
              <button
                onClick={() => setActiveTab('callback')}
                className={`px-6 py-3 text-sm font-medium transition-colors font-body ${
                  activeTab === 'callback'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Handle callback
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6">
              {activeTab === 'create' ? (
                <pre className="text-sm font-mono overflow-x-auto">
                  <code>
                    <span className="text-green-400">create_payout</span>
                    <span className="text-gray-300"> ({`{`}</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"public_key"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"pk_live_ClSQHi2T9WXuF****M69cS9zNOJy"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"service"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"payout_card"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"amount"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-blue-400">420.78</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"currency"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"USD"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"reference_id"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"order_123"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"description"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"Some goods"</span>
                    <br />
                    <span className="text-gray-300">{`})`}</span>
                  </code>
                </pre>
              ) : (
                <pre className="text-sm font-mono overflow-x-auto">
                  <code>
                    <span className="text-green-400">handle</span>
                    <span className="text-gray-300"> ({`{`}</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"id"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"pi_TV465FXkbGch3GNe"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"status"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"processed"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"resolution"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"ok"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"amount"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-blue-400">420.78</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"currency"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"UAH"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"reference_id"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-green-400">"order_123"</span>
                    <span className="text-gray-300">,</span>
                    <br />
                    <span className="text-gray-300">  </span>
                    <span className="text-orange-400">"test_mode"</span>
                    <span className="text-gray-300">:</span>
                    <span className="text-blue-400">false</span>
                    <br />
                    <span className="text-gray-300">{`})`}</span>
                  </code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

