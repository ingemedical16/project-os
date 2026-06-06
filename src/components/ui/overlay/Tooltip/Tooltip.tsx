'use client';

import styles from './Tooltip.module.scss';

import type { TooltipProps } from './Tooltip.types';

export function Tooltip({
  content,
  children,
}: TooltipProps) {
  return (
    <span className={styles.wrapper}>
      {children}

      <span className={styles.tooltip}>
        {content}
      </span>
    </span>
  );
}