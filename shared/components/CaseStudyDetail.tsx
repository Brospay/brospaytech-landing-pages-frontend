'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

interface CaseStudyDetailProps {
  caseStudy: {
    slug: string
    title: string
    subtitle: string
    clientName: string
    location: string
    industry: string
    targetGeo: string
    image: string
    aboutCompany: string
    backgroundBefore: string
    quote?: {
      text: string
      author: string
      role: string
    }
    whyChoose: string
    benefits: Array<{
      title: string
      description: string
      additionalContent?: string
    }>
    conclusion: string
  }
}

/**
 * Case Study Detail component
 * Shows detailed information about a specific case study
 */
export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <div ref={sectionRef.ref as React.RefObject<HTMLDivElement>} style={sectionRef.style} className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#4730B8] hover:text-[#5a3fc9] mb-8 font-body transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to cases
            </Link>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              {caseStudy.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 font-body">
              {caseStudy.subtitle}
            </p>

            {/* Client Info Card */}
            <div className="bg-gray-50 rounded-[20px] p-6 lg:p-8 mb-12 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.clientName}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                    {caseStudy.clientName}
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 font-body mb-1">Location</p>
                      <p className="text-base font-semibold text-gray-900 font-body">{caseStudy.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-body mb-1">Industry</p>
                      <p className="text-base font-semibold text-gray-900 font-body">{caseStudy.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-body mb-1">Target geo</p>
                      <p className="text-base font-semibold text-gray-900 font-body">{caseStudy.targetGeo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Company Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                About the company
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                {caseStudy.aboutCompany}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Client's background before BrosPay
              </h3>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                {caseStudy.backgroundBefore}
              </p>

              {caseStudy.quote && (
                <div className="bg-blue-50 border-l-4 border-[#4730B8] rounded-r-xl p-6 my-6">
                  <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body italic">
                    "{caseStudy.quote.text}"
                  </p>
                  <p className="text-base font-semibold text-gray-900 font-body">
                    {caseStudy.quote.author}
                  </p>
                  <p className="text-sm text-gray-600 font-body">
                    {caseStudy.quote.role}
                  </p>
                </div>
              )}
            </div>

            {/* Why Choose BrosPay Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Why choose BrosPay?
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                {caseStudy.whyChoose}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-heading">
                Benefits our client got with BrosPay
              </h2>
              <div className="space-y-8">
                {caseStudy.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-6 lg:p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                      {index + 1}. {benefit.title}
                    </h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                      {benefit.description}
                    </p>
                    {benefit.additionalContent && (
                      <div className="mt-4">
                        <p className="text-[18px] text-gray-700 leading-relaxed font-body">
                          {benefit.additionalContent}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Conclusion
              </h2>
              <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">
                {caseStudy.conclusion}
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-[#4730B8] rounded-[20px] p-8 lg:p-12 text-center mb-12">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Create your own success story!
              </h3>
              <p className="text-lg text-white/90 mb-6 font-body">
                Book a demo with BrosPay today and discover how our payment orchestration platform can help streamline your payment processes, boost conversions, and increase revenue.
              </p>
              <Link
                href="#book-call"
                className="inline-block bg-white text-[#4730B8] px-8 py-4 rounded-[10px] font-semibold hover:bg-gray-100 transition-colors font-body"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* CTA Box */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-[20px] p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Ready to get started?
                </h3>
                <p className="text-gray-700 mb-4 font-body">
                  Contact us to learn how BrosPay can help your business.
                </p>
                <Link
                  href="#book-call"
                  className="block w-full text-center px-6 py-3 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
                >
                  Contact us
                </Link>
              </div>

              {/* Related Resources */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-[20px] p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  Related resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/forex" className="text-[#4730B8] hover:text-[#5a3fc9] font-body">
                      Forex payments guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-[#4730B8] hover:text-[#5a3fc9] font-body">
                      Global payment navigator →
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-[#4730B8] hover:text-[#5a3fc9] font-body">
                      More success stories →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

