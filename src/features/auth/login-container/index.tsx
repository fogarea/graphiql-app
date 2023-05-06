import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const LoginContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { loginUser, isAuth } = useAuth((store) => ({
    loginUser: store.loginUser,
    isAuth: store.isAuth,
  }));

  const navigate = useNavigate();

  if (isAuth) {
    navigate('/editor');
  }

  const handleLoginUser = (email: string, password: string) => {
    loginUser(email, password).catch(() => Promise.reject());
  };

  return <AuthForm authUser={handleLoginUser} label={t('login.sign-in')} />;
};
