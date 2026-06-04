'use client';

import { useState } from 'react';

import { Button, Input } from '@/components/ui';

import styles from './InputShowcase.module.scss';

export function InputShowcase() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className={styles.showcase}>
      <h2>Input Primitive</h2>

      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        helperText="This input uses helper text."
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        label="Error state"
        placeholder="Invalid value"
        error="This field contains an error."
      />

      <Input
        label="Disabled state"
        placeholder="Disabled input"
        disabled
      />

      <Button>Submit</Button>
    </section>
  );
}