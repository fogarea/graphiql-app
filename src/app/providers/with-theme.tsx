import { ReactNode } from 'react';

import { ThemeProvider } from '@/shared/lib/theme';

export const withTheme = (component: () => ReactNode) => () =>
  <ThemeProvider>{component()}</ThemeProvider>;
