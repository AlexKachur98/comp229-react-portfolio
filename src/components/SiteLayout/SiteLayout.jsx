/**
 * @file SiteLayout.jsx
 * @purpose Provides a shared page shell with a header, footer, and content area.
 */
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import styles from './SiteLayout.module.css';

export default function SiteLayout() {
    return (
        <div className={styles.layout}>
            <header>
                <Navbar />
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <div className={`container ${styles.footerInner}`}>
                    <small>© {new Date().getFullYear()} Alex Kachur • React & Node.js</small>
                    <div className={styles.footerLinks}>
                        <a href="https://github.com/AlexKachur98" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
                        <a href="https://linkedin.com/in/alex-kachur" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        <a href="/documents/resume.pdf" target="_blank" rel="noreferrer" aria-label="Download Resume">Resume</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}