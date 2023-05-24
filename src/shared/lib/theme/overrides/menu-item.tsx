import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';

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
