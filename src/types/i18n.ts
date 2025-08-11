export type Locale = 'en' | 'fr';

// Shape of each JSON translation file
export type TranslationResource = Record<string, string>;

export interface Resources {
  common: TranslationResource;
  home: TranslationResource;
}
