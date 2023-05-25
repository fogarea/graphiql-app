import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ru } from './locales';

export const LS_LANGUAGE_KEY = 'language';

export const enum Languages {
  'English' = 'en',
  'Russian' = 'ru',
}

export const PossibleLanguagesValues = ['en', 'ru'] as const;

export type TypePossibleLanguages = (typeof PossibleLanguagesValues)[number];

export const LanguageNames: { [key: string]: string } = {
  [Languages.English]: 'English',
  [Languages.Russian]: 'Russian',
};

export const defaultNS = 'translation';

export const resources = { en, ru };

const preferredLanguage = navigator.language === 'ru-RU' ? 'ru' : 'en';

void i18next.use(initReactI18next).init({
  lng: localStorage.getItem(LS_LANGUAGE_KEY) || preferredLanguage,
  debug: false,
  resources,
  defaultNS,
});

export { i18next };
