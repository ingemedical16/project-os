'use client';

import { useState } from 'react';

import { Radio, RadioGroup } from '@/components/ui';

import styles from './RadioShowcase.module.scss';

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
];

const planOptions = [
  { label: 'Free', value: 'free' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise', disabled: true },
];

export function RadioShowcase() {
  const [singleValue, setSingleValue] = useState('option-one');
  const [role, setRole] = useState('editor');
  const [plan, setPlan] = useState('');

  return (
    <section className={styles.showcase}>
      <h2>Radio Primitive</h2>

      <div className={styles.block}>
        <h3>Single Radio Usage</h3>

        <div className={styles.options}>
          <Radio
            name="single-radio"
            value="option-one"
            label="Option one"
            checked={singleValue === 'option-one'}
            onChange={(event) => setSingleValue(event.target.value)}
          />

          <Radio
            name="single-radio"
            value="option-two"
            label="Option two"
            checked={singleValue === 'option-two'}
            onChange={(event) => setSingleValue(event.target.value)}
          />

          <Radio
            name="single-radio"
            value="option-disabled"
            label="Disabled option"
            disabled
          />
        </div>
      </div>

      <div className={styles.block}>
        <h3>RadioGroup Usage</h3>

        <RadioGroup
          name="role"
          label="User role"
          value={role}
          options={roleOptions}
          onChange={(nextValue) => setRole(nextValue)}
          helperText="Choose one role for this user."
        />
      </div>

      <div className={styles.block}>
        <h3>RadioGroup With Disabled Option</h3>

        <RadioGroup
          name="plan"
          label="Subscription plan"
          value={plan}
          options={planOptions}
          onChange={(nextValue) => setPlan(nextValue)}
          helperText="Enterprise is disabled in this demo."
        />
      </div>

      <div className={styles.block}>
        <h3>Error State</h3>

        <RadioGroup
          name="error-example"
          label="Required choice"
          value=""
          options={roleOptions}
          error="Please select one option."
        />
      </div>

      <div className={styles.block}>
        <h3>Disabled Group</h3>

        <RadioGroup
          name="disabled-group"
          label="Disabled group"
          value="viewer"
          options={roleOptions}
          disabled
        />
      </div>
    </section>
  );
}