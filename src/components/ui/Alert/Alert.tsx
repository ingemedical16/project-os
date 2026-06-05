import styles from './Alert.module.scss';

import type { AlertProps } from './Alert.types';

export function Alert({
  children,
  title,
  variant = 'info',
  className = '',
  ...props
}: AlertProps) {
  const classes = [
    styles.alert,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="alert" {...props}>
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