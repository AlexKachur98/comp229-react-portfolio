/**
 * @file Navbar.jsx
 * @purpose Responsive top navigation bar with active link styles and theme toggle button. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Provides navigation links, a mobile hamburger menu with accessibility features,
 * and integrates the ThemeToggle component.
 */
import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle.jsx';
import styles from './Navbar.module.css';

const navClass = ({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const hamburgerRef = useRef(null);

    // Close menu on Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && open) {
                setOpen(false);
                hamburgerRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [open]);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (open && !e.target.closest(`.${styles.nav}`)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <div className={`container ${styles.inner}`}>
                <Link to="/" className={styles.brand} onClick={close} aria-label="Home">
                    <span className={styles.logo} aria-hidden>AK</span>
                    <span className={styles.title}>Alex Kachur</span>
                </Link>

                <button
                    ref={hamburgerRef}
                    className={styles.hamburger}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className={styles.hamburgerBar} />
                    <span className={styles.hamburgerBar} />
                    <span className={styles.hamburgerBar} />
                </button>

                <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
                    <NavLink end to="/" className={navClass} onClick={close}>Home</NavLink>
                    <NavLink to="/about" className={navClass} onClick={close}>About</NavLink>
                    <NavLink to="/education" className={navClass} onClick={close}>Education</NavLink>
                    <NavLink to="/services" className={navClass} onClick={close}>Services</NavLink>
                    <NavLink to="/projects" className={navClass} onClick={close}>Projects</NavLink>
                    <NavLink to="/contact" className={navClass} onClick={close}>Contact</NavLink>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
