/**
 * @file App.jsx
 * @purpose Top-level routes and layout definition for the application.
 * @description Defines all application routes, including a shared layout route with 
 * an <Outlet/>, nested page routes, and a 404 fallback.
 * @author Alex Kachur
 * @since 2025-09-17
 */

import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      {/* Routes that share the main layout (header/nav/footer) */}
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* A helpful redirect for users who might type /home */}
      <Route path="home" element={<Navigate to="/" replace />} />

      {/* 404 fallback for any route that doesn't match */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}