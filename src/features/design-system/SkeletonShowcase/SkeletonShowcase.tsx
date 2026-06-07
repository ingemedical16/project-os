import { useTranslations } from 'next-intl';

import {
  Card,
  Skeleton,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './SkeletonShowcase.module.scss';

export function SkeletonShowcase() {
  const t = useTranslations(
    'designSystem.components.skeleton'
  );

  const usage = `<Skeleton />

<Skeleton
  width="20rem"
  height="2rem"
/>

<Skeleton circle />`;

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
        <h3>{t('text')}</h3>

        <Card className={styles.column}>
          <Skeleton height="2rem" />
          <Skeleton />
          <Skeleton />
          <Skeleton width="60%" />
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('avatar')}</h3>

        <div className={styles.row}>
          <Skeleton
            circle
            width="6rem"
            height="6rem"
          />

          <div className={styles.column}>
            <Skeleton width="20rem" />
            <Skeleton width="12rem" />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('card')}</h3>

        <Card className={styles.column}>
          <Skeleton height="18rem" />

          <Skeleton width="70%" />

          <Skeleton />
          <Skeleton />
          <Skeleton width="50%" />
        </Card>
      </div>
    </ShowcaseSection>
  );
}