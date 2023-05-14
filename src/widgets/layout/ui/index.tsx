import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';

import { HeaderLayout } from '@/widgets/header-layout';
import { FooterLayout } from '@/widgets/footer-layout';
import { Loader } from '@/shared/ui';

export const Layout = (): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <HeaderLayout />
    <Container component="main" disableGutters maxWidth="xl">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
    <FooterLayout />
  </Box>
);
