'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  image?: string
}

const categories = ['ALL', 'announcements', 'articles', 'use cases', 'events', 'integrations', 'updates', 'checklists']

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'ValoraPay reached 500 ready-made integrations milestone',
    category: 'announcements',
    date: 'December 23, 2024',
    readTime: '1 min',
    excerpt: 'We are excited to announce that ValoraPay has reached a significant milestone of 500 ready-made integrations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: "ValoraPay's 2024: milestones, achievements, and moments that mattered",
    category: 'announcements',
    date: 'December 20, 2024',
    readTime: '9 min',
    excerpt: 'A comprehensive look back at ValoraPay&apos;s achievements, milestones, and significant moments throughout 2024.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'ValoraPay hits milestone with 400 ready-made integrations',
    category: 'announcements',
    date: 'January 9, 2024',
    readTime: '2 min',
    excerpt: 'Another major milestone achieved as ValoraPay expands its integration network to 400 payment providers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: "ValoraPay's 2023: a wrap-up of our achievements",
    category: 'announcements',
    date: 'December 22, 2023',
    readTime: '6 min',
    excerpt: 'Reflecting on the key achievements and milestones that shaped ValoraPay in 2023.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Certified payment integrations: process, requirements, and best practices',
    category: 'articles',
    date: 'December 2, 2025',
    readTime: '10 min',
    excerpt: 'Learn about the certification process for payment integrations, including requirements and industry best practices.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
  },
  {
    id: '6',
    title: "ValoraPay's monthly updates: November 2025",
    category: 'updates',
    date: 'December 1, 2025',
    readTime: '2 min',
    excerpt: 'Stay updated with the latest features, improvements, and changes in ValoraPay&apos;s November 2025 release.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '7',
    title: 'Payment tokenisation: how it works, benefits, and implementation tips',
    category: 'articles',
    date: 'November 12, 2025',
    readTime: '17 min',
    excerpt: 'A comprehensive guide to payment tokenisation, exploring how it works, its benefits, and practical implementation tips.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
  },
  {
    id: '8',
    title: 'Static vs. dynamic payment routing explained',
    category: 'articles',
    date: 'November 7, 2025',
    readTime: '8 min',
    excerpt: 'Understanding the differences between static and dynamic payment routing and when to use each approach.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '9',
    title: 'Payment routing 101: definition, process, rules, and workflow',
    category: 'articles',
    date: 'November 6, 2025',
    readTime: '8 min',
    excerpt: 'A beginner-friendly guide to payment routing, covering definitions, processes, rules, and workflow patterns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '10',
    title: "ValoraPay's monthly updates: October 2025",
    category: 'updates',
    date: 'November 4, 2025',
    readTime: '3 min',
    excerpt: 'Latest updates and improvements in ValoraPay&apos;s October 2025 release cycle.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '11',
    title: 'Pre-authorised payments: how they work and why businesses use them',
    category: 'articles',
    date: 'October 30, 2025',
    readTime: '12 min',
    excerpt: 'Exploring pre-authorised payments, their mechanics, and the business benefits they provide.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
  },
  {
    id: '12',
    title: 'Visa VAMP explained: key changes for merchants & payment businesses',
    category: 'articles',
    date: 'October 22, 2025',
    readTime: '8 min',
    excerpt: 'Understanding Visa VAMP and the important changes it brings for merchants and payment service providers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '13',
    title: 'Payments cascading: how it improves transaction success rates',
    category: 'articles',
    date: 'October 8, 2025',
    readTime: '5 min',
    excerpt: 'Learn how payment cascading works and how it can significantly improve your transaction success rates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
]

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [postsToShow, setPostsToShow] = useState(6) // Show 2 rows initially (6 posts on desktop)
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })

  const filteredPosts =
    activeCategory === 'ALL' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Reset posts to show when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setPostsToShow(6)
  }

  const displayedPosts = filteredPosts.slice(0, postsToShow)
  const hasMorePosts = filteredPosts.length > postsToShow

  const handleLoadMore = () => {
    setPostsToShow((prev) => prev + 6) // Load 6 more posts (2 more rows)
  }

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style}>
      {/* Category Filter Section */}
      <section className="w-full bg-[#EFEFEF] pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-[10px] font-body text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#4730B8] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full bg-[#EFEFEF] pt-0 pb-8 sm:pb-12 lg:pb-16 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Post Image */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#4730B8]/10 text-[#4730B8] text-xs font-semibold rounded-[10px] font-body">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Content */}
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-[#4730B8] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm lg:text-base mb-4 font-body line-clamp-3">{post.excerpt}</p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 font-body">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read More Arrow */}
                  <div className="mt-4 flex items-center text-[#4730B8] font-medium text-sm font-body group-hover:gap-2 transition-all">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              </div>

              {/* Load More Button */}
              {hasMorePosts && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-gray-900 text-white rounded-[10px] hover:bg-gray-800 transition-colors font-body font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Load more
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg font-body">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

