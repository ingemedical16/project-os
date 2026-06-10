import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './BadgeShowcase.module.scss';

export function BadgeShowcase() {
  const t = useTranslations(
    'designSystem.components.badge'
  );

  const usage = `<Badge variant="success">
  Active
</Badge>`;

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

        <div className={styles.row}>
          <Badge>{t('default')}</Badge>

          <Badge variant="info">
            {t('info')}
          </Badge>

          <Badge variant="success">
            {t('success')}
          </Badge>

          <Badge variant="warning">
            {t('warning')}
          </Badge>

          <Badge variant="danger">
            {t('danger')}
          </Badge>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('useCases')}</h3>

        <div className={styles.row}>
          <Badge variant="success">
            {t('active')}
          </Badge>

          <Badge variant="warning">
            {t('pending')}
          </Badge>

          <Badge variant="danger">
            {t('blocked')}
          </Badge>

          <Badge variant="info">
            {t('new')}
          </Badge>
        </div>
      </div>
    </ShowcaseSection>
  );
}