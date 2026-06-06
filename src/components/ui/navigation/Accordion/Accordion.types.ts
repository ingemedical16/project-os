import type { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
}

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}