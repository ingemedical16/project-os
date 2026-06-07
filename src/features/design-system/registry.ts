import type { ComponentType } from 'react';

import { AppearanceShowcase } from './AppearanceShowcase';
import { AccordionShowcase } from './AccordionShowcase';
import { AlertShowcase } from './AlertShowcase';
import { AvatarShowcase } from './AvatarShowcase';
import { BadgeShowcase } from './BadgeShowcase';
import { ButtonShowcase } from './ButtonShowcase';
import { CardShowcase } from './CardShowcase';
import { CheckboxShowcase } from './CheckboxShowcase';
import { DividerShowcase } from './DividerShowcase';
import { DrawerShowcase } from './DrawerShowcase';
import { FormShowcase } from './FormShowcase';
import { InputShowcase } from './InputShowcase';
import { ModalShowcase } from './ModalShowcase';
import { RadioShowcase } from './RadioShowcase';
import { SelectShowcase } from './SelectShowcase';
import { SpinnerShowcase } from './SpinnerShowcase';
import { SwitchShowcase } from './SwitchShowcase';
import { TabsShowcase } from './TabsShowcase';
import { TextareaShowcase } from './TextareaShowcase';
import { ToastShowcase } from './ToastShowcase';
import { TooltipShowcase } from './TooltipShowcase';
import { SkeletonShowcase } from './SkeletonShowcase';
import { EmptyStateShowcase } from './EmptyStateShowcase';
import { TableShowcase } from './TableShowcase';
import { BreadcrumbShowcase } from './BreadcrumbShowcase';
import { PaginationShowcase } from './PaginationShowcase';
import { DataTableShowcase } from './DataTableShowcase';
import { TypographyShowcase } from './TypographyShowcase';

export interface DesignSystemShowcaseItem {
  id: string;
  title: string;
  component: ComponentType;
}

export interface DesignSystemShowcaseGroup {
  id: string;
  title: string;
  items: DesignSystemShowcaseItem[];
}

export const DESIGN_SYSTEM_SHOWCASES: DesignSystemShowcaseGroup[] = [
  {
  id: 'system',
  title: 'System',
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