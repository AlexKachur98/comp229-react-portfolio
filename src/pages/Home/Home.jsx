/**
 * @file Home.jsx
 * @purpose Hero landing page with clean staggered reveal animation. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Uses Framer Motion variants for container + child elements 
 * so name, subtitle, tagline, and CTAs animate in sequence.
 */
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import styles from './Home.module.css';

// 🔹 Container: stagger children
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        }
    }
};

// 🔹 Child elements: slide up + fade in
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// 🔹 Rotating professional + personal taglines
const taglines = [
    "Building elegant solutions with React & Node.js",
    "Turning ideas into scalable web applications",
    "From gaming passion to full-stack development",
    "Obsessed with learning, coding, and solving problems",
    "Custom PC builder • Competitive thinker • Team leader"
];

export default function Home() {
    const [index, setIndex] = useState(0);

    // Cycle through taglines every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedPage className={styles.hero}>
            <motion.div
                className={`container ${styles.content}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.h1 className={styles.title} variants={itemVariants}>
                    Alex Kachur
                </motion.h1>

                <motion.p className={`lead ${styles.subtitle}`} variants={itemVariants}>
                    Software Engineering Technology Student @ Centennial College
                </motion.p>

                {/* Rotating animated tagline */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        className={`lead ${styles.tagline}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6 }}
                    >
                        {taglines[index]}
                    </motion.p>
                </AnimatePresence>

                {/* Call-to-actions */}
                <motion.div className={styles.cta} variants={itemVariants}>
                    <Link to="/services" className="btn btn--primary">View Services</Link>
                    <Link to="/about" className="btn">About Me</Link>
                </motion.div>
            </motion.div>
        </AnimatedPage>
    );
}
