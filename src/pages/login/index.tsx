import { Grid, Typography } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LoginContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={TypeAppRoute.Editor} replace />;
  }

  return (
    <>
      <LoginContainer />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            {t('login.dont-have-an-account')}
            <NavLink to={TypeAppRoute.Register}>{t('login.sign-up')}</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
