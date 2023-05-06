import { Button, Grid } from '@mui/material';

import { useTranslation } from 'react-i18next';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid item>
      <Button color="inherit">{t('editor.log-out')}</Button>
    </Grid>
  );
};
