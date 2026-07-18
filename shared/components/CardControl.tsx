/**
 * Card Control & Management section component matching Figma design
 * Features:
 * - Heading
 * - Four feature cards showing different management tools
 */
export function CardControl() {
  const controls = [
    {
      title: 'Send Money',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Freeze Card',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      bg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      balance: '$200,000.00',
    },
    {
      title: 'Transaction History',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Budgeting Tools',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Easily control your cards and manage your finances
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {controls.map((control, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 ${control.bg} rounded-xl flex items-center justify-center ${control.iconColor} mb-4`}>
                {control.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-body">{control.title}</h3>
              {control.balance && (
                <div className="text-2xl font-bold text-gray-900 mb-2 font-heading">{control.balance}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

