import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { toast } from '@/shared/lib';
import { Section } from '@/shared/ui';
import { AuthForm, AuthRedirectButton } from '../ui';

export const LoginContainer = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth, isLoading, login } = useAuth();
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
    <Section>
      <AuthForm authUser={handleLoginUser} label={t('login.sign-in')} isLoading={isLoading} />
      <AuthRedirectButton
        label={t('login.dont-have-an-account')}
        redirectTo={TypeAppRoute.Register}
        redirectToLabel={t('login.sign-up')}
      />
    </Section>
  );
};
