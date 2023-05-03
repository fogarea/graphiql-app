import { resources } from '@/shared/config/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
    defaultNS: string;
  }
}
