'use client';

import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import {
  Button,
  Divider,
} from '@/components/ui';

import { DESIGN_SYSTEM_SHOWCASES } from '../registry';

import styles from './DesignSystemPage.module.scss';

const firstShowcaseId =
  DESIGN_SYSTEM_SHOWCASES[0]?.items[0]?.id ?? '';

export function DesignSystemPage() {
  const t = useTranslations('designSystem.page');

  const [activeId, setActiveId] = useState(firstShowcaseId);

  const activeShowcase = useMemo(() => {
    return DESIGN_SYSTEM_SHOWCASES
      .flatMap((group) => group.items)
      .find((item) => item.id === activeId);
  }, [activeId]);

  const ActiveComponent = activeShowcase?.component;

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <Divider />

        <nav
          className={styles.navigation}
          aria-label={t('navigationLabel')}
        >
          {DESIGN_SYSTEM_SHOWCASES.map((group, groupIndex) => (
            <div key={group.id} className={styles.group}>
              {groupIndex > 0 ? <Divider /> : null}

              <h2 className={styles.groupTitle}>
                {t(`groups.${group.id}`)}
              </h2>

              <div className={styles.items}>
                {group.items.map((item) => (
                  <Button
                    key={item.id}
                    type="button"
                    variant={
                      item.id === activeId
                        ? 'primary'
                        : 'ghost'
                    }
                    fullWidth
                    onClick={() => setActiveId(item.id)}
                  >
                    {t(`items.${item.id}`)}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <section className={styles.content}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </section>
    </main>
  );
}