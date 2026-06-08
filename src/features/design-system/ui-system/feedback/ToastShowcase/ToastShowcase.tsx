import { useTranslations } from 'next-intl';

import { Toast } from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './ToastShowcase.module.scss';

export function ToastShowcase() {
  const t = useTranslations(
    'designSystem.components.toast'
  );

  const usage = `<Toast variant="success" title="Success">
  Changes saved successfully.
</Toast>`;

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

        <div className={styles.list}>
          <Toast title={t('infoTitle')}>
            {t('infoMessage')}
          </Toast>

          <Toast
            variant="success"
            title={t('successTitle')}
          >
            {t('successMessage')}
          </Toast>

          <Toast
            variant="warning"
            title={t('warningTitle')}
          >
            {t('warningMessage')}
          </Toast>

          <Toast
            variant="danger"
            title={t('dangerTitle')}
          >
            {t('dangerMessage')}
          </Toast>
        </div>
      </div>
    </ShowcaseSection>
  );
}