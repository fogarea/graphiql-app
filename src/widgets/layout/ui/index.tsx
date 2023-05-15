import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

import { HeaderLayout } from '@/widgets/header-layout';
import { FooterLayout } from '@/widgets/footer-layout';
import { Loader } from '@/shared/ui';

export const Layout = (): JSX.Element => (
  <>
    <HeaderLayout />
    <Container component="main" disableGutters maxWidth={false}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
    <FooterLayout />
  </>
);
