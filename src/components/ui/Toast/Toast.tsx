import styles from './Toast.module.scss';

import type { ToastProps } from './Toast.types';

export function Toast({
  title,
  children,
  variant = 'info',
  className = '',
  ...props
}: ToastProps) {
  const classes = [
    styles.toast,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role="status"
      {...props}
    >
      {title ? (
        <strong className={styles.title}>
          {title}
        </strong>
      ) : null}

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}