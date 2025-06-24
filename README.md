# <img src="favicon.png" width="50" height="50" style="vertical-align:middle"> Bangs! – Lightning-fast Search Shortcuts ⚡️

Bangs! is a modern, self-hostable search shortcut service inspired by DuckDuckGo's "!bangs".
Type commands like `!g react`, `!y lo-fi mix` or `!m paris café` to jump straight to the right search engine – **instantly**.

> **🌐 Live Demo**: [https://bangs-beta.vercel.app](https://bangs-beta.vercel.app)  
> **Inspiration**: This project is heavily inspired by [unduck](https://github.com/t3dotgg/unduck) by Theo Browne

---

## 🌐 Configuration Navigateur - Tutoriel Complet

### Chrome / Edge / Brave

1. **Ouvrez les paramètres** : `chrome://settings/searchEngines` (ou `edge://settings/searchEngines`)
2. **Cliquez sur "Ajouter"** dans la section "Moteurs de recherche"
3. **Remplissez les champs** :
   - **Nom** : `Bangs!`
   - **Mot-clé** : `!` (ou `bang`)
   - **URL** : `https://bangs-beta.vercel.app/search?q=%s`
4. **Cliquez sur "Ajouter"**

### Firefox

1. **Clic droit** sur la barre d'adresse → **"Ajouter un mot-clé pour cette recherche"**
2. Ou allez dans **Paramètres** → **Recherche** → **Raccourcis de recherche**
3. **Ajoutez manuellement** :
   - **Nom** : `Bangs!`
   - **Mot-clé** : `!`
   - **URL** : `https://bangs-beta.vercel.app/search?q=%s`

### Safari

1. **Safari** → **Préférences** → **Recherche**
2. **Gérer les sites web** → **Ajouter**
3. **URL** : `https://bangs-beta.vercel.app/search?q=%s`
4. **Titre** : `Bangs!`

### 🎯 Comment utiliser

Une fois configuré, tapez dans votre barre d'adresse :
- `! !g react hooks` → Recherche Google pour "react hooks"
- `! !y lofi music` → Recherche YouTube pour "lofi music" 
- `! !gh nextjs` → Recherche GitHub pour "nextjs"
- `! !m restaurant paris` → Google Maps pour "restaurant paris"

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
