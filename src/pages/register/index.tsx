import { Grid, Typography } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routes } from '../routes';
import { RegisterContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';

export const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation();

  const isAuth = useAuth((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={'/editor'} replace />;
  }

  return (
    <>
      <RegisterContainer />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            {t('register.already-have-an-account')}
            <NavLink to={routes.login}>{t('register.sign-in')}</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
