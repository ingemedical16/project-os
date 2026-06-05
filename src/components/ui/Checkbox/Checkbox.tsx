import styles from './Checkbox.module.scss';

import type { CheckboxProps } from './Checkbox.types';

export function Checkbox({
  id,
  label,
  helperText,
  error,
  className = '',
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <div className={styles.field}>
      <label
        htmlFor={checkboxId}
        className={styles.checkboxWrapper}
      >
        <input
          id={checkboxId}
          type="checkbox"
          className={`${styles.checkbox} ${className}`}
          {...props}
        />

        <span className={styles.checkmark} />

        {label ? (
          <span className={styles.label}>{label}</span>
        ) : null}
      </label>

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}