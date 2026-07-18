'use client'

import Link from 'next/link'

interface DocumentationDetailData {
  slug: string
  title: string
  content: {
    sections: Array<{
      title: string
      content: string
      subsections?: Array<{
        title: string
        content: string
      }>
    }>
  }
}

// Sample detailed content for platform overview
const documentationDetails: Record<string, DocumentationDetailData> = {
  'getting-started/platform-overview': {
    slug: 'getting-started/platform-overview',
    title: 'Platform Overview',
    content: {
      sections: [
        {
          title: 'Product Overview',
          content: 'ValoraPay Ecosystem',
        },
        {
          title: 'Ecosystem Overview',
          content: 'You can interact with ValoraPay using the Dashboard, or using APIs and Webhooks. ValoraPay also collects payment information from your customers via the hosted payment page and the merchant portal.',
          subsections: [
            {
              title: 'Dashboard',
              content: 'The Dashboard is the ValoraPay application. It allows you to create and configure your payment and payout gateways, provide access to your team members and assign them roles, and so on. All you have to do is log in with your credentials and you can start setting up your provider accounts and related settings. This would be the quickest way to kick start billing with ValoraPay. You could always decide to switch to ValoraPay\'s API for handling your payment needs.',
            },
            {
              title: 'APIs and Client Libraries',
              content: 'ValoraPay provides HTTP-based RESTful APIs that allow your application, system, product or service to interact with our system. To know more, take a look at ValoraPay\'s API documentation and detailed client library integration instructions.',
            },
            {
              title: 'Callbacks',
              content: 'Use callbacks to notify your site or your application of events that happen inside ValoraPay, such as payment status update, recurring charges, and so on. Implement callbacks to handle events when using our APIs to customise your customer\'s experience when specific events occur.',
            },
            {
              title: 'Hosted Payment Page',
              content: 'Our hosted payment page allows your customers to pay for your products or services online. These are multi-themed PCI compliant hosted payment pages that you can customise to suit your business needs, with no development effort. There are several other different approaches you could take when it comes to integrating a payment page with your service provider. These approaches include a URL Redirect to a third-party hosted payment page, inline iFrame, embedded content in a merchant\'s page such as Direct Post or JavaScript-built forms, and directly against an API.',
            },
            {
              title: 'Merchant Portal',
              content: 'ValoraPay offers a Merchant Portal, which is a self-service option you can provide to your merchants. It allows them to monitor and manage their payments, make mass payouts, access customer data and business insights, and many more. ValoraPay\'s merchant portal is ready-to-use and either be hosted by us or your infrastructure and hence requires no development effort.',
            },
          ],
        },
      ],
    },
  },
}

interface DocumentationDetailProps {
  slug: string
}

export function DocumentationDetail({ slug }: DocumentationDetailProps) {
  const detail = documentationDetails[slug]

  if (!detail) {
    return (
      <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Documentation not found
            </h1>
            <Link
              href="/docs"
              className="inline-flex items-center text-[#4730B8] hover:text-[#5a3fc9] font-body"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to documentation
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/docs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 font-body transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to documentation
        </Link>

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
          {detail.title}
        </h1>

        {/* Sections */}
        <div className="space-y-12">
          {detail.content.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-heading">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-[18px] text-gray-700 leading-relaxed mb-6 font-body">{section.content}</p>
              )}
              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    {subsection.title && (
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading">
                        {subsection.title}
                      </h3>
                    )}
                    {subsection.content && (
                      <p className="text-[18px] text-gray-700 leading-relaxed mb-4 font-body">
                        {subsection.content}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

