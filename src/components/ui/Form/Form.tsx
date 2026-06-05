import styles from './Form.module.scss';

import type { FormProps } from './Form.types';

export function Form({
  children,
  className = '',
  ...props
}: FormProps) {
  const classes = [
    styles.form,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
}