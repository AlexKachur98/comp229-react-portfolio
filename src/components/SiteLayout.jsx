/**
 * @file SiteLayout.jsx
 * @purpose Global app layout with header, nav, footer, and theme toggle.
 * @description Wraps all routes using React Router <Outlet>.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { NavLink, Outlet, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

/** Style function for active nav links */
const navStyle = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })

export default function SiteLayout() {
    const { state } = useLocation()

    return (
        <>
            <header className="site-header">
                <div className="brand">
                    <img src="/logo.svg" alt="AK logo" width={36} height={36} />
                    <h1>Alex Kachur — Portfolio</h1>
                </div>

                <nav className="site-nav">
                    <NavLink to="/" style={navStyle} end>Home</NavLink>
                    <NavLink to="/about" style={navStyle}>About</NavLink>
                    <NavLink to="/projects" style={navStyle}>Projects</NavLink>
                    <NavLink to="/education" style={navStyle}>Education</NavLink>
                    <NavLink to="/services" style={navStyle}>Services</NavLink>
                    <NavLink to="/contact" style={navStyle}>Contact</NavLink>
                </nav>

                <ThemeToggle />
            </header>

            {state?.flash && <p className="flash">{state.flash}</p>}

            <main className="site-main">
                <Outlet />
            </main>

            <footer className="site-footer">
                <small>© {new Date().getFullYear()} Alex Kachur</small>
            </footer>
        </>
    )
}
