'use client';

import styles from './Drawer.module.scss';

import type { DrawerProps } from './Drawer.types';

export function Drawer({
  isOpen,
  title,
  children,
  position = 'right',
  onClose,
}: DrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside
        className={[
          styles.drawer,
          styles[position],
        ].join(' ')}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          {title ? (
            <h3 className={styles.title}>{title}</h3>
          ) : null}

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close drawer"
          >
            ×
          </button>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </aside>
    </div>
  );
}