'use client'

import { useState, useEffect } from 'react'

/**
 * Cookie Settings page component
 * Features:
 * - Interactive cookie preference toggles
 * - Clean, readable layout matching platform aesthetics
 * - Responsive design
 * - Save preferences functionality
 */
export function CookieSettings() {
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    preference: true,
    analytical: true,
    advertising: true,
  })

  const [isSaved, setIsSaved] = useState(false)

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences({
          essential: true, // Always true
          preference: parsed.preference ?? true,
          analytical: parsed.analytical ?? true,
          advertising: parsed.advertising ?? true,
        })
      } catch (error) {
        console.error('Error loading cookie preferences:', error)
      }
    }
  }, [])

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === 'essential') return // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
    setIsSaved(false)
  }

  const handleSavePreferences = () => {
    // Here you would typically save to localStorage or send to your backend
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleAllowAll = () => {
    const newPreferences = {
      essential: true,
      preference: true,
      analytical: true,
      advertising: true,
    }
    setPreferences(newPreferences)
    // Automatically save when allowing all
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences))
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div>
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 xl:p-12 shadow-sm">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h1 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Cookie Settings
              </h1>
            </div>

            {/* Introduction */}
            <div className="mb-10">
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We use cookies and similar tools to enhance your experience, provide our services, deliver relevant advertising and make improvements. Approved third parties also use these tools to help us deliver advertising and provide certain site features.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mb-10 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleAllowAll}
                className="px-6 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body"
              >
                Allow all cookies
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 font-heading">
                We use cookies and similar tools (collectively "cookies") for the following purposes.
              </h2>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                        Essential
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-body">
                        Essential cookies are necessary to provide our site and services and cannot be deactivated. They are usually set in response to your actions on the site, such as setting your privacy preferences, signing in, or filling in forms.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="relative inline-block w-14 h-8 rounded-[10px] bg-gray-300 cursor-not-allowed opacity-60">
                        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-[10px] shadow-md transform translate-x-6 transition-transform"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-body">
                    Always active
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                        Preference
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-body">
                        Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => handleToggle('preference')}
                        className={`relative inline-block w-14 h-8 rounded-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          preferences.preference ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle preference cookies"
                      >
                        <div
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-[10px] shadow-md transform transition-transform ${
                            preferences.preference ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-body">
                    {preferences.preference ? 'Allowed' : 'Blocked'}
                  </div>
                </div>

                {/* Analytical Cookies */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                        Analytical
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-body">
                        Analytical cookies provide anonymous statistics about how customers navigate our site so we can improve site experience and performance. Approved third parties may perform analytics on our behalf, but they cannot use the data for their own purpose.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => handleToggle('analytical')}
                        className={`relative inline-block w-14 h-8 rounded-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          preferences.analytical ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle analytical cookies"
                      >
                        <div
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-[10px] shadow-md transform transition-transform ${
                            preferences.analytical ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-body">
                    {preferences.analytical ? 'Allowed' : 'Blocked'}
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                        Advertising
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-body">
                        Advertising cookies may be set through our site by us or our advertising partners and help us deliver relevant marketing content. If you do not allow these cookies, you will experience less relevant advertising.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => handleToggle('advertising')}
                        className={`relative inline-block w-14 h-8 rounded-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          preferences.advertising ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle advertising cookies"
                      >
                        <div
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-[10px] shadow-md transform transition-transform ${
                            preferences.advertising ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-body">
                    {preferences.advertising ? 'Allowed' : 'Blocked'}
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Message */}
            <div className="mb-10 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-gray-800 leading-relaxed font-body">
                Blocking some types of cookies may impact your experience of our sites. You may review and change at any time by clicking Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in the ValoraPay Cookie Policy.
              </p>
            </div>

            {/* Save Button */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-body">
                {isSaved && (
                  <span className="text-green-600 font-semibold">✓ Preferences saved successfully!</span>
                )}
              </p>
              <button
                onClick={handleSavePreferences}
                className="px-8 py-3 bg-primary text-white text-base font-semibold rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body flex items-center gap-2"
              >
                <span>Save preferences</span>
                {isSaved && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

