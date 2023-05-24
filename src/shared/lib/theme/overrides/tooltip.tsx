import { Theme } from '@mui/material/styles/createTheme';

export const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.67)',
          boxShadow: theme.shadows[1],
          fontSize: 14,
          padding: '6px 10px',
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
};
