import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const EditorPageButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Button variant="contained">
        <NavLink to="/editor">{t('editor.welcome-page')}</NavLink>
      </Button>
    </Grid>
  );
};
