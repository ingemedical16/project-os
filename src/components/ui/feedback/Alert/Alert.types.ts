import type { HTMLAttributes, ReactNode } from 'react';

export type AlertVariant =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  variant?: AlertVariant;
}