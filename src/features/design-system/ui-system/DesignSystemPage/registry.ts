import type { ComponentType } from 'react';

import { DataTableShowcase, TableShowcase } from '../data';
import {
  AvatarShowcase,
  CardShowcase,
  DividerShowcase,
  EmptyStateShowcase,
  SkeletonShowcase,
  TypographyShowcase,
} from '../display';
import {
  AlertShowcase,
  BadgeShowcase,
  SpinnerShowcase,
  ToastShowcase,
} from '../feedback';
import {
  ButtonShowcase,
  CheckboxShowcase,
  FormShowcase,
  InputShowcase,
  RadioShowcase,
  SelectShowcase,
  SwitchShowcase,
  TextareaShowcase,
} from '../forms';
import {
  AccordionShowcase,
  BreadcrumbShowcase,
  PaginationShowcase,
  TabsShowcase,
} from '../navigation';
import {
  DrawerShowcase,
  ModalShowcase,
  TooltipShowcase,
} from '../overlay';
import { AppearanceShowcase } from '../theme';

export interface ShowcaseItem {
  id: string;
  title: string;
  component: ComponentType;
}

export interface ShowcaseGroup {
  id: string;
  title: string;
  items: ShowcaseItem[];
}

export const UI_SYSTEM_SHOWCASES: ShowcaseGroup[] = [
  {
    id: 'theme',
    title: 'Theme',
    items: [
      {
        id: 'appearance',
        title: 'Appearance',
        component: AppearanceShowcase,
      },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    items: [
      {
        id: 'button',
        title: 'Button',
        component: ButtonShowcase,
      },
      {
        id: 'input',
        title: 'Input',
        component: InputShowcase,
      },
      {
        id: 'textarea',
        title: 'Textarea',
        component: TextareaShowcase,
      },
      {
        id: 'select',
        title: 'Select',
        component: SelectShowcase,
      },
      {
        id: 'checkbox',
        title: 'Checkbox',
        component: CheckboxShowcase,
      },
      {
        id: 'radio',
        title: 'Radio',
        component: RadioShowcase,
      },
      {
        id: 'switch',
        title: 'Switch',
        component: SwitchShowcase,
      },
      {
        id: 'form',
        title: 'Form',
        component: FormShowcase,
      },
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback',
    items: [
      {
        id: 'alert',
        title: 'Alert',
        component: AlertShowcase,
      },
      {
        id: 'badge',
        title: 'Badge',
        component: BadgeShowcase,
      },
      {
        id: 'spinner',
        title: 'Spinner',
        component: SpinnerShowcase,
      },
      {
        id: 'toast',
        title: 'Toast',
        component: ToastShowcase,
      },
    ],
  },
  {
    id: 'overlay',
    title: 'Overlay',
    items: [
      {
        id: 'modal',
        title: 'Modal',
        component: ModalShowcase,
      },
      {
        id: 'drawer',
        title: 'Drawer',
        component: DrawerShowcase,
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        component: TooltipShowcase,
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    items: [
      {
        id: 'accordion',
        title: 'Accordion',
        component: AccordionShowcase,
      },
      {
        id: 'tabs',
        title: 'Tabs',
        component: TabsShowcase,
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        component: BreadcrumbShowcase,
      },
      {
        id: 'pagination',
        title: 'Pagination',
        component: PaginationShowcase,
      },
    ],
  },
  {
    id: 'display',
    title: 'Display',
    items: [
      {
        id: 'card',
        title: 'Card',
        component: CardShowcase,
      },
      {
        id: 'avatar',
        title: 'Avatar',
        component: AvatarShowcase,
      },
      {
        id: 'divider',
        title: 'Divider',
        component: DividerShowcase,
      },
      {
        id: 'skeleton',
        title: 'Skeleton',
        component: SkeletonShowcase,
      },
      {
        id: 'emptyState',
        title: 'Empty State',
        component: EmptyStateShowcase,
      },
      {
        id: 'typography',
        title: 'Typography',
        component: TypographyShowcase,
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      {
        id: 'table',
        title: 'Table',
        component: TableShowcase,
      },
      {
        id: 'dataTable',
        title: 'Data Table',
        component: DataTableShowcase,
      },
    ],
  },
];