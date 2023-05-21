import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';
import { toast } from '@/shared/lib/browser';
import { Section } from '@/shared/ui';
import { AuthForm, AuthRedirectButton } from '../ui';

export const RegisterContainer = (): JSX.Element => {
  const { t } = useTranslation();
  const { isAuth, isLoading, register } = useAuth();
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
    <Section>
      <AuthForm authUser={handleRegisterUser} label={t('register.sign-up')} isLoading={isLoading} />
      <AuthRedirectButton
        label={t('register.already-have-an-account')}
        redirectTo={TypeAppRoute.Login}
        redirectToLabel={t('register.sign-in')}
      />
    </Section>
  );
};
