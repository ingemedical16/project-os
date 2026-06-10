import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionItem,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './AccordionShowcase.module.scss';

export function AccordionShowcase() {
  const t = useTranslations(
    'designSystem.components.accordion'
  );

  const usage = `<Accordion>
  <AccordionItem title="What is Project OS?">
    Project OS is a reusable starter.
  </AccordionItem>
</Accordion>`;

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

        <Accordion>
          <AccordionItem
            title={t('firstTitle')}
            defaultOpen
          >
            {t('firstContent')}
          </AccordionItem>

          <AccordionItem title={t('secondTitle')}>
            {t('secondContent')}
          </AccordionItem>

          <AccordionItem title={t('thirdTitle')}>
            {t('thirdContent')}
          </AccordionItem>
        </Accordion>
      </div>
    </ShowcaseSection>
  );
}