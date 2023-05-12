import { Navigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={TypeAppRoute.Welcome} replace />;
  }

  return children;
};

interface IPrivateRouteProps {
  children: JSX.Element;
}
