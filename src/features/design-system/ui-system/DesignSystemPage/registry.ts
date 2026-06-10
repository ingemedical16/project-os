'use client';

import type { ShowcaseGroup } from '../../shared';

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

export const UI_SYSTEM_SHOWCASES: ShowcaseGroup[] = [
  {
    id: 'theme',
    items: [
      {
        id: 'appearance',
        component: AppearanceShowcase,
      },
    ],
  },
  {
    id: 'forms',
    items: [
      { id: 'button', component: ButtonShowcase },
      { id: 'input', component: InputShowcase },
      { id: 'textarea', component: TextareaShowcase },
      { id: 'select', component: SelectShowcase },
      { id: 'checkbox', component: CheckboxShowcase },
      { id: 'radio', component: RadioShowcase },
      { id: 'switch', component: SwitchShowcase },
      { id: 'form', component: FormShowcase },
    ],
  },
  {
    id: 'feedback',
    items: [
      { id: 'alert', component: AlertShowcase },
      { id: 'badge', component: BadgeShowcase },
      { id: 'spinner', component: SpinnerShowcase },
      { id: 'toast', component: ToastShowcase },
    ],
  },
  {
    id: 'overlay',
    items: [
      { id: 'modal', component: ModalShowcase },
      { id: 'drawer', component: DrawerShowcase },
      { id: 'tooltip', component: TooltipShowcase },
    ],
  },
  {
    id: 'navigation',
    items: [
      { id: 'accordion', component: AccordionShowcase },
      { id: 'tabs', component: TabsShowcase },
      { id: 'breadcrumb', component: BreadcrumbShowcase },
      { id: 'pagination', component: PaginationShowcase },
    ],
  },
  {
    id: 'display',
    items: [
      { id: 'card', component: CardShowcase },
      { id: 'avatar', component: AvatarShowcase },
      { id: 'divider', component: DividerShowcase },
      { id: 'skeleton', component: SkeletonShowcase },
      { id: 'emptyState', component: EmptyStateShowcase },
      { id: 'typography', component: TypographyShowcase },
    ],
  },
  {
    id: 'data',
    items: [
      { id: 'table', component: TableShowcase },
      { id: 'dataTable', component: DataTableShowcase },
    ],
  },
];