import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { HeaderLayout } from '@/widgets/header';
import { FooterLayout } from '@/widgets/footer';
import { Loader } from '@/shared/ui';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
    <FooterLayout />
  </Box>
);
