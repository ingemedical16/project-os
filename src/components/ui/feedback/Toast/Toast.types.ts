import type { HTMLAttributes, ReactNode } from 'react';

export type ToastVariant =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
  variant?: ToastVariant;
}