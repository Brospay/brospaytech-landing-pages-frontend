'use client'

import Link from 'next/link'
import { useFadeIn } from '@/shared/hooks/useFadeIn'

/**
 * Footer component matching Figma design
 * Features:
 * - Dark purple/black gradient background
 * - Logo with description
 * - Multiple link columns (Quick links, Utility pages, Address, Contact)
 * - Social media icons
 * - Mobile-first responsive design
 * - Smooth fade-in animations
 */
export function Footer() {
  const sectionFade = useFadeIn({ threshold: 0.1, delay: 0 })
  const products = [
    { label: 'Payments', href: '/payments' },
    { label: 'Checkout', href: '/checkout' },
    { label: 'Payouts', href: '/payouts' },
    { label: 'Batch payouts', href: '/batch-payouts' },
    { label: 'Routing & Cascading', href: '/routing-cascading' },
    { label: 'Currency conversion', href: '/currency-conversion' },
    { label: 'Merchant management', href: '/merchant-management' },
    { label: 'Reconciliations', href: '/reconciliations' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'White label payment provider', href: '/white-label' },
  ]

  const company = [
    { label: 'About us', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Contacts', href: '/contacts' },
    { label: 'Careers', href: '/careers', badge: "We're hiring!" },
    { label: 'ROI calculator', href: '/roi-calculator' },
    { label: 'Blog', href: '/blog' },
    { label: 'Guides', href: '/guides' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Pricing', href: '#pricing' },
  ]

  const developers = [
    { label: 'Documentation', href: '/docs' },
    { label: 'API references', href: '/api-references' },
    { label: 'Status page', href: '/status' },
    { label: 'Sandbox', href: '/sandbox' },
    { label: 'SDKs', href: '/sdks' },
  ]

  const integrations = [
    { label: 'Payment providers', href: '/payment-providers' },
    { label: 'Payment methods', href: '/payment-methods' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#linkedin',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ]

  return (
    <footer ref={sectionFade.ref as React.RefObject<HTMLElement>} style={sectionFade.style} className="relative text-gray-300 overflow-hidden footer-bg">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative max-w-[1890px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* CTA Section */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-[2.4rem] font-medium text-white mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Ready to boost your business to the next level?
              </h2>
            </div>
            <Link
              href="/contacts"
              className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-[10px] hover:bg-gray-100 transition-colors shadow-lg tap-target flex items-center gap-3 group whitespace-nowrap font-body"
            >
              Book a Call
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 border-r-0 lg:border-r border-white/10 pr-0 lg:pr-12">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/logo_dark.png"
                  alt="ValoraPay Logo"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-[18px] text-gray-400 mb-6 max-w-xs font-body">
                ValoraPay is a universal feature-rich payment orchestration platform for online businesses and payment institutions. We integrate payment providers and acquirers all around the world to bring a unified communication, control, and management interface.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors tap-target rounded-[10px] hover:bg-white/10"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="border-r-0 lg:border-r border-white/10 pr-0 lg:pr-12">
              <h4 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wider font-heading">
                Products
              </h4>
              <ul className="space-y-0.5">
                {products.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-block font-body"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-block font-body"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="border-r-0 lg:border-r border-white/10 pr-0 lg:pr-12">
              <h4 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wider font-heading">
                Company
              </h4>
              <ul className="space-y-0.5">
                {company.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-flex items-center gap-2 font-body"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="px-2.5 py-0.5 bg-yellow-400 text-black text-xs font-semibold rounded-[10px] whitespace-nowrap">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-flex items-center gap-2 font-body"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="px-2.5 py-0.5 bg-yellow-400 text-black text-xs font-semibold rounded-[10px] whitespace-nowrap">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers & Integrations */}
            <div>
              <h4 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wider font-heading">
                Developers
              </h4>
              <ul className="space-y-0.5 mb-8">
                {developers.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-block font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wider font-heading">
                Integrations
              </h4>
              <ul className="space-y-0.5">
                {integrations.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-block font-body"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white hover:text-gray-300 transition-colors tap-target inline-block font-body"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 font-body">
              © {new Date().getFullYear()} ValoraPay. All rights reserved.
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors tap-target font-body"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-sm text-gray-400 hover:text-white transition-colors tap-target font-body"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-settings"
                className="text-sm text-gray-400 hover:text-white transition-colors tap-target font-body"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

