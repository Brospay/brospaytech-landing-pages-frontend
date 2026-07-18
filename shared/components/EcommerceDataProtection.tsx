'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * E-commerce Data Protection Visualization section component
 * Shows security and encryption visualization with hexagon and DNA strands
 */
export function EcommerceDataProtection() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* Left DNA Strand */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 lg:w-1/3 h-full flex items-center justify-center opacity-80">
            <svg viewBox="0 0 200 400" className="w-full h-full">
              {/* DNA Double Helix - Left Side */}
              {Array.from({ length: 15 }).map((_, i) => {
                const y = i * 25 + 20
                const offset = Math.sin(i * 0.5) * 15
                return (
                  <g key={i}>
                    {/* Left strand dots */}
                    <circle cx={80 + offset} cy={y} r="4" fill="#4730B8" />
                    <circle cx={80 + offset} cy={y + 12} r="4" fill="#4730B8" />
                    {/* Right strand dots */}
                    <circle cx={120 + offset} cy={y} r="4" fill="#4730B8" />
                    <circle cx={120 + offset} cy={y + 12} r="4" fill="#4730B8" />
                    {/* Connecting lines */}
                    <line x1={80 + offset} y1={y} x2={120 + offset} y2={y} stroke="#4730B8" strokeWidth="1.5" />
                    <line x1={80 + offset} y1={y + 12} x2={120 + offset} y2={y + 12} stroke="#4730B8" strokeWidth="1.5" />
                    {/* Vertical connections */}
                    {i < 14 && (
                      <>
                        <line x1={80 + offset} y1={y + 6} x2={80 + Math.sin((i + 1) * 0.5) * 15} y2={y + 19} stroke="#4730B8" strokeWidth="1.5" />
                        <line x1={120 + offset} y1={y + 6} x2={120 + Math.sin((i + 1) * 0.5) * 15} y2={y + 19} stroke="#4730B8" strokeWidth="1.5" />
                      </>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Center Hexagon with Lock */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              {/* Black Hexagon */}
              <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
                <polygon
                  points="100,20 170,60 170,140 100,180 30,140 30,60"
                  fill="#000000"
                />
              </svg>
              
              {/* Lock Icon on Hexagon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  {/* Lock Body */}
                  <rect x="6" y="10" width="12" height="10" rx="2" fill="#4730B8" />
                  {/* Lock Shackle */}
                  <path
                    d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10"
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Keyhole */}
                  <circle cx="12" cy="14" r="2" fill="#000000" />
                  <rect x="11" y="16" width="2" height="3" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right DNA Strand */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 lg:w-1/3 h-full flex items-center justify-center opacity-80">
            <svg viewBox="0 0 200 400" className="w-full h-full">
              {/* DNA Double Helix - Right Side */}
              {Array.from({ length: 15 }).map((_, i) => {
                const y = i * 25 + 20
                const offset = Math.sin(i * 0.5) * 15
                return (
                  <g key={i}>
                    {/* Left strand dots */}
                    <circle cx={80 + offset} cy={y} r="4" fill="#4730B8" />
                    <circle cx={80 + offset} cy={y + 12} r="4" fill="#4730B8" />
                    {/* Right strand dots */}
                    <circle cx={120 + offset} cy={y} r="4" fill="#4730B8" />
                    <circle cx={120 + offset} cy={y + 12} r="4" fill="#4730B8" />
                    {/* Connecting lines */}
                    <line x1={80 + offset} y1={y} x2={120 + offset} y2={y} stroke="#4730B8" strokeWidth="1.5" />
                    <line x1={80 + offset} y1={y + 12} x2={120 + offset} y2={y + 12} stroke="#4730B8" strokeWidth="1.5" />
                    {/* Vertical connections */}
                    {i < 14 && (
                      <>
                        <line x1={80 + offset} y1={y + 6} x2={80 + Math.sin((i + 1) * 0.5) * 15} y2={y + 19} stroke="#4730B8" strokeWidth="1.5" />
                        <line x1={120 + offset} y1={y + 6} x2={120 + Math.sin((i + 1) * 0.5) * 15} y2={y + 19} stroke="#4730B8" strokeWidth="1.5" />
                      </>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

