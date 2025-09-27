/**
 * @file ThemeToggle.jsx
 * @purpose A button to toggle between light and dark color themes with favicon updates. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Consumes ThemeContext so the provider can handle persistence, 
 * system-preference sync, and favicon updates.
 */
import { useTheme } from '../../../context/ThemeContext.jsx';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
