'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Card,
  Pagination,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './PaginationShowcase.module.scss';

export function PaginationShowcase() {
  const t = useTranslations(
    'designSystem.components.pagination'
  );

  const [page, setPage] = useState(5);

  const usage = `<Pagination
  page={page}
  totalPages={10}
  onPageChange={setPage}
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

        <Card className={styles.card}>
          <p>
            {t('currentPage')}: <strong>{page}</strong>
          </p>

          <Pagination
            page={page}
            totalPages={10}
            onPageChange={setPage}
          />
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('largeSet')}</h3>

        <Pagination
          page={page}
          totalPages={25}
          onPageChange={setPage}
        />
      </div>
    </ShowcaseSection>
  );
}