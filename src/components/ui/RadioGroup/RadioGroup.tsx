import { Radio } from '../Radio';

import styles from './RadioGroup.module.scss';

import type { RadioGroupProps } from './RadioGroup.types';

export function RadioGroup({
  name,
  label,
  options,
  value,
  helperText,
  error,
  disabled = false,
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className={styles.group}>
      {label ? <legend className={styles.legend}>{label}</legend> : null}

      <div className={styles.options}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            disabled={disabled || option.disabled}
            onChange={(event) => onChange?.(option.value, event)}
          />
        ))}
      </div>

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </fieldset>
  );
}