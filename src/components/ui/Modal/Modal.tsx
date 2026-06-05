'use client';

import styles from './Modal.module.scss';

import type { ModalProps } from './Modal.types';

export function Modal({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className={styles.header}>
          {title ? (
            <h3 className={styles.title}>
              {title}
            </h3>
          ) : null}

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}