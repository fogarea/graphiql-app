import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthForm, AuthRedirectButton } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { toast } from '@/shared/lib';

export const LoginContainer = (): JSX.Element => {
  const { t } = useTranslation();

  const { isAuth, login } = useAuth();

  const navigate = useNavigate();

  if (isAuth) {
    navigate(TypeAppRoute.Editor);
  }

  const handleLoginUser = (email: string, password: string) => {
    login(email, password)
      .then(() => {
        toast.success(t('toast.successfully-login'));
      })
      .catch((e) => {
        if (e instanceof Error) {
          toast.error(e.message);
        }
      });
  };

  return (
    <>
      <AuthForm authUser={handleLoginUser} label={t('login.sign-in')} />
      <AuthRedirectButton
        label={t('login.dont-have-an-account')}
        route={TypeAppRoute.Register}
        routeLabel={t('login.sign-up')}
      />
    </>
  );
};
