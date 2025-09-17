/** @file App.jsx
 *  @purpose App routes; connects pages to the SiteLayout shell (header/nav/footer).
 *  @author Alex Kachur
 *  @since 2025-09-17
 */
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      {/* Layout route wraps all main pages */}
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Helpful redirect + 404 */}
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
