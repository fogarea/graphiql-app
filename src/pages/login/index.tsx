import { Grid, Typography } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';

import { routes } from '../routes';
import { LoginContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';

export const LoginPage = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={'/editor'} replace />;
  }

  return (
    <>
      <h1>Login Page</h1>
      <LoginContainer />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            {"Don't have an account?"}
            <NavLink to={routes.register}>Sign Up</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
