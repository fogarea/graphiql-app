import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/shared/ui';
import { TypeAppRoute } from '@/shared/config';

export const RegisterButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DefaultButton variant="outlined" sx={{ color: (theme) => theme.palette.primary.main }}>
      <NavLink to={TypeAppRoute.Register}>{t('welcome.sign-up')}</NavLink>
    </DefaultButton>
  );
};
