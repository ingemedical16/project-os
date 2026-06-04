'use client';

import {
  ReactNode,
  useEffect,
  useMemo,
} from 'react';

import { useLocalStorage } from '@/hooks/ui';

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
  const [theme, setTheme] =
    useLocalStorage<Theme>(
      THEME_STORAGE_KEY,
      defaultTheme,
    );

  const [colorMode, setColorMode] =
    useLocalStorage<ColorMode>(
      COLOR_MODE_STORAGE_KEY,
      defaultColorMode,
    );

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-color-mode',
      colorMode,
    );
  }, [colorMode]);

  const toggleColorMode = (): void => {
    setColorMode(
      colorMode === COLOR_MODES.DARK
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