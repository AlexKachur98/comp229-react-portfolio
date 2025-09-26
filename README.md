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

## 📦 Version History

### Version 2.4 (2025-09-26) — **Content & Layout Polish**
This release focused on content expansion and professional polish before backend integration.  

#### 🏠 Home Page
- Updated tagline to be more professional.  
- CTA button changed to **“View Projects”** for clearer navigation.  
- Improved semantic animation with Framer Motion variants.  

#### 👤 About Page
- Expanded biography with professional + personal details.  
- Polished phrasing to reflect passion, career journey, and hobbies.  
- Added ARIA labeling for resume download link.  
- Consistent section layout with headshot styling.  

#### 🎓 Education Page
- Intergraded a clean About-style layout.  
- Added **Centennial College logo** with vertical rotation.  
- Expanded details: GPA, program highlights, team projects, UML deliverables, QA, Agile, Git, and DevOps.  
- Added CTA button linking to **View Projects**.  

#### 📬 Contact Page
- Reworked layout into two clear sections:  
  - **Contact Info** with icons + email, phone, location.  
  - **Contact Form** with improved structure, error handling, and accessibility.  
- Added introductory text (“Whether you’re looking to collaborate…”).  
- Auto-focus on first invalid field when submitting.  
- Refined color scheme for form and error summary.  

---

### Version 2.3 (2025-09-25) — **Refactor & Accessibility**
- Introduced **Framer Motion variants** for consistent animation.  
- Added **search query highlighting** on Projects page.  
- Improved SEO with `<meta>` description + theme-color.  
- Added ARIA attributes (`aria-describedby`, `aria-hidden`).  
- Accessibility improvements to skeleton loaders and error summary.  

### Version 2.2 (Earlier) — **Architectural Refactor**
- Migrated to **folder-per-component/page** structure.  
- Adopted **CSS Modules** for scoped styles.  
- Introduced custom hook `useProjects`.  
- Added skeleton loaders and `OptimizedImage` component.  

---

## ✅ Roadmap
- **Content Expansion:**  
  - Expand **About Me** page further with values/philosophy.  
  - Add more detailed **Project Details** (challenges, learnings).  
  - Expand **Education** with certificates (e.g., Azure).  

- **Visual Polish:**  
  - Add banner graphics for About and Services pages.  
  - Incorporate technology logos (React, Node.js, etc.) into Services.  
  - Replace placeholder project images with final screenshots.  

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
