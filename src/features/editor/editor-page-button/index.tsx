import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { LargeButton } from '@/shared/ui';

export const EditorPageButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <LargeButton
      variant="contained"
      component={NavLink}
      to={isAuth ? TypeAppRoute.Editor : TypeAppRoute.Login}
    >
      {t('editor.welcome-page')}
    </LargeButton>
  );
};
