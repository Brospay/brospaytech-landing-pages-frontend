'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * Navigation component matching Figma design
 * Features:
 * - Logo with dollar sign icon in purple circle
 * - Desktop horizontal navigation with dropdown arrows
 * - CTA button on the right
 * - Mobile hamburger menu
 * - Smooth transitions
 * - Accessible tap targets (≥44x44px)
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsHovered, setIsProductsHovered] = useState(false)
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false)
  const [isResourcesHovered, setIsResourcesHovered] = useState(false)
  const [isCompanyHovered, setIsCompanyHovered] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Lock body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      // Also lock html element for better mobile support
      document.documentElement.style.overflow = 'hidden'
      
      // Prevent touch scrolling on iOS
      document.body.style.touchAction = 'none'
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.touchAction = ''
      document.documentElement.style.overflow = ''
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.touchAction = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }

  const navLinks = [
    { href: '/', label: 'Home', showArrow: false },
    { href: '#products', label: 'Products', showArrow: true },
    { href: '#solutions', label: 'Solutions', showArrow: true },
    { href: '#resources', label: 'Resources', showArrow: true },
    { href: '#company', label: 'Company', showArrow: true },
    { href: '/pricing', label: 'Pricing', showArrow: false },
  ]

  const productsMenuData = {
    Products: [
      {
        title: 'White-label gateway',
        description: 'Solution for online businesses',
        href: '/white-label-gateway',
      },
      {
        title: 'White-label processor',
        description: 'Solution for payment institutions',
        href: '/white-label',
      },
    ],
    Process: [
      { title: 'Payments', href: '/payments' },
      { title: 'Checkout', href: '/checkout' },
      { title: 'Payouts', href: '/payouts' },
      { title: 'Batch payouts', href: '/batch-payouts' },
    ],
    Facilitate: [
      { title: 'Merchant management', href: '/merchant-management' },
    ],
    Control: [
      { title: 'Analytics', href: '/analytics' },
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Reconciliations', href: '/reconciliations' },
      { title: 'Security & Compliance', href: '/security' },
      { title: 'Chargeback management', href: '/chargeback-management' },
    ],
    Orchestrate: [
      { title: 'Routing & Cascading', href: '/routing-cascading' },
      { title: 'Currency conversion', href: '/currency-conversion' },
      { title: 'Fraud management', href: '#fraud-management', soon: true },
      { title: 'Cashier', href: '#cashier', soon: true },
    ],
  }

  const solutionsMenuData = {
    Solutions: [
      {
        title: 'For merchants',
        description: 'White-label gateway',
        href: '/white-label-gateway',
      },
      {
        title: 'For payment institutions',
        description: 'White-label processor',
        href: '/white-label',
      },
    ],
    ByIndustry: [
      { title: 'E-commerce', href: '/ecommerce' },
      { title: 'Forex', href: '/forex' },
      { title: 'iGaming', href: '/igaming' },
      { title: 'Gambling', href: '/gambling' },
      { title: 'ISO/MSP', href: '/iso-msp' },
      { title: 'B2B SaaS', href: '/glossary/saas-payment-gateway' },
      { title: 'Crypto', href: '/glossary/crypto-payment-processing' },
      { title: 'PSP', href: '/psp' },
      { title: 'Dating and adult', href: '/blog/online-dating-payment-processing' },
      { title: 'Marketplace', href: '/marketplace' },
      { title: 'Financial institution', href: '/blog/5-major-payment-challenges-of-banks-psps-and-financial-institutions' },
    ],
    ByStrategy: [
      { title: 'Expand globally', href: '/expand-globally' },
      { title: 'Boost conversions', href: '/boost-conversions' },
      { title: 'Minimise costs', href: '/minimise-costs' },
    ],
    ByGeography: [
      { title: 'Central & Eastern Europe', href: '/blog/entering-the-central-eastern-european-market-business-and-payment-trends' },
      { title: 'Western Europe', href: '/blog/entering-the-western-europe-market-all-you-need-to-know' },
      { title: 'North America', href: '/blog/expanding-to-north-america-market-specificity-local-payment-culture' },
      { title: 'Latin America', href: '/blog/expanding-to-the-latin-american-market-payment-trends-business-specificities' },
      { title: 'Africa', href: '/blog/african-market-payment-trends-specificities' },
      { title: 'Middle East', href: '/blog/expanding-to-the-middle-east-planning-overview-payment-landscape' },
      { title: 'APAC', href: '/blog/apac-market-overview-and-payment-trends' },
    ],
  }

  const resourcesMenuData = {
    Resources: [
      {
        title: 'Blog',
        description: 'Payment articles and our news.',
        href: '/blog',
      },
      {
        title: 'ROI calculator',
        description: 'Estimate return on investment.',
        href: '/roi-calculator',
      },
      {
        title: 'Developer hub',
        description: 'Resources for developers.',
        href: '/docs',
      },
    ],
    Knowledge: [
      { title: 'Case studies', href: '/case-studies' },
      { title: 'Guides', href: '/guides' },
      { title: 'Glossary', href: '/glossary' },
    ],
    Documentation: [
      { title: 'Quick start', href: '/docs' },
      { title: 'API reference', href: '/api-references' },
      { title: 'Developer hub', href: '/docs' },
      { title: 'Connectors guides', href: '/docs/connectors' },
      { title: 'Release notes', href: '/docs/release-notes' },
    ],
    Support: [
      { title: 'System status', href: '/status' },
    ],
  }

  const companyMenuData = {
    Company: [
      { title: 'About us', href: '/about' },
      { title: 'Team', href: '/team' },
      { title: 'Roadmap', href: '/roadmap' },
    ],
    GetInTouch: [
      { title: 'Contact us', href: '/contacts' },
      { title: 'Careers', href: '/careers', badge: "we're hiring!" },
    ],
  }

  return (
    <nav className="sticky top-0 z-[100] w-full overflow-visible" role="navigation" aria-label="Main navigation" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-[1630px] mx-auto px-4 sm:px-6 lg:px-8 overflow-visible" style={{ pointerEvents: 'auto' }}>
        <div className="flex items-center justify-between h-[92px] relative" style={{ pointerEvents: 'auto' }}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center gap-2 tap-target"
            >
              <img
                src="/assets/logo_dark.png"
                alt="BrosPay Logo"
                className="h-10 w-auto"
                loading="eager"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-0 xl:space-x-1">
            {navLinks.map((link) => {
              if (link.label === 'Products') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <a
                      href={link.href}
                      className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
                    >
                      {link.label}
                      {link.showArrow && (
                        <svg
                          className={`w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-all duration-200 ${
                            isProductsHovered ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </a>

                     {/* Products Mega Menu - Light Theme */}
                     {isProductsHovered && (
                       <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1100px] z-50">
                         <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                         <div className="p-8">
                           <div className="grid grid-cols-5 gap-8">
                             {/* Left Columns - Products, Process, Control, Orchestrate */}
                             <div className="col-span-3 grid grid-cols-4 gap-8">
                               {/* Products Column */}
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Products</h3>
                                 <div className="space-y-4">
                                   {productsMenuData.Products.map((item, index) => {
                                     const content = (
                                       <div className="flex-1 min-w-0">
                                         <div className="flex items-center gap-2 mb-1">
                                           <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors font-heading">
                                             {item.title}
                                           </h4>
                                         </div>
                                         <p className="text-xs text-gray-600 font-body leading-relaxed">
                                           {item.description}
                                         </p>
                                       </div>
                                     );
                                     return item.href.startsWith('/') ? (
                                       <Link
                                         key={index}
                                         href={item.href}
                                         className="group flex items-start gap-3"
                                       >
                                         {content}
                                       </Link>
                                     ) : (
                                       <a
                                         key={index}
                                         href={item.href}
                                         className="group flex items-start gap-3"
                                       >
                                         {content}
                                     </a>
                                     );
                                   })}
                                 </div>
                               </div>

                               {/* Process Column */}
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Process</h3>
                                 <div className="space-y-2">
                                   {productsMenuData.Process.map((item, index) => 
                                     item.href.startsWith('/') ? (
                                       <Link
                                         key={index}
                                         href={item.href}
                                         className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                       >
                                         {item.title}
                                       </Link>
                                     ) : (
                                     <a
                                       key={index}
                                       href={item.href}
                                       className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                     >
                                       {item.title}
                                     </a>
                                     )
                                   )}
                                 </div>
                                 <div className="mt-6">
                                   <h3 className="text-sm font-bold text-gray-900 mb-3 font-heading">Facilitate</h3>
                                   <div className="space-y-2">
                                     {productsMenuData.Facilitate.map((item, index) => 
                                       item.href.startsWith('/') ? (
                                         <Link
                                           key={index}
                                           href={item.href}
                                           className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                         >
                                           {item.title}
                                         </Link>
                                       ) : (
                                       <a
                                         key={index}
                                         href={item.href}
                                         className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                       >
                                         {item.title}
                                       </a>
                                       )
                                     )}
                                   </div>
                                 </div>
                               </div>

                               {/* Control Column */}
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Control</h3>
                                 <div className="space-y-2">
                                   {productsMenuData.Control.map((item, index) => 
                                     item.href.startsWith('/') ? (
                                       <Link
                                         key={index}
                                         href={item.href}
                                         className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                       >
                                         {item.title}
                                       </Link>
                                     ) : (
                                     <a
                                       key={index}
                                       href={item.href}
                                       className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                     >
                                       {item.title}
                                     </a>
                                     )
                                   )}
                                 </div>
                               </div>

                               {/* Orchestrate Column */}
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Orchestrate</h3>
                                 <div className="space-y-2">
                                   {productsMenuData.Orchestrate.map((item, index) => {
                                     const content = (
                                       <>
                                       <span>{item.title}</span>
                                       {item.soon && (
                                         <span className="px-1.5 py-0.5 text-[10px] font-medium text-yellow-600 bg-yellow-100 rounded flex-shrink-0">
                                           soon
                                         </span>
                                       )}
                                       </>
                                     );
                                     return item.href.startsWith('/') ? (
                                       <Link
                                         key={index}
                                         href={item.href}
                                         className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                       >
                                         {content}
                                       </Link>
                                     ) : (
                                       <a
                                         key={index}
                                         href={item.href}
                                         className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                       >
                                         {content}
                                     </a>
                                     );
                                   })}
                                 </div>
                               </div>
                             </div>

                             {/* Right Column - Supported Integrations & Payment Providers */}
                             <div className="col-span-2 space-y-6">
                               {/* Supported Integrations */}
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Supported integrations</h3>
                                 <div className="bg-primary rounded-xl p-6 flex items-center justify-center">
                                   <div className="text-center">
                                     <div className="flex items-center justify-center gap-1 mb-1">
                                       <span className="text-5xl font-bold text-white font-heading">500</span>
                                       <span className="w-6 h-6 rounded-[10px] bg-white/20 flex items-center justify-center">
                                         <span className="text-white text-lg font-bold">+</span>
                                       </span>
                                     </div>
                                   </div>
                                 </div>
                               </div>

                               {/* Payment Providers */}
                               <div>
                                 <a
                                   href="#payment-providers"
                                   className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 hover:text-primary transition-colors font-heading group"
                                 >
                                   Payment providers
                                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                   </svg>
                                 </a>
                                 <p className="text-xs text-gray-600 mb-4 font-body">
                                   Easily connect PayPal, Stripe, Skrill and 500+ more.
                                 </p>
                                 <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-[10px] bg-gray-100 flex items-center justify-center overflow-hidden p-1.5">
                                     <img src="/assets/PayPal-logo.svg" alt="PayPal" className="w-full h-full object-contain" />
                                   </div>
                                   <div className="w-10 h-10 rounded-[10px] bg-gray-100 flex items-center justify-center overflow-hidden p-1.5">
                                     <img src="/assets/Stripe-logo.svg" alt="Stripe" className="w-full h-full object-contain" />
                                   </div>
                                   <div className="w-10 h-10 rounded-[10px] bg-gray-100 flex items-center justify-center overflow-hidden p-1.5">
                                     <img src="/assets/Skrill-logo.svg" alt="Skrill" className="w-full h-full object-contain" />
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>

                           {/* Test-drive Checkout Creation Card */}
                           <div className="mt-8 pt-8 border-t border-gray-200">
                             <a
                               href="/test-drive"
                               className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                             >
                               <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                   </svg>
                                 </div>
                                 <div>
                                   <h4 className="text-sm font-bold text-gray-900 mb-1 font-heading flex items-center gap-2">
                                     Test-drive checkout creation
                                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                     </svg>
                                   </h4>
                                   <p className="text-xs text-gray-600 font-body">
                                     Use the interactive demo to build your own checkout flow — no coding, just clicks.
                                   </p>
                                 </div>
                               </div>
                             </a>
                           </div>
                           </div>
                         </div>
                       </div>
                     )}
                  </div>
                )
              }
              if (link.label === 'Solutions') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsSolutionsHovered(true)}
                    onMouseLeave={() => setIsSolutionsHovered(false)}
                  >
                    <a
                      href={link.href}
                      className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
                    >
                      {link.label}
                      {link.showArrow && (
                        <svg
                          className={`w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-all duration-200 ${
                            isSolutionsHovered ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </a>

                    {/* Solutions Mega Menu - Light Theme */}
                    {isSolutionsHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1100px] z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                        <div className="p-8">
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left Columns - Solutions, By Industry, By Strategy, By Geography */}
                            <div className="col-span-3 grid grid-cols-4 gap-8">
                              {/* Solutions Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Solutions</h3>
                                <div className="space-y-4">
                                  {solutionsMenuData.Solutions.map((item, index) => {
                                    const content = (
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors font-heading mb-1">
                                          {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 font-body leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    );
                                    return item.href.startsWith('/') ? (
                                      <Link
                                        key={index}
                                        href={item.href}
                                        className="group flex items-start gap-3"
                                      >
                                        {content}
                                      </Link>
                                    ) : (
                                      <a
                                        key={index}
                                        href={item.href}
                                        className="group flex items-start gap-3"
                                      >
                                        {content}
                                    </a>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* By Industry Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">By industry</h3>
                                <div className="space-y-2">
                                  {solutionsMenuData.ByIndustry.map((item, index) => 
                                    item.href.startsWith('/') ? (
                                      <Link
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                      >
                                        {item.title}
                                      </Link>
                                    ) : (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* By Strategy Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">By strategy</h3>
                                <div className="space-y-2">
                                  {solutionsMenuData.ByStrategy.map((item, index) => 
                                    item.href.startsWith('/') ? (
                                      <Link
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                      >
                                        {item.title}
                                      </Link>
                                    ) : (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* By Geography Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">By geography</h3>
                                <div className="space-y-2">
                                  {solutionsMenuData.ByGeography.map((item, index) => 
                                    item.href.startsWith('/') ? (
                                      <Link
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                      >
                                        {item.title}
                                      </Link>
                                    ) : (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Client Stories & Case Studies */}
                            <div className="col-span-2 space-y-6">
                              {/* Client Stories */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Client stories</h3>
                                <div className="bg-primary rounded-xl p-6 mb-4">
                                  <div className="flex items-center justify-center h-32">
                                    <div className="text-center">
                                      <svg className="w-16 h-16 mx-auto text-white/80 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-xs text-gray-600 font-body leading-relaxed">
                                  Our clients around the world are scaling up their business thanks to our solutions for different industries and areas.
                                </p>
                              </div>

                              {/* Case Studies */}
                              <div>
                                <a
                                  href="/case-studies"
                                  className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 hover:text-primary transition-colors font-heading group"
                                >
                                  Case studies
                                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <p className="text-xs text-gray-600 mb-4 font-body">
                                  Discover what LetyShops, Kuna, Boosta and others achieved with us
                                </p>
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-[10px] bg-yellow-400 flex items-center justify-center overflow-hidden p-1.5">
                                    <img src="/assets/letyShops.webp" alt="LetyShops" className="w-full h-full object-contain" />
                                  </div>
                                  <div className="w-10 h-10 rounded-[10px] bg-blue-600 flex items-center justify-center overflow-hidden p-1.5">
                                    <img src="/assets/kuna.webp" alt="Kuna" className="w-full h-full object-contain" />
                                  </div>
                                  <div className="w-10 h-10 rounded-[10px] bg-red-500 flex items-center justify-center overflow-hidden p-1.5">
                                    <img src="/assets/boosta.webp" alt="Boosta" className="w-full h-full object-contain" />
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              if (link.label === 'Resources') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsResourcesHovered(true)}
                    onMouseLeave={() => setIsResourcesHovered(false)}
                  >
                    <a
                      href={link.href}
                      className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
                    >
                      {link.label}
                      {link.showArrow && (
                        <svg
                          className={`w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-all duration-200 ${
                            isResourcesHovered ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </a>

                    {/* Resources Mega Menu - Light Theme */}
                    {isResourcesHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1100px] z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                        <div className="p-8">
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left Columns - Resources, Knowledge, Documentation, Support */}
                            <div className="col-span-3 grid grid-cols-4 gap-8">
                              {/* Resources Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Resources</h3>
                                <div className="space-y-4">
                                  {resourcesMenuData.Resources.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="group flex items-start gap-3"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors font-heading mb-1">
                                          {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 font-body leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Knowledge Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Knowledge</h3>
                                <div className="space-y-2">
                                  {resourcesMenuData.Knowledge.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Documentation Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Documentation</h3>
                                <div className="space-y-2">
                                  {resourcesMenuData.Documentation.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Support Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Support</h3>
                                <div className="space-y-2">
                                  {resourcesMenuData.Support.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      {item.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Blog Section */}
                            <div className="col-span-2">
                              <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Blog</h3>
                              
                              {/* Featured Blog Post */}
                              <a
                                href="/blog"
                                className="block group mb-6"
                              >
                                <div className="bg-yellow-400 rounded-xl p-6 mb-4 h-32 flex items-center justify-center">
                                  <div className="flex items-center gap-4">
                                    <div className="w-12 h-8 bg-gray-900 rounded"></div>
                                    <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                      </svg>
                                    </div>
                                    <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <div className="w-10 h-10 bg-green-500 rounded-[10px] flex items-center justify-center">
                                      <span className="text-xs font-bold text-white">T</span>
                                    </div>
                                  </div>
                                </div>
                                <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors font-heading">
                                  Payment tokenisation: how it works, benefits, and implementation tips
                                </h4>
                                <div className="flex items-center gap-4 text-xs text-gray-600 font-body mb-4">
                                  <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>November 12, 2025</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>17 min</span>
                                  </div>
                                </div>
                              </a>

                              {/* More from blog */}
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 mb-3 font-heading">More from our blog:</h4>
                                <div className="space-y-2">
                                  {[
                                    'Static vs. dynamic payment routing explained',
                                    'Payment routing 101: definition, process, rules, and workflow',
                                    "BrosPay's monthly updates: October 2025",
                                  ].map((title, index) => (
                                    <a
                                      key={index}
                                      href="/blog"
                                      className="flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-body group"
                                    >
                                      <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                      <span>{title}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Payment Maturity Level Card */}
                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <a
                              href="#payment-maturity"
                              className="flex items-center justify-between p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors group"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-white mb-1 font-heading flex items-center gap-2">
                                    Discover your payment maturity level
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </h4>
                                  <p className="text-xs text-gray-400 font-body">
                                    Take this quick 7-question quiz to determine your company's payment maturity level and receive tailored recommendations.
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              if (link.label === 'Company') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsCompanyHovered(true)}
                    onMouseLeave={() => setIsCompanyHovered(false)}
                  >
                    <a
                      href={link.href}
                      className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
                    >
                      {link.label}
                      {link.showArrow && (
                        <svg
                          className={`w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-all duration-200 ${
                            isCompanyHovered ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </a>

                    {/* Company Mega Menu - Light Theme */}
                    {isCompanyHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1100px] z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                        <div className="p-8">
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left Column - Company Links & Get in Touch */}
                            <div className="col-span-2 space-y-8">
                              {/* Company Section */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Company</h3>
                                <div className="space-y-2">
                                  {companyMenuData.Company.map((item, index) => (
                                    item.href.startsWith('/') ? (
                                      <Link
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                      >
                                        {item.title}
                                      </Link>
                                    ) : (
                                      <a
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                      >
                                        {item.title}
                                      </a>
                                    )
                                  ))}
                                </div>
                              </div>

                              {/* Get in Touch Section */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Get in touch</h3>
                                <div className="space-y-2">
                                  {companyMenuData.GetInTouch.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-body"
                                    >
                                      <span>{item.title}</span>
                                      {item.badge && (
                                        <span className="px-2 py-0.5 text-[10px] font-medium text-gray-900 bg-yellow-400 rounded-[10px]">
                                          {item.badge}
                                        </span>
                                      )}
                                    </a>
                                  ))}
                                </div>
                              </div>

                            </div>

                            {/* Right Column - Company Image & Follow Us */}
                            <div className="col-span-3 space-y-6">
                              {/* Company Section with Image */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Company</h3>
                                <div className="bg-gray-100 rounded-xl mb-4 h-48 overflow-hidden">
                                  <img
                                    src="/assets/team.jpg"
                                    alt="BrosPay team"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                                <p className="text-sm text-gray-600 font-body leading-relaxed">
                                  Find out more about BrosPay as a company, meet our team and get the relevant contacts here.
                                </p>
                              </div>

                              {/* Follow Us Section */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-4 font-heading">Follow us</h3>
                                <div className="grid grid-cols-6 gap-3">
                                  {[
                                    { name: 'LinkedIn', icon: 'in', href: '#linkedin' },
                                    { name: 'Twitter', icon: '𝕏', href: '#twitter' },
                                    { name: 'Instagram', icon: '📷', href: '#instagram' },
                                    { name: 'YouTube', icon: '▶', href: '#youtube' },
                                    { name: 'Facebook', icon: 'f', href: '#facebook' },
                                    { name: 'GitHub', icon: '🐙', href: '#github' },
                                  ].map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.href}
                                      className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors group"
                                      aria-label={social.name}
                                    >
                                      {social.name === 'LinkedIn' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                      )}
                                      {social.name === 'Twitter' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                      )}
                                      {social.name === 'Instagram' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                      )}
                                      {social.name === 'YouTube' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                      )}
                                      {social.name === 'Facebook' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                      )}
                                      {social.name === 'GitHub' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 5.425 3.438 10.012 8.207 11.617.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.617 0-6.533-5.477-11.017-12-11.017z" clipRule="evenodd"/>
                                        </svg>
                                      )}
                                    </a>
                                  ))}
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
                >
                  {link.label}
                  {link.showArrow && (
                    <svg
                      className="w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-2 lg:px-3 xl:px-5 py-4 text-sm lg:text-[14px] xl:text-base font-medium text-white hover:text-white/80 transition-colors tap-target flex items-center gap-1 group font-heading"
              >
                {link.label}
                {link.showArrow && (
                  <svg
                    className="w-2.5 h-1.5 opacity-60 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
              )
            })}
          </div>

          {/* Tablet/Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href={`${process.env.NEXT_PUBLIC_MERCHANT_DASHBOARD_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-5 xl:px-6 py-3 bg-white text-gray-900 text-sm lg:text-[14px] xl:text-base font-medium rounded-[10px] hover:bg-gray-100 transition-colors tap-target flex items-center gap-2 xl:gap-3 group font-body whitespace-nowrap"
            >
              <span className="hidden xl:inline">Sign In</span>
              <span className="xl:hidden">Sign In</span>
              <span className="w-7 h-7 xl:w-8 xl:h-8 rounded-[10px] bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            onClick={handleMenuToggle}
            onTouchEnd={handleMenuToggle}
            className="lg:hidden p-2 rounded-[10px] text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 tap-target relative z-[100] cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{ 
              pointerEvents: 'auto',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <svg
              className="h-6 w-6 pointer-events-none"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
            onClick={(e) => handleMenuToggle(e as any)}
            onTouchMove={(e) => e.preventDefault()}
            aria-hidden="true"
            style={{ touchAction: 'none' }}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu" 
          className={`lg:hidden fixed top-[92px] right-0 w-[85%] max-w-[320px] transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'h-[calc(100vh-92px)] opacity-100 visible translate-x-0' 
              : 'h-[calc(100vh-92px)] opacity-0 invisible translate-x-full'
          }`}
          aria-hidden={!isOpen}
          style={{ 
            zIndex: 100,
            overflowY: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="px-4 sm:px-6 py-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.href.startsWith('/')) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors tap-target font-heading"
                    >
                      {link.label}
                    </Link>
                  )
                }
                return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    // Smooth scroll to section
                    setTimeout(() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  className="px-4 py-3 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-[10px] transition-colors tap-target font-heading"
                >
                  {link.label}
                </a>
                )
              })}
              <div className="pt-2 border-t border-white/20 mt-4">
                <a
                  href={`${process.env.NEXT_PUBLIC_MERCHANT_DASHBOARD_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center bg-primary text-white font-medium rounded-[10px] hover:bg-primary/90 transition-colors tap-target font-body"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

