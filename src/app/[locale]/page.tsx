'use client';

import { useTranslations } from 'next-intl';

import styles from './page.module.scss';

import { Button } from '@/components/ui';
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
          <Button
            variant="primary"
            onClick={() => setTheme('ocean')}
          >
            Ocean
          </Button>

          <Button
            variant="primary"
            onClick={() => setTheme('forest')}
          >
            Forest
          </Button>

          <Button
            variant="primary"
            onClick={() => setTheme('sunset')}
          >
            Sunset
          </Button>

          <Button
            variant="primary"
            onClick={() => setTheme('violet')}
          >
            Violet
          </Button>

          <Button
            variant="primary"
            onClick={() => setTheme('slate')}
          >
            Slate
          </Button>

          <Button
            variant="secondary"
            onClick={toggleColorMode}
          >
            {t('toggleMode')}
          </Button>
        </div>

        <hr />

        <h2>Button Variants</h2>

        <div className={styles.buttons}>
          <Button variant="primary">Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="ghost">Ghost</Button>
        </div>

        <h2>Button Sizes</h2>

        <div className={styles.buttons}>
          <Button size="sm">Small</Button>

          <Button size="md">Medium</Button>

          <Button size="lg">Large</Button>
        </div>

        <h2>Full Width</h2>

        <Button fullWidth>
          Full Width Button
        </Button>

        <h2>Disabled</h2>

        <div className={styles.buttons}>
          <Button disabled>Disabled</Button>

          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
        </div>
      </div>
    </main>
  );
}