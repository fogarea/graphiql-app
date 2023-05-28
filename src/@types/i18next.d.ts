import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: Record<string, string>;
      ru: Record<string, string>;
    };
  }
}
