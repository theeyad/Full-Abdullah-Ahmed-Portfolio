# Abdullah Ahmed — Portfolio (Elative Mint Edition)

A complete, modern full-stack personal portfolio website built with the MERN stack and Tailwind CSS.

## ✨ Features

- **Elative Mint theme** — dark/light mode, mint gradient accent, glassmorphism on Achievements page
- **SPA routing** — Home page with all sections + dedicated `/achievements` page
- **Backend API** — Express.js with `/api/projects`, `/api/achievements`, `/api/contact`
- **Fully responsive** — desktop, tablet, mobile
- **Contact form** — full validation on frontend + backend, success/error states
- **Smooth animations** — fade-in-up, floating elements, hover micro-interactions

## 🗂️ File Structure

```
portfolio/
├── package.json              ← root (concurrently)
├── client/                   ← React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── sections/
│   │   │       ├── Hero.tsx
│   │   │       ├── About.tsx
│   │   │       ├── Skills.tsx
│   │   │       ├── Projects.tsx
│   │   │       ├── Journey.tsx
│   │   │       ├── Blog.tsx
│   │   │       └── Contact.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   └── AchievementsPage.tsx
│   │   ├── hooks/
│   │   │   └── useTheme.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── data/
│   │       └── static.ts
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
└── server/                   ← Node.js + Express backend
    ├── index.js
    ├── routes/
    │   ├── projects.js
    │   ├── achievements.js
    │   └── contact.js
    ├── data/
    │   ├── projects.js
    │   └── achievements.js
    ├── .env.example
    └── package.json
```

## 🚀 Quick Start

### 1. Install dependencies

```bash
# Install all at once from root
npm install
cd client && npm install
cd ../server && npm install
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
# Edit server/.env if needed
```

### 3. Run in development

```bash
# From root — runs both frontend (port 5173) and backend (port 5000)
npm run dev

# Or individually:
npm run client   # Frontend only
npm run server   # Backend only
```

### 4. Open in browser

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000/api/health

## 🔧 Customization Checklist

| Item | Location | What to change |
|------|----------|---------------|
| Stats (15+, 10+, 1000+) | `src/components/sections/Hero.tsx` & `About.tsx` | Real numbers |
| Project data | `server/data/projects.js` | Your real projects |
| Achievement data | `server/data/achievements.js` | Your real achievements |
| Blog posts | `src/data/static.ts` | Your real articles |
| Timeline | `src/data/static.ts` | Your real journey |
| CV file | `src/components/sections/Hero.tsx` | Replace `/cv-placeholder.pdf` |
| Live demo URLs | `server/data/projects.js` | Your real URLs |
| Profile photo | `src/components/sections/Hero.tsx` | Replace "AA" avatar with `<img>` |

## 🎨 Theme

The **Elative Mint** theme uses CSS variables and Tailwind custom colors:

| Token | Value |
|-------|-------|
| `mint` | `#37E0A6` |
| `mint-dark` | `#18A176` |
| `bg-main` | `#050816` |
| `bg-surface` | `#0B1020` |
| `accent-purple` | `#8B5CF6` |
| `accent-blue` | `#38BDF8` |

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects (query: `?category=Web+Apps`) |
| GET | `/api/projects/:id` | Single project |
| GET | `/api/achievements` | All achievements (query: `?category=...`) |
| POST | `/api/contact` | Send contact message |

## 🛠️ Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, React Router v6, Framer Motion, Lucide React, Axios

**Backend:** Node.js, Express.js, CORS, dotenv

---

Built with ❤️ by Abdullah Ahmed Mohamed — Elative Mint Edition
# Full-Abdullah-Ahmed-Portfolio
