import { useTranslations } from 'next-intl';

import { Spinner } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './SpinnerShowcase.module.scss';

export function SpinnerShowcase() {
  const t = useTranslations(
    'designSystem.components.spinner'
  );

  const usage = `<Spinner label="Loading..." />`;

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
        <h3>{t('sizes')}</h3>

        <div className={styles.row}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('withLabel')}</h3>

        <div className={styles.column}>
          <Spinner label={t('loading')} />

          <Spinner
            size="lg"
            label={t('fetching')}
          />
        </div>
      </div>
    </ShowcaseSection>
  );
}