
# Alex Kachur - React Portfolio (COMP229)

This is my personal portfolio website, built as a project for the COMP229 Web Application Development course at Centennial College. It's a modern, responsive single-page application (SPA) created with React, Vite, and a professional, scalable project architecture.

**Live Demo:** [`https://comp229-react-portfolio-1d8e.onrender.com`](https://comp229-react-portfolio-1d8e.onrender.com) 

---

## ✨ Features

* **Responsive Design:** Looks great on desktops, tablets, and mobile phones.  
* **Smooth Page Transitions & Animations:** Fluid animations powered by Framer Motion for a polished user experience.  
* **Light & Dark Mode:** A theme toggle that saves the user's preference in their browser.  
* **Dynamic Favicon:** The browser tab icon automatically switches to match the user's theme.  
* **Interactive Projects Page:** Features a live text search and tag-based filtering with smooth layout animations.  
* **Professional Loading State:** A skeleton loader on the Projects page improves perceived performance.  
* **Enhanced Accessibility:** Includes ARIA attributes, keyboard focus management, and a top-level error summary on the contact form.  
* **Optimized Images:** Serves modern, compressed WebP images with fallbacks for older browsers using the `<picture>` element.  

---

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite, React Router v6, Framer Motion  
* **Styling:** Hybrid CSS - A global stylesheet for themes and utilities, combined with CSS Modules for component-scoped styles.  
* **Deployment:** Render / Vercel / Netlify  

---

## 🚀 Version 2.2 Upgrade Report: Architectural Refactor

This version represents a major professional refactor of the entire frontend architecture to improve scalability, maintainability, and performance.  

### Code Architecture & Styling
* Refactored the entire project to a folder-per-component structure for improved scalability and colocation.  
* Migrated component-specific styles from a single global stylesheet to CSS Modules, preventing style collisions while maintaining a global utility stylesheet.  
* Abstracted all project data fetching into a reusable custom hook (`useProjects`).  

### Animation & Performance
* Integrated Framer Motion as the single source for all application animations.  
* Created a reusable `<AnimatedPage>` component to centralize and simplify page transition logic.  
* Implemented a skeleton loader on the Projects page to improve perceived loading performance.  
* Created an `<OptimizedImage>` component using the `<picture>` element to serve modern WebP images with fallbacks.  

### Accessibility Enhancements
* Added a top-level, screen-reader-friendly error summary to the Contact page for improved form validation feedback.  
* Implemented keyboard focus management for the mobile navigation menu.  

---

## ✅ Future Roadmap / To-Do List

- [ ] **Content Expansion:**  
    -   Flesh out the **About Me** page with more personal details or a "My Philosophy" section.  
    -   Add more detailed descriptions to each **Project Details** page (e.g., "Challenges Faced," "What I Learned").  
    -   Expand the **Education** section with specific noteworthy courses or achievements.  

- [ ] **Visual Polish:**  
    -   Add a visually appealing banner image or graphic to the **About Me** and **Services** pages.  
    -   Incorporate technology logos (React, Node.js, etc.) into the **Services** section.  
    -   Replace the generated placeholder images for projects with high-quality, final screenshots.  

- [ ] **(Top-Notch) Full-Stack Integration:**  
    -   **Build API & Database:** Set up a Node.js/Express server, connect to MongoDB, and build a full CRUD API for projects.  
    -   **Refactor Frontend:** Update the `useProjects` hook and Contact form to communicate with the live API.  
    -   **Implement User Authentication:** Add user registration/login with JWTs and create protected frontend/backend routes.  
    -   **Add AI Chatbot Feature:** Build a backend service to power an interactive chatbot using an LLM.  
    -   **Test & Deploy Backend:** Write tests for the API and deploy the full-stack application to a production cloud platform.  

- [ ] **(Top-Notch) Final Accessibility Audit:**  
    -   Use a tool like Lighthouse to audit for any remaining issues (e.g., color contrast, ARIA roles).  
    -   Implement focus trapping within the mobile navigation menu when it is open.  
