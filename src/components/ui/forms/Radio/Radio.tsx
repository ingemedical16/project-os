import styles from './Radio.module.scss';

import type { RadioProps } from './Radio.types';

export function Radio({
  id,
  label,
  className = '',
  ...props
}: RadioProps) {
  const radioId = id ?? `${props.name}-${props.value}`;

  return (
    <label className={styles.wrapper} htmlFor={radioId}>
      <input
        id={radioId}
        type="radio"
        className={`${styles.radio} ${className}`}
        {...props}
      />

      <span className={styles.mark} />

      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}