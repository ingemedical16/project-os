import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { loadMessages } from './loadMessages';
import { routing } from './routing';

const timeZones = {
  en: 'Europe/Paris',
  fr: 'Europe/Paris',
  ar: 'Europe/Paris',
  ro: 'Europe/Bucharest',
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    timeZone: timeZones[locale],
    messages: await loadMessages(locale),
  };
});