'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Case Studies Testimonials component
 * Shows client testimonials
 */
export function CaseStudiesTestimonials() {
  const sectionFade = useFadeIn({ threshold: 0.15, delay: 100 })

  const testimonials = [
    {
      name: 'Vladislav',
      location: 'Czech Republic',
      date: '22 Jun, 2022',
      rating: 5,
      title: 'Pleasant cooperation & assistance',
      content: 'We have been fruitfully cooperating with BrosPay for 1.5 years now. Thanks to the professional team, we launched very quickly and had our first live transactions in less than three weeks. From the moment we signed up until now, we\'ve had a pleasant interaction with the team. They\'re ready to help anytime, with any question. Also, they helped a lot with setup and onboarding at the initial stages. Last but not least, the payment page they developed for us is just perfect. We\'re glad to have BrosPay as a partner!',
      avatar: '/assets/landing_page/client_stories/one_img.webp',
    },
    {
      name: 'Arif Akhmedzade',
      location: 'Ukraine',
      date: '7 Mar, 2022',
      rating: 5,
      title: 'BrosPay is more than just a partner',
      content: 'I know BrosPay for more than 5 years and during this time we come more than partners. The team is professional. They give great support and provide with all necessary information from the first day of work. I remember our onboarding period. It was great, everything was clear. The product is made by real professionals who do understand fintech deeply. They have done a great product that updates and becomes better at every update. Also, they do listen to their customers and provide really necessary functions.',
      avatar: '/assets/landing_page/client_stories/two_img.webp',
    },
    {
      name: 'Sam Kaploushenko',
      location: 'United Arab Emirates',
      date: '22 Jun, 2022',
      rating: 5,
      title: 'Pleasant cooperation & assistance',
      content: 'It\'s been over two years of our collaboration with BrosPay. During this time, we\'ve connected dozens of various integrations and solutions, brought to life some joint projects. Namely, BrosPay was our technical partner in the launch of UAX. I\'d say, today, our companies are much more than partners, and our close business relations are mutually beneficial. It\'s worth mentioning that our payment traffic has multiplied several times since we started with the platform, and it easily fulfils our needs as we scale and enter new geographies.',
      avatar: '/assets/landing_page/client_stories/three_img.webp',
    },
    {
      name: 'Ronnie Beernaert',
      location: 'Netherlands',
      date: '14 Feb, 2022',
      rating: 5,
      title: 'Great support from a great team',
      content: 'It is really a pleasure to work with the BrosPay team. They are always available to give a helping hand when it is needed. Fast response times and knowledgeable people are always there to advise and to help you to move forward with your projects.',
      avatar: '/assets/landing_page/client_stories/one_img.webp',
    },
    {
      name: 'Olga Malinochka',
      location: 'Ukraine',
      date: '15 Feb, 2022',
      rating: 5,
      title: 'Good partnership since 2018',
      content: 'We have been working with BrosPay since October 2018. We are very thankful, that we got acquainted with a really strong partner, which has a high level of expertise in the fintech field, development, and other IT tools for payouts. Since that time we have been connected to 8 PSPs and more than 15 payout methods - so, everything that we needed - is extremely covered by BrosPay. What is also not least, that all the questions we have, are fastly resolved with our Account Manager and we can make a conclusion that communication is on a high level of responsibility and trust. Now we can wish only prosperity, joy, and reaching new tops and successes to new beginnings!',
      avatar: '/assets/landing_page/client_stories/two_img.webp',
    },
  ]

  return (
    <section 
      ref={sectionFade.ref as React.RefObject<HTMLElement>} 
      style={sectionFade.style} 
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 max-w-3xl mx-auto leading-[3.05563rem] tracking-[-0.075rem] font-body">
            What clients say about BrosPay
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-body">
            We are proud to be rated 'Great' on Trustpilot. Check out what some of our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-[20px] p-6 lg:p-8 flex flex-col"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-body">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 font-body">{testimonial.location}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 mb-4 font-body">{testimonial.date}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                {testimonial.title}
              </h3>

              {/* Content */}
              <p className="text-[16px] text-gray-600 leading-relaxed font-body flex-1">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[18px] text-gray-600 mb-6 font-body">
            Would you like to share your experience?
          </p>
          <a
            href="https://www.trustpilot.com/review/valorapay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#4730B8] text-white rounded-[10px] font-semibold hover:bg-[#5a3fc9] transition-colors font-body"
          >
            Leave us a review
          </a>
        </div>
      </div>
    </section>
  )
}

