import grey from '@mui/material/colors/grey';
import { Theme } from '@mui/material/styles/createTheme';

export const Select = (theme: Theme) => {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          color: `${grey[500]}`,
          fontSize: '14px',
        },
        select: {
          '&.Mui-disabled': {
            WebkitTextFillColor: `${grey[500]}`,
          },
        },
      },
    },
  };
};
