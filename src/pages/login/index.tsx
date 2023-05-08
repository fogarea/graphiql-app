import { Navigate } from 'react-router-dom';

import { LoginContainer } from '@/features/auth';
import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const LoginPage = (): JSX.Element => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={TypeAppRoute.Editor} replace />;
  }

  return <LoginContainer />;
};
