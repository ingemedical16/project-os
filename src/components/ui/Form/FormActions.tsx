import styles from './Form.module.scss';

import type { FormActionsProps } from './Form.types';

export function FormActions({
  children,
  className = '',
  ...props
}: FormActionsProps) {
  const classes = [
    styles.actions,
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