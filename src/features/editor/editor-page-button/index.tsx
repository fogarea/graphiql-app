import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const EditorPageButton = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <DefaultButton variant="outlined" size="large" sx={{ minWidth: 200 }}>
      <NavLink to={isAuth ? TypeAppRoute.Editor : TypeAppRoute.Login}>
        {t('editor.welcome-page')}
      </NavLink>
    </DefaultButton>
  );
};
