# Bluestone Home Solutions LLC — Website

Professional property maintenance & preservation website for Bluestone Home Solutions LLC, Atlanta, GA.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle scroll animations)
- **Lucide React** (icons)
- **Resend** (transactional email for contact form)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for email delivery | For email |
| `CONTACT_EMAIL` | Email to receive form submissions | Optional (defaults to service@bluestonehomellc.com) |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO/sitemap | Optional |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps API key | Optional |

The contact form works without a Resend API key — submissions are logged to the console and a success response is returned. Add your Resend key for email delivery.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── globals.css       # Tailwind + custom styles
│   ├── api/contact/      # Contact form API route
│   ├── privacy/          # Privacy policy page
│   ├── terms/            # Terms of use page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── navbar.tsx         # Sticky navigation
│   ├── hero.tsx           # Hero section with background image
│   ├── services.tsx       # Service categories grid
│   ├── about.tsx          # About section
│   ├── why-choose-us.tsx  # Feature cards
│   ├── service-areas.tsx  # Map + service area list
│   ├── portfolio.tsx      # Before/after project gallery
│   ├── before-after-slider.tsx  # Interactive comparison slider
│   ├── who-we-work-with.tsx     # Client types grid
│   ├── contact-form.tsx   # Estimate request form
│   └── footer.tsx         # Footer
└── lib/
    ├── company.ts         # Centralized company info (edit here)
    ├── services.ts        # Service categories + portfolio data
    └── utils.ts           # Tailwind merge utility
```

## Editing Company Information

All company details are centralized in `src/lib/company.ts`:
- Business name, address, email
- Hours of operation
- Service areas
- SEO metadata

Service categories and portfolio projects are in `src/lib/services.ts`.

## Adding Project Photos

Place new photos in `public/images/portfolio/` and add entries to the `portfolioProjects` array in `src/lib/services.ts`.

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel
```

## Information Requiring Confirmation

- Phone number
- Professional licenses and insurance details
- Years of experience / founding year
- Employee count
- Specific service territories beyond Metro Atlanta
- Client testimonials
