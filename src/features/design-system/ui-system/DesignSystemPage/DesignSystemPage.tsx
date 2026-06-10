'use client';

import { useTranslations } from 'next-intl';

import { ShowcaseShell } from '../../shared';
import { UI_SYSTEM_SHOWCASES } from './registry';

export function DesignSystemPage() {
  const t = useTranslations('designSystem.page');

  return (
    <ShowcaseShell
      activeSystemId="ui"
      groups={UI_SYSTEM_SHOWCASES}
      labels={{
        title: t('systems.ui.title'),
        description: t('systems.ui.subtitle'),
        navigationLabel: t('navigationLabel'),
        systemNavigationLabel: t('systemNavigationLabel'),
        systemLinks: {
          ui: t('systemLinks.ui'),
          layouts: t('systemLinks.layouts'),
        },
        groups: {
          theme: t('groups.theme'),
          forms: t('groups.forms'),
          feedback: t('groups.feedback'),
          overlay: t('groups.overlay'),
          navigation: t('groups.navigation'),
          display: t('groups.display'),
          data: t('groups.data'),
          layouts: t('groups.layouts'),
        },
        items: {
          appearance: t('items.appearance'),

          button: t('items.button'),
          input: t('items.input'),
          textarea: t('items.textarea'),
          select: t('items.select'),
          checkbox: t('items.checkbox'),
          radio: t('items.radio'),
          switch: t('items.switch'),
          form: t('items.form'),

          alert: t('items.alert'),
          badge: t('items.badge'),
          spinner: t('items.spinner'),
          toast: t('items.toast'),

          modal: t('items.modal'),
          drawer: t('items.drawer'),
          tooltip: t('items.tooltip'),

          accordion: t('items.accordion'),
          tabs: t('items.tabs'),
          breadcrumb: t('items.breadcrumb'),
          pagination: t('items.pagination'),

          typography: t('items.typography'),
          card: t('items.card'),
          avatar: t('items.avatar'),
          divider: t('items.divider'),
          skeleton: t('items.skeleton'),
          emptyState: t('items.emptyState'),

          table: t('items.table'),
          dataTable: t('items.dataTable'),

          emptyLayout: t('items.emptyLayout'),
          pageLayout: t('items.pageLayout'),
          sidebarLayout: t('items.sidebarLayout'),
          authLayout: t('items.authLayout'),
          dashboardLayout: t('items.dashboardLayout'),
        },
      }}
      systemLinks={[
        {
          id: 'ui',
          href: '/design-system',
        },
        {
          id: 'layouts',
          href: '/layout-system',
        },
      ]}
    />
  );
}