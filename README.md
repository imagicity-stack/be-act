# BE ACT Foundation

A modern, energetic NGO experience built with Next.js 14, Tailwind CSS, and an Express + MongoDB backend. The design mirrors the BE ACT logo palette with playful interactions, bouncy counters, and rounded shapes throughout the site.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file with your MongoDB connection string

```
MONGODB_URI=mongodb://localhost:27017/beact
PORT=3000
```

3. Run the dev server (Next.js + Express)

```bash
npm run dev
```

The app will start on `http://localhost:3000`.

## Tech
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion + GSAP micro-animations
- Express API routes: `/api/contact`, `/api/donate`, `/api/subscribe`
- MongoDB with Mongoose message schema

## Structure
- `app/` – Pages for landing, about, programs, get involved, gallery, contact
- `components/` – Navbar, Footer, hero UI elements, modals, counters, cards, gallery grid
- `server/` – Express server, Mongo connection, message model, API routes
- `lib/content.js` – Static content for programs and gallery

## Notes
- The design uses the BE ACT palette: yellow accents (`#f2c13d`), dark green/teal (`#0d6b63`, `#0c8a7a`), and a soft cream background (`#f5f0e4`).
- Micro-interactions are implemented with Framer Motion and CSS keyframes for playful bounce and hover states.
