import type { ReactNode } from 'react';

import {
  Card,
  Divider,
} from '@/components/ui';

import styles from './ShowcaseSection.module.scss';

interface ShowcaseSectionProps {
  title: string;
  description: string;
  usageTitle: string;
  previewTitle: string;
  usage?: ReactNode;
  children: ReactNode;
}

export function ShowcaseSection({
  title,
  description,
  usageTitle,
  previewTitle,
  usage,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          {description}
        </p>
      </header>

      {usage ? (
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>
            {usageTitle}
          </h2>

          <Divider />

          <div className={styles.usage}>
            {usage}
          </div>
        </Card>
      ) : null}

      <Card className={styles.card}>
        <h2 className={styles.cardTitle}>
          {previewTitle}
        </h2>

        <Divider />

        <div className={styles.preview}>
          {children}
        </div>
      </Card>
    </section>
  );
}