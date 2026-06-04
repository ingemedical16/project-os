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

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  defaultColorMode = DEFAULT_COLOR_MODE,
}: ThemeProviderProps): ReactNode {
  const [theme, setTheme] =
    useState<Theme>(defaultTheme);

  const [colorMode, setColorMode] =
    useState<ColorMode>(defaultColorMode);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );

    document.documentElement.setAttribute(
      'data-color-mode',
      colorMode,
    );
  }, [theme, colorMode]);

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