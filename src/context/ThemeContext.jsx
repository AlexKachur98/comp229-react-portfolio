/**
 * @file ThemeContext.jsx
 * @purpose Provide a shared theme context with system-preference sync and persistence. 
 * @author Alex Kachur
 * @since 2025-09-26
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const STORAGE_KEY = 'theme';
const FALLBACK_THEME = 'dark';

const ThemeContext = createContext({
    theme: FALLBACK_THEME,
    setTheme: () => {},
    toggleTheme: () => {}
});

const getStoredTheme = () => {
    if (typeof window === 'undefined') {
        return null;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
};

const getPreferredTheme = () => {
    if (typeof window === 'undefined') {
        return FALLBACK_THEME;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const updateFavicon = (nextTheme) => {
    if (typeof document === 'undefined') {
        return;
    }
    const icons = document.querySelectorAll("link[rel~='icon']");
    icons.forEach((icon) => {
        icon.setAttribute('href', `/images/favicon-${nextTheme}.png`);
    });
};

export function ThemeProvider({ children }) {
    const storedTheme = getStoredTheme();
    const [theme, setThemeState] = useState(storedTheme ?? getPreferredTheme());
    const [userOverride, setUserOverride] = useState(Boolean(storedTheme));

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.dataset.theme = theme;
        }
        if (typeof window !== 'undefined') {
            if (userOverride) {
                window.localStorage.setItem(STORAGE_KEY, theme);
            } else {
                window.localStorage.removeItem(STORAGE_KEY);
            }
        }
        updateFavicon(theme);
    }, [theme, userOverride]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            if (!userOverride) {
                setThemeState(event.matches ? 'dark' : 'light');
            }
        };
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, [userOverride]);

    const setTheme = useCallback((nextTheme, { persist = true } = {}) => {
        setUserOverride(Boolean(persist));
        setThemeState(nextTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        setUserOverride(true);
        setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export function useTheme() {
    return useContext(ThemeContext);
}
