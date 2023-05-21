import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { defaultNS, i18next } from '@/shared/config';

export const withI18Next = (component: () => ReactNode) => () =>
  (
    <I18nextProvider i18n={i18next} defaultNS={defaultNS}>
      {component()}
    </I18nextProvider>
  );
