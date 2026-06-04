import '@/styles/globals.scss';

import { hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/contexts/theme/ThemeProvider';
import { routing } from '@/i18n/routing';
import { LanguageProvider } from '@/providers/LanguageProvider';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<ReactNode> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body suppressHydrationWarning>
        <LanguageProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}