/**
 * @file Navbar.jsx
 * @purpose Responsive top navigation with active link styles + theme toggle
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses NavLink for active styles, a button for the hamburger menu,
 * and a state hook to toggle visibility on mobile.
 */
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

/** Builds link class based on active route */
const navClass = ({ isActive }) =>
    `nav__link ${isActive ? 'nav__link--active' : ''}`

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    return (
        <nav className="nav">
            <div className="container nav__inner">
                {/* Brand */}
                <Link to="/" className="nav__brand" onClick={close} aria-label="Home">
                    <span className="nav__logo" aria-hidden>AK</span>
                    <span className="nav__title">Alex Kachur</span>
                </Link>

                {/* Hamburger (mobile) */}
                <button
                    className="nav__hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="nav__hamburger-bar" />
                    <span className="nav__hamburger-bar" />
                    <span className="nav__hamburger-bar" />
                </button>

                {/* Links */}
                <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
                    <NavLink end to="/" className={navClass} onClick={close}>Home</NavLink>
                    <NavLink to="/about" className={navClass} onClick={close}>About</NavLink>
                    <NavLink to="/education" className={navClass} onClick={close}>Education</NavLink>
                    <NavLink to="/services" className={navClass} onClick={close}>Services</NavLink>
                    <NavLink to="/projects" className={navClass} onClick={close}>Projects</NavLink>
                    <NavLink to="/contact" className={navClass} onClick={close}>Contact</NavLink>
                    {/* Theme toggle kept inside nav on desktop */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
