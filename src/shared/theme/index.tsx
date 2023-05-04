import { CssBaseline } from '@mui/material';
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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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
