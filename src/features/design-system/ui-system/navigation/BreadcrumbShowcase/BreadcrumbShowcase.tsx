import { useTranslations } from 'next-intl';

import {
  Breadcrumb,
  Card,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './BreadcrumbShowcase.module.scss';

export function BreadcrumbShowcase() {
  const t = useTranslations(
    'designSystem.components.breadcrumb'
  );

  const usage = `<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details' },
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

        <Card>
          <Breadcrumb
            items={[
              {
                label: t('home'),
                href: '/',
              },
              {
                label: t('products'),
                href: '/products',
              },
              {
                label: t('details'),
              },
            ]}
          />
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('customSeparator')}</h3>

        <Card>
          <Breadcrumb
            separator="›"
            items={[
              {
                label: t('dashboard'),
                href: '/dashboard',
              },
              {
                label: t('settings'),
                href: '/settings',
              },
              {
                label: t('profile'),
              },
            ]}
          />
        </Card>
      </div>
    </ShowcaseSection>
  );
}