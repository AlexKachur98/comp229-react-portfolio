/**
 * @file Home.jsx
 * @purpose Hero/landing page with hierarchy + CTAs
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses Framer Motion for a smooth reveal animation and CSS Modules for styling.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import styles from './Home.module.css';

export default function Home() {
    return (
        <AnimatedPage className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Alex Kachur
                </motion.h1>
                <motion.p
                    className={`lead ${styles.tagline}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Software Engineering Technology @ Centennial • React & Node.js •
                    poker + video games + board games • custom PC builder 💻
                </motion.p>
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/projects" className="btn btn--primary">View Projects</Link>
                    <Link to="/about" className="btn">About Me</Link>
                </motion.div>
            </div>
        </AnimatedPage>
    );
}