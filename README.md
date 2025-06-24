# <svg width="150" height="75" viewBox="0 0 130 248" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FACC15" />
      <stop offset="100%" stop-color="#F97316" />
    </linearGradient>
  </defs>
  <path d="M63 180.5L104.5 139L32.5 97.4308C60.6178 69.313 104.5 25.4308 104.5 25.4308" stroke="url(#logoGradient)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="25" cy="223" r="25" fill="url(#logoGradient)"/>
</svg>

# Bangs! – Lightning-fast Search Shortcuts ⚡️

Bangs! is a modern, self-hostable search shortcut service inspired by DuckDuckGo's "!bangs".
Type commands like `!g react`, `!y lo-fi mix` or `!m paris café` to jump straight to the right search engine – **instantly**.

> **Inspiration**: This project is heavily inspired by [unduck](https://github.com/t3dotgg/unduck) by Theo Browne

---

## ✨ Features

- **Instant redirects** – No loading screens, everything happens client-side
- **Customizable bangs** – Easily add, remove or tweak shortcuts in `src/lib/bangs.ts`
- **Beautiful dark UI** – Tailwind CSS, HeroUI components & orange gradient branding
- **Interactive glow & particles** – `tsParticles` sparkles and mouse-follow glow effects
- **Minimal redirect page** – `/search` shows only a subtle sparkle animation while redirecting
- **Fully typed** – Next.js 14 with TypeScript & App Router

| Bang | Engine | Example |
|------|--------|---------|
| `!i` | Google Images | `!i Batman` |
| `!y` | YouTube | `!y synthwave mix` |
| `!w` | Wikipedia | `!w Alan Turing` |
| `!gh` | GitHub code search | `!gh nextjs middleware` |
| `!ghr` | GitHub repo | `!ghr vercel/next.js` |
| `!m` | Google Maps | `!m coffee near me` |
| `!d` | DuckDuckGo | `!d privacy` |
| … | Add your own! | `src/lib/bangs.ts` |

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/your-username/bangs.git
cd bangs

# 2. Install dependencies
npm install

# 3. Run in dev mode
npm run dev
# → http://localhost:3000
```

Build for production:
```bash
npm run build && npm start
```

---

## 🌐 Browser Integration

Add a **custom search engine** (or keyword) in your browser settings pointing to:

```
https://your-domain.com/search?q=%s
```

Now type `!g something` in the address bar and hit **Enter** – you'll be teleported to Google's results for `something`.

> Tip: Replace `your-domain.com` with `localhost:3000` during development.

---

## 🏗️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS** & **HeroUI**
- **Lucide React** icons
- **tsParticles** (sparkles) + **Framer Motion**

---

## 📂 Project Structure

```
src/
  app/
    page.tsx          → Showcase landing page
    search/page.tsx   → Redirect handler
  components/
    ui/               → Glowing & particles effects
  lib/
    bangs.ts          → Bang definitions & redirect logic
```

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch `feat/my-awesome-bang`
3. Add / edit entries in `src/lib/bangs.ts`
4. `pnpm test` & `npm run lint`
5. Open a Pull Request 🚀# bangs
