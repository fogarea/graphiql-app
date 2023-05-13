import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/shared/ui';
import { TypeAppRoute } from '@/shared/config';

export const LoginButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DefaultButton variant="contained">
      <NavLink to={TypeAppRoute.Login}>{t('welcome.sign-in')}</NavLink>
    </DefaultButton>
  );
};
