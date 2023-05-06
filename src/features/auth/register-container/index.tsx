import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const RegisterContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { registerUser, isAuth } = useAuth((store) => ({
    registerUser: store.registerUser,
    isAuth: store.isAuth,
  }));

  const navigate = useNavigate();

  if (isAuth) {
    navigate(TypeAppRoute.Editor);
  }

  const handleRegisterUser = (email: string, password: string) => {
    registerUser(email, password).catch(() => Promise.reject());
  };

  return <AuthForm authUser={handleRegisterUser} label={t('register.sign-up')} />;
};
