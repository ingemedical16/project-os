import styles from './Input.module.scss';

import type { InputProps } from './Input.types';

export function Input({
  id,
  label,
  error,
  helperText,
  variant = 'default',
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  const classes = [
    styles.input,
    styles[variant],
    error ? styles.error : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <input id={inputId} className={classes} {...props} />

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}