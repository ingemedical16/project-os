'use client';

import { COLOR_MODES, THEMES } from '@/contexts/theme/theme.types';
import { useTheme } from '@/contexts/theme/useTheme';

export function ThemeTester() {
  const {
    theme,
    colorMode,
    setTheme,
    setColorMode,
    toggleColorMode,
  } = useTheme();

  return (
    <div>
      <h1>Theme tester</h1>

      <p>Current theme: {theme}</p>
      <p>Current color mode: {colorMode}</p>

      <select
        value={theme}
        onChange={(event) => setTheme(event.target.value as typeof theme)}
      >
        {Object.values(THEMES).map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName}
          </option>
        ))}
      </select>

      <select
        value={colorMode}
        onChange={(event) =>
          setColorMode(event.target.value as typeof colorMode)
        }
      >
        {Object.values(COLOR_MODES).map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>

      <button type="button" onClick={toggleColorMode}>
        Toggle color mode
      </button>

      <div
        style={{
          marginTop: '2rem',
          padding: '2rem',
          background: 'var(--surface)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
        }}
      >
        <h2 style={{ color: 'var(--accent)' }}>Preview card</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          This card uses theme CSS variables.
        </p>
      </div>
    </div>
  );
}