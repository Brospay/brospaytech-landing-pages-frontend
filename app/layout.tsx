import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'BrosPay - Top-Notch Payment Orchestration Platform',
    template: '%s | BrosPay',
  },
  description: 'BrosPay is a universal feature-rich payment hub for online businesses and payment institutions. We integrate payment providers and acquirers all around the world to bring a unified communication, control, and management interface.',
  keywords: [
    'payment orchestration',
    'payment orchestration platform',
    'payment hub',
    'payment providers',
    'payment integration',
    'payment processing',
    'payment gateway',
    'payment solutions',
    'online payments',
    'payment management',
    'unified payments',
    'payment infrastructure',
    'payment API',
    'payment processing platform',
    'multi-provider payments',
    'payment routing',
    'payment analytics',
    'payment reconciliation',
    'fintech',
    'payment institutions',
  ],
  authors: [{ name: 'BrosPay' }],
  creator: 'BrosPay',
  publisher: 'BrosPay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://valorapay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BrosPay - Top-Notch Payment Orchestration Platform',
    description: 'BrosPay is a universal feature-rich payment hub for online businesses and payment institutions. We integrate payment providers and acquirers all around the world to bring a unified communication, control, and management interface.',
    siteName: 'BrosPay',
    images: [
      {
        url: '/assets/landing_page/hero/hero_bg.png',
        width: 1920,
        height: 974,
        alt: 'BrosPay Payment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrosPay - Top-Notch Payment Orchestration Platform',
    description: 'Universal feature-rich payment hub integrating payment providers and acquirers worldwide for unified communication, control, and management.',
    images: ['/assets/landing_page/hero/hero_bg.png'],
    creator: '@valorapay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/assets/favicon-light.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}

