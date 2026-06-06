'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Button,
  Input,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './InputShowcase.module.scss';

export function InputShowcase() {
  const t = useTranslations(
    'designSystem.components.input'
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const usage = `<Input
  label="Email"
  type="email"
  placeholder="john@example.com"
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

        <Input
          label={t('nameLabel')}
          placeholder={t('namePlaceholder')}
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          helperText={t('nameHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('types')}</h3>

        <Input
          label={t('emailLabel')}
          type="email"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <Input
          label={t('errorLabel')}
          placeholder={t('errorPlaceholder')}
          error={t('errorMessage')}
        />

        <Input
          label={t('disabledLabel')}
          placeholder={t('disabledPlaceholder')}
          disabled
        />
      </div>

      <Button>{t('submit')}</Button>
    </ShowcaseSection>
  );
}