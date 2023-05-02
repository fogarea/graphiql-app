import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes';
import { RegisterContainer } from '@/features/auth';

export const RegisterPage = (): JSX.Element => {
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
