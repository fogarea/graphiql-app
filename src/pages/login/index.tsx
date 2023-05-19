import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LoginContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { useTitle } from '@/shared/lib';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  useTitle(t('page-title.login'));

  if (isAuth) {
    return <Navigate to={TypeAppRoute.Editor} replace />;
  }

  return <LoginContainer />;
};
