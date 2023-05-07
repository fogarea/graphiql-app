import { AppBar, Toolbar, Typography } from '@mui/material';

import { useAuth } from '@/entities/user';
import { LoginButton, LogoutButton, RegisterButton } from '@/features/auth';
import { ChangeLanguage } from '@/features/change-language';

export const HeaderLayout = (): JSX.Element => {
  const { isAuth } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphiQL
        </Typography>
        <ChangeLanguage />
        {isAuth ? (
          <LogoutButton />
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
