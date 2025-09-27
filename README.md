# Alex Kachur - React Portfolio (COMP229)

This is my personal portfolio website, built as a project for the COMP229 Web Application Development course at Centennial College.  
It’s a modern, responsive single-page application (SPA) created with React, Vite, and a professional, scalable project architecture.

**Live Demo:** [`https://comp229-react-portfolio-1d8e.onrender.com`](https://comp229-react-portfolio-1d8e.onrender.com)

---

## ✨ Features
* **Responsive Design** — Works beautifully across desktop, tablet, and mobile devices.  
* **Smooth Page Transitions & Animations** — Powered by Framer Motion for a polished user experience.  
* **Light & Dark Mode** — Theme toggle with persisted preference and dynamic favicon updates.  
* **Interactive Projects Page** — Search and filter by tags with animated transitions and search highlighting.  
* **Professional Loading State** — Skeleton loaders prevent layout shift and improve perceived performance.  
* **Enhanced Accessibility** — ARIA roles, keyboard focus management, and an error summary on the contact form.  
* **Optimized Images** — Modern WebP served with `<picture>` and fallbacks for older browsers.  
* **Custom Service Icons** — Clean, handcrafted SVGs that adapt to light/dark mode via `currentColor`.  

---

## 🛠️ Tech Stack
- **Frontend:** React 18, Vite, React Router v6, Framer Motion  
- **Styling:** Hybrid CSS (global utilities + CSS Modules for scoped styles)  
- **Linting:** ESLint with React, React Hooks, JSX a11y  
- **Deployment:** Render  
- **Assets:** Custom SVG icons (handcrafted, theme-aware)  

---

## 🚀 Installation
Clone the repo and run locally:

```bash
git clone https://github.com/AlexKachur98/comp229-react-portfolio
cd portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🚀 Changelog

### v2.4
- **Home Page**
  - Added animated rotating tagline under “Software Engineering Technology Student @ Centennial College.”  
  - Improved reveal animation using Framer Motion variants.  
- **Education Page**
  - Expanded with more details from résumé.  
  - Added Centennial College logo with rotation (upright on mobile).  
  - Added “View Projects” button.  
- **Contact Page**
  - Polished form layout with cleaner spacing.  
  - Auto-focus on first invalid input.  
  - Stronger success message styling.  
- **Global Styling**
  - Extracted services CSS into `Services.module.css`.  
  - Added global `:focus-visible` styles for accessibility.  

### v2.5
- **Services Page**
  - Service cards now include **logos/icons** for tech skills (React, Node.js, etc.).  
  - Added services for **Custom PCs** and **Peer Mentorship** with visuals.  
- **Education Page**
  - Centennial logo rotation disabled on mobile for consistent display.  

### v2.6
- **Icons**
  - Replaced auto-generated icons with **custom handcrafted SVGs** in `/public/images/icons`.  
  - All icons normalized with `fill="currentColor"` to auto-adapt to light/dark themes.  
- **Cleanup**
  - Removed unused scripts (`scripts/export-icons.mjs`, `.svgo.config.cjs`).  
  - Removed unnecessary devDependencies (`simple-icons`, `svgo`).  
- **Services Update**
  - Services page finalized with consistent custom icons.  
  - Icons now sized and styled via `Services.module.css`.  

---

## ✅ Roadmap
- **Visual Polish:**  
  - Add subtle hover animations for service logos.
  - Add scroll reveal animation for about page.
  - Add full 3D interative logo for home page.  

- **Full-Stack Integration:**  
  - Build Node.js/Express + MongoDB backend.  
  - Expose CRUD API for projects and wire frontend to it.  
  - Add user authentication with JWT.  
  - Integrate AI chatbot feature.  

- **Accessibility Audit:**  
  - Run Lighthouse audit for WCAG compliance.  
  - Add focus trapping to mobile nav.  

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).  
You are free to use, modify, and distribute this code with attribution.  
