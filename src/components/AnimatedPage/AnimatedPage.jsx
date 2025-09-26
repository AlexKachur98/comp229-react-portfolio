/**
 * @file AnimatedPage.jsx
 * @purpose A reusable layout component that wraps pages with a consistent transition animation.
 * @author Alex Kachur
 * @since 2025-09-26
 * @description This component uses Framer Motion to apply a standard fade-in/fade-out
 * animation to any child components passed to it. It accepts an optional className
 * prop to allow pages to customize the root section element.
 */
import { motion } from 'framer-motion';

// This component accepts `children` (the page content) and an optional `className`.
export default function AnimatedPage({ children, className }) {
    return (
        <motion.section
            // Defaults to the global .section class but can be overridden by pages like Home.
            className={className || "section"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.section>
    );
}