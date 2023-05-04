import { ThemeProvider } from '@/shared/theme';
import { ReactNode } from 'react';

export const withTheme = (component: () => ReactNode) => () =>
  <ThemeProvider>{component()}</ThemeProvider>;
