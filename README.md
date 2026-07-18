# Payment Platform

Modern payment platform built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (JIT mode, utility-first)
- **Architecture**: Modular, feature-based structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
payment-platform/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── features/              # Feature modules (to be added)
├── shared/                # Shared components and utilities
│   └── components/        # Reusable components
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       └── Footer.tsx
├── layouts/               # Route-specific layouts (to be added)
├── public/                # Static assets
└── docs/                  # Documentation (to be added)
```

## Features

### Landing Page Components

- **Navigation**: Responsive navigation bar with mobile menu
- **Hero**: Eye-catching hero section with CTAs
- **Footer**: Comprehensive footer with links and social media

All components follow mobile-first design principles with:
- Responsive breakpoints (sm, md, lg)
- Accessible tap targets (≥44x44px)
- Smooth transitions and hover states
- Tailwind utility classes

## Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Design Tokens

The project uses Tailwind CSS with custom design tokens defined in `tailwind.config.ts`:

- **Primary Colors**: Blue palette (primary-50 to primary-950)
- **Secondary Colors**: Purple palette (secondary-50 to secondary-950)
- **Spacing**: Extended Tailwind spacing scale
- **Typography**: Responsive font sizes with line heights

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive from 320px to 1440px+

## License

MIT

