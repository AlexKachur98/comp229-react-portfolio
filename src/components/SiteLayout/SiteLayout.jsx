/**
 * @file SiteLayout.jsx
 * @purpose Provides a shared application shell with a header, footer, and content area.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Wraps routed pages with consistent layout and footer links.
 */
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import styles from './SiteLayout.module.css';

const footerLinks = [
    { href: "https://github.com/AlexKachur98", label: "GitHub" },
    { href: "https://linkedin.com/in/alex-kachur", label: "LinkedIn" },
    { href: "/documents/resume.pdf", label: "Resume" }
];

export default function SiteLayout() {
    return (
        <div className={styles.layout}>
            <header role="banner">
                <Navbar />
            </header>

            <main className={styles.main} role="main">
                <Outlet />
            </main>

            <footer className={styles.footer} role="contentinfo">
                <div className={`container ${styles.footerInner}`}>
                    <small>© {new Date().getFullYear()} Alex Kachur • React & Node.js</small>
                    <div className={styles.footerLinks}>
                        {footerLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
