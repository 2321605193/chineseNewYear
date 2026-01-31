# Chinese New Year Countdown Website

A beautiful, bilingual (English/Chinese) countdown website for Chinese New Year 2026, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⏱️ Real-time countdown to Chinese New Year
- 🌏 Bilingual support (English & Simplified Chinese)
- 🐴 Zodiac animal information (2026: Year of the Horse)
- 🎨 Modern, responsive design with smooth animations
- 🚀 Optimized for performance and SEO
- 📱 Mobile-friendly interface

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to `/en` (English) by default.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
chineseNewYear/
├── app/
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── Header/
│   ├── Hero/
│   ├── CountdownTimer/
│   ├── ZodiacSection/
│   ├── CultureSection/
│   └── Footer/
├── lib/                   # Utility functions
│   ├── countdown.ts       # Countdown logic
│   └── cny-dates.ts       # Chinese New Year dates
├── hooks/                 # Custom React hooks
│   └── useCountdown.ts
├── messages/              # i18n translations
│   ├── en.json
│   └── zh.json
├── types/                 # TypeScript types
└── docs/                  # Documentation
```

## Internationalization

The website supports two languages:
- English (`/en`)
- Simplified Chinese (`/zh`)

Language can be switched using the button in the header.

## SEO Optimization

- Semantic HTML structure
- Meta tags for social media (Open Graph, Twitter Cards)
- Sitemap and robots.txt
- Optimized images and fonts
- Fast loading times

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Future Enhancements

- Google Analytics integration
- Social media sharing
- Email reminders
- Historical CNY dates
- Animated elements
- Sound effects

## License

MIT

## Credits

Made with ❤️ for celebrating Chinese culture
