'use client';

import { useState } from 'react';

import { Button, Textarea } from '@/components/ui';

import styles from './TextareaShowcase.module.scss';

export function TextareaShowcase() {
  const [message, setMessage] = useState('');

  return (
    <section className={styles.showcase}>
      <h2>Textarea Primitive</h2>

      <Textarea
        label="Message"
        placeholder="Write your message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        helperText="Textarea supports multiline content."
      />

      <Textarea
        label="Error state"
        placeholder="Write something..."
        error="This textarea contains an error."
      />

      <Textarea
        label="Disabled state"
        placeholder="Disabled textarea"
        disabled
      />

      <Button>Submit message</Button>
    </section>
  );
}