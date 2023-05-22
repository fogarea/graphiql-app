import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import styled from '@mui/material/styles/styled';
import MuiToolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';

import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';
import { useAuth } from '@/entities/user';
import { Logo } from '@/shared/ui';
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

export const HeaderLayout = ({ burgerMenuSlot }: IHeaderLayoutProps): JSX.Element => {
  const { isAuth } = useAuth();
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
          {burgerMenuSlot}
          <Logo withTitle />
          <ChangeLanguage />
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>{buttons}</Box>
        </Toolbar>
      </Header>
    </>
  );
};

interface IHeaderLayoutProps {
  burgerMenuSlot: ReactNode;
}
