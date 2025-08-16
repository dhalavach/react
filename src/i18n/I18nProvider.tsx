'use client';

import { ReactNode, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initI18n } from '../i18n/i18n';

import type common from '../../locales/en/common.json';
import type home from '../../locales/en/home.json';

type CommonTranslations = typeof common;
type HomeTranslations = typeof home;

type Resources = {
  common: CommonTranslations;
  home: HomeTranslations;
};

type I18nProviderProps = {
  children: ReactNode;
  locale: string;
  resources: Resources;
};

export function I18nProvider({
  locale,
  resources,
  children,
}: I18nProviderProps) {
  const i18n = useMemo(() => initI18n(locale, resources), [locale, resources]);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
