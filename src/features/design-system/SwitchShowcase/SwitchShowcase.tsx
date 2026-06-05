'use client';

import { useState } from 'react';

import { Switch } from '@/components/ui';

import styles from './SwitchShowcase.module.scss';

export function SwitchShowcase() {
  const [darkMode, setDarkMode] = useState(true);

  const [notifications, setNotifications] =
    useState(true);

  const [marketingEmails, setMarketingEmails] =
    useState(false);

  const [autoSave, setAutoSave] = useState(true);

  return (
    <section className={styles.showcase}>
      <h2>Switch Primitive</h2>

      <Switch
        label="Dark Mode"
        checked={darkMode}
        onChange={(event) =>
          setDarkMode(event.target.checked)
        }
        helperText="Toggle application theme."
      />

      <Switch
        label="Notifications"
        checked={notifications}
        onChange={(event) =>
          setNotifications(event.target.checked)
        }
      />

      <Switch
        label="Marketing Emails"
        checked={marketingEmails}
        onChange={(event) =>
          setMarketingEmails(event.target.checked)
        }
      />

      <Switch
        label="Auto Save"
        checked={autoSave}
        onChange={(event) =>
          setAutoSave(event.target.checked)
        }
      />

      <Switch
        label="Error State"
        error="This setting is required."
      />

      <Switch
        label="Disabled State"
        disabled
      />
    </section>
  );
}