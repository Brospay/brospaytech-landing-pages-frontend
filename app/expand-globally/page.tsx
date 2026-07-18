'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  ExpandGloballyBlogLayout,
  ExpandGloballyRelatedArticles,
} from '@/shared/components'

/**
 * Expand Globally page component
 * Blog-style layout matching ValoraPay design
 */
export default function ExpandGloballyPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        {/* Hero Background Wrapper - extends behind navigation */}
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            {/* Hero Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                  <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-center">
                    Getting ready for expansion? Here&apos;s a smart way to do it
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Blog Content Section */}
        <section aria-label="Blog content" className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
          <ExpandGloballyBlogLayout />
        </section>

        {/* Related Articles Section */}
        <section aria-label="Related articles" className="mx-5 my-5">
          <ExpandGloballyRelatedArticles />
        </section>

        {/* Footer Background Wrapper */}
        <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
          <Footer />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  )
}

