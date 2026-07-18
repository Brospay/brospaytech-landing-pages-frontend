'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import { ApplicationModal } from './ApplicationModal'

// Social Media Icons
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

interface TeamMember {
  name: string
  role: string
  department: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

/**
 * Team page component
 * Features:
 * - Hero section with title and description
 * - Team members organized by department
 * - Team member cards with social links
 * - Clean, readable layout matching platform aesthetics
 */
export function Team() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      department: 'Leadership',
      bio: 'Visionary leader with over 15 years of experience in fintech and payment solutions. Passionate about innovation and building products that transform businesses.',
      image: '/assets/team_page/1.png',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@valorapay.com',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      department: 'Leadership',
      bio: 'Tech enthusiast and architect of scalable payment systems. Led engineering teams at top fintech companies, specializing in distributed systems and security.',
      image: '/assets/team_page/2.png',
      linkedin: '#',
      twitter: '#',
      email: 'michael@valorapay.com',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Product Officer',
      department: 'Leadership',
      bio: 'Product strategist focused on creating intuitive payment experiences. Expert in user research and product design, with a track record of successful launches.',
      image: '/assets/team_page/3.png',
      linkedin: '#',
      email: 'emily@valorapay.com',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      department: 'Engineering',
      bio: 'Full-stack engineer and team lead with expertise in payment processing, API design, and cloud infrastructure. Passionate about code quality and developer experience.',
      image: '/assets/team_page/4.png',
      linkedin: '#',
      email: 'david@valorapay.com',
    },
    {
      name: 'Lisa Anderson',
      role: 'Senior Backend Engineer',
      department: 'Engineering',
      bio: 'Specializes in building robust, scalable backend systems. Expert in microservices architecture, database optimization, and payment gateway integrations.',
      image: '/assets/team_page/5.png',
      linkedin: '#',
      email: 'lisa@valorapay.com',
    },
    {
      name: 'James Wilson',
      role: 'Frontend Engineer',
      department: 'Engineering',
      bio: 'Creative developer focused on building beautiful, accessible user interfaces. Expert in React, TypeScript, and modern web technologies.',
      image: '/assets/team_page/6.png',
      linkedin: '#',
      twitter: '#',
      email: 'james@valorapay.com',
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Design',
      department: 'Design',
      bio: 'User experience designer with a passion for creating intuitive payment flows. Combines user research with beautiful visual design to deliver exceptional experiences.',
      image: '/assets/team_page/7.png',
      linkedin: '#',
      email: 'maria@valorapay.com',
    },
    {
      name: 'Robert Taylor',
      role: 'Senior Product Designer',
      department: 'Design',
      bio: 'Design systems expert focused on creating cohesive, scalable design solutions. Specializes in component libraries and design tooling.',
      image: '/assets/team_page/8.png',
      linkedin: '#',
      email: 'robert@valorapay.com',
    },
    {
      name: 'Jennifer Lee',
      role: 'Head of Sales',
      department: 'Sales',
      bio: 'Sales leader with a proven track record in B2B fintech. Expert in building relationships with enterprise clients and driving revenue growth.',
      image: '/assets/team_page/9.png',
      linkedin: '#',
      email: 'jennifer@valorapay.com',
    },
    {
      name: 'Thomas Brown',
      role: 'Senior Account Manager',
      department: 'Sales',
      bio: 'Dedicated to helping businesses succeed with payment solutions. Expert in understanding client needs and delivering tailored payment strategies.',
      image: '/assets/team_page/10.png',
      linkedin: '#',
      email: 'thomas@valorapay.com',
    },
    {
      name: 'Amanda White',
      role: 'Head of Customer Success',
      department: 'Customer Success',
      bio: 'Customer advocate focused on ensuring client satisfaction and success. Expert in onboarding, training, and building long-term relationships.',
      image: '/assets/team_page/11.png',
      linkedin: '#',
      email: 'amanda@valorapay.com',
    },
    {
      name: 'Christopher Martinez',
      role: 'Head of Marketing',
      department: 'Marketing',
      bio: 'Marketing strategist with expertise in fintech branding and growth. Specializes in content marketing, SEO, and building brand awareness.',
      image: '/assets/team_page/12.png',
      linkedin: '#',
      twitter: '#',
      email: 'christopher@valorapay.com',
    },
  ]

  // Group team members by department
  const teamByDepartment = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = []
    }
    acc[member.department].push(member)
    return acc
  }, {} as Record<string, TeamMember[]>)

  const departments = Object.keys(teamByDepartment)

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Main Content Section */}
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Label */}
            <div>
              <p className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8 font-heading">
                Our Team
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-[-0.075rem] font-body">
                Meet the talented people behind ValoraPay
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8 font-body text-justify">
                Our diverse team of engineers, designers, and business experts work together to build the future of payments. We&apos;re passionate about creating innovative solutions that help businesses grow and succeed in the digital economy.
              </p>
              <button
                type="button"
                onClick={() => {
                  console.log('Button clicked, opening modal')
                  setIsModalOpen(true)
                }}
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
        </div>
      </section>

      {/* Team Members by Department */}
      {departments.map((department) => (
        <section key={department} className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Department Header */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 font-heading">
                {department}
              </h3>
              <div className="w-20 h-0.5" style={{ backgroundColor: '#4730B8' }}></div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {teamByDepartment[department].map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="bg-white rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Member Image */}
                  <div className="w-24 h-24 rounded-[10px] mb-6 overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Member Info */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                    {member.name}
                  </h4>
                  <p className="text-base font-medium mb-4 font-body" style={{ color: '#4730B8' }}>
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-body">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#4730B8] hover:bg-purple-50 rounded-[10px] transition-colors tap-target group"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#4730B8] hover:bg-purple-50 rounded-[10px] transition-colors tap-target group"
                        aria-label={`${member.name} Twitter`}
                      >
                        <TwitterIcon />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#4730B8] hover:bg-purple-50 rounded-[10px] transition-colors tap-target group"
                        aria-label={`Email ${member.name}`}
                      >
                        <EmailIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Us Section */}
      <div className="mx-5 my-5 bg-white rounded-[20px] overflow-hidden">
        <section className="w-full py-16 sm:py-20 lg:py-24 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 font-heading">
                Join our team
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence. If you&apos;re interested in building the future of payments, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-[10px] hover:bg-gray-800 transition-colors tap-target font-body group"
              >
                View open positions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-gray-900 text-base font-semibold rounded-[10px] border-2 border-gray-900 hover:bg-gray-50 transition-colors tap-target font-body"
              >
                Send us your resume
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

