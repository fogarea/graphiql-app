import Container from '@mui/material/Container/Container';
import Drawer from '@mui/material/Drawer/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode } from 'react';

export const ExplorerDrawer = ({
  open,
  children,
  toggleDrawer,
}: IExplorerDrawerProps): JSX.Element => {
  const matches = useMediaQuery('(min-width:890px)');
  const flexDirection = matches ? 'row' : 'column';
  const gapSize = matches ? 0 : 1;
  console.log(matches);
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop={false}>
      <Container
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          display: 'flex',
          flexDirection: flexDirection,
          gap: gapSize,
        }}
      >
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
