import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

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
