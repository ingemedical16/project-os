import clsx from 'clsx';
import type { ElementType } from 'react';

import type { TypographyProps } from './Typography.types';

import styles from './Typography.module.scss';

const defaultElements = {
  display: 'h1',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  bodyLg: 'p',
  body: 'p',
  bodySm: 'p',
  caption: 'span',
  label: 'label',
  code: 'code',
} as const;

export function Typography({
  children,
  variant = 'body',
  as,
  className,
  ...props
}: TypographyProps) {
  const Component: ElementType =
    as ?? defaultElements[variant];

  return (
    <Component
      className={clsx(
        styles.typography,
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}