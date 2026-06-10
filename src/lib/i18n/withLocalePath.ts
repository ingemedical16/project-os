// src/lib/i18n/withLocalePath.ts

export function withLocalePath(href: string, locale: string): string {
  if (/^https?:\/\//.test(href)) return href;

  if (href.startsWith(`/${locale}`)) return href;

  if (href === '/') return `/${locale}`;

  return `/${locale}${href.startsWith('/') ? href : `/${href}`}`;
}