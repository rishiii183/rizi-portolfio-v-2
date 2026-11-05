# Rishi Ghosh (Rizzi) — Personal Developer Portfolio v2

<div align="center">

  <img src="public/assets/portfolio-favicon.png" alt="Rizzi Logo" width="100" height="100" style="border-radius: 50%;" />

  <h3>Full-Stack Developer & AI Security Builder</h3>
  <p>Minimalist, award-winning developer portfolio built with Next.js 16 App Router, Turbopack, Tailwind CSS, and Motion.</p>

  <p>
    <a href="https://rizzii.me"><strong>🌐 Live Website: rizzii.me</strong></a> •
    <a href="https://x.com/wasRizzii"><strong>🐦 Twitter: @wasRizzii</strong></a> •
    <a href="mailto:coderrishi183@gmail.com"><strong>📬 Contact</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Motion-React-orange?style=for-the-badge&logo=framer" alt="Motion" />
    <img src="https://img.shields.io/badge/Spotify-API_Realtime-1DB954?style=for-the-badge&logo=spotify" alt="Spotify" />
  </p>
</div>

---

## ⚡ Highlights & Key Features

- **Interactive Avatar & Sound FX:** Pixel-art portrait by default, with custom glitch sound and multi-layer RGB-split glitch animation revealing the real-life camera selfie.
- **Dynamic Dock Navigation:** macOS-style fluid magnification dock with warm orange accent glows, spring physics, and animated circular theme toggle.
- **Interactive Tech Stack Marquee:** Continuous marquee showcasing 13+ tools (React, Next.js, TypeScript, PostgreSQL, Prisma, etc.) with smooth 60fps pop-out hover elevation and direct external links.
- **Real-Time Spotify Polling:** Live music widget displaying currently playing tracks, artists, album art, and audio equalizer animations using the Spotify Web API.
- **Coding Stats (WakaTime):** Real-time editor activity and coding time telemetry.
- **Technical Writing (MDX):** Fast MDX blog system featuring deep-dives like *"Securing AI Agents: Prompt Injection, Memory Poisoning & Defense Mechanisms"*.
- **Projects Showcase:** Curated production applications (ResearchOS, Lume, Agnio, Rizzi Portfolio) with live demos, tech stacks, and repository links.
- **60 FPS Performance:** Composite-only transforms, zero layout thrashing, and full Turbopack optimization.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion) |
| **Content** | MDX with Syntax Highlighting |
| **APIs & Telemetry** | Spotify Web API, WakaTime API |
| **Email Service** | [Resend](https://resend.com/) |
| **Analytics** | Umami Analytics & Vercel Web Analytics |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/rishiii183/rizi-portolfio-v-2.git
cd rizi-portolfio-v-2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create your local `.env.local` configuration file:

```bash
cp .env.example .env.local
```

Add your credentials to `.env.local`:

```env
# Spotify Integration (Live status)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
SPOTIFY_REDIRECT_URI=http://127.0.0.1:3001/api/spotify/callback

# Canonical URL
SITE_URL=https://rizzii.me

# Contact Form (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=coderrishi183@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev

# WakaTime Activity (Optional)
WAKATIME_OAUTH_TOKEN=your_token
WAKATIME_TIMEZONE=Asia/Kolkata
```

> **Note:** The portfolio includes fallback mocks for all APIs so it runs without breaking even if some credentials are not configured.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001`) in your browser to view the portfolio.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Starts the production server |
| `npm run lint` | Lints the codebase using ESLint |

---

## 👤 Author

**Rishi Ghosh (Rizzi)**

- **Website:** [rizzii.me](https://rizzii.me)
- **GitHub:** [@rishiii183](https://github.com/rishiii183)
- **X / Twitter:** [@wasRizzii](https://x.com/wasRizzii)
- **Instagram:** [@thtsrizi](https://www.instagram.com/thtsrizi/)
- **LinkedIn:** [rishighoshofficial](https://www.linkedin.com/in/rishighoshofficial/)
- **Email:** [coderrishi183@gmail.com](mailto:coderrishi183@gmail.com)

---

## 📄 License

This project is personal intellectual property. Feel free to explore the code for learning purposes. If adapting the architecture, please replace all personal branding, images, and content.
