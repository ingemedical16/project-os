'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Radio,
  RadioGroup,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './RadioShowcase.module.scss';

export function RadioShowcase() {
  const t = useTranslations(
    'designSystem.components.radio'
  );

  const [singleValue, setSingleValue] = useState('optionOne');
  const [role, setRole] = useState('editor');
  const [plan, setPlan] = useState('');

  const usage = `<RadioGroup
  name="role"
  label="User role"
  value={role}
  options={options}
  onChange={setRole}
/>`;

  const singleOptions = [
    {
      value: 'optionOne',
      label: t('optionOne'),
    },
    {
      value: 'optionTwo',
      label: t('optionTwo'),
    },
  ];

  const roleOptions = [
    {
      label: t('admin'),
      value: 'admin',
    },
    {
      label: t('editor'),
      value: 'editor',
    },
    {
      label: t('viewer'),
      value: 'viewer',
    },
  ];

  const planOptions = [
    {
      label: t('free'),
      value: 'free',
    },
    {
      label: t('pro'),
      value: 'pro',
    },
    {
      label: t('enterprise'),
      value: 'enterprise',
      disabled: true,
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
        <h3>{t('singleRadio')}</h3>

        <div className={styles.options}>
          {singleOptions.map((option) => (
            <Radio
              key={option.value}
              name="single-radio"
              value={option.value}
              label={option.label}
              checked={singleValue === option.value}
              onChange={(event) =>
                setSingleValue(event.target.value)
              }
            />
          ))}

          <Radio
            name="single-radio"
            value="disabled"
            label={t('disabledOption')}
            disabled
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('radioGroup')}</h3>

        <RadioGroup
          name="role"
          label={t('roleLabel')}
          value={role}
          options={roleOptions}
          onChange={(nextValue) => setRole(nextValue)}
          helperText={t('roleHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('disabledOptionTitle')}</h3>

        <RadioGroup
          name="plan"
          label={t('planLabel')}
          value={plan}
          options={planOptions}
          onChange={(nextValue) => setPlan(nextValue)}
          helperText={t('planHelper')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <RadioGroup
          name="error-example"
          label={t('errorLabel')}
          value=""
          options={roleOptions}
          error={t('errorMessage')}
        />

        <RadioGroup
          name="disabled-group"
          label={t('disabledGroupLabel')}
          value="viewer"
          options={roleOptions}
          disabled
        />
      </div>
    </ShowcaseSection>
  );
}