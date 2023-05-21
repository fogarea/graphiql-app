import { Theme } from '@mui/material/styles/createTheme';

import { MenuItem } from './menu-item.tsx';
import { Tooltip } from './tooltip';

export const componentsOverrides = (theme: Theme) => {
  return Object.assign(Tooltip(theme), MenuItem(theme)) as unknown;
};
