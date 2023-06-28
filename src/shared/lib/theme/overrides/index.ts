import { Theme } from '@mui/material/styles/createTheme';

import { MenuItem } from './menu-item.tsx';
import { Select } from './select.tsx';
import { Tooltip } from './tooltip.tsx';

export const componentsOverrides = (theme: Theme) => {
  return Object.assign(Tooltip(theme), MenuItem(theme), Select(theme)) as unknown;
};
