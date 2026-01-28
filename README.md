# 888Starz Casino Website

SEO-friendly marketing website for 888Starz online casino and sports betting platform built with Next.js 14 (App Router), TypeScript, and modern web technologies.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ ESLint & Prettier for code quality
- ✅ next-sitemap for automatic sitemap.xml and robots.txt generation
- ✅ Complete SEO optimization (metadata, Open Graph, JSON-LD)
- ✅ Semantic HTML markup
- ✅ Responsive design
- ✅ Modern UI with brand colors (red, gold, green)
- ✅ All required pages: Home, App, Casino, Bonus, Promo Code, Registration, Login, Affiliate

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Code Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── app/               # Mobile app page
│   ├── casino/            # Casino games page
│   ├── bonus/             # Bonuses page
│   ├── promo-code/        # Promo code page
│   ├── registration/     # Registration page
│   ├── login/             # Login page
│   └── affiliate/         # Affiliate program page
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PromoCode.tsx
│   ├── Features.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   └── Button.tsx
├── public/                # Static assets
│   ├── logo.svg
│   ├── trustpilot-logo.svg
│   └── *.svg              # Image placeholders
└── requirements.txt       # Project requirements and rules
```

## SEO Features

- Complete metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (Organization, Article)
- Semantic HTML5 markup
- Proper heading hierarchy (h1, h2, h3)
- Sitemap.xml and robots.txt generation

## Environment Variables

Create a `.env.local` file:

```env
SITE_URL=https://888starz.cash
GOOGLE_VERIFICATION=your-google-verification-code
```

## Brand Colors

- Primary Red: `#B11212`
- Dark Red: `#8C0E0E`
- Black: `#0B0B0B`
- Green: `#28A745`
- Gold: `#F2B705`

## Typography

- Primary Font: Inter (body text, buttons)
- Heading Font: Montserrat (headings, titles)

## License

Private project - All rights reserved.
