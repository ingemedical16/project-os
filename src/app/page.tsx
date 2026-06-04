'use client';

import styles from './page.module.scss';

import { useTheme } from '@/contexts/theme/useTheme';

export default function HomePage() {
  const {
    theme,
    colorMode,
    setTheme,
    toggleColorMode,
  } = useTheme();

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Project OS Theme Test</h1>

        <p className={styles.text}>
          Theme: <strong>{theme}</strong>
        </p>

        <p className={styles.text}>
          Mode: <strong>{colorMode}</strong>
        </p>

        <div className={styles.buttons}>
          <button onClick={() => setTheme('ocean')}>
            Ocean
          </button>

          <button onClick={() => setTheme('forest')}>
            Forest
          </button>

          <button onClick={() => setTheme('sunset')}>
            Sunset
          </button>

          <button onClick={() => setTheme('violet')}>
            Violet
          </button>

          <button onClick={() => setTheme('slate')}>
            Slate
          </button>

          <button onClick={toggleColorMode}>
            Toggle Mode
          </button>
        </div>
      </div>
    </main>
  );
}