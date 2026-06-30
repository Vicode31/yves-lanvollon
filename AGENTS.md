# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev` or `pnpm dev` (runs Next.js with Turbopack)
- **Build**: `npm run build` or `pnpm build`
- **Production**: `npm start` or `pnpm start`
- **Lint**: `npm run lint` or `pnpm lint`
- **Package Manager**: This project uses `pnpm` (has pnpm-lock.yaml)

## Architecture

This is a Next.js 15 application for a hypnotherapy practice website (Yves Deniau - Saint-Brieuc). Key architectural elements:

### App Router Structure
- Uses Next.js App Router with TypeScript
- Main content in `src/app/` with nested routing for blog articles
- Blog articles are organized under `src/app/blog/(articles)/` with individual route folders

### Component Architecture
- UI components in `src/components/` including custom UI components in `src/components/ui/`
- Uses Radix UI primitives (@radix-ui/react-*) for accessible components
- Styling with Tailwind CSS v4 and class-variance-authority for component variants

### Key Components
- `Layout.tsx`: Matomo analytics initialization wrapper
- `MetaPixel.tsx`: Facebook Pixel tracking
- `SchemaOrg.tsx`: Structured data for SEO
- UI components include accordion, avatar, button, card, and animated carousels

### SEO & Analytics
- Comprehensive metadata configuration in root layout
- Google Tag Manager integration (GTM-WKCZK7W5)
- Facebook Pixel tracking
- Matomo analytics (site ID: 8)
- Dynamic sitemap generation with blog posts
- Structured data (Schema.org) implementation

### Blog System
- Static blog articles in individual route folders
- Each article has its own `page.tsx` file
- Sitemap automatically includes blog posts with lastModified dates
- Blog layout wrapper for consistent styling

### Styling & Animation
- Tailwind CSS v4 with PostCSS
- AOS (Animate On Scroll) library integration
- Custom font configuration (Roboto Flex)
- Motion library for advanced animations

### External Integrations
- Matomo analytics pointing to `https://matomo.osteopathe-champigny-sur-marne.com/`
- Facebook/Meta tracking pixel
- Google Tag Manager for conversion tracking
- Structured data for hypnotherapy business

## Important Notes

- The codebase is focused on SEO optimization for local hypnotherapy services
- All metadata and content is in French (locale: fr_FR)
- Uses TypeScript with strict configuration
- ESLint is enforced during builds (ignoreDuringBuilds: false)