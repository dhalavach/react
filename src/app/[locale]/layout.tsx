// src/app/[locale]/layout.tsx
import '../globals.css';
import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { I18nProvider } from '../../i18n/I18nProvider';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';
import type { Locale } from '../../types/i18n';
import type common from '../../../locales/en/common.json';
import type home from '../../../locales/en/home.json';

type CommonTranslations = typeof common;
type HomeTranslations = typeof home;

type Resources = {
  common: CommonTranslations;
  home: HomeTranslations;
};
export const dynamicParams = false;

export function generateStaticParams(): { locale: Locale }[] {
  return languages.map((lng) => ({ locale: lng as Locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!languages.includes(locale as Locale)) {
    notFound();
  }

  const common: Resources['common'] = await import(
    `../../../locales/${locale}/common.json`
  ).then((m) => m.default);

  const home: Resources['home'] = await import(
    `../../../locales/${locale}/home.json`
  ).then((m) => m.default);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <Providers>
          <I18nProvider locale={locale} resources={{ common, home }}>
            {children}
          </I18nProvider>
        </Providers>
      </body>
    </html>
  );
}
