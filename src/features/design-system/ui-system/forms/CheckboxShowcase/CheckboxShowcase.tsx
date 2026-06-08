'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Checkbox } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './CheckboxShowcase.module.scss';

export function CheckboxShowcase() {
  const t = useTranslations(
    'designSystem.components.checkbox'
  );

  const [accepted, setAccepted] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  const usage = `<Checkbox
  label="Accept terms"
  checked={accepted}
  onChange={handleChange}
/>`;

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

        <Checkbox
          label={t('termsLabel')}
          checked={accepted}
          onChange={(event) =>
            setAccepted(event.target.checked)
          }
          helperText={t('termsHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('controlled')}</h3>

        <Checkbox
          label={t('newsletterLabel')}
          checked={newsletter}
          onChange={(event) =>
            setNewsletter(event.target.checked)
          }
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <Checkbox
          label={t('errorLabel')}
          error={t('errorMessage')}
        />

        <Checkbox
          label={t('disabledLabel')}
          disabled
        />
      </div>
    </ShowcaseSection>
  );
}