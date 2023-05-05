import { Theme } from '@mui/material/styles/createTheme';
import { Tooltip } from './tooltip';

export const componentsOverrides = (theme: Theme) => {
  return Object.assign(Tooltip(theme)) as unknown;
};
