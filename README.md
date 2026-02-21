# Pranay Kumar Karanam — Portfolio

A dark, minimal developer portfolio built with **React + Vite + Tailwind CSS v4**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — done!

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Navigation bar
│   │   ├── Hero.jsx          ← Hero section
│   │   ├── About.jsx         ← About + focus areas
│   │   ├── Skills.jsx        ← Tabbed skills grid
│   │   ├── Projects.jsx      ← Project cards
│   │   ├── Education.jsx     ← Education timeline
│   │   ├── Contact.jsx       ← Contact form + social links
│   │   ├── Footer.jsx        ← Footer
│   │   └── CursorGlow.jsx    ← Ambient cursor effect
│   ├── data/
│   │   └── index.js          ← ⭐ EDIT THIS to update content
│   ├── App.jsx               ← Root component
│   ├── main.jsx              ← Entry point
│   └── index.css             ← Global styles + Tailwind
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customizing Content

**All content lives in `src/data/index.js`** — just edit that file:

```js
// Change your name, email, links
export const PERSONAL = {
  name: "Your Name",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
}

// Add/remove projects
export const PROJECTS = [
  {
    title: "My Project",
    emoji: "🚀",
    description: "What it does...",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://myproject.com",
    accent: "#6366f1",   // card accent color
  },
]
```

---

## 🌈 Changing Colors

The main accent colors are defined in `src/index.css`:

```css
:root {
  --indigo: #6366f1;   /* primary accent */
  --violet: #a78bfa;   /* secondary accent */
  --bg:     #080b14;   /* background */
}
```

Do a find-and-replace of `#6366f1` and `#a78bfa` to change the palette globally.

---

## 🌐 Deploy

```bash
npm run build
```

Upload the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

Or connect your GitHub repo to Vercel for automatic deploys on every push.

---

## 📬 Wiring up the Contact Form

In `src/components/Contact.jsx`, find the `handleSubmit` function and add your form service:

```js
// Option 1: Formspree
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})

// Option 2: EmailJS
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```
