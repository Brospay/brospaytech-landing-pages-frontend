'use client'

import { useState, useEffect } from 'react'

/**
 * Scroll to Top button component
 * Features:
 * - Appears when user scrolls down
 * - Fixed position at bottom-right
 * - Smooth scroll to top on click
 * - Circular button with up arrow
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 lg:w-[80px] lg:h-[80px] bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl tap-target group"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 lg:w-10 lg:h-10 group-hover:-translate-y-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  )
}

