'use client'

import React, { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { ApplicationModal } from './ApplicationModal'
import Link from 'next/link'

interface JobOpening {
  id: string
  department: string
  title: string
  type: string
  location: string
  date: string
}

/**
 * Careers page component
 * Features:
 * - Hero section with call to action
 * - Benefits and perks sections
 * - Job openings by department
 * - Recruitment process timeline
 * - Matches platform aesthetics
 */
export function Careers() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)

  const benefits = [
    {
      title: 'Contribute to the future',
      description: 'Any of your ideas are valued. We empower you to make decisions on important issues, influence your results and see how your contribution is reflected in our products&apos; success.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Improve your skills',
      description: 'We take as much interest in your personal and professional development as you! Get free access to our library, visit our on-site skill-development sessions and training, and master foreign languages.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Be a part of a talented team',
      description: 'Our team is full of brainy talents. We always collaborate to maximise our strengths and minimise our weaknesses. Finding the best solutions together is one of our main strategies.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Maintain life & work balance',
      description: 'You have the opportunity to adjust your work schedule to the most convenient rhythm — with an early or late start of the working day and a pause for rest at any convenient time.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const perks = [
    {
      name: 'Comfy green office',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'No dress code',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      name: 'Open-door policy',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Corporate events & parties',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Low hierarchy',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Voluntary immunisations',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-1.387a2 2 0 00-1.518-.435L9.5 14.5a2 2 0 00-1.5.5l-2 2a2 2 0 01-2.828-2.828l2-2a2 2 0 00.5-1.5l-.5-3.992a2 2 0 00-.435-1.518L3.547 5.572a2 2 0 00-.547-1.022A2 2 0 002 4v8a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-1.572-1.572z" />
        </svg>
      ),
    },
    {
      name: 'Corporate presents',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
    {
      name: 'Language classes',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Friendly management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Field-oriented literature',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: 'Flexible hours',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Minimum viable bureaucracy',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      department: 'Customer Success',
      title: 'Customer/Technical Support Specialist',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
    },
    {
      id: '2',
      department: 'Development',
      title: 'Front End Developer (PayAtlas)',
      type: 'Full-time',
      location: 'Kyiv',
      date: 'December 2, 2025',
    },
    {
      id: '3',
      department: 'Development',
      title: 'PHP Developer (Symfony)',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
    },
    {
      id: '4',
      department: 'HR',
      title: 'Talent Acquisition Manager',
      type: 'Full-time',
      location: 'Kyiv',
      date: 'December 2, 2025',
    },
    {
      id: '5',
      department: 'Product',
      title: 'Integration Manager / System Analyst',
      type: 'Full-time',
      location: 'Ukraine, Europe',
      date: 'December 2, 2025',
    },
  ]

  const recruitmentSteps = [
    {
      step: 'CV review and screening',
      number: '01',
      description: 'Our HR team carefully reviews your application and CV to assess your qualifications and experience.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: 'HR interview',
      number: '02',
      description: 'A friendly conversation with our HR team to learn more about you, your background, and cultural fit.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: 'Team Lead interview',
      number: '03',
      description: 'Technical discussion with the team lead to evaluate your skills and how you&apos;ll fit into the team.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: 'Final interview with CEO',
      number: '04',
      description: 'A strategic conversation with our CEO to discuss vision, goals, and your potential impact on the company.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: 'Job offer',
      number: '05',
      description: 'We extend a competitive offer package including salary, benefits, and all the details you need to make your decision.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 'Onboarding',
      number: '06',
      description: 'Welcome to the team! We provide comprehensive onboarding to help you get started and feel at home.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
  ]

  const handleApplyClick = (job?: JobOpening) => {
    setSelectedJob(job || null)
    setIsModalOpen(true)
  }

  // Group jobs by department
  const jobsByDepartment = jobOpenings.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = []
    }
    acc[job.department].push(job)
    return acc
  }, {} as Record<string, JobOpening[]>)

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Main Content Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Side - Label */}
            <div>
              <p className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8 font-heading">
                Join Our Team
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                Let&apos;s build the fintech future together!
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body text-justify">
                We believe that global changes are impossible without teamwork. We are looking for talented individuals to become a part of our dedicated team.
              </p>
              <button
                onClick={() => handleApplyClick()}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body group"
              >
                Join our team
                <span className="w-8 h-8 rounded-[10px] bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-16"></div>
        </div>
      </section>

      {/* Work & Improve Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              Work & improve your skills with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg bg-[#4730B8]/10 flex items-center justify-center text-[#4730B8] mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Aboard Section */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
                Welcome aboard!
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
                Here are some of the perks of being a member of our ValoraPay family
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-lg bg-[#4730B8]/10 flex items-center justify-center text-[#4730B8]">
                      {perk.icon}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900 font-body">{perk.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Job Opportunities Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
              Job opportunities
            </h2>
          </div>

          <div className="space-y-12">
            {Object.entries(jobsByDepartment).map(([department, jobs]) => (
              <div key={department}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                  {department}
                </h3>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-body">
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {job.date}
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/careers/${job.id}`}
                          className="px-6 py-3 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body whitespace-nowrap inline-block text-center"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* No Suitable Position CTA */}
          <div className="mt-12 text-center">
            <p className="text-base text-gray-600 mb-6 font-body">
              Want to join our team, but didn&apos;t find a suitable position for you? Let our recruiters know that you&apos;re interested!
            </p>
            <button
              onClick={() => handleApplyClick()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-gray-900 text-base font-semibold rounded-[10px] border-2 border-gray-900 hover:bg-gray-50 transition-colors tap-target font-body"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
                Recruitment process
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
                Our HR managers know how to detect if you are one of us! That&apos;s why the interview process doesn&apos;t take much time, and we make hiring decisions quickly.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Horizontal Timeline Line - Desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 relative">
                {recruitmentSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Vertical Line - Mobile/Tablet */}
                    <div className="lg:hidden absolute left-8 top-12 bottom-[-2rem] w-0.5 bg-gray-200"></div>
                    
                    <div className="relative">
                      {/* Step Number Badge */}
                      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-16 h-16 rounded-[10px] bg-[#4730B8] border-4 border-white shadow-lg z-10 flex items-center justify-center">
                        <span className="text-xl font-bold text-white font-heading">{step.number}</span>
                      </div>
                      
                      {/* Content Card */}
                      <div className="ml-24 lg:ml-0 lg:mt-20 pt-2">
                        <div className="bg-gray-50 rounded-[20px] p-6 hover:shadow-md transition-shadow duration-300">
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-lg bg-[#4730B8]/10 flex items-center justify-center text-[#4730B8] mb-4">
                            {step.icon}
                          </div>
                          
                          {/* Step Title */}
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                            {step.step}
                          </h3>
                          
                          {/* Step Description */}
                          <p className="text-sm text-gray-600 leading-relaxed font-body">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Summary */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#4730B8]/10 rounded-[10px]">
                <svg className="w-6 h-6 text-[#4730B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-base font-medium text-gray-900 font-body">
                  Average process time: <span className="text-[#4730B8] font-semibold">1-2 weeks</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

