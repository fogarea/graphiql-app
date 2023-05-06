import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TypeAppRoute } from '@/shared/config';

export const RegisterButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Button variant="contained">
        <NavLink to={TypeAppRoute.Register}>{t('welcome.sign-up')}</NavLink>
      </Button>
    </Grid>
  );
};
