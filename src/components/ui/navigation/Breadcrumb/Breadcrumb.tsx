import clsx from 'clsx';

import type { BreadcrumbProps } from './Breadcrumb.types';

import styles from './Breadcrumb.module.scss';

export function Breadcrumb({
  items,
  separator = '/',
  linkProps,
  className,
}: BreadcrumbProps) {
  return (
    <nav
      className={clsx(styles.breadcrumb, className)}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={styles.link}
                  {...linkProps}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={styles.current}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast ? (
                <span
                  className={styles.separator}
                  aria-hidden="true"
                >
                  {separator}
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}