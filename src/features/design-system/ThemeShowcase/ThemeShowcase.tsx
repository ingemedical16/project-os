'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { useTheme } from '@/contexts/theme/useTheme';

import styles from './ThemeShowcase.module.scss';

const THEMES = ['ocean', 'forest', 'sunset', 'violet', 'slate'] as const;

export function ThemeShowcase() {
  const t = useTranslations('dashboard.overview');

  const { theme, colorMode, setTheme, toggleColorMode } = useTheme();

  return (
    <section className={styles.showcase}>
      <h1>{t('title')}</h1>

      <p>
        {t('theme')}: <strong>{theme}</strong>
      </p>

      <p>
        {t('mode')}: <strong>{colorMode}</strong>
      </p>

      <div className={styles.actions}>
        {THEMES.map((themeName) => (
          <Button
            key={themeName}
            variant={themeName === theme ? 'secondary' : 'primary'}
            onClick={() => setTheme(themeName)}
          >
            {themeName}
          </Button>
        ))}

        <Button variant="secondary" onClick={toggleColorMode}>
          {t('toggleMode')}
        </Button>
      </div>
    </section>
  );
}