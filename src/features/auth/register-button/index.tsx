import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { TypeAppRoute } from '@/shared/config';
import { DefaultButton } from '@/shared/ui';

export const RegisterButton = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DefaultButton
      variant="outlined"
      sx={{ color: (theme) => theme.palette.primary.main }}
      component={NavLink}
      to={TypeAppRoute.Register}
    >
      {t('welcome.sign-up')}
    </DefaultButton>
  );
};
