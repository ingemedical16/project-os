'use client';

import { useState } from 'react';

import { Select } from '@/components/ui';

import styles from './SelectShowcase.module.scss';

const themeOptions = [
  { value: '', label: 'Select a theme', disabled: true },
  { value: 'ocean', label: 'Ocean' },
  { value: 'forest', label: 'Forest' },
  { value: 'sunset', label: 'Sunset' },
  { value: 'violet', label: 'Violet' },
  { value: 'slate', label: 'Slate' },
];

const languageOptions = [
  { value: '', label: 'Select a language', disabled: true },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'ar', label: 'العربية' },
  { value: 'ro', label: 'Română' },
];

export function SelectShowcase() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <section className={styles.showcase}>
      <h2>Select Primitive</h2>

      <Select
        label="Theme"
        value={selectedTheme}
        onChange={(event) =>
          setSelectedTheme(event.target.value)
        }
        options={themeOptions}
        helperText="Select supports disabled placeholder options."
      />

      <Select
        label="Language"
        value={selectedLanguage}
        onChange={(event) =>
          setSelectedLanguage(event.target.value)
        }
        options={languageOptions}
      />

      <Select
        label="Error state"
        value=""
        onChange={() => {}}
        options={themeOptions}
        error="Please select a valid option."
      />

      <Select
        label="Disabled state"
        value=""
        options={themeOptions}
        disabled
      />
    </section>
  );
}