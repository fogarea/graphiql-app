import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HeaderLayout = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphiQL
        </Typography>
        <nav>
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
            <li>
              <NavLink to="/">Welcome page</NavLink>
            </li>
            <li>
              <NavLink to="/editor">Editor page</NavLink>
            </li>
          </ul>
        </nav>
        <Button color="inherit">
          <NavLink to="/login">Sign In</NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/register">Sign Up</NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
