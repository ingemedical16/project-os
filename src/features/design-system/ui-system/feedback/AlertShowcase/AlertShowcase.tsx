import { useTranslations } from 'next-intl';

import { Alert } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './AlertShowcase.module.scss';

export function AlertShowcase() {
  const t = useTranslations(
    'designSystem.components.alert'
  );

  const usage = `<Alert variant="success" title="Success">
  Your action was completed successfully.
</Alert>`;

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
        <h3>{t('variants')}</h3>

        <Alert title={t('infoTitle')}>
          {t('infoMessage')}
        </Alert>

        <Alert
          variant="success"
          title={t('successTitle')}
        >
          {t('successMessage')}
        </Alert>

        <Alert
          variant="warning"
          title={t('warningTitle')}
        >
          {t('warningMessage')}
        </Alert>

        <Alert
          variant="danger"
          title={t('dangerTitle')}
        >
          {t('dangerMessage')}
        </Alert>
      </div>
    </ShowcaseSection>
  );
}