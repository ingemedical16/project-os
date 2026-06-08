import { useTranslations } from 'next-intl';

import {
  Badge,
  Button,
  Card,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './CardShowcase.module.scss';

export function CardShowcase() {
  const t = useTranslations(
    'designSystem.components.card'
  );

  const usage = `<Card>
  <h3>Product Card</h3>
  <p>Card content</p>
</Card>`;

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
        <h3>{t('examples')}</h3>

        <div className={styles.grid}>
          <Card className={styles.cardContent}>
            <h3>{t('profileTitle')}</h3>

            <p>{t('profileDescription')}</p>

            <Badge variant="success">
              {t('active')}
            </Badge>
          </Card>

          <Card className={styles.cardContent}>
            <h3>{t('productTitle')}</h3>

            <p>{t('productDescription')}</p>

            <Button>
              {t('productAction')}
            </Button>
          </Card>

          <Card className={styles.cardContent}>
            <h3>{t('statsTitle')}</h3>

            <p>{t('statsDescription')}</p>

            <strong className={styles.statValue}>
              12,456
            </strong>
          </Card>
        </div>
      </div>
    </ShowcaseSection>
  );
}