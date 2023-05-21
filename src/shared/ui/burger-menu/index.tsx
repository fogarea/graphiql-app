import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
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
          <Container
            sx={{
              display: { xs: 'flex', sm: 'none' },
              gap: 1,
              flexDirection: 'column',
              mt: 2,
              textAlign: 'center',
            }}
            onClick={toggleMenu}
          >
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
