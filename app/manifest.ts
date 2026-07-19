import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BrosPay - Payment Orchestration Platform',
    short_name: 'BrosPay',
    description: 'Top-Notch Payment Orchestration Platform. Universal feature-rich payment hub for online businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#EFEFEF',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/favicon-light.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

