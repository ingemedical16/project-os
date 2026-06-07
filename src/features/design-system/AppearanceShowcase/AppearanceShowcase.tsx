'use client';

import { useLocale, useTranslations } from 'next-intl';
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

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './AppearanceShowcase.module.scss';

const LANGUAGES = [
  { value: 'en', label: 'English', dir: 'ltr' },
  { value: 'fr', label: 'Français', dir: 'ltr' },
  { value: 'ro', label: 'Română', dir: 'ltr' },
  { value: 'ar', label: 'العربية', dir: 'rtl' },
] as const;

export function AppearanceShowcase() {
  const t = useTranslations(
    'designSystem.components.appearance'
  );

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

  const usage = `<Select
  label="Theme"
  value={theme}
  options={themeOptions}
/>`;

  function changeLocale(nextLocale: string) {
    const segments = pathname.split('/');

    segments[1] = nextLocale;

    router.push(segments.join('/'));
  }

  return (
    <ShowcaseSection
      title={t('title')}
      description={t('description')}
      usageTitle={t('usage')}
      previewTitle={t('preview')}
      usage={
        <pre className={styles.code}>
          <code>{usage}</code>
        </pre>
      }
    >
      <div className={styles.section}>
        <h3>{t('settings')}</h3>

        <Card className={styles.controls}>
          <Select
            label={t('theme')}
            value={theme}
            onChange={(event) =>
              setTheme(event.target.value as typeof theme)
            }
            options={themeOptions}
          />

          <Select
            label={t('colorMode')}
            value={colorMode}
            onChange={(event) =>
              setColorMode(event.target.value as typeof colorMode)
            }
            options={colorModeOptions}
          />

          <Select
            label={t('language')}
            value={locale}
            onChange={(event) => changeLocale(event.target.value)}
            options={languageOptions}
          />

          <Button type="button" onClick={toggleColorMode}>
            {t('toggleColorMode')}
          </Button>
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('currentState')}</h3>

        <div className={styles.badges}>
          <Badge variant="info">{theme}</Badge>
          <Badge variant="success">{colorMode}</Badge>
          <Badge>{currentLanguage.dir.toUpperCase()}</Badge>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('directionPreview')}</h3>

        <Card className={styles.preview}>
          <div>
            <h4 className={styles.previewTitle}>
              {t('previewTitle')}
            </h4>

            <p className={styles.previewText}>
              {t('currentLanguage')}: {currentLanguage.label}
            </p>

            <p className={styles.previewText}>
              {t('direction')}: {currentLanguage.dir}
            </p>
          </div>

          <Divider />

          <div
            className={styles.rtlPreview}
            dir={currentLanguage.dir}
          >
            <p>{t('directionText')}</p>

            <Button>{t('action')}</Button>
          </div>
        </Card>
      </div>
    </ShowcaseSection>
  );
}