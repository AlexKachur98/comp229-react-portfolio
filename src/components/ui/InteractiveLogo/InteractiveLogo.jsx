/**
 * @file InteractiveLogo.jsx
 * @purpose Interactive "AK" logo that acts as a draggable companion. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Users can drag the logo around the viewport. It bounces on 
 * window edges, pulses subtly when idle, and glows to hint interactivity. 
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import styles from './InteractiveLogo.module.css';

const EDGE_PADDING = 24;
const DEFAULT_SIZE = 140; // fallback size used in styles

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const computePreferredPosition = ({ width = DEFAULT_SIZE, height = DEFAULT_SIZE, maxX, maxY }) => {
    if (typeof window === 'undefined') {
        return { x: EDGE_PADDING, y: EDGE_PADDING };
    }

    const fallbackMaxX = Math.max(window.innerWidth - width - EDGE_PADDING, EDGE_PADDING);
    const fallbackMaxY = Math.max(window.innerHeight - height - EDGE_PADDING, EDGE_PADDING);
    const effectiveMaxX = typeof maxX === 'number' ? maxX : fallbackMaxX;
    const effectiveMaxY = typeof maxY === 'number' ? maxY : fallbackMaxY;

    const centeredX = (window.innerWidth - width) / 2;
    const lowerBandCenter = window.innerHeight * 0.68 - height / 2;
    const heroFocusY = clamp(lowerBandCenter, EDGE_PADDING, effectiveMaxY);

    return {
        x: clamp(centeredX, EDGE_PADDING, effectiveMaxX),
        y: clamp(heroFocusY, EDGE_PADDING, effectiveMaxY)
    };
};

export default function InteractiveLogo() {
    const initialPosition = computePreferredPosition({});

    const x = useMotionValue(initialPosition.x);
    const y = useMotionValue(initialPosition.y);
    const logoRef = useRef(null);
    const initializedRef = useRef(false);
    const [bounds, setBounds] = useState({
        minX: EDGE_PADDING,
        minY: EDGE_PADDING,
        maxX: EDGE_PADDING,
        maxY: EDGE_PADDING,
        width: DEFAULT_SIZE,
        height: DEFAULT_SIZE
    });
    const { minX, minY, maxX, maxY, width, height } = bounds;

    useEffect(() => {
        const updateBounds = () => {
            const rect = logoRef.current?.getBoundingClientRect();
            const width = rect?.width ?? DEFAULT_SIZE;
            const height = rect?.height ?? DEFAULT_SIZE;

            const maxX = Math.max(window.innerWidth - width - EDGE_PADDING, EDGE_PADDING);
            const maxY = Math.max(window.innerHeight - height - EDGE_PADDING, EDGE_PADDING);

            setBounds({
                minX: EDGE_PADDING,
                minY: EDGE_PADDING,
                maxX,
                maxY,
                width,
                height
            });
        };

        updateBounds();
        window.addEventListener('resize', updateBounds);
        return () => window.removeEventListener('resize', updateBounds);
    }, []);

    useLayoutEffect(() => {
        if (!initializedRef.current) {
            if (maxX === EDGE_PADDING && maxY === EDGE_PADDING) {
                return;
            }
            const preferred = computePreferredPosition({ width, height, maxX, maxY });
            x.set(preferred.x);
            y.set(preferred.y);
            initializedRef.current = true;
            return;
        }

        x.set(clamp(x.get(), minX, maxX));
        y.set(clamp(y.get(), minY, maxY));
    }, [minX, minY, maxX, maxY, width, height, x, y]);

    useEffect(() => {
        const unsubX = x.on('change', (latest) => {
            if (latest < minX || latest > maxX) {
                x.set(clamp(latest, minX, maxX));
            }
        });

        const unsubY = y.on('change', (latest) => {
            if (latest < minY || latest > maxY) {
                y.set(clamp(latest, minY, maxY));
            }
        });

        return () => {
            unsubX();
            unsubY();
        };
    }, [x, y, minX, minY, maxX, maxY]);

    const handleDragEnd = (_, info) => {
        const damping = 0.18;

        const projectedX = x.get() + info.velocity.x * damping;
        const projectedY = y.get() + info.velocity.y * damping;
        const targetX = clamp(projectedX, minX, maxX);
        const targetY = clamp(projectedY, minY, maxY);

        animate(x, targetX, { type: 'spring', stiffness: 280, damping: 30 });
        animate(y, targetY, { type: 'spring', stiffness: 280, damping: 30 });
    };

    return (
        <motion.div
            ref={logoRef}
            className={styles.logo}
            drag
            dragMomentum={false}
            style={{ x, y }}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.15, boxShadow: '0 0 20px var(--brand)' }}
            whileTap={{ scale: 0.95 }}
        >
            AK
        </motion.div>
    );
}
