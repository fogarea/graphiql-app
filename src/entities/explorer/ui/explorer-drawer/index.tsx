import Drawer from '@mui/material/Drawer/Drawer';
import IconButton from '@mui/material/IconButton/IconButton';
import { ReactNode } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider/Divider';

import { DrawerHeader } from './drawer-header';
import Container from '@mui/material/Container/Container';

export const ExplorerDrawer = ({
  open,
  children,
  toggleDrawer,
}: IExplorerDrawerProps): JSX.Element => {
  return (
    <Drawer
      PaperProps={{
        sx: { width: { xs: '100%', sm: '100%', md: '50%' } },
      }}
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      hideBackdrop={false}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>{children}</Container>
    </Drawer>
  );
};

interface IExplorerDrawerProps {
  open: boolean;
  children?: ReactNode;
  toggleDrawer: () => void;
}
