'use client';

import { useState } from 'react';

import { Checkbox } from '@/components/ui';

import styles from './CheckboxShowcase.module.scss';

export function CheckboxShowcase() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className={styles.showcase}>
      <h2>Checkbox Primitive</h2>

      <Checkbox
        label="Accept terms and conditions"
        checked={accepted}
        onChange={(event) =>
          setAccepted(event.target.checked)
        }
        helperText="Required before submitting."
      />

      <Checkbox
        label="Error state"
        error="You must accept terms."
      />

      <Checkbox
        label="Disabled state"
        disabled
      />
    </section>
  );
}