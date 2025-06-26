# <img src="public/favicon.png" width="32" height="32" style="vertical-align:middle"> Bangs! – Lightning-fast Search Shortcuts ⚡️

Bangs! is a Lightning-fast search shortcut service inspired by DuckDuckGo's "!bangs".
Type commands like `!g react`, `!y lo-fi mix` or `!m paris café` to jump straight to the right search engine – **instantly**.

> **🌐 Live Demo**: [https://bangs-beta.vercel.app](https://bangs-beta.vercel.app)  
> **Inspiration**: This project is heavily inspired by [unduck](https://github.com/t3dotgg/unduck) by Theo Browne

---

## 🌐 Browser Setup - Complete Tutorial

### Chrome / Edge / Brave

1. **Open settings**: `chrome://settings/searchEngines` (or `edge://settings/searchEngines`)
2. **Click "Add"** in the "Search engines" section
3. **Fill in the fields**:
   - **Name**: `Bangs!`
   - **Keyword**: `!` (or `bang`)
   - **URL**: `https://bangs-beta.vercel.app/search?q=%s`
4. **Click "Add"**

### Firefox

1. **Right-click** on the address bar → **"Add a Keyword for this Search"**
2. Or go to **Settings** → **Search** → **Search Shortcuts**
3. **Add manually**:
   - **Name**: `Bangs!`
   - **Keyword**: `!`
   - **URL**: `https://bangs-beta.vercel.app/search?q=%s`

### Safari

1. **Safari** → **Preferences** → **Search**
2. **Manage Websites** → **Add**
3. **URL**: `https://bangs-beta.vercel.app/search?q=%s`
4. **Title**: `Bangs!`

### 🎯 How to use

Once configured, type in your address bar:
- `! !g react hooks` → Google search for "react hooks"
- `! !y lofi music` → YouTube search for "lofi music" 
- `! !gh nextjs` → GitHub search for "nextjs"
- `! !m restaurant paris` → Google Maps for "restaurant paris"

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

## 🚀 Quick Start (Development)

```bash
# 1. Clone
git clone https://github.com/gayakaci20/bangs.git
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
5. Open a Pull Request 🚀
