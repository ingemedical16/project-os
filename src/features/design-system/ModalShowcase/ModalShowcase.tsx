'use client';

import { useState } from 'react';

import {
  Button,
  Modal,
} from '@/components/ui';

import styles from './ModalShowcase.module.scss';

export function ModalShowcase() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <section className={styles.showcase}>
      <h2>Modal Primitive</h2>

      <Button
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        title="Project OS Modal"
        onClose={() => setIsOpen(false)}
      >
        <p>
          This is a reusable modal component.
        </p>

        <Button
          onClick={() => setIsOpen(false)}
        >
          Close Modal
        </Button>
      </Modal>
    </section>
  );
}