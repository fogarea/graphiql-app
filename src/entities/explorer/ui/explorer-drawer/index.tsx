import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container/Container';
import Drawer from '@mui/material/Drawer/Drawer';
import IconButton from '@mui/material/IconButton';
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
  const fontSize = matches ? 16 : 14;
  console.log(matches);
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop={false}>
      <IconButton sx={{ position: 'absolute' }} onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
      <Container
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          display: 'flex',
          flexDirection: flexDirection,
          gap: gapSize,
          fontSize: fontSize,
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
