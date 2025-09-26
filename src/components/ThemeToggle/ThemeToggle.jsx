/**
 * @file ThemeToggle.jsx
 * @purpose A button to toggle between light and dark color themes with favicon updates. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses localStorage persistence and prefers-color-scheme detection. 
 * Updates favicon dynamically to match current theme.
 */
import { useLayoutEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );

    useLayoutEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);

        // Dynamically update favicon
        let link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = `/images/favicon-${theme}.png`;
        }
    }, [theme]);

    return (
        <button
            className="btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
