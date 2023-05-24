import Container from '@mui/material/Container';
import { type ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = ({ headerSlot, loader, footerSlot }: ILayoutProps): JSX.Element => {
  return (
    <>
      {headerSlot}
      <Container component="main" disableGutters maxWidth={false}>
        <Suspense fallback={loader}>
          <Outlet />
        </Suspense>
      </Container>
      {footerSlot}
    </>
  );
};

interface ILayoutProps {
  headerSlot: ReactNode;
  loader: ReactNode;
  footerSlot?: ReactNode;
}
