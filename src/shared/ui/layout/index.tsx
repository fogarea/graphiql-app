import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Layout = (): JSX.Element => (
  <>
    <Container component="main" maxWidth="xs">
      <Outlet />
    </Container>
  </>
);
