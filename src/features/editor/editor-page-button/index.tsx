import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const EditorPageButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <DefaultButton
      variant="outlined"
      size="large"
      sx={{
        minWidth: 200,
        color: (theme) => theme.palette.primary.contrastText,
        backgroundColor: (theme) => theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.85),
        },
      }}
      component={NavLink}
      to={isAuth ? TypeAppRoute.Editor : TypeAppRoute.Login}
    >
      {t('editor.welcome-page')}
    </DefaultButton>
  );
};
