import { Theme } from '@mui/material/styles/createTheme';
import { alpha } from '@mui/material/styles';

export const MenuItem = (theme: Theme) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.light, 0.3),
          },
        },
      },
    },
  };
};
