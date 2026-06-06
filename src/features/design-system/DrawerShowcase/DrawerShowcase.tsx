'use client';

import { useState } from 'react';

import {
  Button,
  Drawer,
  Divider,
} from '@/components/ui';

import styles from './DrawerShowcase.module.scss';

export function DrawerShowcase() {
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <section className={styles.showcase}>
      <h2>Drawer Primitive</h2>

      <div className={styles.actions}>
        <Button onClick={() => setRightOpen(true)}>
          Open Right Drawer
        </Button>

        <Button
          variant="secondary"
          onClick={() => setLeftOpen(true)}
        >
          Open Left Drawer
        </Button>
      </div>

      <Drawer
        isOpen={rightOpen}
        title="Right Drawer"
        onClose={() => setRightOpen(false)}
      >
        <p>
          This drawer is useful for filters,
          settings, and details panels.
        </p>

        <Divider />

        <Button onClick={() => setRightOpen(false)}>
          Close
        </Button>
      </Drawer>

      <Drawer
        isOpen={leftOpen}
        title="Left Drawer"
        position="left"
        onClose={() => setLeftOpen(false)}
      >
        <p>
          This drawer can be used for mobile
          navigation or side menus.
        </p>

        <Divider />

        <Button onClick={() => setLeftOpen(false)}>
          Close
        </Button>
      </Drawer>
    </section>
  );
}