import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RegisterButton = (): JSX.Element => (
  <Button color="inherit">
    <NavLink to="/register">Sign Up</NavLink>
  </Button>
);
