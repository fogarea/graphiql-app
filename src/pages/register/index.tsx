import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { RegisterContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { useTitle } from '@/shared/lib/browser';

export const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  useTitle(t('page-title.register'));

  if (isAuth) {
    return <Navigate to={TypeAppRoute.Editor} replace />;
  }

  return <RegisterContainer />;
};
