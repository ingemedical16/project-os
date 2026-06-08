'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './ButtonShowcase.module.scss';

export function ButtonShowcase() {
  const t = useTranslations(
    'designSystem.components.button'
  );

  const commonUsage = `<Button variant="primary">
  Submit
</Button>`;

  return (
    <ShowcaseSection
      title={t('title')}
      description={t('description')}
      usageTitle={t('usage')}
      previewTitle={t('preview')}
      usage={
        <pre className={styles.code}>
          <code>{commonUsage}</code>
        </pre>
      }
    >
      <div className={styles.section}>
        <h3>{t('variants')}</h3>

        <div className={styles.actions}>
          <Button variant="primary">
            Primary
          </Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('sizes')}</h3>

        <div className={styles.actions}>
          <Button size="sm">Small</Button>

          <Button size="md">Medium</Button>

          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('states')}</h3>

        <div className={styles.actions}>
          <Button>
            Default
          </Button>

          <Button disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('fullWidth')}</h3>

        <Button fullWidth>
          Full Width Button
        </Button>
      </div>
    </ShowcaseSection>
  );
}