import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const RegisterContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { registerUser, isAuth } = useAuth((store) => ({
    registerUser: store.registerUser,
    isAuth: store.isAuth,
  }));

  const navigate = useNavigate();

  const registerUserHandler = async (email: string, password: string) => {
    await registerUser(email, password);

    if (isAuth) {
      navigate('/editor');
    }
  };

  return <AuthForm authUser={registerUserHandler} label={t('register.sign-up')} />;
};
