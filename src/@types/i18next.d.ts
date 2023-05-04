import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'translation';
    // custom resources type
    resources: {
      en: Record<string, string>;
      ru: Record<string, string>;
    };
  }
}
