import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm, AuthRedirectButton } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { toast } from '@/shared/lib';

export const RegisterContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth, register } = useAuth();

  const navigate = useNavigate();

  if (isAuth) {
    navigate(TypeAppRoute.Editor);
  }

  const handleRegisterUser = (email: string, password: string) => {
    register(email, password)
      .then(() => {
        toast.success(t('toast.successfully-register'));
      })
      .catch((e) => {
        if (e instanceof Error) {
          toast.error(e.message);
        }
      });
  };

  return (
    <>
      <AuthForm authUser={handleRegisterUser} label={t('register.sign-up')} />
      <AuthRedirectButton
        label={t('register.already-have-an-account')}
        route={TypeAppRoute.Login}
        routeLabel={t('register.sign-in')}
      />
    </>
  );
};
