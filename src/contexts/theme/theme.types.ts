export const THEMES = {
  DEFAULT: 'default',
  OCEAN: 'ocean',
  FOREST: 'forest',
  SUNSET: 'sunset',
  VIOLET: 'violet',
  SLATE: 'slate',
} as const;

export const COLOR_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export type ColorMode =
  (typeof COLOR_MODES)[keyof typeof COLOR_MODES];

export interface ThemeContextType {
  theme: Theme;
  colorMode: ColorMode;
  setTheme: (theme: Theme) => void;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export const DEFAULT_THEME: Theme = THEMES.DEFAULT;

export const DEFAULT_COLOR_MODE: ColorMode =
  COLOR_MODES.LIGHT;