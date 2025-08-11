// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function initI18n(locale: string, resources: [any]) {
  i18n.use(initReactI18next).init({
    lng: locale,
    fallbackLng: 'en',
    resources: { [locale]: resources },
    ns: Object.keys(resources[locale]),
    defaultNS: 'home',
  });

  return i18n;
}
