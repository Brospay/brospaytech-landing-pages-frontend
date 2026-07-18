'use client'

import {
  Navigation,
  Footer,
  ScrollToTop,
  CaseStudyDetail,
} from '@/shared/components'
import { getCaseStudyBySlug } from '@/shared/data/caseStudies'
import { useParams } from 'next/navigation'

/**
 * Case Study Detail page component
 * Dynamic route for individual case studies
 */
export default function CaseStudyDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return (
      <main className="min-h-screen flex flex-col bg-[#EFEFEF] overflow-x-hidden">
        <div className="relative hero-bg-wrapper mx-5 mt-5 rounded-[20px] overflow-visible">
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 overflow-visible">
            <Navigation />
            <section className="w-full py-16 sm:py-20 lg:py-24 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                  <h1 className="text-4xl sm:text-5xl md:text-[57px] lg:text-[57px] font-bold leading-[1.2] mb-6 font-heading text-white text-center">
                    Case Study Not Found
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative mx-5 mb-5 rounded-[20px] overflow-hidden">
          <Footer />
        </div>
      </main>
    )
  }

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
                    {caseStudy.title}
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Case Study Detail Content */}
        <section aria-label="Case study content" className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
          <CaseStudyDetail caseStudy={caseStudy} />
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

