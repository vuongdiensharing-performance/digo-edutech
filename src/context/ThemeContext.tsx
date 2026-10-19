import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

const THEME_STORAGE_KEY = 'digo-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // Ignore localStorage read errors
    }
    return 'light';
  });

  const applyThemeToDOM = (activeTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', activeTheme);
    body.setAttribute('data-theme', activeTheme);

    if (activeTheme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }

    // Update meta theme-color for browser chrome/navigation
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', activeTheme === 'dark' ? '#070707' : '#ffffff');
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignore localStorage write errors
    }
    applyThemeToDOM(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    applyThemeToDOM(theme);

    // Sync with OS theme changes if user has not stored an explicit choice
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleOSThemeChange = (e: MediaQueryListEvent) => {
      try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (!saved) {
          const systemTheme: Theme = e.matches ? 'dark' : 'light';
          setThemeState(systemTheme);
          applyThemeToDOM(systemTheme);
        }
      } catch {
        // Ignore
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleOSThemeChange);
      return () => mediaQuery.removeEventListener('change', handleOSThemeChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
