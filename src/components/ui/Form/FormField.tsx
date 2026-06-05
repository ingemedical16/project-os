import styles from './Form.module.scss';

import type { FormFieldProps } from './Form.types';

export function FormField({
  children,
  className = '',
  ...props
}: FormFieldProps) {
  const classes = [
    styles.field,
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