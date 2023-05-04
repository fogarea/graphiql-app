import { AppBar, Toolbar, Typography } from '@mui/material';

import { useAuth } from '@/entities/user';
import { LogoutButton } from '@/features/logout-button';
import { ChangeLanguage } from '@/features';

export const HeaderLayout = (): JSX.Element => {
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphiQL
        </Typography>
        {isAuth && <LogoutButton />}
        <ChangeLanguage />
      </Toolbar>
    </AppBar>
  );
};
