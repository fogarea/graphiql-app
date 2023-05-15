import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import styled from '@mui/material/styles/styled';
import { useState } from 'react';

import { useAuth } from '@/entities/user';
import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';
import { BurgerMenu, Logo } from '@/shared/ui';
import { useHeader } from '../hooks';

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  transition: 'all 0.5s ease-in',
}));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const HeaderLayout = (): JSX.Element => {
  const { isAuth } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, elevationValue, headerRef } = useHeader();

  const buttons = isAuth ? (
    <LogoutButton />
  ) : (
    <>
      <LoginButton />
      <RegisterButton />
    </>
  );

  return (
    <>
      <Header
        position="sticky"
        ref={headerRef}
        elevation={elevationValue}
        sx={{
          backgroundColor: (theme) =>
            isScrolled ? theme.palette.background.default : theme.palette.background.paper,
        }}
      >
        <Toolbar>
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)}>
            <>
              <Logo withTitle isMobile />
              <Divider />
              {buttons}
            </>
          </BurgerMenu>
          <Logo withTitle />
          <ChangeLanguage />
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>{buttons}</Box>
        </Toolbar>
      </Header>
    </>
  );
};
