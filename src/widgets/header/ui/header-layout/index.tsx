import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';

//TODO: put buttons inside features

export const HeaderLayout = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  const logout = useAuth((store) => store.logoutUser);

  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();

    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphiQL
        </Typography>
        {isAuth ? (
          <>
            <Button color="inherit" onClick={onLogout}>
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
