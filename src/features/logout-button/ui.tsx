import { Button, Grid } from '@mui/material';

import { useLogout } from './model';
import { onPromise } from '@/shared/lib';
import { useTranslation } from 'react-i18next';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();

  const { onLogout } = useLogout();

  return (
    <Grid item>
      <Button color="inherit" onClick={onPromise(onLogout)}>
        {t('editor.log-out')}
      </Button>
    </Grid>
  );
};
