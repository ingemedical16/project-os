import { useTranslations } from 'next-intl';

import {
  Card,
  Divider,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './DividerShowcase.module.scss';

export function DividerShowcase() {
  const t = useTranslations(
    'designSystem.components.divider'
  );

  const usage = `<Divider />

<Divider orientation="vertical" />`;

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
        <h3>{t('horizontal')}</h3>

        <Card className={styles.cardContent}>
          <p>{t('contentAbove')}</p>

          <Divider />

          <p>{t('contentBelow')}</p>
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('vertical')}</h3>

        <Card>
          <div className={styles.verticalExample}>
            <span>{t('left')}</span>

            <Divider orientation="vertical" />

            <span>{t('center')}</span>

            <Divider orientation="vertical" />

            <span>{t('right')}</span>
          </div>
        </Card>
      </div>
    </ShowcaseSection>
  );
}