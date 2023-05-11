import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const EditorPageButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <Grid item>
      <Button variant="contained">
        <NavLink
          to={isAuth ? TypeAppRoute.Editor : TypeAppRoute.Login}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {t('editor.welcome-page')}
        </NavLink>
      </Button>
    </Grid>
  );
};
