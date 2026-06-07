import clsx from 'clsx';

import type { EmptyStateProps } from './EmptyState.types';

import styles from './EmptyState.module.scss';

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={clsx(styles.emptyState, className)}>
      {icon ? (
        <div className={styles.icon}>{icon}</div>
      ) : null}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {description ? (
          <p className={styles.description}>
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <div className={styles.action}>{action}</div>
      ) : null}
    </div>
  );
}