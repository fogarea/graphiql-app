import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  Shadows,
} from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

import { typography, palette, shadows, customShadows } from './base';
import { GlobalStyles } from './global-styles';
import { componentsOverrides } from './overrides';

export * from './utils';

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette: {
        mode: 'light',
        ...palette,
      },
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows() as Shadows,
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverrides(theme) as typeof theme.components;

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

interface IThemeProviderProps {
  children: ReactNode;
}
