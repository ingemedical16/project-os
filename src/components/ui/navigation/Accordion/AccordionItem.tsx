'use client';

import { useState } from 'react';

import styles from './Accordion.module.scss';

import type { AccordionItemProps } from './Accordion.types';

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] =
    useState(defaultOpen);

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
      >
        <span>{title}</span>

        <span
          className={
            isOpen
              ? styles.iconOpen
              : styles.icon
          }
        >
          +
        </span>
      </button>

      {isOpen ? (
        <div className={styles.content}>
          {children}
        </div>
      ) : null}
    </div>
  );
}