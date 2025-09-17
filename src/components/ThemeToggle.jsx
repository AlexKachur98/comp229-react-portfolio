/**
 * @file ThemeToggle.jsx
 * @purpose Provides a button to switch between light and dark themes.
 * @description Saves theme choice in localStorage and applies it to body.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.body.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button className="btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    )
}
