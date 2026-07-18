'use client'

import { useState } from 'react'
import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: {
    value: string
    label: string
    score: number
  }[]
}

interface Result {
  level: string
  title: string
  description: string
  recommendations: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: 'How many payment providers do you currently integrate with?',
    options: [
      { value: 'none', label: 'None / Just starting', score: 1 },
      { value: '1-2', label: '1-2 providers', score: 2 },
      { value: '3-5', label: '3-5 providers', score: 3 },
      { value: '6-10', label: '6-10 providers', score: 4 },
      { value: '10+', label: '10+ providers', score: 5 },
    ],
  },
  {
    id: 2,
    question: 'How do you handle payment routing and cascading?',
    options: [
      { value: 'manual', label: 'Manual selection or no routing', score: 1 },
      { value: 'basic', label: 'Basic routing rules', score: 2 },
      { value: 'advanced', label: 'Advanced routing with some automation', score: 3 },
      { value: 'intelligent', label: 'Intelligent routing based on performance', score: 4 },
      { value: 'ai-powered', label: 'AI-powered dynamic routing', score: 5 },
    ],
  },
  {
    id: 3,
    question: 'What is your current approach to payment analytics?',
    options: [
      { value: 'none', label: 'No analytics or basic reporting', score: 1 },
      { value: 'basic', label: 'Basic transaction reports', score: 2 },
      { value: 'standard', label: 'Standard dashboards and metrics', score: 3 },
      { value: 'advanced', label: 'Advanced analytics with insights', score: 4 },
      { value: 'real-time', label: 'Real-time analytics and predictive insights', score: 5 },
    ],
  },
  {
    id: 4,
    question: 'How do you manage chargebacks and fraud prevention?',
    options: [
      { value: 'reactive', label: 'Reactive approach, handle as they come', score: 1 },
      { value: 'basic', label: 'Basic fraud filters', score: 2 },
      { value: 'standard', label: 'Standard fraud prevention tools', score: 3 },
      { value: 'advanced', label: 'Advanced fraud management system', score: 4 },
      { value: 'ai-powered', label: 'AI-powered fraud prevention and chargeback management', score: 5 },
    ],
  },
  {
    id: 5,
    question: 'What is your current payment reconciliation process?',
    options: [
      { value: 'manual', label: 'Manual reconciliation', score: 1 },
      { value: 'semi-automated', label: 'Semi-automated with manual checks', score: 2 },
      { value: 'automated', label: 'Mostly automated reconciliation', score: 3 },
      { value: 'fully-automated', label: 'Fully automated with real-time matching', score: 4 },
      { value: 'intelligent', label: 'Intelligent reconciliation with predictive matching', score: 5 },
    ],
  },
  {
    id: 6,
    question: 'How do you handle multi-currency transactions?',
    options: [
      { value: 'single', label: 'Single currency only', score: 1 },
      { value: 'manual', label: 'Manual currency conversion', score: 2 },
      { value: 'basic', label: 'Basic multi-currency support', score: 3 },
      { value: 'advanced', label: 'Advanced currency conversion with optimization', score: 4 },
      { value: 'intelligent', label: 'Intelligent currency conversion with dynamic rates', score: 5 },
    ],
  },
  {
    id: 7,
    question: 'What is your current payment infrastructure complexity?',
    options: [
      { value: 'simple', label: 'Simple, single integration', score: 1 },
      { value: 'moderate', label: 'Moderate complexity, few integrations', score: 2 },
      { value: 'complex', label: 'Complex with multiple systems', score: 3 },
      { value: 'very-complex', label: 'Very complex, enterprise-level', score: 4 },
      { value: 'orchestrated', label: 'Orchestrated payment platform', score: 5 },
    ],
  },
]

const results: Result[] = [
  {
    level: 'beginner',
    title: 'Getting Started',
    description: 'You\'re at the beginning of your payment maturity journey. Focus on building a solid foundation with core payment capabilities.',
    recommendations: [
      'Start with 1-2 reliable payment providers',
      'Implement basic fraud prevention measures',
      'Set up basic transaction reporting',
      'Consider a payment orchestration platform to simplify future growth',
    ],
  },
  {
    level: 'developing',
    title: 'Developing',
    description: 'You have basic payment infrastructure in place. Now is the time to optimize and scale your payment operations.',
    recommendations: [
      'Expand to multiple payment providers for better coverage',
      'Implement intelligent routing to improve success rates',
      'Set up automated reconciliation processes',
      'Consider advanced analytics to gain insights',
    ],
  },
  {
    level: 'mature',
    title: 'Mature',
    description: 'You have a well-established payment infrastructure. Focus on optimization and advanced capabilities.',
    recommendations: [
      'Optimize routing strategies for maximum success rates',
      'Implement advanced fraud prevention and chargeback management',
      'Leverage real-time analytics for data-driven decisions',
      'Consider AI-powered features for predictive insights',
    ],
  },
  {
    level: 'advanced',
    title: 'Advanced',
    description: 'You have an advanced payment infrastructure. Focus on continuous optimization and innovation.',
    recommendations: [
      'Implement AI-powered dynamic routing',
      'Leverage predictive analytics for proactive management',
      'Optimize currency conversion strategies',
      'Consider white-label solutions to monetize your infrastructure',
    ],
  },
]

export function PaymentMaturityQuiz() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0)
      const averageScore = totalScore / questions.length
      
      let resultLevel: Result
      if (averageScore <= 2) {
        resultLevel = results[0] // beginner
      } else if (averageScore <= 3) {
        resultLevel = results[1] // developing
      } else if (averageScore <= 4) {
        resultLevel = results[2] // mature
      } else {
        resultLevel = results[3] // advanced
      }
      
      setResult(resultLevel)
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div ref={sectionFade.ref as React.RefObject<HTMLDivElement>} style={sectionFade.style} className="w-full py-16 sm:py-20 lg:py-24 bg-[#EFEFEF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResult ? (
          <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Discover your company's payment maturity level
              </h2>
              <p className="text-[18px] text-gray-600 font-body">
                Take this quick 7-question quiz to determine your company's payment maturity level and receive tailored recommendations. It will take you less than 2 minutes.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 font-body">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-gray-600 font-body">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#4730B8] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#4730B8] hover:bg-[#4730B8]/5 transition-all duration-200 group"
                  >
                    <span className="text-[18px] text-gray-900 font-body group-hover:text-[#4730B8]">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setAnswers(answers.slice(0, -1))
                }}
                className="text-[#4730B8] hover:text-[#5a3fc9] font-body flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-[20px] p-8 lg:p-12 shadow-sm">
            {/* Result Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#4730B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-[2.4rem] font-medium text-gray-900 mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Your Payment Maturity Level: {result?.title}
              </h2>
              <p className="text-[18px] text-gray-600 font-body max-w-2xl mx-auto">
                {result?.description}
              </p>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                Recommendations for Your Business
              </h3>
              <div className="space-y-4">
                {result?.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 bg-[#4730B8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-[18px] text-gray-700 font-body flex-1">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full hover:border-gray-400 transition-colors font-semibold font-body"
              >
                Retake Quiz
              </button>
              <Link
                href="/contacts"
                className="px-8 py-4 bg-[#4730B8] text-white rounded-full hover:bg-[#5a3fc9] transition-colors font-semibold text-center font-body"
              >
                Get Personalized Recommendations
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

