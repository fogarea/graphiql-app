import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';

export const HeaderLayout = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  const logout = useAuth((store) => store.removeUser);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

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
        {isAuth ? (
          <>
            <Button color="inherit" onClick={() => onLogout()}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit">
              <NavLink to="/login">Sign In</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/register">Sign Up</NavLink>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
