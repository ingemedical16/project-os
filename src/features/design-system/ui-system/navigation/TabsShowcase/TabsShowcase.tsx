import { useTranslations } from 'next-intl';

import {
  Badge,
  Tabs,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './TabsShowcase.module.scss';

export function TabsShowcase() {
  const t = useTranslations(
    'designSystem.components.tabs'
  );

  const usage = `<Tabs
  defaultValue="overview"
  tabs={[
    {
      label: 'Overview',
      value: 'overview',
      content: <p>Content</p>,
    },
  ]}
/>`;

  return (
    <ShowcaseSection
      title={t('title')}
      description={t('description')}
      usageTitle={t('usage')}
      previewTitle={t('preview')}
      usage={
        <pre className={styles.code}>
          <code>{usage}</code>
        </pre>
      }
    >
      <div className={styles.section}>
        <h3>{t('basic')}</h3>

        <Tabs
          defaultValue="overview"
          tabs={[
            {
              label: t('overviewTab'),
              value: 'overview',
              content: (
                <div className={styles.content}>
                  <h3>{t('overviewTitle')}</h3>

                  <p>{t('overviewDescription')}</p>

                  <Badge variant="info">
                    {t('infoBadge')}
                  </Badge>
                </div>
              ),
            },
            {
              label: t('settingsTab'),
              value: 'settings',
              content: (
                <div className={styles.content}>
                  <h3>{t('settingsTitle')}</h3>

                  <p>{t('settingsDescription')}</p>

                  <Badge variant="success">
                    {t('activeBadge')}
                  </Badge>
                </div>
              ),
            },
            {
              label: t('billingTab'),
              value: 'billing',
              content: (
                <div className={styles.content}>
                  <h3>{t('billingTitle')}</h3>

                  <p>{t('billingDescription')}</p>

                  <Badge variant="warning">
                    {t('pendingBadge')}
                  </Badge>
                </div>
              ),
            },
            {
              label: t('disabledTab'),
              value: 'disabled',
              disabled: true,
              content: <p>{t('disabledContent')}</p>,
            },
          ]}
        />
      </div>
    </ShowcaseSection>
  );
}