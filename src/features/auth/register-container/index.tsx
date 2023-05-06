import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const RegisterContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth, register } = useAuth();

  const navigate = useNavigate();

  if (isAuth) {
    navigate(TypeAppRoute.Editor);
  }

  const handleRegisterUser = (email: string, password: string) => {
    void register(email, password);
  };

  return <AuthForm authUser={handleRegisterUser} label={t('register.sign-up')} />;
};
