/**
 * Final CTA section component matching Figma design
 * Features:
 * - Dark gradient background
 * - Heading and subheading
 * - Email input and CTA button
 */
export function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-[10px] blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-[10px] blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
          Ready to get started? Join BrosPay today
        </h2>
        <p className="text-[18px] text-gray-300 mb-8 max-w-2xl mx-auto font-body">
          Sign up now and experience the future of banking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-[10px] bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-[10px] hover:bg-gray-100 transition-colors tap-target font-body">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

