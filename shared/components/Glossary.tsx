'use client'

import { useState } from 'react'
import Link from 'next/link'
import { glossaryTerms, type GlossaryTerm } from '@/shared/data/glossaryTerms'

const alphabet = ['3', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter terms based on selected letter and search query
  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesLetter = !selectedLetter || term.letter === selectedLetter
    const matchesSearch =
      !searchQuery ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLetter && matchesSearch
  })

  // Group terms by letter
  const termsByLetter = filteredTerms.reduce((acc, term) => {
    if (!acc[term.letter]) {
      acc[term.letter] = []
    }
    acc[term.letter].push(term)
    return acc
  }, {} as Record<string, GlossaryTerm[]>)

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter)
    // Scroll to the letter section
    const element = document.getElementById(`letter-${letter}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div>
      {/* Search and Letter Navigation Section */}
      <section className="w-full bg-[#EFEFEF] pt-8 sm:pt-12 lg:pt-16 pb-0 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#4730B8] focus:border-transparent font-body text-base"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Letter Navigation */}
          <div className="mb-12">
            <p className="text-center text-gray-600 mb-4 font-body text-base">Scroll to letter</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {alphabet.map((letter) => {
                const hasTerms = glossaryTerms.some((term) => term.letter === letter)
                return (
                  <button
                    key={letter}
                    onClick={() => handleLetterClick(letter)}
                    disabled={!hasTerms}
                    className={`px-4 py-2 rounded-[10px] font-body text-sm font-medium transition-all ${
                      selectedLetter === letter
                        ? 'bg-[#4730B8] text-white shadow-lg'
                        : hasTerms
                          ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Terms Section */}
      <section className="w-full bg-[#EFEFEF] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(termsByLetter).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(termsByLetter)
                .sort(([a], [b]) => {
                  // Sort: numbers first, then letters
                  if (a === '3') return -1
                  if (b === '3') return 1
                  return a.localeCompare(b)
                })
                .map(([letter, terms]) => (
                  <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                    {/* Letter Header */}
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-heading">{letter}</h2>
                      <div className="w-20 h-1 bg-[#4730B8] mt-2"></div>
                    </div>

                    {/* Terms List */}
                    <div className="space-y-6">
                      {terms.map((term) => (
                        <Link
                          key={term.id}
                          href={`/glossary/${term.id}`}
                          className="block bg-gray-50 rounded-[20px] p-6 lg:p-8 hover:shadow-lg transition-all hover:bg-white cursor-pointer"
                        >
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-heading">
                            {term.term}
                          </h3>
                          <p className="text-[18px] text-gray-600 leading-relaxed font-body">{term.definition}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg font-body">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

