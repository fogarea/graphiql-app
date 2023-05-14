import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';

export const BurgerMenu = ({ isOpen, toggleMenu, children }: IBurgerMenuProps): JSX.Element => {
  return (
    <>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={toggleMenu}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={toggleMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Container sx={{ display: { xs: 'flex', sm: 'none' }, gap: 3, flexDirection: 'column' }}>
            {children}
          </Container>
        </Drawer>
      </Box>
    </>
  );
};

interface IBurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  children: ReactNode;
}
