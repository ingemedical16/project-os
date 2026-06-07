'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Button,
  Divider,
  Drawer,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './DrawerShowcase.module.scss';

export function DrawerShowcase() {
  const t = useTranslations(
    'designSystem.components.drawer'
  );

  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);

  const usage = `<Drawer
  isOpen={isOpen}
  title="Settings"
  onClose={handleClose}
>
  Drawer content
</Drawer>`;

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
        <h3>{t('positions')}</h3>

        <div className={styles.actions}>
          <Button onClick={() => setRightOpen(true)}>
            {t('openRight')}
          </Button>

          <Button
            variant="secondary"
            onClick={() => setLeftOpen(true)}
          >
            {t('openLeft')}
          </Button>
        </div>

        <Drawer
          isOpen={rightOpen}
          title={t('rightTitle')}
          onClose={() => setRightOpen(false)}
        >
          <div className={styles.drawerContent}>
            <p>{t('rightDescription')}</p>

            <Divider />

            <Button onClick={() => setRightOpen(false)}>
              {t('close')}
            </Button>
          </div>
        </Drawer>

        <Drawer
          isOpen={leftOpen}
          title={t('leftTitle')}
          position="left"
          onClose={() => setLeftOpen(false)}
        >
          <div className={styles.drawerContent}>
            <p>{t('leftDescription')}</p>

            <Divider />

            <Button onClick={() => setLeftOpen(false)}>
              {t('close')}
            </Button>
          </div>
        </Drawer>
      </div>
    </ShowcaseSection>
  );
}