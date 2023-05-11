import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TypeAppRoute } from '@/shared/config';

export const RegisterButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Button color="inherit">
        <NavLink to={TypeAppRoute.Register} style={{ textDecoration: 'none', color: 'inherit' }}>
          {t('welcome.sign-up')}
        </NavLink>
      </Button>
    </Grid>
  );
};
