import styles from './Card.module.scss';

import type { CardProps } from './Card.types';

export function Card({
  children,
  className = '',
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}