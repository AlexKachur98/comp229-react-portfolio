/**
 * @file AnimatedPage.jsx
 * @purpose A reusable wrapper that applies consistent page transition animations. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Uses Framer Motion variants to handle enter/exit transitions across pages. 
 * Accepts children and an optional className for custom section styling.
 */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
};

export default function AnimatedPage({ children, className }) {
    return (
        <motion.section
            className={className || "section"}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.section>
    );
}

AnimatedPage.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
