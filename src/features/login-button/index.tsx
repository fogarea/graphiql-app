import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const LoginButton = (): JSX.Element => (
  <Button color="inherit">
    <NavLink to="/login">Sign In</NavLink>
  </Button>
);
