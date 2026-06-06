import type { ReactNode } from 'react';

import { Card, Divider } from '@/components/ui';

import styles from './ShowcaseSection.module.scss';

interface ShowcaseSectionProps {
  title: string;
  description: string;
  usage?: ReactNode;
  children: ReactNode;
}

export function ShowcaseSection({
  title,
  description,
  usage,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>

      {usage ? (
        <Card className={styles.usage}>
          <h2 className={styles.usageTitle}>Usage</h2>
          <Divider />
          {usage}
        </Card>
      ) : null}

      <Card className={styles.preview}>
        <h2 className={styles.previewTitle}>Preview</h2>
        <Divider />
        {children}
      </Card>
    </section>
  );
}