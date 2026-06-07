import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  className?: string;
}