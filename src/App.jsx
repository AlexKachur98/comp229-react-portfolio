/**
 * @file App.jsx
 * @purpose Top-level routes and layout definition for the application.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Defines all application routes using the folder-per-page structure.
 * Wraps the routes in AnimatePresence for page transition effects.
 */
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout and Page imports using the new folder structure
import SiteLayout from './components/layout/SiteLayout/SiteLayout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Education from './pages/Education/Education.jsx';
import Services from './pages/Services/Services.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default function App() {
  const location = useLocation();

  return (
    // AnimatePresence enables exit animations when components are removed from the React tree.
    // `mode="wait"` ensures the outgoing animation finishes before the new page animates in.
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* The SiteLayout route wraps all pages that share the main header and footer. */}
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          {/* A dynamic route for individual project pages */}
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
          {/* The catch-all route renders the NotFound page for any unmatched URL */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
