'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Switch } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './SwitchShowcase.module.scss';

export function SwitchShowcase() {
  const t = useTranslations(
    'designSystem.components.switch'
  );

  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] =
    useState(true);
  const [marketingEmails, setMarketingEmails] =
    useState(false);
  const [autoSave, setAutoSave] = useState(true);

  const usage = `<Switch
  label="Notifications"
  checked={notifications}
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

        <Switch
          label={t('darkModeLabel')}
          checked={darkMode}
          onChange={(event) =>
            setDarkMode(event.target.checked)
          }
          helperText={t('darkModeHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('settings')}</h3>

        <Switch
          label={t('notificationsLabel')}
          checked={notifications}
          onChange={(event) =>
            setNotifications(event.target.checked)
          }
        />

        <Switch
          label={t('marketingEmailsLabel')}
          checked={marketingEmails}
          onChange={(event) =>
            setMarketingEmails(event.target.checked)
          }
        />

        <Switch
          label={t('autoSaveLabel')}
          checked={autoSave}
          onChange={(event) =>
            setAutoSave(event.target.checked)
          }
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <Switch
          label={t('errorLabel')}
          error={t('errorMessage')}
        />

        <Switch
          label={t('disabledLabel')}
          disabled
        />
      </div>
    </ShowcaseSection>
  );
}