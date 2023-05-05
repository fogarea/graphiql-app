import { Button, Grid } from '@mui/material';

import { useLogout } from './model';
import { useTranslation } from 'react-i18next';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();

  const { onLogout } = useLogout();

  return (
    <Grid item>
      <Button color="inherit" onClick={() => void onLogout()}>
        {t('editor.log-out')}
      </Button>
    </Grid>
  );
};
