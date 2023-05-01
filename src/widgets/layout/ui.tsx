import { Outlet } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';

import { HeaderLayout } from '@/widgets/header';
import { FooterLayout } from '@/widgets/footer';

export const Layout = (): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <HeaderLayout />
    <Container component="main" maxWidth="xl">
      <Outlet />
    </Container>
    <FooterLayout />
  </Box>
);
