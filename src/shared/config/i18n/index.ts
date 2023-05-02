import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru';
import en from './locales/en';

export const enum Languages {
  'English' = 'en',
  'Russian' = 'ru',
}

export const LanguageNames: { [key: string]: string } = {
  [Languages.English]: 'English',
  [Languages.Russian]: 'Russian',
};

export const defaultNS = 'translation';
export const resources = { ru, en };

const preferredLanguage = navigator.language === 'ru-RU' ? 'ru' : 'en';
const storedLanguage = localStorage.getItem('language');

await i18next.use(initReactI18next).init({
  lng: storedLanguage || preferredLanguage,
  debug: true,
  resources,
  defaultNS,
});

export { i18next };
