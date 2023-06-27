import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import styled from '@mui/material/styles/styled';
import MuiToolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';

import { AuthToolbar } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';
import { Logo } from '@/shared/ui';
import { useHeader } from '../hooks';

export const HeaderLayout = ({ burgerMenuSlot }: IHeaderLayoutProps): JSX.Element => {
  const { isScrolled, elevationValue, headerRef } = useHeader();

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
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <AuthToolbar />
          </Box>
        </Toolbar>
      </Header>
    </>
  );
};

interface IHeaderLayoutProps {
  burgerMenuSlot: ReactNode;
}

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
