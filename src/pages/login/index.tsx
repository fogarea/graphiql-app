import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes';

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <h1>Login Page</h1>
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
