/**
 * @file Navbar.jsx
 * @purpose Responsive top navigation with active link styles + theme toggle.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses NavLink for active styles, a button for the hamburger menu,
 * and state hooks to toggle visibility and manage focus on mobile.
 */
import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import styles from './Navbar.module.css';

const navClass = ({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const hamburgerRef = useRef(null);

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

    const close = () => setOpen(false);

    return (
        <nav className={styles.nav}>
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
                    {/* These two links were missing and have been added back */}
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