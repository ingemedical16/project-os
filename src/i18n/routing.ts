import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'ar', 'ro'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const RTL_LOCALES: Locale[] = ['ar'];

export function isRtlLocale(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}