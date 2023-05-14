import { Theme } from '@mui/material/styles/createTheme';

import { Tooltip } from './tooltip';
import { MenuItem } from './menu-item.tsx';

export const componentsOverrides = (theme: Theme) => {
  return Object.assign(Tooltip(theme), MenuItem(theme)) as unknown;
};
