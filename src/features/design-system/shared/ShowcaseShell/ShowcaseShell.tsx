'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useMemo, useState } from 'react';

import styles from './ShowcaseShell.module.scss';
import type { ShowcaseShellProps } from './ShowcaseShell.types';
import { withLocalePath } from '@/lib/i18n/withLocalePath';

export function ShowcaseShell({
  activeSystemId,
  systemLinks,
  groups,
  labels,
}: ShowcaseShellProps) {
  const locale = useLocale();
  const firstItem = groups[0]?.items[0];

  const [activeItemId, setActiveItemId] = useState(firstItem?.id ?? '');

  const activeItem = useMemo(() => {
    return groups
      .flatMap((group) => group.items)
      .find((item) => item.id === activeItemId);
  }, [activeItemId, groups]);

  const ActiveComponent = activeItem?.component;

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h1 className={styles.title}>{labels.title}</h1>
          <p className={styles.description}>{labels.description}</p>
        </div>

        <nav
          className={styles.systemNav}
          aria-label={labels.systemNavigationLabel}
        >
          {systemLinks.map((link) => (
            <Link
              key={link.id}
              href={withLocalePath(link.href, locale)}
              className={`${styles.systemLink} ${
                link.id === activeSystemId ? styles.systemLinkActive : ''
              }`}
            >
              {labels.systemLinks[link.id] ?? link.id}
            </Link>
          ))}
        </nav>

        <nav className={styles.nav} aria-label={labels.navigationLabel}>
          {groups.map((group) => (
            <section key={group.id} className={styles.group}>
              <h2 className={styles.groupTitle}>
                {labels.groups[group.id] ?? group.id}
              </h2>

              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`${styles.navItem} ${
                        item.id === activeItemId ? styles.navItemActive : ''
                      }`}
                      onClick={() => setActiveItemId(item.id)}
                    >
                      {labels.items[item.id] ?? item.id}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </aside>

      <main className={styles.content}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </main>
    </div>
  );
}