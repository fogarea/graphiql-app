import { Grid, Typography } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RegisterContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={TypeAppRoute.Editor} replace />;
  }

  return (
    <>
      <RegisterContainer />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            {t('register.already-have-an-account')}
            <NavLink to={TypeAppRoute.Login}>{t('register.sign-in')}</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
