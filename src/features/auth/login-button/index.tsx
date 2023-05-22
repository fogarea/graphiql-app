import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const LoginButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DefaultButton variant="contained" component={NavLink} to={TypeAppRoute.Login}>
      {t('welcome.sign-in')}
    </DefaultButton>
  );
};
