import type { ReactNode } from 'react';

export type DrawerPosition = 'left' | 'right';

export interface DrawerProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  position?: DrawerPosition;
  onClose: () => void;
}