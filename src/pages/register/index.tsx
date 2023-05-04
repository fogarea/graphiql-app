import { Grid, Typography } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';

import { routes } from '../routes';
import { RegisterContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';

export const RegisterPage = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={'/editor'} replace />;
  }

  return (
    <>
      <h1>Register Page</h1>
      <RegisterContainer />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            {'Already have an account?'}
            <NavLink to={routes.login}>Log In</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
