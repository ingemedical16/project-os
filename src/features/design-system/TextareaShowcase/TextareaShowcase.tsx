'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Button,
  Textarea,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './TextareaShowcase.module.scss';

export function TextareaShowcase() {
  const t = useTranslations(
    'designSystem.components.textarea'
  );

  const [message, setMessage] = useState('');

  const usage = `<Textarea
  label="Message"
  placeholder="Write your message..."
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

        <Textarea
          label={t('messageLabel')}
          placeholder={t('messagePlaceholder')}
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          helperText={t('messageHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <Textarea
          label={t('errorLabel')}
          placeholder={t('errorPlaceholder')}
          error={t('errorMessage')}
        />

        <Textarea
          label={t('disabledLabel')}
          placeholder={t('disabledPlaceholder')}
          disabled
        />
      </div>

      <Button>{t('submit')}</Button>
    </ShowcaseSection>
  );
}