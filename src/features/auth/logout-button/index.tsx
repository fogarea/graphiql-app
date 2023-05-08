import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const LogoutButton = (): JSX.Element => {
  const { t } = useTranslation();

  const { logout } = useAuth();

  const navigate = useNavigate();
  return (
    <Grid item>
      <Button color="inherit" onClick={() => void logout(() => navigate(TypeAppRoute.Logout))}>
        {t('editor.log-out')}
      </Button>
    </Grid>
  );
};
