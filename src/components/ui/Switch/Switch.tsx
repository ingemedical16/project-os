import styles from './Switch.module.scss';

import type { SwitchProps } from './Switch.types';

export function Switch({
  id,
  label,
  helperText,
  error,
  className = '',
  ...props
}: SwitchProps) {
  const switchId = id ?? props.name;

  return (
    <div className={styles.field}>
      <label
        htmlFor={switchId}
        className={styles.switchWrapper}
      >
        <input
          id={switchId}
          type="checkbox"
          className={`${styles.switch} ${className}`}
          {...props}
        />

        <span className={styles.track}>
          <span className={styles.thumb} />
        </span>

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