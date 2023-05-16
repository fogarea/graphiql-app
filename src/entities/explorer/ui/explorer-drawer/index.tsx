import Drawer from '@mui/material/Drawer/Drawer';
import Divider from '@mui/material/Divider/Divider';
import Container from '@mui/material/Container/Container';
import { ReactNode } from 'react';

export const ExplorerDrawer = ({
  open,
  children,
  toggleDrawer,
}: IExplorerDrawerProps): JSX.Element => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop={false}>
      <Divider />
      <Container sx={{ paddingTop: 2, paddingBottom: 2, display: 'flex', flexDirection: 'row' }}>
        {children}
      </Container>
    </Drawer>
  );
};

interface IExplorerDrawerProps {
  open: boolean;
  children?: ReactNode;
  toggleDrawer: () => void;
}
