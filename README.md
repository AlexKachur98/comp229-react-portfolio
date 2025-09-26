# Alex Kachur - React Portfolio (COMP229)

This is my personal portfolio website, built as a project for the COMP229 Web Application Development course at Centennial College. It's a modern, responsive single-page application (SPA) created with React, Vite, and a professional, scalable project architecture.

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

---

## 🛠️ Tech Stack
- **Frontend:** React 18, Vite, React Router v6, Framer Motion  
- **Styling:** Hybrid CSS (global utilities + CSS Modules for scoped styles)  
- **Linting:** ESLint with React, React Hooks, JSX a11y  
- **Deployment:** Render

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

## 🚀 Version 2.3 Upgrade
This version introduces a major refactor and polish:

### Architecture
- Adopted **folder-per-component/page** structure for scalability.  
- Migrated to **CSS Modules** for component-scoped styles.  
- Centralized project data into `projects.js` + custom hook `useProjects.js`.  

### Animation & UX
- Introduced **Framer Motion variants** for consistent animation patterns.  
- Added **search query highlighting** on Projects page.  
- Added **skeleton loaders** for smoother perceived performance.  

### Accessibility & SEO
- Added `aria-describedby` for form errors and auto-focus on first invalid field.  
- Added `aria-hidden="true"` to skeleton components.  
- Improved `index.html` with SEO-friendly `<meta>` tags and theme-color.  

### Image Optimization
This project uses a lightweight `OptimizedImage` component to improve performance:  

- **WebP first**: If a `.webp` version of an image exists, it will be served to browsers that support it.  
- **Fallback to original**: If WebP is unsupported or missing, the original `.jpg` or `.png` file is displayed.  
- All images are stored in `/public/images`, so they are served statically at build time.  

This ensures modern browsers get smaller, optimized images, while older browsers still work with the original format.

---

## ✅ Roadmap
- **Content Expansion:**  
  - Expand **About Me** page with more personal details and philosophy.  
  - Add more detailed descriptions on **Project Details** pages.  
  - Expand **Education** with highlights and achievements.  

- **Visual Polish:**  
  - Add banner graphics for About and Services pages.  
  - Incorporate technology logos (React, Node.js, etc.) into Services.  
  - Replace placeholder images with final screenshots.  

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
