'use client'

import React, { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { ApplicationModal } from './ApplicationModal'
import Link from 'next/link'

interface JobDetail {
  id: string
  department: string
  title: string
  type: string
  location: string
  date: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

/**
 * Career Detail component
 * Features:
 * - Detailed job information
 * - Responsibilities and requirements
 * - Benefits section
 * - Apply button
 * - Matches platform aesthetics
 */
export function CareerDetail({ jobId }: { jobId: string }) {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock job data - in real app, this would come from API
  const jobDetails: Record<string, JobDetail> = {
    '1': {
      id: '1',
      department: 'Customer Success',
      title: 'Customer/Technical Support Specialist',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
      description: 'We are looking for a Customer/Technical Support Specialist to join our Customer Success team. You will be responsible for providing exceptional support to our clients, helping them resolve technical issues, and ensuring their success with our payment orchestration platform.',
      responsibilities: [
        'Provide timely and accurate technical support to clients via email, chat, and phone',
        'Troubleshoot and resolve client issues related to payment processing, integrations, and platform functionality',
        'Collaborate with development and product teams to escalate and resolve complex technical issues',
        'Document client interactions and maintain detailed records in our CRM system',
        'Assist clients with platform onboarding and training',
        'Monitor system alerts and proactively address potential issues',
        'Contribute to knowledge base articles and documentation',
      ],
      requirements: [
        '2+ years of experience in customer support or technical support role',
        'Strong understanding of payment processing and fintech industry',
        'Excellent communication skills in English (both written and verbal)',
        'Ability to troubleshoot technical issues and explain solutions clearly',
        'Experience with CRM systems and support ticketing tools',
        'Strong problem-solving skills and attention to detail',
        'Ability to work in a fast-paced environment and handle multiple priorities',
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible working hours and remote work options',
        'Professional development opportunities',
        'Health insurance and wellness programs',
        'Team building events and corporate culture',
      ],
    },
    '2': {
      id: '2',
      department: 'Development',
      title: 'Front End Developer (PayAtlas)',
      type: 'Full-time',
      location: 'Kyiv',
      date: 'December 2, 2025',
      description: 'We are seeking a talented Front End Developer to join our PayAtlas team. You will be responsible for building and maintaining user interfaces for our payment services marketplace, creating intuitive and responsive web applications that help businesses find the right payment solutions.',
      responsibilities: [
        'Develop responsive and user-friendly web applications using React and TypeScript',
        'Collaborate with designers and backend developers to implement new features',
        'Optimize application performance and ensure cross-browser compatibility',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and contribute to technical discussions',
        'Work with REST APIs and GraphQL to integrate with backend services',
        'Implement responsive designs and ensure mobile-first approach',
      ],
      requirements: [
        '3+ years of experience in front-end development',
        'Strong proficiency in React, TypeScript, and modern JavaScript',
        'Experience with state management libraries (Redux, Zustand, etc.)',
        'Knowledge of CSS preprocessors and modern CSS features',
        'Experience with testing frameworks (Jest, React Testing Library)',
        'Understanding of RESTful APIs and GraphQL',
        'Portfolio demonstrating strong UI/UX skills',
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible working schedule',
        'Access to latest development tools and technologies',
        'Conference attendance and training budget',
        'Collaborative and innovative work environment',
      ],
    },
    '3': {
      id: '3',
      department: 'Development',
      title: 'PHP Developer (Symfony)',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
      description: 'We are looking for an experienced PHP Developer with Symfony expertise to join our backend development team. You will work on building scalable payment processing systems, integrating with payment providers, and maintaining our core payment orchestration platform.',
      responsibilities: [
        'Develop and maintain backend services using PHP and Symfony framework',
        'Design and implement RESTful APIs for payment processing',
        'Integrate with third-party payment providers and financial services',
        'Write unit and integration tests to ensure code quality',
        'Optimize database queries and improve application performance',
        'Collaborate with frontend and DevOps teams on system architecture',
        'Participate in code reviews and maintain coding standards',
      ],
      requirements: [
        '4+ years of experience in PHP development',
        'Strong experience with Symfony framework (3.x or higher)',
        'Knowledge of RESTful API design and implementation',
        'Experience with MySQL, PostgreSQL, or similar databases',
        'Understanding of payment processing and financial systems',
        'Experience with Git, Docker, and CI/CD pipelines',
        'Strong problem-solving skills and attention to detail',
      ],
      benefits: [
        'Competitive salary package',
        'Remote work opportunities',
        'Professional growth and learning opportunities',
        'Health and dental insurance',
        'Flexible vacation policy',
      ],
    },
    '4': {
      id: '4',
      department: 'HR',
      title: 'Talent Acquisition Manager',
      type: 'Full-time',
      location: 'Kyiv',
      date: 'December 2, 2025',
      description: 'We are seeking a Talent Acquisition Manager to help us grow our team and attract top talent. You will be responsible for developing recruitment strategies, sourcing candidates, and managing the full recruitment lifecycle for various positions across the company.',
      responsibilities: [
        'Develop and execute recruitment strategies to attract top talent',
        'Source candidates through various channels (LinkedIn, job boards, referrals, etc.)',
        'Screen and interview candidates for technical and cultural fit',
        'Coordinate with hiring managers to understand position requirements',
        'Manage candidate pipeline and maintain relationships with potential hires',
        'Organize and participate in recruitment events and job fairs',
        'Track recruitment metrics and provide regular reports to leadership',
      ],
      requirements: [
        '3+ years of experience in talent acquisition or recruitment',
        'Experience recruiting for tech and fintech companies',
        'Strong knowledge of recruitment tools and platforms',
        'Excellent communication and interpersonal skills',
        'Ability to build relationships with candidates and hiring managers',
        'Understanding of technical roles and requirements',
        'Proactive and results-oriented approach',
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible working arrangements',
        'Professional development opportunities',
        'Health insurance coverage',
        'Dynamic and supportive team environment',
      ],
    },
    '5': {
      id: '5',
      department: 'Product',
      title: 'Integration Manager / System Analyst',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
      description: 'We are looking for an Integration Manager / System Analyst to join our Product team. You will be responsible for managing integrations with payment providers, analyzing system requirements, and ensuring seamless connectivity between our platform and external services.',
      responsibilities: [
        'Manage integration projects with payment providers and financial institutions',
        'Analyze technical requirements and create integration specifications',
        'Coordinate with development teams to implement new integrations',
        'Test and validate integration functionality',
        'Document integration processes and maintain technical documentation',
        'Troubleshoot integration issues and work with providers to resolve problems',
        'Monitor integration performance and optimize system connectivity',
      ],
      requirements: [
        '3+ years of experience in system analysis or integration management',
        'Understanding of payment processing and financial systems',
        'Experience with API integration and RESTful services',
        'Strong analytical and problem-solving skills',
        'Excellent documentation and communication skills',
        'Ability to work with cross-functional teams',
        'Knowledge of payment industry standards and protocols',
      ],
      benefits: [
        'Competitive compensation package',
        'Remote work flexibility',
        'Continuous learning and skill development',
        'Comprehensive health benefits',
        'Collaborative product team culture',
      ],
    },
  }

  const job = jobDetails[jobId] || jobDetails['1']

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Job Header Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[#4730B8] hover:text-[#3a2696] transition-colors font-body mb-6"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Careers
            </Link>
          </div>

          <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-lg">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#4730B8]/10 text-[#4730B8] text-sm font-semibold rounded-[10px] mb-4 font-body">
                {job.department}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-base text-gray-600 font-body">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {job.date}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body inline-flex items-center gap-3 group"
              >
                Apply for this position
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 font-heading">
              Job Description
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8 font-body">
              {job.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Responsibilities
              </h3>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#4730B8]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-body flex-1">
                      {responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Requirements
              </h3>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#4730B8]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-body flex-1">
                      {requirement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-[10px] bg-[#4730B8]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#4730B8]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-body flex-1">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-lg text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 font-heading">
              Ready to join our team?
            </h2>
            <p className="text-base text-gray-600 mb-8 font-body">
              If you&apos;re excited about this opportunity and believe you&apos;re a good fit, we&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body inline-flex items-center gap-3 group"
              >
                Apply now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <Link
                href="/careers"
                className="px-8 py-4 bg-transparent text-gray-900 text-base font-semibold rounded-[10px] border-2 border-gray-900 hover:bg-gray-50 transition-colors tap-target font-body"
              >
                View other positions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

