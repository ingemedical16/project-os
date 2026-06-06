import type { ReactNode } from 'react';

export interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}