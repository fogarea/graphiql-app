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

  const loginUserHandler = async (email: string, password: string) => {
    await loginUser(email, password);

    if (isAuth) {
      navigate('/editor');
    }
  };

  return <AuthForm authUser={loginUserHandler} label={t('login.sign-in')} />;
};
