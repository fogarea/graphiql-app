import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LoginButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Button variant="contained">
        <NavLink to="/login">{t('welcome.sign-in')}</NavLink>
      </Button>
    </Grid>
  );
};
