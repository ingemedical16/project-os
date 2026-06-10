'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Button,
  Modal,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './ModalShowcase.module.scss';

export function ModalShowcase() {
  const t = useTranslations(
    'designSystem.components.modal'
  );

  const [isOpen, setIsOpen] = useState(false);

  const usage = `<Modal
  isOpen={isOpen}
  title="Project OS Modal"
  onClose={handleClose}
>
  Modal content
</Modal>`;

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

        <Button onClick={() => setIsOpen(true)}>
          {t('openButton')}
        </Button>

        <Modal
          isOpen={isOpen}
          title={t('modalTitle')}
          onClose={() => setIsOpen(false)}
        >
          <div className={styles.modalContent}>
            <p>{t('modalDescription')}</p>

            <div className={styles.actions}>
              <Button
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                {t('cancel')}
              </Button>

              <Button onClick={() => setIsOpen(false)}>
                {t('confirm')}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </ShowcaseSection>
  );
}