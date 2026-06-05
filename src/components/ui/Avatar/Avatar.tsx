import styles from './Avatar.module.scss';

import type { AvatarProps } from './Avatar.types';

function getInitials(name?: string): string {
  if (!name) {
    return '?';
  }

  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) {
  const classes = [
    styles.avatar,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? 'Avatar'}
          className={styles.image}
        />
      ) : (
        <span className={styles.fallback}>
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}