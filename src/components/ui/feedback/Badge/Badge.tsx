import styles from './Badge.module.scss';

import type { BadgeProps } from './Badge.types';

export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) {
  const classes = [
    styles.badge,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}