import type { ComponentType } from 'react';

export interface ShowcaseItem {
  id: string;
  component: ComponentType;
}

export interface ShowcaseGroup {
  id: string;
  items: ShowcaseItem[];
}

export interface ShowcaseSystemLink {
  id: string;
  href: string;
}

export interface ShowcaseShellLabels {
  title: string;
  description: string;
  navigationLabel: string;
  systemNavigationLabel: string;
  systemLinks: Record<string, string>;
  groups: Record<string, string>;
  items: Record<string, string>;
}

export interface ShowcaseShellProps {
  activeSystemId: string;
  systemLinks: ShowcaseSystemLink[];
  groups: ShowcaseGroup[];
  labels: ShowcaseShellLabels;
}