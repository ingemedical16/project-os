import { useTranslations } from 'next-intl';

import {
  Card,
  Typography,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './TypographyShowcase.module.scss';

export function TypographyShowcase() {
  const t = useTranslations(
    'designSystem.components.typography'
  );

  const usage = `<Typography variant="heading1">
  Hello World
</Typography>`;

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
      <Card className={styles.stack}>
        <Typography variant="display">
          {t('display')}
        </Typography>

        <Typography variant="heading1">
          {t('heading1')}
        </Typography>

        <Typography variant="heading2">
          {t('heading2')}
        </Typography>

        <Typography variant="heading3">
          {t('heading3')}
        </Typography>

        <Typography variant="heading4">
          {t('heading4')}
        </Typography>

        <Typography variant="bodyLg">
          {t('bodyLg')}
        </Typography>

        <Typography variant="body">
          {t('body')}
        </Typography>

        <Typography variant="bodySm">
          {t('bodySm')}
        </Typography>

        <Typography variant="caption">
          {t('caption')}
        </Typography>

        <Typography variant="label">
          {t('label')}
        </Typography>

        <Typography variant="code">
          npm run build
        </Typography>
      </Card>
    </ShowcaseSection>
  );
}