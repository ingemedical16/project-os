'use client';

import {
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ThemeContext } from './ThemeContext';
import {
  COLOR_MODES,
  ColorMode,
  DEFAULT_COLOR_MODE,
  DEFAULT_THEME,
  Theme,
} from './theme.types';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  defaultColorMode?: ColorMode;
}

const THEME_STORAGE_KEY = 'project-os-theme';
const COLOR_MODE_STORAGE_KEY = 'project-os-color-mode';

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  defaultColorMode = DEFAULT_COLOR_MODE,
}: ThemeProviderProps): ReactNode {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const [colorMode, setColorMode] =
    useState<ColorMode>(defaultColorMode);

  useEffect(() => {
    const storedTheme = localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as Theme | null;

    const storedColorMode = localStorage.getItem(
      COLOR_MODE_STORAGE_KEY,
    ) as ColorMode | null;

    if (storedTheme) {
      setTheme(storedTheme);
    }

    if (storedColorMode) {
      setColorMode(storedColorMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-color-mode',
      colorMode,
    );

    localStorage.setItem(
      COLOR_MODE_STORAGE_KEY,
      colorMode,
    );
  }, [colorMode]);

  const toggleColorMode = (): void => {
    setColorMode((currentColorMode) =>
      currentColorMode === COLOR_MODES.DARK
        ? COLOR_MODES.LIGHT
        : COLOR_MODES.DARK,
    );
  };

  const value = useMemo(
    () => ({
      theme,
      colorMode,
      setTheme,
      setColorMode,
      toggleColorMode,
    }),
    [theme, colorMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}