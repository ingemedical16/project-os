import type { ShowcaseGroup } from '../../shared';

import { PageLayoutShowcase } from '../PageLayoutShowcase';

export const LAYOUT_SYSTEM_SHOWCASES: ShowcaseGroup[] = [
  {
    id: 'layouts',
    items: [
      {
        id: 'pageLayout',
        component: PageLayoutShowcase,
      },
    ],
  },
];