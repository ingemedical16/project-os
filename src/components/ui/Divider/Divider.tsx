import styles from './Divider.module.scss';

import type { DividerProps } from './Divider.types';

export function Divider({
  orientation = 'horizontal',
  className = '',
  ...props
}: DividerProps) {
  const classes = [
    styles.divider,
    styles[orientation],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <hr
      className={classes}
      aria-orientation={orientation}
      {...props}
    />
  );
}