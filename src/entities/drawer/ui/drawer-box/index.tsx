import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container/Container';
import Drawer from '@mui/material/Drawer/Drawer';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import { ReactNode } from 'react';

const Wrapper = styled(Container)(({ theme }) => ({
  paddingTop: 2,
  paddingBottom: 2,
  display: 'flex',
  flexDirection: 'row',
  gap: 0,
  fontSize: 16,
  minWidth: 323,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 1,
    fontSize: 14,
    minWidth: 307,
  },
}));

export const DrawerBox = ({ open, children, toggleDrawer }: IDrawerBoxProps): JSX.Element => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop={false}>
      <IconButton sx={{ position: 'absolute', left: 5 }} onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
      <Wrapper>{children}</Wrapper>
    </Drawer>
  );
};

interface IDrawerBoxProps {
  open: boolean;
  children?: ReactNode;
  toggleDrawer: () => void;
}
