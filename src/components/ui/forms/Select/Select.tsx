import styles from './Select.module.scss';

import type { SelectProps } from './Select.types';

export function Select({
  id,
  label,
  error,
  helperText,
  options,
  className = '',
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  const classes = [
    styles.select,
    error ? styles.error : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      ) : null}

      <select id={selectId} className={classes} {...props}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}