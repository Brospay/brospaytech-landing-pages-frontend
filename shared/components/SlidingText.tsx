/**
 * Sliding Text section component
 * Features:
 * - Infinite horizontal scrolling text
 * - Large text display (144px)
 */
export function SlidingText() {
  const text = 'Receive payments faster.'
  
  return (
    <section className="w-full bg-[#EFEFEF] py-8 overflow-hidden">
      <div className="relative">
        <div className="flex items-center">
          <div className="flex items-center gap-8 animate-slide">
            {/* Duplicate the text for seamless infinite loop */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <span className="text-[144px] font-medium text-[#000] whitespace-nowrap font-body">
                  {text}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 animate-slide">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <span className="text-[144px] font-medium text-[#000] whitespace-nowrap font-body">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
