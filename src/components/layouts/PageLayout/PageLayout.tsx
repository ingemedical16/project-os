import styles from './PageLayout.module.scss';
import type { PageLayoutProps } from './PageLayout.types';

export function PageLayout({
  children,
  title,
  description,
  actions,
  className,
}: PageLayoutProps) {
  return (
    <main className={`${styles.page} ${className ?? ''}`}>
      {(title || description || actions) && (
        <header className={styles.header}>
          <div>
            {title && <h1 className={styles.title}>{title}</h1>}
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>

          {actions && <div className={styles.actions}>{actions}</div>}
        </header>
      )}

      <section className={styles.content}>{children}</section>
    </main>
  );
}