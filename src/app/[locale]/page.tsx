import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import styles from './page.module.scss';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('designSystem.page');

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.badge}>{t('title')}</p>

        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
      </header>

      <section className={styles.grid}>
        <Link href={`/${locale}/design-system`} className={styles.card}>
          <span className={styles.cardLabel}>
            {t('systemLinks.ui')}
          </span>

          <h2>{t('systems.ui.title')}</h2>
          <p>{t('systems.ui.subtitle')}</p>
        </Link>

        <Link href={`/${locale}/layout-system`} className={styles.card}>
          <span className={styles.cardLabel}>
            {t('systemLinks.layouts')}
          </span>

          <h2>{t('systems.layouts.title')}</h2>
          <p>{t('systems.layouts.subtitle')}</p>
        </Link>
      </section>
    </main>
  );
}