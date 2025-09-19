/**
 * @file SiteLayout.jsx
 * @purpose Provides a shared page shell with a header, footer, and content area.
 * @description Implements a sticky footer layout using flexbox. The <Outlet /> 
 * component from React Router renders the active page content.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function SiteLayout() {
    return (
        // This div provides the sticky footer layout
        <div className="app-layout">
            <header>
                <Navbar />
            </header>

            {/* The Outlet renders the current matched route's component */}
            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container footer__inner">
                    <small>© {new Date().getFullYear()} Alex Kachur • React & Node.js</small>
                    <div className="footer__links">
                        <a href="https://github.com/AlexKachur98" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
                        <a href="https://linkedin.com/in/alex-kachur" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Download Resume">Resume</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}