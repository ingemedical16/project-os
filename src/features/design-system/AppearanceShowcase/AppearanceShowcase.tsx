'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import {
  Badge,
  Button,
  Card,
  Divider,
  Select,
} from '@/components/ui';
import {
  COLOR_MODES,
  THEMES,
} from '@/contexts/theme/theme.types';
import { useTheme } from '@/contexts/theme/useTheme';

import styles from './AppearanceShowcase.module.scss';

const LANGUAGES = [
  { value: 'en', label: 'English', dir: 'ltr' },
  { value: 'fr', label: 'Français', dir: 'ltr' },
  { value: 'ro', label: 'Română', dir: 'ltr' },
  { value: 'ar', label: 'العربية', dir: 'rtl' },
] as const;

export function AppearanceShowcase() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const {
    theme,
    colorMode,
    setTheme,
    setColorMode,
    toggleColorMode,
  } = useTheme();

  const currentLanguage =
    LANGUAGES.find((language) => language.value === locale) ??
    LANGUAGES[0];

  const themeOptions = Object.values(THEMES).map((themeName) => ({
    value: themeName,
    label: themeName,
  }));

  const colorModeOptions = Object.values(COLOR_MODES).map((mode) => ({
    value: mode,
    label: mode,
  }));

  const languageOptions = LANGUAGES.map((language) => ({
    value: language.value,
    label: language.label,
  }));

  function changeLocale(nextLocale: string) {
    const segments = pathname.split('/');

    segments[1] = nextLocale;

    router.push(segments.join('/'));
  }

  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Appearance</h1>

          <p className={styles.description}>
            Control theme, color mode, language, and text direction.
          </p>
        </div>

        <div className={styles.badges}>
          <Badge variant="info">{theme}</Badge>
          <Badge variant="success">{colorMode}</Badge>
          <Badge>{currentLanguage.dir.toUpperCase()}</Badge>
        </div>
      </div>

      <Card className={styles.controls}>
        <Select
          label="Theme"
          value={theme}
          onChange={(event) =>
            setTheme(event.target.value as typeof theme)
          }
          options={themeOptions}
        />

        <Select
          label="Color mode"
          value={colorMode}
          onChange={(event) =>
            setColorMode(event.target.value as typeof colorMode)
          }
          options={colorModeOptions}
        />

        <Select
          label="Language"
          value={locale}
          onChange={(event) => changeLocale(event.target.value)}
          options={languageOptions}
        />

        <Button type="button" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </Card>

      <Card className={styles.preview}>
        <div>
          <h2 className={styles.previewTitle}>
            Preview
          </h2>

          <p className={styles.previewText}>
            Current language: {currentLanguage.label}
          </p>

          <p className={styles.previewText}>
            Direction: {currentLanguage.dir}
          </p>
        </div>

        <Divider />

        <div
          className={styles.rtlPreview}
          dir={currentLanguage.dir}
        >
          <p>
            This area follows the selected language direction.
          </p>

          <Button>Action</Button>
        </div>
      </Card>
    </section>
  );
}