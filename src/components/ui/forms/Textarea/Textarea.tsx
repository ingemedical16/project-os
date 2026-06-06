import styles from './Textarea.module.scss';

import type { TextareaProps } from './Textarea.types';

export function Textarea({
  id,
  label,
  error,
  helperText,
  className = '',
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  const classes = [
    styles.textarea,
    error ? styles.error : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
        </label>
      ) : null}

      <textarea id={textareaId} className={classes} {...props} />

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}