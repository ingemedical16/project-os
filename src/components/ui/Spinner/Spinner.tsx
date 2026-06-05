import styles from './Spinner.module.scss';

import type { SpinnerProps } from './Spinner.types';

export function Spinner({
  size = 'md',
  label,
  className = '',
  ...props
}: SpinnerProps) {
  const classes = [
    styles.spinner,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={styles.wrapper}
      role="status"
      aria-live="polite"
      {...props}
    >
      <div className={classes} />

      {label ? (
        <span className={styles.label}>
          {label}
        </span>
      ) : null}
    </div>
  );
}