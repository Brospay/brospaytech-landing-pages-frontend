'use client'

import { useFadeIn } from '@/shared/hooks/useFadeIn'
import Image from 'next/image'

/**
 * ISO/MSP Certifications and Compliance section
 * Features logos and text
 */
export function IsoMspCertifications() {
  const sectionRef = useFadeIn({ threshold: 0.1, delay: 100 })

  return (
    <section ref={sectionRef.ref as React.RefObject<HTMLElement>} style={sectionRef.style} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* PCI DSS COMPLIANT */}
          <div className="h-16 flex items-center">
            <Image
              src="/assets/iso-msp_page/pci-dss.svg"
              alt="PCI DSS Compliant"
              width={176}
              height={70}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* VISA */}
          <div className="h-16 flex items-center">
            <Image
              src="/assets/iso-msp_page/visa.svg"
              alt="VISA"
              width={221}
              height={70}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Mastercard */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full -mr-4 z-10"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
            <span className="text-black font-semibold text-sm ml-2 font-body lowercase">mastercard</span>
          </div>

          {/* ISO 9001 & 27001 */}
          <div className="h-16 flex items-center">
            <Image
              src="/assets/iso-msp_page/iso.svg"
              alt="ISO Certified"
              width={180}
              height={80}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* PSD2 */}
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold text-center font-body">
            PSD2
          </div>

          {/* GDPR */}
          <div className="h-16 flex items-center">
            <Image
              src="/assets/iso-msp_page/gdpr.svg"
              alt="GDPR"
              width={180}
              height={80}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000] leading-tight font-heading">
              Accelerate Your Business Growth with Our PCI DSS Compliant Solution
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

