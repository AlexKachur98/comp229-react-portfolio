/**
 * @file Home.jsx
 * @purpose Hero landing page with introduction and CTAs. 
 * @autho Alex Kachur
 * @since 2025-09-17
 * @description Uses Framer Motion variants for smooth reveal animation 
 * and CSS Modules for scoped styling.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import styles from './Home.module.css';

const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay }
    })
};

export default function Home() {
    return (
        <AnimatedPage className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <motion.h1
                    className={styles.title}
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    custom={0.2}
                >
                    Alex Kachur
                </motion.h1>

                <motion.p
                    className={`lead ${styles.tagline}`}
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    custom={0.4}
                >
                    Software Engineering Technology Student @ Centennial College <br />
                    Focused on building clean, accessible, and modern web applications with React & Node.js.
                </motion.p>

                <motion.div
                    className={styles.cta}
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    custom={0.6}
                >
                    <Link to="/projects" className="btn btn--primary">View Projects</Link>
                    <Link to="/about" className="btn">Learn More About Me</Link>
                </motion.div>
            </div>
        </AnimatedPage>
    );
}
