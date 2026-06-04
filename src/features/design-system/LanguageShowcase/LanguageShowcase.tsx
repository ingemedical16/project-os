'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui';

import styles from './LanguageShowcase.module.scss';

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
  { code: 'ro', label: 'Română' },
] as const;

export function LanguageShowcase() {
  const t = useTranslations('dashboard.overview');

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: string) {
    const segments = pathname.split('/');

    segments[1] = nextLocale;

    router.push(segments.join('/'));
  }

  return (
    <section className={styles.showcase}>
      <h2>Language System</h2>

      <p>
        {t('language')}: <strong>{locale}</strong>
      </p>

      <div className={styles.actions}>
        {LOCALES.map((item) => (
          <Button
            key={item.code}
            variant={item.code === locale ? 'secondary' : 'ghost'}
            onClick={() => changeLocale(item.code)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  );
}