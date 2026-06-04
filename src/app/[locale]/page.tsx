'use client';

import { useTranslations } from 'next-intl';

import styles from './page.module.scss';

import { useTheme } from '@/contexts/theme/useTheme';

export default function HomePage() {
  const t = useTranslations('dashboard.overview');

  const { theme, colorMode, setTheme, toggleColorMode } = useTheme();

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>{t('title')}</h1>

        <p className={styles.text}>
          {t('theme')}: <strong>{theme}</strong>
        </p>

        <p className={styles.text}>
          {t('mode')}: <strong>{colorMode}</strong>
        </p>

        <div className={styles.buttons}>
          <button onClick={() => setTheme('ocean')}>Ocean</button>
          <button onClick={() => setTheme('forest')}>Forest</button>
          <button onClick={() => setTheme('sunset')}>Sunset</button>
          <button onClick={() => setTheme('violet')}>Violet</button>
          <button onClick={() => setTheme('slate')}>Slate</button>

          <button onClick={toggleColorMode}>{t('toggleMode')}</button>
        </div>
      </div>
    </main>
  );
}