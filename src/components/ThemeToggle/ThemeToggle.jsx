/**
 * @file ThemeToggle.jsx
 * @purpose A button to toggle between light and dark color themes.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Manages theme state, persists choice in localStorage, applies the
 * theme to the <body>, and dynamically updates the page's favicon.
 */
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    // Initialize state from localStorage or system preference as a fallback
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );

    // Effect to apply changes whenever the theme state is updated
    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);

        // Dynamically update the favicon to match the theme
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