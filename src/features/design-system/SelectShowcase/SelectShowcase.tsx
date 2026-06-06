'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Select } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './SelectShowcase.module.scss';

export function SelectShowcase() {
  const t = useTranslations(
    'designSystem.components.select'
  );

  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedLanguage, setSelectedLanguage] =
    useState('');

  const usage = `<Select
  label="Theme"
  value={theme}
  options={options}
  onChange={handleChange}
/>`;

  const themeOptions = [
    {
      value: '',
      label: t('themePlaceholder'),
      disabled: true,
    },
    {
      value: 'ocean',
      label: 'Ocean',
    },
    {
      value: 'forest',
      label: 'Forest',
    },
    {
      value: 'sunset',
      label: 'Sunset',
    },
    {
      value: 'violet',
      label: 'Violet',
    },
    {
      value: 'slate',
      label: 'Slate',
    },
  ];

  const languageOptions = [
    {
      value: '',
      label: t('languagePlaceholder'),
      disabled: true,
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'fr',
      label: 'Français',
    },
    {
      value: 'ar',
      label: 'العربية',
    },
    {
      value: 'ro',
      label: 'Română',
    },
  ];

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
        <h3>{t('basic')}</h3>

        <Select
          label={t('themeLabel')}
          value={selectedTheme}
          onChange={(event) =>
            setSelectedTheme(event.target.value)
          }
          options={themeOptions}
          helperText={t('themeHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('controlled')}</h3>

        <Select
          label={t('languageLabel')}
          value={selectedLanguage}
          onChange={(event) =>
            setSelectedLanguage(event.target.value)
          }
          options={languageOptions}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <Select
          label={t('errorLabel')}
          value=""
          onChange={() => {}}
          options={themeOptions}
          error={t('errorMessage')}
        />

        <Select
          label={t('disabledLabel')}
          value=""
          options={themeOptions}
          disabled
        />
      </div>
    </ShowcaseSection>
  );
}