import { useTranslations } from 'next-intl';

import {
  Button,
  EmptyState,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './EmptyStateShowcase.module.scss';

export function EmptyStateShowcase() {
  const t = useTranslations(
    'designSystem.components.emptyState'
  );

  const usage = `<EmptyState
  title="No results found"
  description="Try changing your filters."
  action={<Button>Reset filters</Button>}
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

        <EmptyState
          icon="∅"
          title={t('basicTitle')}
          description={t('basicDescription')}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('withAction')}</h3>

        <EmptyState
          icon="🔍"
          title={t('searchTitle')}
          description={t('searchDescription')}
          action={
            <Button>
              {t('resetFilters')}
            </Button>
          }
        />
      </div>

      <div className={styles.section}>
        <h3>{t('withMultipleActions')}</h3>

        <EmptyState
          icon="📦"
          title={t('productsTitle')}
          description={t('productsDescription')}
          action={
            <>
              <Button>{t('createProduct')}</Button>

              <Button variant="secondary">
                {t('importProducts')}
              </Button>
            </>
          }
        />
      </div>
    </ShowcaseSection>
  );
}