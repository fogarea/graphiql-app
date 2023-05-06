import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const LoginContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth, login } = useAuth();

  const navigate = useNavigate();

  if (isAuth) {
    navigate(TypeAppRoute.Editor);
  }

  const handleLoginUser = (email: string, password: string) => {
    void login(email, password);
  };

  return <AuthForm authUser={handleLoginUser} label={t('login.sign-in')} />;
};
