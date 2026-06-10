import { useTranslations } from 'next-intl';

import {
  Button,
  Tooltip,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './TooltipShowcase.module.scss';

export function TooltipShowcase() {
  const t = useTranslations(
    'designSystem.components.tooltip'
  );

  const usage = `<Tooltip content="Create a new project">
  <Button>Hover me</Button>
</Tooltip>`;

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

        <div className={styles.row}>
          <Tooltip content={t('createTooltip')}>
            <Button>{t('hoverButton')}</Button>
          </Tooltip>

          <Tooltip content={t('deleteTooltip')}>
            <Button variant="secondary">
              {t('deleteButton')}
            </Button>
          </Tooltip>

          <Tooltip content={t('infoTooltip')}>
            <span className={styles.icon}>ℹ</span>
          </Tooltip>
        </div>
      </div>
    </ShowcaseSection>
  );
}