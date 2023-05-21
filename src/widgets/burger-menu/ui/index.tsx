import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { Logo } from '@/shared/ui';
import { useBurgerMenu } from '../hooks';

export const BurgerMenu = (): JSX.Element => {
  const { isMenuOpen, toggleMenu } = useBurgerMenu();
  const { isAuth } = useAuth();

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
          open={isMenuOpen}
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
            <Logo withTitle isMobile />
            <Divider />
            {isAuth ? (
              <LogoutButton />
            ) : (
              <>
                <LoginButton />
                <RegisterButton />
              </>
            )}
          </Container>
        </Drawer>
      </Box>
    </>
  );
};
