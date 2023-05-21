import { ReactNode } from 'react';

import { ThemeProvider } from '@/shared/theme';

export const withTheme = (component: () => ReactNode) => () =>
  <ThemeProvider>{component()}</ThemeProvider>;
