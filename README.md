# Syed Muhammad Shah — Portfolio (React + Vite)

A production-grade personal portfolio built with React 18 + Vite.  
Clean component architecture — easy to update without touching layout code.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✏️ How to Update Content

### **Everything is in one file: `src/data/index.js`**

Open `src/data/index.js` — this is the only file you need to edit for content changes.

### Add a new project

```js
// In src/data/index.js → PROJECTS array
{
  id: "myapp",
  icon: "🚀",
  title: "My New App",
  sub: "What it does — Platform",
  color: "#ff6b6b",               // accent color for this card
  tags: ["Live", "iOS", "Category"],
  tech: ["Flutter", "Firebase"],
  desc: `Description here.

• Feature one
• Feature two`,
  screens: [],                    // add screenshots (see below)
  links: {
    ios:     "https://apps.apple.com/...",
    android: "https://play.google.com/...",
    driver:  "https://...",        // optional — for ride apps with driver app
  },
},
```

### Add screenshots to a project

```js
// 1. Put image files in src/assets/screenshots/
//    e.g. src/assets/screenshots/myapp_home.jpg

// 2. Import at the top of src/data/index.js:
import myappHome from '../assets/screenshots/myapp_home.jpg';
import myappOrders from '../assets/screenshots/myapp_orders.jpg';

// 3. Add to project screens array:
screens: [
  { img: myappHome,   label: "Home Screen"   },
  { img: myappOrders, label: "Orders Screen" },
],
```

### Add a new job (Experience)

```js
// In src/data/index.js → EXPERIENCE array
// Add to the TOP of the array (newest first)
{
  company: "Company Name",
  role:    "Your Role",
  period:  "Month Year – Present",
  color:   "#00e5a0",   // pick any color
  desc:    "What you did and achieved.",
},
```

### Update hero stats / description / links

```js
// In src/data/index.js → HERO object
export const HERO = {
  description: "Your new description...",
  stats: [
    { number: "5+", label: "Years Experience" },
    // ...
  ],
  links: {
    email:    "mailto:your@email.com",
    linkedin: "https://linkedin.com/in/yourhandle",
    github:   "https://github.com/YourHandle",
  },
};
```

---

## 📁 Project Structure

```
portfolio-react/
├── index.html                    # Vite HTML entry
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Assembles all sections
    ├── index.css                 # Global styles + keyframes
    │
    ├── data/
    │   └── index.js              # ← EDIT THIS for all content changes
    │
    ├── hooks/
    │   ├── useTyping.js          # Typing animation hook
    │   └── useReveal.js          # Scroll reveal IntersectionObserver hook
    │
    ├── components/
    │   ├── ParticleCanvas.jsx    # Animated background canvas
    │   ├── Navbar.jsx            # Sticky nav with active section tracking
    │   ├── Hero.jsx              # Hero section (name, typed, stats, CTAs)
    │   ├── About.jsx             # About + feature cards
    │   ├── Skills.jsx            # Tech stack grid
    │   ├── Projects.jsx          # Project cards grid
    │   ├── ProjectModal.jsx      # Full project detail modal
    │   ├── Experience.jsx        # Work history
    │   └── BottomSections.jsx    # Education + Contact + Footer
    │
    └── assets/
        └── screenshots/          # ← Put project screenshots here
            └── (your images)
```

---

## 🌐 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at vercel.com for auto-deploy on push
```

## 🌐 Deploy to Netlify (Free)

```bash
npm run build
# Drag the dist/ folder to app.netlify.com/drop
```

---

## 🛠 Tech Stack

- **React 18** — component-based UI
- **Vite 5** — instant dev server, optimized builds
- **CSS-in-JS + index.css** — no external CSS framework needed
- **IntersectionObserver** — scroll reveal animations
- **Canvas API** — particle network background
- **Google Fonts** — Syne (headings) + DM Sans (body)

---

## 📸 Adding Real Screenshots (from your uploaded images)

The portfolio is ready for screenshots. When you have your image files:

1. Copy them to `src/assets/screenshots/`
2. Import them in `src/data/index.js`
3. Add them to the `screens` array of the relevant project

The 3-phone stacked layout will automatically show when you add 3+ screenshots.
The modal gallery with clickable thumbnails works automatically too.

---

*Built with ♥ for Syed Muhammad Shah*
