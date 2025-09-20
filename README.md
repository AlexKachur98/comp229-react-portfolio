# Alex Kachur - React Portfolio (COMP229)

This is my personal portfolio website, built as a project for the COMP229 Web Application Development course at Centennial College. It's a modern, responsive single-page application (SPA) created with React, Vite, and React Router.

**Live Demo:** [`https://comp229-react-portfolio-1d8e.onrender.com`](https://comp229-react-portfolio-1d8e.onrender.com) 

---

## ✨ Features

* **Responsive Design:** Looks great on desktops, tablets, and mobile phones.
* **Light & Dark Mode:** A theme toggle that saves the user's preference in their browser.
* **Dynamic Favicon:** The browser tab icon automatically switches to match the user's theme.
* **Interactive Projects Page:** Features a live text search and tag-based filtering to easily sort through projects.
* **Dynamic Routing:** Each project has its own dedicated details page using React Router.
* **Client-Side Validation:** The contact form provides instant feedback and validation for a smooth user experience.

---

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite, React Router v6
* **Styling:** Plain CSS with a custom variable-based design system
* **Deployment:** Render / Netlify / Vercel

---

## 🚀 Version 2.1 Upgrade Report

### Project Integration
* Uploaded the C# Hangman and Prestige Exotics projects to their own GitHub repositories.
* Update the "GitHub" links on the portfolio to point to these new, live repositories.

### Contact Form Hyperlinks
* Made the email and phone number in the **Contact** page's info panel clickable using `mailto:` and `tel:` hyperlinks.

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

- [ ] **Services Page Expansion:**
    -   Convert each service on the **Services** page into a link (e.g., `/services/web-development`).
    -   Create a unique details page for each service, explaining the process, tools used, and potential outcomes.

- [ ] **(Top-Notch) Connect to a Backend:**
    -   Migrate the static project data from `useProjects.js` to the Node.js/Express/MongoDB API from Week 1 of the course.
    -   Update the `useProjects.js` hook to `fetch` data from the live API.
    -   Make the Contact form submit its data to a backend endpoint.

- [ ] **(Top-Notch) Accessibility Audit:**
    -   Use a tool like the Lighthouse accessibility checker in Chrome DevTools to ensure high color contrast, proper ARIA labels, and keyboard navigability.
